
import React from 'react';
import Token from '../../utils/token';
import SetHeaders, { setAuthHeaders } from '../../Api/setauthHeaders';
import { USER_DETAIL } from '../../Api/endpoints';
import Api from '../../Api';
import Axios from 'axios/index';
import axios from 'axios'
export const UserdetailsService = async () => {
    try{
    let result = await Api.Get(USER_DETAIL);
       return result.data;
       }
       catch(error){
           return error;
       }
};

 