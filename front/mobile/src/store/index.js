import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import common from 'common'
const initQuery = {
    pageIndex: 0,
    pageSize: 15
}
export default new Vuex.Store({
    strict: true,
    namespace: true,
    state: {
        userList: [],
        total: 0,
        query: {
            ...initQuery
        },
        done: false,
        loading: false,
    },
    mutations: {
        resetQuery(state) {
            state.query = initQuery
        },
        setLoading(state, { name, status }) {
            state[name] = status
        },
        setUserList(state, { list, total, query }) {
            state.done = list.length < query.pageSize
            state.list = list
            state.total = total
            state.query = query
        }
    },
    actions: {
        getUserList({ commit }, query) {
            commit('setLoading', { name: 'loading', status: true })
            return common.actions.user.list(query).then(({ list, total }) => {
                commit('setUserList', { list, total, query })
            }).finally(() => {
                commit('setLoading', { name: 'loading', status: false })
            })
        },

    },
    modules: {
        // test
    }
})