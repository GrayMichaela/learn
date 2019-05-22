import request from"../axios";
import config from"../config";
import user from"./user";
export default{
	user
	,error:({msg,type})=>request.post(`${config.host}/error`,{
		msg
		,type
		,from:"front"
	})
};