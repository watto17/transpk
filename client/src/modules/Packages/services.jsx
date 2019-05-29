import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import Api from '../../Api/index';
import {FETCH_PACKAGES} from '../../Api/endpoints';


export const getPackage = async (body) => {

  try{
    let data= await Api.Get(FETCH_PACKAGES) 
    return data;
  }
  catch(error){
    return error;
  }



}
export const deltTeamUserService = async (userId) => {
 


}
export const changeRoleService = async (role, tUserId) => {

}
export const inviteUser = async (values) => {



}