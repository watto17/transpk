import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import Api from '../../Api/index';
import {FETCH_COMPANIES} from '../../Api/endpoints';

export const getCustomers = async (body) => {

    try{
    let data =  await Api.Get(FETCH_COMPANIES);
    return data
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