import Vue from 'vue'
import App from './index.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import notifyPlugin from "@/plugins/notify"
import axios from "@/plugins/axios"
import VueCookies from "vue-cookies"
import {Container, Header, Aside, Main, Footer} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// element
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(VueCookies)
Vue.use(notifyPlugin, {store})
Vue.prototype.$axios = axios

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
