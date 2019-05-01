import axios from 'axios'
import api from './interfaces'
import 'es6-promise'
axios.defaults.timeout = 3000;
axios.defaults.headers.sourceId = 1;
axios.interceptors.response.use(res=>res.data, function (err) {
    return Promise.reject(err);
});
export default {
    test:params=> 
        axios.get(api.test, {
            params
        })
    
}