import request from"../axios";
import config from"../config";
export default{
	list:({
		pageIndex,
		pageSize
	})=>request.get(`${config.host}/user/list`,{
		params:{
			pageIndex
			,pageSize
		}
	}).then(res=>({
		total:res.total
		,list:res.data
	}))
	,type:{
		list:({
			pageIndex,
			pageSize
		})=>request.get(`${config.host}/user/type/list`,{
			params:{
				pageIndex
				,pageSize
			}
		}).then(res=>({
			total:res.total
			,list:res.data
		}))
	}
};