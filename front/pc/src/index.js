// import actions from 'common/src'
import Vue from 'vue'
import app from './app.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/reset.less';
Vue.use(ElementUI);
import cookie from './cookie.js';
import './components/index';
Vue.prototype.$cookie = cookie;
window.$app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(app)
})