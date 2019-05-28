

const Joi = require('joi');
var jwt = require('jsonwebtoken');
// const emailExistence = require("email-existence");
let CONSTANTS = require('../utils/constants');
const HTTPRESPONSE = require('../utils/httpResponses');
let tokensBlackList = [];

module.exports = {
    JOI_VALIDATE : (data, schema) => {
        let {error} = Joi.validate(data, schema);
        if(error){

            throw HTTPRESPONSE.BAD_REQUEST(error.message.replace(/"/g,''));
        }
        else { return true; }
    },
    GENERATE_TOKEN : (_id, secret=CONSTANTS.SECRET_KEY) => {
        return jwt.sign({ id: _id }, secret);
    },
    SEND_RESPONSE : (res, httpResponse= HTTPRESPONSE.INTERNAL_SERVER("")) => {
        res.status(httpResponse.meta.status).json(httpResponse);
    },
    IS_AUTHORIZED : (headers) => {
        let token = headers['token'];
        if(token &&
            ( tokensBlackList.length == 0 || tokensBlackList.length > 0 && CONSTANTS.FILTER_LIST(tokensBlackList, "token", token).length == 0) &&
        jwt.verify(token , CONSTANTS.SECRET_KEY) != undefined){
            return true;
        }
        else{
            throw HTTPRESPONSE.UNAUTHORIZED("Invalid access token");
        }
    },
    SET_BLACK_LIST : (blackList) => {
        tokensBlackList = blackList;
    }
}