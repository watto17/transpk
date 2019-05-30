const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const Expenses = require('../modals/Expenses');
const router  = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const keys = require('../configurations/keys');

router.post('/register', jwtAuth , async (req, res) =>{
    let packages = new Expenses({
    name : req.body.name,
    companyUuid : req.body.companyUuid,
    price : req.body.price

    })
    packages.save().then(pack => {
        res.status(200).json(pack);
    }).catch(err =>{
        console.log(err);
    })
});
router.get('/get-expenses', jwtAuth , async (req,res) => {
    Expenses.find().then(packs => {
        return res.status(200).json(packs);
    })
    .catch(err => {
      return res.status(404).json(err);
    })
});
router.put('/update-expenses/:id', jwtAuth , async(req, res) => {

    Expenses.findOne({uuid : req.params.id}).then(pack => {
    if(!pack){
        return res.status(404).json({error : "Not found"})
    }

    let packages = {
        name : req.body.name,
        price : req.body.price,
        companyUuid : req.body.companyUuid
    }
    Expenses.findOneAndUpdate({uuid : req.params.id},{$set : packages} , {new : true})
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



router.get('/get-expenses-detail/:id', jwtAuth , async (req,res) => {
    Expenses.findOne({uuid : req.params.id}).then(expense => {
        if(!expense){
            return res.status(404).json({error  : "expense not found"})
        }
        return res.status(200).json(expense);
    }).catch(err => {
        return res.status(400).json(err);
    })
})

router.delete('/removeExpenses/:id',jwtAuth , async (req, res) =>{
    Expenses.findOne({uuid : req.params.id }).then(packs =>{
    if(!packs){
        return res.status(404).json({error : "Expenses not found"})
    }
    Expenses.findOneAndRemove({uuid : req.params.id}).then(packages =>{
    
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