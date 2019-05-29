import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import Api from '../../Api/index';
import {FETCH_EXPENSES} from '../../Api/endpoints';

export const getTeams = async (body) => {




}
export const deltTeamUserService = async (userId) => {
 


}
export const changeRoleService = async (role, tUserId) => {

}
export const inviteUser = async (values) => {
  

}
export const getExpenses = async (body) => {

  try{
    let data =  await Api.Get(FETCH_EXPENSES);
    return data
    }
    catch(error){
        return error
    }


}