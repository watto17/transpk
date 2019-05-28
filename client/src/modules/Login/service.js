import {BK_URL, EMAIL_INVITE, FORGET_PASSWORD, LOGIN, REGISTER, UPDATE_PASSWORD} from "../../Api/endpoints";
import api from '../../Api';

export async function getToken(values) {
    try {
        let result = await api.Post(
            LOGIN,
            JSON.stringify({ email: values.email, password: values.password }),
            false
        );
        return result.data;
    }
    catch (error) {
        return error;
    }

}
export async function forgetPasswordApi(values) {
    try {
        let result = await api.Post(
             FORGET_PASSWORD,
            JSON.stringify(values),
            false
        );
        return result.data;
    } catch (error) {
        return error;
    }
}
export async function EditEmailApi(values, uuid) {
    try {
        let result = await api.Put(
            REGISTER + '/' + uuid,
            JSON.stringify(values),
            false
        );
        return result.data;
    }
    catch (error) {
        return error;
    }
}
export async function fetchUserEmail(uuid) {
    try {
        let result = await api.Get(
            'user/fetchEmail' + '/' + uuid
        );
        return result.data;
    }
    catch (error) {
        return error;
    }
}
export async function registerApi(values) {
    try {
        let result = await api.Post(
            BK_URL+REGISTER,
            JSON.stringify(values),
            false
        );
        return result.data;
    }
    catch (error) {
        return error;
    }
}
export async function sendInviteApi(uuid) {
    try {
        let result = await api.Post(
            EMAIL_INVITE,
            JSON.stringify({ uuid }),
            false
        );

        return result.data;
    }
    catch (error) {
        return error;
    }
}
export async function verifyForgetPasswordApi(id) {
    try {
        let result = await api.Get(BK_URL+'user/verifyForgetPassword/' + id);
        return result.data;
    }
    catch (error) {
        return error;
    }

}
export async function updatePasswordApi(values) {
    try {
        let result = await api.Post(
            BK_URL+
            UPDATE_PASSWORD,
            JSON.stringify(values),
            false
        );
        return result.data;
    }
    catch (error) {
        return error;
    }


}