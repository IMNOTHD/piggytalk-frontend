import Vue from 'vue'
import App from './index.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import notifyPlugin from "@/plugins/notify"
import axios from "@/plugins/axios"
import VueCookies from "vue-cookies"

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use(notifyPlugin, {store})
Vue.prototype.$axios = axios

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
