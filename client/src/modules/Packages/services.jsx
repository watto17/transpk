import axios from 'axios';
import {setAuthHeaders} from '../../Api/setauthHeaders';
import Api from '../../Api/index';
import {FETCH_PACKAGES,ADD_PACKAGES,EDIT_PACKAGES,UPDATE_PACKAGES} from '../../Api/endpoints';


export const getPackage = async (body) => {

  try{
    let data= await Api.Get(FETCH_PACKAGES) 
    return data;
  }
  catch(error){
    return error;
  }
}
export const addPackages= async(body)=>{
  try {
    let data= await Api.Post(ADD_PACKAGES,JSON.stringify(body))
    return data
  }
  catch(error){
    return error;
  }
}
export const editPackage = async (id) => {

  try{
  let data =  await Api.Get(EDIT_PACKAGES+id);
  return data;
 
  }
  catch(error){
      return error
  }
}
export const updatePackages = async (body,id) => {

  try{
  let data =  await Api.Put(UPDATE_PACKAGES+id,JSON.stringify(body));
 
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