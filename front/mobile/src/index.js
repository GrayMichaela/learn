// import actions from 'common/src'
import Vue from 'vue'
import app from './app.vue'
import router from './router/index'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
window.$app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(app)
})