import {ListFriendRequestResponse} from "@/rpc/grpc/event_stream/v1/event_stream_pb";

interface AddFriendMessage {
    eventUuid: string,
    ack: boolean,
    eventId: number,
    receiverUuid: string,
    senderUuid: string,
}

export interface State {
    friendRequest: Array<AddFriendMessage>,
}

const state: State = {
    friendRequest: [],
}

const mutations = {
    cleanFriendRequest(state: State) {
        state.friendRequest = [];
    },
    addFriendRequest(state: State, payload: Array<AddFriendMessage>) {
        for (const message of payload) {
            let i = state.friendRequest.length - 1
            //console.log(state.friendRequest)
            let alreadyIn = false
            while (i > 0 && state.friendRequest[i].eventId <= message.eventId) {
                if (state.friendRequest[i].eventUuid === message.eventUuid) {
                    alreadyIn = true
                    break
                }
                i--
            }
            if (alreadyIn) {
                continue
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
