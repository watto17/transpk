import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import {GET_TEAMS, TEAM_ROLE_CHNG} from '../../Api/endpoints';
import Api from '../../Api/index';

export const getTeams = async (body) => {

    try {
        let result = await Api.Post(GET_TEAMS + '/10',body);
        return result.data
    } catch (error) {
        return error;
    }


}
export const deltTeamUserService = async (userId) => {
    try {
        let result = await Api.Delete('user/' + userId);
        return result.data;
    } catch (error) {
        return error
    }


}
export const changeRoleService = async (role, tUserId) => {

    try {
        let result = await Api.Put(TEAM_ROLE_CHNG + '/' + tUserId, JSON.stringify({role: role}));
        return result;

    } catch (error) {
        return error

    }
}
export const inviteUser = async (values) => {
    try {
        let result = await Api.Post('user/inviteUser', values);
        return result.data;
    } catch (error) {
        return error
    }


}