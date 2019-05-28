import config from"../config";
import user from"./user";
export default{
	user
	,error:({msg,type})=>new Promise((resolve,reject)=>{
		type && msg ? resolve({
			url:`${config.host}/error`
			,methods:"post"
			,params:{
				msg
				,type
				,from:"front"
			}
		}) : reject("参数错误");
	})
};