import Vue from 'vue'
import App from './index.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import store from '@/store'
import notifyPlugin from "@/plugins/notify"
import axios from "@/plugins/axios"
import VueCookies from "vue-cookies"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Antd)

Vue.use(VueCookies)
Vue.use(notifyPlugin, {store})
Vue.prototype.$axios = axios

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
