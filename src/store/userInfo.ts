export interface State {
    username: string,
    email: string,
    phone: string,
    avatar: string,
    nickname: string,
    uuid: string,
}

const state : State = {
    username: "",
    email: "",
    phone: "",
    avatar: "",
    nickname: "",
    uuid: "",
}

const mutations = {
    setUserInfo(state: State, payload: State) {
        state.username = payload.username;
        state.email = payload.email;
        state.phone = payload.phone;
        state.avatar = payload.avatar;
        state.nickname = payload.nickname;
        state.uuid = payload.uuid;
    },
    setAvatar(state: State, payload: State) {
        state.avatar = payload.avatar
    },
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
