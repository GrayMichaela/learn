export default {
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
            console.log(1111111)
        }
    },
}