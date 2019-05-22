import Vue from"vue";
import app from"./app.vue";
import router from"./router";
import store from"./store";
import Vant from"vant";
import"vant/lib/index.css";
Vue.use(Vant);
import"./components/index";
import common from"common";
import"./styles/animate.css";
Vue.config.devtools = true;
Vue.config.productionTip = true;
Vue.config.warnHandler = (msg)=>{
	common.actions.error({
		msg
		,type:"warning"
	});
};
Vue.config.errorHandler = (err,vm,position)=>{
	const info = {
		routerName:vm.$route.title
		,msg:err.message
		,position
	};
	common.actions.error({
		msg:JSON.stringify(info)
		,type:"error"
	});
};
new Vue({
	el:"#app"
	,router
	,store
	,render:h=>h(app)
});