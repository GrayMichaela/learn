import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import request from 'common'
export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        test({
            commit
        }, query) {
            commit('increment');
            request.actions.user.getUserInfo(query).then(res => console.log(res)).catch(err => console.log(err)).finally(() => {
                console.log('close shadow')
            })
        }
    }
})