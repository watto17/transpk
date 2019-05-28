import token from './../utils/token';
import {setAuthHeaders} from '../Api/setauthHeaders';
class auth{
    constructor(){
        this.authenticated=false;
    }
    login(val,cb){
        token.set('token',val);
        this.authenticated=true;
        cb();
    }
    logout(cb){
        token.clear('token');
        setAuthHeaders();
        cb();
    }
    isAuthenticated(){
        return !!(token.get('token'))
    }
}
export default new auth();