import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [{
        path: '',
        name: 'index',
        component: () => import('../views/index.vue'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../views/login/index.vue'),
            },
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/home/index.vue'),
            }
        ]
    }]
})