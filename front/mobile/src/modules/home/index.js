import common from"common";
import home from"./index.vue";
export default{
	route:{
		path:""
		,name:"home"
		,component:home
	}
	,store:{
		namespace:true
		,state:{
			userList:[]
			,query:{
				pageIndex:0
				,pageSize:15
			}
			,done:false
			,loading:false
		}
		,mutations:{
			setLoading(state,{name,status}){
				state[name] = status;
			}
			,setUserList(state,{list,query}){
				state.done = list.length < query.pageSize;
				state.list = state.list.concat(list);
				state.query = query;
			}
		}
		,actions:{
			getUserList({commit},query){
				commit("setLoading",{name:"loading",status:true});
				return common.actions.user.list(query).then(({list})=>{
					commit("setUserList",{list,query});
				}).finally(()=>{
					commit("setLoading",{name:"loading",status:false});
				});
			}

		}
	}
};