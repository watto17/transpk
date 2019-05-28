const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const Packages = require('../modals/Packages');
const router  = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const keys = require('../configurations/keys');

router.post('/register', jwtAuth , async (req, res) =>{

    let packages = new Packages({
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

router.get('/get-packages', jwtAuth , async (req,res) => {
    Packages.find().then(packs => {
        return res.status(200).json(packs);
    })
    .catch(err => {
      return res.status(404).json(err);
    })
});
router.put('/update-package/:id', jwtAuth , async(req, res) => {

Packages.findOne({uuid : req.params.id}).then(pack => {
    if(!pack){
        return res.status(404).json({error : "Not found"})
    }

    let packages = {
        name : req.body.name,
        price : req.body.price,
        companyUuid : req.body.companyUuid
    }
    Packages.findOneAndUpdate({uuid : req.params.id},{$set : packages} , {new : true})
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

router.delete('/removePackages/:id',jwtAuth , async (req, res) =>{
Packages.findOne({uuid : req.params.id }).then(packs =>{
    if(!packs){
        return res.status(404).json({error : "Package not found"})
    }
    Packages.findOneAndRemove({uuid : req.params.id}).then(packages =>{
    
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