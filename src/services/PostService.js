import API_URL from '../config/api'
import axios from 'axios';
import qs from 'qs';

export default {

    posts () {
        return axios.get(`${API_URL}/posts`);
    },

    add (post) {
        return axios.post(
            `${API_URL}/post`,
             qs.stringify(post),
             {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                 }
             }
        );
    },

    delete (id) {
        return axios.delete(`${API_URL}/post/${id}`);
    }
}