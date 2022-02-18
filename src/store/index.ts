import Vue from 'vue'
import Vuex from 'vuex'

import notify from "@/store/notify";
import userInfo from "@/store/userInfo";

import {State as UserInfoState} from "@/store/userInfo";
import {State as NotifyState} from "@/store/notify";

Vue.use(Vuex)

export interface State {
    notify: NotifyState,
    userInfo: UserInfoState,
}

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        notify,
        userInfo,
    }
})
