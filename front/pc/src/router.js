import Vue from"vue";
import VueRouter from"vue-router";
Vue.use(VueRouter);
import home from"./modules/home";
import login from"./modules/login";
import index from"./modules";
export default new VueRouter({
	base:"/"
	,mode:"hash"
	,routes:[
		{
			path:""
			,name:"index"
			,component:index
			,children:[home.route,login.route]
		}
	]
});