
"use strict";


const mongoose = require('mongoose');
const uuidV4=require('uuid/v4');
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
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
    contact : {
        type: Number,    
    },
    packageUuid : {
        type : String,
        default : '10'
    },
    credit : {
        type : Number
    },
    debit : {
        type : Number
    },
  status : {
      type :String
  },
  history : [{
    month : {
        type : Number
    },
    paymentDate:{
        type :Number, }

  }],
   createdAt : {
        type : Date,
        default : Date.now()
    },
});

module.exports = mongoose.model('customers',CustomerSchema);