import config from"../config";
export default{
	list:({pageIndex,pageSize})=>new Promise((resolve,reject)=>{
		pageIndex && pageSize ? resolve({
			url:`${config.host}/user/list`
			,methods:"get"
			,params:{pageIndex,pageSize}
		}) : reject("参数错误");
	})
	,type:{
		list:({pageIndex,pageSize})=>new Promise((resolve,reject)=>{
			pageIndex && pageSize ? resolve({
				url:`${config.host}/user/type/list`
				,methods:"get"
				,params:{pageIndex,pageSize}
			}) : reject("参数错误");
		})
	}
};