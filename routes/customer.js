const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const Customer = require('../modals/Customer');
const router  = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const keys = require('../configurations/keys');

router.post('/register', jwtAuth , async (req, res) =>{

    let history = {};
    history.month  = req.body.month

    let company = new Customer({
    name : req.body.name,
    companyUuid : req.body.companyUuid,
    contact : req.body.contact,
    packageUuid : req.body.packageUuid,
    credit  : req.body.credit,
    debit : req.body.debit,
    status : req.body.status,
    history : history  })
    company.save().then(comp => {
        res.status(200).json(comp);
    }).catch(err =>{
        console.log(err);
    })
})


router.get('/getDetails/:id' , jwtAuth , async (req, res) => {

Customer.findOne({uuid : req.params.id}).then(customer => {
    if(!customer){
        return res.status(404).json({error : "Customer not found"})
    }
    return res.status(200).json(customer);
}).catch(err =>{
    return res.status(400).json(err);
})

})

router.get('/get-customers', jwtAuth , async (req,res) => {
    Customer.find().then(packs => {
        return res.status(200).json(packs);
    })
    .catch(err => {
      return res.status(404).json(err);
    })
});

router.put('/update-customers/:id', jwtAuth , async(req, res) => {


    let customerFields = {};
    if(req.body.name ) customerFields.name = req.body.name;
    if(req.body.companyUuid) customerFields.companyUuid = req.body.companyUuid;
    if(req.body.contact) customerFields.contact = req.body.contact;
    if(req.body.packageUuid) customerFields.packageUuid = req.body.packageUuid;
    if(req.body.credit ) customerFields.credit = req.body.credit;
    if(req.body.debit) customerFields.debit = req.body.debit;
    if(req.body.status) customerFields.status = req.body.status;
    let history = {}
    
    if(req.body.month) history.month = req.body.month
    customerFields.history = history

    Customer.findOne({uuid : req.params.id}).then(pack => {
    if(!pack){
        return res.status(404).json({error : "Not found"})
    }

    Customer.findOneAndUpdate({uuid : req.params.id},{$set :customerFields } , {new : true})
    .then(updatePack => {
        return res.status(200).json(updatePack);
    })
    .catch(err =>{
        return res.status(404).json(err);

    })


}).catch(err => {
    return res.status(404).json(err);
})
});

router.delete('/removeCustomers/:id',jwtAuth , async (req, res) =>{
    Customer.findOne({uuid : req.params.id }).then(packs =>{
    if(!packs){
        return res.status(404).json({error : "Customers not found"})
    }
    Customer.findOneAndRemove({uuid : req.params.id}).then(packages =>{
    
        if(packages){
            return res.status(200).json(packages)
        }

    }).catch(err =>{
        return res.status(400).json(err)
    })
}).catch(err => {
    return res.status(400).json(err)
    
})

})

module.exports= router;