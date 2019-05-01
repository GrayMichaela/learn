import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [{
        path: '',
        name: "test",
        component: () => import('../views/test.vue')
    }]
})