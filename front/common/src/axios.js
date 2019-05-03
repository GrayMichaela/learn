import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 3000,
    headers: {
        'sourceId': '1'
    }
});
axiosInstance.interceptors.response.use(res => res.data, err => Promise.reject(err.message));
export default axiosInstance