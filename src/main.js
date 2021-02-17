import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$bus = new Vue()
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})