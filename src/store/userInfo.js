const state = () => ({
    username: "",
    email: "",
    phone: "",
    avatar: "",
    nickname: "",
});

const mutations = {
    setUserInfo(state, payload) {
        state.username = payload.username;
        state.email = payload.email;
        state.phone = payload.phone;
        state.avatar = payload.avatar;
        state.nickname = payload.nickname;
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
