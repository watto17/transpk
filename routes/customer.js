const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const Customer = require('../modals/Customer');
const Packages = require('../modals/Packages')
const router  = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const keys = require('../configurations/keys');
mongoose.set('useCreateIndex', true);

//ADD NEW  CUSTOMER
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

// GET CUSTOMER DETAILS
router.get('/get-customer-details/:id' , jwtAuth , async (req, res) => {

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


// UPDATE CUSTOMER
router.put('/update-customer/:id', jwtAuth , async(req, res) => {


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
    if(req.body.paymentDate) history.paymentDate = req.body.paymentDate
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


//update payment history 

router.put('/update-payment/:id/:method' , jwtAuth ,async (req ,res) => {

try{
    let neWhistory = {}
    neWhistory.month = req.body.month;
    neWhistory.paymentDate = req.body.paymentDate;

   let customer = await  Customer.findOne({uuid : req.params.id})
   console.log(customer.packageUuid);
        if(req.params.method === 'custom'){

            let customPay =  req.body.customPay;
            let credit;
            let debit;
            let currentAmount ;
            let amountleft ;

            let pkgPrice ; 
         let pkg = await Packages.findOne({uuid : customer.packageUuid});

            pkgPrice = pkg.price;
            console.log('heelo' , pkg.price);
            //logic of debit and credit 
            currentAmount = pkgPrice + customer.credit;
            if(customPay < pkgPrice){
            amountleft = pkgPrice-customPay
            credit  = customer.credit+amountleft;
            debit = 0;
            console.log('credit' , credit);
            console.log('debit' , debit);
        }
        else if(customPay < currentAmount){
            amountleft = currentAmount - customPay;
            credit = amountleft;
            debit = 0;
            console.log('credit' , credit);
            console.log('debit' , debit);
        }
        else if(customPay > currentAmount){
            amountleft = customPay - currentAmount;
            debit = customer.debit + amountleft;
            credit = 0;
            console.log('credit' , credit);
            console.log('debit' , debit);


        }
        let accounts = {
            credit : credit,
            debit  : debit,
            status : 'paid'
        }

      let saveCustomer = await  Customer.findByIdAndUpdate({_id : customer._id},
             {$set : accounts,
              $push :  {history : neWhistory}
            },
             {new : true , useFindAndModify : false})
             return res.status(200).json(saveCustomer);
            
           
            
        }
        else if(req.params.method === 'payAsPackage'){
            let accounts = {
                status : 'paid'
            }

 Customer.findOneAndUpdate({uuid : req.params.id}, {$push : {history : neWhistory}} ,{new : true})
        .then(hist => {
            return res.status(200).json(hist);
        }).catch(err => {
            console.log(err);
        })

        }
    
    }
        catch(error){
            console.log(error);
        }
       
    })


// })


// REMOVE CUSTOERS API
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