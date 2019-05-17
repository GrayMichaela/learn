export default {
    router: {
        path: 'login',
        name: "login",
        component: () => import('./index.vue'),
        meta: {
            title: '登陆'
        }
    },
    store: {
        namespace: true,
        state: {
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

        }
    }
}