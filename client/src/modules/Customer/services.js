import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import Api from '../../Api/index';
import {FETCH_COMPANIES , FETCH_PACKAGES , ADD_CUSTOMER ,EDIT_CUSTOMER} from '../../Api/endpoints';

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
export const editCustomer = async (id) => {

    try{
    let data =  await Api.Get(EDIT_CUSTOMER+'4bd6b034-5213-4321-93a4-0fdc04bae564');
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