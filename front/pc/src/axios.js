import axios from"axios";
import common from"common";
const axiosInstance = axios.create(common.params);
axiosInstance.interceptors.response.use(res=>res.data,err=>Promise.reject({url:err.config.url,msg:err.message}));
export default axiosInstance;