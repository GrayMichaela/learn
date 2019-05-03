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
        changeLoading(state, { name, status }) {
            state[name] = !!status
        },
        getUserListSuccess(state, { list, total, query }) {
            state.done = list.length < query.pageSize
            state.list = list
            state.total = total
            state.query = query
        }
    },
    actions: {
        getUserList({ commit }, query) {
            commit('changeLoading', { name: 'loading', status: 1 })
            return common.actions.user.list(query).then(({ list, total }) => {
                commit('getUserListSuccess', { list, total, query })
            }).finally(() => {
                commit('changeLoading', { name: 'loading', status: 0 })
            })
        }
    },
    modules: {
        // test
    }
})