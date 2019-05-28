const express = require('express');

module.exports = (Collection) => {
    let {SEND_RESPONSE} = require("./helpers");
    let dbQuery = require('./../modules/db_Quries');
    let HTTPRESPONSE = require('./httpResponses');

    const create = async (req, res) => {
        const newEntry = req.body;
        try {
            let result = await dbQuery.Create(Collection, newEntry);
            SEND_RESPONSE(res, HTTPRESPONSE.CREATED('Record inserted Successfully', result));
        } catch (error) {
            throw error;
        }
    };

    const readMany = async (req, res) => {
        let query = res.locals.query || {};
        try {
            let data = await dbQuery.Get(Collection, query);
            if (!data) SEND_RESPONSE(res, HTTPRESPONSE.NOT_FOUND('Record not found'));
            SEND_RESPONSE(res, HTTPRESPONSE.SUCCESS('Record found Successfully', data));
        } catch (error) {
            throw error;
        }
    };

    const readOne = async (req, res) => {
        const {_id} = req.params;
        try {
            let data = await dbQuery.GetOne(Collection, {'_id': _id});
            if (!data) SEND_RESPONSE(res, HTTPRESPONSE.NOT_FOUND('Record not found'));
            SEND_RESPONSE(res, HTTPRESPONSE.SUCCESS('Record found Successfully', data));
        } catch (error) {
            throw error;
        }
    };

    const update = async (req, res) => {
        const changedEntry = req.body;
        try {
            let result = await dbQuery.Edit(Collection, {'_id': req.params._id}, {'$set': changedEntry});
            SEND_RESPONSE(res, HTTPRESPONSE.SUCCESS('Record updated Successfully', result));
        } catch (error) {
            throw error;
        }
    };

    const remove = async (req, res) => {
        try {
            let result = await dbQuery.GetOne(Collection, {'_id': req.params._id});
            if (!result) SEND_RESPONSE(res, HTTPRESPONSE.NOT_FOUND('Record not found'));
            result = await dbQuery.Delete(Collection, req.params._id);
            SEND_RESPONSE(res, HTTPRESPONSE.SUCCESS('Record deleted Successfully', result));
        } catch (error) {
            throw error;
        }
    };

    let router = express.Router();


    router.post('/', create);
    router.get('/', readMany);
    router.get('/:_id', readOne);
    router.put('/:_id', update);
    router.delete('/:_id', remove);

    return router;

};