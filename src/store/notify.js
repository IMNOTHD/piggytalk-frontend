const state = () => ({
    content: "",
    color: "",
});

const mutations = {
    showMessage(state, payload) {
        state.content = payload.content;
        state.color = payload.color;
        state.timeout = payload.timeout;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
};
