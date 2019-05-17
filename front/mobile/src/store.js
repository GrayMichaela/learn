import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './modules/home/index'
export default new Vuex.Store({
    strict: true,
    namespace: true,
    modules: {
        home: home.store
    }
})