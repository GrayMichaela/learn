import Vue from"vue";
import VueRouter from"vue-router";
Vue.use(VueRouter);
import home from"./modules/home/index";
import login from"./modules/login/index";
import index from"./modules/index.vue";
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