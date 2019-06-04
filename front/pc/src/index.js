import Vue from"vue";
import app from"./app";
import router from"./router";
import store from"./store";
import ElementUI from"element-ui";
import"element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import"./components/index";
import"./styles/animate.css";
import cookie from"./cookie";
Vue.prototype.$cookie = cookie;
new Vue({
	el:"#app"
	,router
	,store
	,render:h=>h(app)
});