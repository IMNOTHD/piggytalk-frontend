import Vue from 'vue'
import Vuex from 'vuex'

import notify from "@/store/notify";
import userInfo from "@/store/userInfo";
import commonUserInfo from "@/store/commonUserInfo";
import relationMessage from "@/store/relationMessage";

import {State as UserInfoState} from "@/store/userInfo";
import {State as NotifyState} from "@/store/notify";
import {State as CommonUserInfoState} from "@/store/commonUserInfo";
import {State as RelationMessageState} from "@/store/relationMessage";

Vue.use(Vuex)

export interface State {
    notify: NotifyState,
    userInfo: UserInfoState,
    commonUserInfo: CommonUserInfoState,
    relationMessage: RelationMessageState,
}

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        notify,
        userInfo,
        commonUserInfo,
        relationMessage,
    }
})


export default store
