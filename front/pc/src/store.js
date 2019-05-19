import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import home from "./modules/home/index";
import login from "./modules/login/index";
export default new Vuex.Store({
	strict: true,
	modules: {
		home: home.store,
		login: login.store,
	}
});