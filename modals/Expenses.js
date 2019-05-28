
"use strict";
const mongoose = require('mongoose');
const uuidV4=require('uuid/v4');
const Schema = mongoose.Schema;
const ExpensesSchema = new Schema({
    uuid:{
        type:String,
        default:uuidV4,
        unique: true
    },
    name: {
        type: String
    },
    companyUuid:{
        type:String,
        default:'10'
    },
    price :{
        type : Number
    },
   createdAt : {
        type : Date,
        default : Date.now()
    },
});

module.exports = mongoose.model('expenses',ExpensesSchema);