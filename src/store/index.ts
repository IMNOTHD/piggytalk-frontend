import Vue from 'vue'
import Vuex from 'vuex'

import notify from "@/store/notify";
import userInfo from "@/store/userInfo";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        notify,
        userInfo,
    }
})
