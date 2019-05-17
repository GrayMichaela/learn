import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './styles/reset.less';
import cookie from './cookie.js';
import './components/index';
Vue.prototype.$cookie = cookie;
window.$app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(app)
})