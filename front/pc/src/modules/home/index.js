export default {
    route: {
        path: 'home',
        name: "home",
        component: () => import('./index.vue'),
        meta: {
            title: '首页'
        }
    },
    store: {
        namespace: true,
        state: {
            total: 0,
            query: {
                pageIndex: 0,
                pageSize: 15
            },
            loading: false,
        },
        mutations: {
            resetQuery(state) {
                state.query = initQuery
            },
            setLoading(state, {
                name,
                status
            }) {
                state[name] = status
            }
        },
        actions: {
            getUserList({
                commit
            }, query) {
                commit('setLoading', {
                    name: 'loading',
                    status: true
                })
                return common.actions.user.list(query).then(({
                    list,
                    total
                }) => {
                    /* commit('setUserList', {
                        list,
                        total,
                        query
                    }) */
                }).finally(() => {
                    commit('setLoading', {
                        name: 'loading',
                        status: false
                    })
                })
            }
        }
    }
}