//import {ListUserInfoResponse} from "@/rpc/grpc/event_stream/v1/event_stream_pb";

interface commonUserInfo {
    uuid: string,
    avatar: string,
    nickname: string,
}

export interface State {
    userInfo: {
        [uuid: string]: {
            avatar: string,
            nickname: string,
        }
    },
}

const state: State = {
    userInfo: {},
}

const mutations = {
    setUserInfo(state: State, payload: Array<commonUserInfo>) {
        payload.forEach(value => {
            state.userInfo[value.uuid] = {
                avatar: value.avatar,
                nickname: value.nickname,
            }
        })
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
