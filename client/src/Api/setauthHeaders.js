import axios from 'axios/index';
import { token } from '../utils/token';

export const setAuthHeaders = (token) => {

    if (token) {
        axios.defaults.headers.common['token'] = token
    }
    else {
        delete axios.defaults.headers.common['token'];
    }
}