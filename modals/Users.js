
"use strict";


    const mongoose = require('mongoose');
    const uuidV4=require('uuid/v4');
    const Schema = mongoose.Schema;
    const usersSchema = new Schema({
        uuid:{
            type:String,
            default:uuidV4,
            unique: true
        },
        userName: {
            type: String
        },
        companyUuid:{
            type:String,
            default:'10'
        },
        email : {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String
        },
        isVerified : {
            type : Boolean,
            default : false
        },
      
        updatedAt: {
            type : Date,
            default : Date.now()
        },
        createdAt : {
            type : Date,
            default : Date.now()
        },
    });

    module.exports = mongoose.model('users',usersSchema);