// import actions from 'common/src'
import Vue from 'vue'
import app from './app.vue'
import router from './router/index'
import store from './store/index'
window.$app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(app)
})