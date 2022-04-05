import {ListFriendRequestResponse} from "@/rpc/grpc/event_stream/v1/event_stream_pb";

export interface State {
    friendRequest: Array<ListFriendRequestResponse.AddFriendMessage>,
}

const state: State = {
    friendRequest: [],
}

const mutations = {
    addFriendRequest(state: State, payload: Array<ListFriendRequestResponse.AddFriendMessage>) {
        for (const message of payload) {
            let i = state.friendRequest.length - 1
            while (state.friendRequest[i].getEventid() < message.getEventid()) {
                i--
            }
            state.friendRequest.splice(i + 1, 0, message)
        }
    },
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
