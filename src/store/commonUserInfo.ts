import {ListUserInfoResponse} from "@/rpc/grpc/event_stream/v1/event_stream_pb";

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
    setUserInfo(state: State, payload: Array<ListUserInfoResponse.UserInfo>) {
        payload.forEach(value => {
            state.userInfo[value.getUuid()].avatar = value.getAvatar()
            state.userInfo[value.getUuid()].nickname = value.getNickname()
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
