import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
/*import common from 'common'
 Vue.config.devtools = true;
Vue.config.productionTip = true;
Vue.config.warnHandler = (msg, vm, trace) => {
    common.actions.error({
        msg,
        type: 'warning'
    })
};
Vue.config.errorHandler = (err, vm, msg) => {
    common.actions.error({
        msg,
        type: 'error'
    })
} */
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(app)
})