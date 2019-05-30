import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import Api from '../../Api/index';
import {FETCH_COMPANIES , FETCH_PACKAGES , ADD_CUSTOMER ,EDIT_CUSTOMER , UPDATE_CUSTOMER, UPDATE_PAYMENT} from '../../Api/endpoints';

export const getCustomers = async (body) => {

    try{
    let data =  await Api.Get(FETCH_COMPANIES);
    return data
    }
    catch(error){
        return error
    }



}
export const getpackages = async () => {

    try{
    let data =  await Api.Get(FETCH_PACKAGES);
   
    return data;
   
    }
    catch(error){
        return error
    }
}
export const addCustomers = async (body) => {

    try{
    let data =  await Api.Post(ADD_CUSTOMER,JSON.stringify(body));
   
    return data;
   
    }
    catch(error){
        return error
    }
}
export const updateCustomer = async (body,id) => {

    try{
    let data =  await Api.Put(UPDATE_CUSTOMER+id,JSON.stringify(body));
   
    return data;
   
    }
    catch(error){
        return error
    }
}

export const UpdatePaymentService = async (body,id,method) => {

    try{
    let data =  await Api.Put(UPDATE_PAYMENT+id+`/${method}`,JSON.stringify(body));
   
    return data;
   
    }
    catch(error){
        return error
    }
}


export const editCustomer = async (id) => {

    try{
    let data =  await Api.Get(EDIT_CUSTOMER+id);
    return data;
   
    }
    catch(error){
        return error
    }
}






export const deltTeamUserService = async (userId) => {
 


}
export const changeRoleService = async (role, tUserId) => {

}
export const inviteUser = async (values) => {



}