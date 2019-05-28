"use strict";
const HTTPRESPONSE = require('./../utils/httpResponses');
const CONSTANTS = require("./../utils/routesConstants");
let { SEND_RESPONSE } = require('../utils/helpers');

module.exports = async (req, res, next)=> {
    try{
        if (req.userRole) {
           if(req.userRole==="member"){
               /* CONSTANTS.EMPLOYEE_ROUTES.map(function(item) {
                    if(req.url.includes(item)){
                        next();
                    }
                });
               throw HTTPRESPONSE.SUCCESS("Permission Denied.");*/
               if(CONSTANTS.NON_ADMIN_ROUTES.includes(req.url)){
                   next();
               }
               else {
                   SEND_RESPONSE(res, HTTPRESPONSE.NOT_ALLOWED('permission denied'));
               }
            }
            else {
               next();
           }
        } else {
            SEND_RESPONSE(res, HTTPRESPONSE.NOT_ALLOWED('No role provided'));
        }
    }
    catch (err){
        SEND_RESPONSE(res, HTTPRESPONSE.NOT_ALLOWED('Permission denied'));
    }
};