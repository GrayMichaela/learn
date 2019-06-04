import Vue from"vue";
import Vuex from"vuex";
Vue.use(Vuex);
import home from"./modules/home";
import login from"./modules/login";
export default new Vuex.Store({
	strict:true
	,modules:{
		home:home.store
		,login:login.store
	}
});