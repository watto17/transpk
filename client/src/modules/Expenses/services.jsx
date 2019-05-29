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
  try{
    let result = await Api.Get(FETCH_EXPENSES);
    return result.data;
}
catch(error){
    return error
}


}