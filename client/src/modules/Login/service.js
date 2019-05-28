import { LOGIN} from "../../Api/endpoints";
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
