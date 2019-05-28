import login from"./index.vue";
export default{
	route:{
		path:"login"
		,name:"login"
		,component:login
		,meta:{title:"登陆"}
	}
	,store:{
		namespace:true
		,state:{loading:false}
		,mutations:{
			setLoading(state,{name,status})
			{
				state[name] = status;
			}
		}
		,actions:{}
	}
};