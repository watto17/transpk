import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import Api from '../../Api/index';
import {FETCH_EXPENSES,ADD_EXPENSE,EDIT_EXPENSE, UPDATE_EXPENSE,DELETE_EXPENSE} from '../../Api/endpoints';

export const getTeams = async (body) => {




}
export const deltTeamUserService = async (userId) => {
  try{
    let data =  await Api.Delete(DELETE_EXPENSE+userId);
    return data;
   
    }
    catch(error){
        return error
    }


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
export const addExpenses = async(body)=>{
  try {
    let data= await Api.Post(ADD_EXPENSE,JSON.stringify(body))
    return data
  }
  catch(error){
    return error;
  }
}

export const editExpense = async (id) => {

  try{
  let data =  await Api.Get(EDIT_EXPENSE+id);
  return data;
 
  }
  catch(error){
      return error
  }
}
export const updateExpenses = async (body,id) => {

  try{
  let data =  await Api.Put(UPDATE_EXPENSE+id,JSON.stringify(body));
 
  return data;
 
  }
  catch(error){
      return error
  }
}