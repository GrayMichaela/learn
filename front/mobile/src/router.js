import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from './modules/home/index'

export default new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [
        home.routes
    ]
})