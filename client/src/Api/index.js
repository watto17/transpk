import axios from 'axios';
import { setAuthHeaders } from './setauthHeaders';
import { token } from '../utils/token';
import auth from '../utils/auth';
import {showToaster} from "../utils/toastr";
const Api = {
    Get: async (url) => {
        if(auth.isAuthenticated())setAuthHeaders(token.get('token'));
        try {
            let data = await axios.get(url,{ headers: { 'Content-Type': 'application/json' } });
            return data;
        }
        catch (error) {
            showToaster(error.response,true,error.message);
            return error.response;
        }
    },

    Post: async (url, body,toaster=true) => {
        if(auth.isAuthenticated())setAuthHeaders(token.get('token'));
        try {
            let data = await axios.post(url, body, { headers: { 'Content-Type': 'application/json' } });
            showToaster(data,toaster);
            return data;
        }
        catch (error) {
            showToaster(error.response,toaster,error.message);
            return error.response;
        }
    },

    Put: async (url, body,toaster=true) => {
        try {
          if(auth.isAuthenticated())setAuthHeaders(token.get('token'));
             let data = await axios.put(url, body, { headers: { 'Content-Type': 'application/json' } });
            showToaster(data,toaster);
            return data;
        }
        catch (error) {
            showToaster(error.response,toaster,error.message);
            return error.response;
        }
    },

    Delete: async (url,toaster=true)=> {
        if(auth.isAuthenticated())setAuthHeaders(token.get('token'));
        try{
            let data = await axios.delete(url,{ headers:{ 'Content-Type': 'application/json' } })
            showToaster(data,toaster);
            return data;
        }
        catch(error){
            showToaster(error.response,toaster,error.message);
            return error.response;
        }
    },
};
export default Api;