import axios from"axios";
const axiosInstance = axios.create({
	timeout:2000
	,headers:{"sourceId":"1"}
});
axiosInstance.interceptors.response.use(res=>res.data,err=>Promise.reject({url:err.config.url,msg:err.message}));
export default axiosInstance;