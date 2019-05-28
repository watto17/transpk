"use strict";
let jwt = require('jsonwebtoken');
const User = require('../modals/Users');
const Keys = require('../configurations/keys')
module.exports = async (req, res, next) =>{
try{
    let token = req.headers['token'];
    if (token) {
       let decodToken= await jwt.verify(req.headers['token'], Keys.SecretKey);
        let _id=decodToken.id;
        // let data = await dbQuery.GetOne(User, {_id});
        // if(!data) throw HTTPRESPONSE.SUCCESS("User not found.");
        User.findOne({_id : _id}).then(user=>{
            if(!user){
                res.status(404).json({error : "user not found"})
            }
        })
        // req.userRole=data.role;
        req.userId = decodToken.id;
        next();
    } else {
       res.status(404).json({error:'Access token not provided'});
    }
}
catch (err){
    res.status(404).json({error:'Invalid access token'});
   
}
};