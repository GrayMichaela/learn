import Vue from 'vue'
import common from 'common'
module.exports = (env = true) => {
    Vue.config.devtools = env;
    Vue.config.productionTip = env;
    Vue.config.warnHandler = (msg, vm, trace) => {
        common.actions.error({ msg, type: 'warning' })
    };
    Vue.config.errorHandler = (err, vm, msg) => {
        common.actions.error({ msg, type: 'error' })
    }
}