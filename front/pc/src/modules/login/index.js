import login from"./index.vue";
const initQuery = {};
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
			resetQuery(state){
				state.query = initQuery;
			}
			,setLoading(state,{
				name,
				status
			}){
				state[name] = status;
			}
		}
		,actions:{}
	}
};