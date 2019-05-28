const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const Company = require('../modals/Company');
const router  = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const keys = require('../configurations/keys');

router.post('/register', jwtAuth , async (req, res) =>{

    let company = new Company({
    name : req.body.name,
    })
    company.save().then(comp => {
        res.status(200).json(comp);
    }).catch(err =>{
        console.log(err);
    })
})


module.exports= router;