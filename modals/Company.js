
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
    name :{
        type : String
    }
});

module.exports = mongoose.model('companies',usersSchema);