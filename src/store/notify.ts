export interface State {
    content: string,
    color: string,
    timeout: number,
}

export interface MessagePayload {
    content: string,
    color: string,
    timeout: number,
}

const state: State = {
    content: "",
    color: "",
    timeout: 6000,
};

const mutations = {
    showMessage(state: State, payload: MessagePayload) {
        if (payload.content !== "") {
            state.content = payload.content;
            state.color = payload.color;
            state.timeout = payload.timeout;
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
};
