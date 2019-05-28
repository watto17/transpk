const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../modals/Users');
const router  = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const keys = require('../configurations/keys');


router.post('/register',async (req, res) =>{

    let users = new User({
        userName : req.body.userName,
        companyUuid : req.body.companyUuid,
        email : req.body.email,
        password : req.body.password,
    })
    users.save().then(users => {
        res.json(users)
    }).catch(err =>{
        console.log(err);
    })
})
router.post('/login',async (req , res) => {
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({email : email , isVerified : true})
    .then(users => {
        
        if(users){
        if(users.password === password){

            let token = {
                auth : true
            }

         token.token = jwt.sign({id : users._id}, keys.SecretKey)
         return res.status(200).json(token);
        }
        else {
            return res.status(404).json({error : "Password is incorrect"})
        }}
        else if(!users){
                return res.status(404).json({error : "User not found"})
        }


    }).catch(err =>{
console.log(err);
    })

})
module.exports= router;