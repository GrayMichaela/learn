import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './modules/home/index'
export default new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [
        home.route
    ]
});
Vue.use(VueRouter)