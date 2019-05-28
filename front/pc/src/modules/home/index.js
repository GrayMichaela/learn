import home from"./index.vue";
import common from"common";
import ajax from"../../axios";
export default{
	route:{
		path:"home"
		,name:"home"
		,component:home
		,meta:{title:"首页"}
	}
	,store:{
		namespace:true
		,state:{
			total:0
			,list:[]
			,query:{
				pageIndex:0
				,pageSize:15
			}
			,loading:false
		}
		,mutations:{
			setLoading(state,{name,status}){
				state[name] = status;
			}
		}
		,actions:{
			getUserList({commit},query){
				commit("setLoading",{name:"loading",status:true});
				return common.actions.user.list(query).then(args=>{
					ajax({
						method:args.methods
						,url:args.url
						,data:args.params
					}).then(({data:{list,total}})=>{
						commit("setUserList",{list,total,query});
					}).catch(err=>Promise.reject(err)).finally(()=>{
						commit("setLoading",{name:"loading",status:false});
					});
				});
			}
		}
	}
};