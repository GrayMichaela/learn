import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import common from 'common'
import test from './test'
export default new Vuex.Store({
    strict: true,
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        list({
            commit
        }, query) {
            commit('increment');
            return common.actions.test(query).then(res => {
                commit('increment');
                return res
            }).catch(err => {
                throw err
            }).finally(() => {
                console.log('close shadow')
            })
        }
    },
    modules: {
        test
    }
})