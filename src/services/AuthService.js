import API_URL from '../config/api'
import axios from 'axios';
import qs from 'qs';

export default {

    login (credentials) {
        return axios.post(
            `${API_URL}/login`,
             qs.stringify(credentials),
             {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                 }
             }
        );
    }
}