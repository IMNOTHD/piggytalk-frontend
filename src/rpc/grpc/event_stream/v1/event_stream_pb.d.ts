// package: gateway.api.event.v1
// file: event_stream.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EventStreamRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): EventStreamRequest;

    hasOnlinerequest(): boolean;
    clearOnlinerequest(): void;
    getOnlinerequest(): OnlineRequest | undefined;
    setOnlinerequest(value?: OnlineRequest): EventStreamRequest;

    hasBeatheartrequest(): boolean;
    clearBeatheartrequest(): void;
    getBeatheartrequest(): BeatHeartRequest | undefined;
    setBeatheartrequest(value?: BeatHeartRequest): EventStreamRequest;

    hasOfflinerequest(): boolean;
    clearOfflinerequest(): void;
    getOfflinerequest(): OfflineRequest | undefined;
    setOfflinerequest(value?: OfflineRequest): EventStreamRequest;

    hasAddfriendrequest(): boolean;
    clearAddfriendrequest(): void;
    getAddfriendrequest(): AddFriendRequest | undefined;
    setAddfriendrequest(value?: AddFriendRequest): EventStreamRequest;

    hasConfirmfriendrequest(): boolean;
    clearConfirmfriendrequest(): void;
    getConfirmfriendrequest(): ConfirmFriendRequest | undefined;
    setConfirmfriendrequest(value?: ConfirmFriendRequest): EventStreamRequest;

    hasNotifyreceiveaddfriendrequest(): boolean;
    clearNotifyreceiveaddfriendrequest(): void;
    getNotifyreceiveaddfriendrequest(): NotifyReceiveAddFriendRequest | undefined;
    setNotifyreceiveaddfriendrequest(value?: NotifyReceiveAddFriendRequest): EventStreamRequest;

    hasListfriendrequest(): boolean;
    clearListfriendrequest(): void;
    getListfriendrequest(): ListFriendRequest | undefined;
    setListfriendrequest(value?: ListFriendRequest): EventStreamRequest;

    hasDeletefriendrequest(): boolean;
    clearDeletefriendrequest(): void;
    getDeletefriendrequest(): DeleteFriendRequest | undefined;
    setDeletefriendrequest(value?: DeleteFriendRequest): EventStreamRequest;

    hasSinglemessagerequest(): boolean;
    clearSinglemessagerequest(): void;
    getSinglemessagerequest(): SingleMessageRequest | undefined;
    setSinglemessagerequest(value?: SingleMessageRequest): EventStreamRequest;

    hasListuserinforequest(): boolean;
    clearListuserinforequest(): void;
    getListuserinforequest(): ListUserInfoRequest | undefined;
    setListuserinforequest(value?: ListUserInfoRequest): EventStreamRequest;

    hasListfriendrequestrequest(): boolean;
    clearListfriendrequestrequest(): void;
    getListfriendrequestrequest(): ListFriendRequestRequest | undefined;
    setListfriendrequestrequest(value?: ListFriendRequestRequest): EventStreamRequest;

    hasAckfriendmessagerequest(): boolean;
    clearAckfriendmessagerequest(): void;
    getAckfriendmessagerequest(): AckFriendMessageRequest | undefined;
    setAckfriendmessagerequest(value?: AckFriendMessageRequest): EventStreamRequest;

    getEventCase(): EventStreamRequest.EventCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EventStreamRequest): EventStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventStreamRequest;
    static deserializeBinaryFromReader(message: EventStreamRequest, reader: jspb.BinaryReader): EventStreamRequest;
}

export namespace EventStreamRequest {
    export type AsObject = {
        token: string,
        onlinerequest?: OnlineRequest.AsObject,
        beatheartrequest?: BeatHeartRequest.AsObject,
        offlinerequest?: OfflineRequest.AsObject,
        addfriendrequest?: AddFriendRequest.AsObject,
        confirmfriendrequest?: ConfirmFriendRequest.AsObject,
        notifyreceiveaddfriendrequest?: NotifyReceiveAddFriendRequest.AsObject,
        listfriendrequest?: ListFriendRequest.AsObject,
        deletefriendrequest?: DeleteFriendRequest.AsObject,
        singlemessagerequest?: SingleMessageRequest.AsObject,
        listuserinforequest?: ListUserInfoRequest.AsObject,
        listfriendrequestrequest?: ListFriendRequestRequest.AsObject,
        ackfriendmessagerequest?: AckFriendMessageRequest.AsObject,
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        ONLINEREQUEST = 2,
        BEATHEARTREQUEST = 3,
        OFFLINEREQUEST = 4,
        ADDFRIENDREQUEST = 5,
        CONFIRMFRIENDREQUEST = 6,
        NOTIFYRECEIVEADDFRIENDREQUEST = 7,
        LISTFRIENDREQUEST = 8,
        DELETEFRIENDREQUEST = 9,
        SINGLEMESSAGEREQUEST = 10,
        LISTUSERINFOREQUEST = 11,
        LISTFRIENDREQUESTREQUEST = 12,
        ACKFRIENDMESSAGEREQUEST = 13,
    }

}

export class EventStreamResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): EventStreamResponse;
    getCode(): Code;
    setCode(value: Code): EventStreamResponse;
    getMessages(): string;
    setMessages(value: string): EventStreamResponse;

    hasOnlineresponse(): boolean;
    clearOnlineresponse(): void;
    getOnlineresponse(): OnlineResponse | undefined;
    setOnlineresponse(value?: OnlineResponse): EventStreamResponse;

    hasBeatheartresponse(): boolean;
    clearBeatheartresponse(): void;
    getBeatheartresponse(): BeatHeartResponse | undefined;
    setBeatheartresponse(value?: BeatHeartResponse): EventStreamResponse;

    hasOfflineresponse(): boolean;
    clearOfflineresponse(): void;
    getOfflineresponse(): OfflineResponse | undefined;
    setOfflineresponse(value?: OfflineResponse): EventStreamResponse;

    hasAddfriendresponse(): boolean;
    clearAddfriendresponse(): void;
    getAddfriendresponse(): AddFriendResponse | undefined;
    setAddfriendresponse(value?: AddFriendResponse): EventStreamResponse;

    hasConfirmfriendresponse(): boolean;
    clearConfirmfriendresponse(): void;
    getConfirmfriendresponse(): ConfirmFriendResponse | undefined;
    setConfirmfriendresponse(value?: ConfirmFriendResponse): EventStreamResponse;

    hasNotifyreceiveaddfriendresponse(): boolean;
    clearNotifyreceiveaddfriendresponse(): void;
    getNotifyreceiveaddfriendresponse(): NotifyReceiveAddFriendResponse | undefined;
    setNotifyreceiveaddfriendresponse(value?: NotifyReceiveAddFriendResponse): EventStreamResponse;

    hasListfriendresponse(): boolean;
    clearListfriendresponse(): void;
    getListfriendresponse(): ListFriendResponse | undefined;
    setListfriendresponse(value?: ListFriendResponse): EventStreamResponse;

    hasDeletefriendresponse(): boolean;
    clearDeletefriendresponse(): void;
    getDeletefriendresponse(): DeleteFriendResponse | undefined;
    setDeletefriendresponse(value?: DeleteFriendResponse): EventStreamResponse;

    hasSinglemessageresponse(): boolean;
    clearSinglemessageresponse(): void;
    getSinglemessageresponse(): SingleMessageResponse | undefined;
    setSinglemessageresponse(value?: SingleMessageResponse): EventStreamResponse;

    hasListuserinforesponse(): boolean;
    clearListuserinforesponse(): void;
    getListuserinforesponse(): ListUserInfoResponse | undefined;
    setListuserinforesponse(value?: ListUserInfoResponse): EventStreamResponse;

    hasListfriendrequestresponse(): boolean;
    clearListfriendrequestresponse(): void;
    getListfriendrequestresponse(): ListFriendRequestResponse | undefined;
    setListfriendrequestresponse(value?: ListFriendRequestResponse): EventStreamResponse;

    hasAckfriendmessageresponse(): boolean;
    clearAckfriendmessageresponse(): void;
    getAckfriendmessageresponse(): AckFriendMessageResponse | undefined;
    setAckfriendmessageresponse(value?: AckFriendMessageResponse): EventStreamResponse;

    getEventCase(): EventStreamResponse.EventCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EventStreamResponse): EventStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventStreamResponse;
    static deserializeBinaryFromReader(message: EventStreamResponse, reader: jspb.BinaryReader): EventStreamResponse;
}

export namespace EventStreamResponse {
    export type AsObject = {
        token: string,
        code: Code,
        messages: string,
        onlineresponse?: OnlineResponse.AsObject,
        beatheartresponse?: BeatHeartResponse.AsObject,
        offlineresponse?: OfflineResponse.AsObject,
        addfriendresponse?: AddFriendResponse.AsObject,
        confirmfriendresponse?: ConfirmFriendResponse.AsObject,
        notifyreceiveaddfriendresponse?: NotifyReceiveAddFriendResponse.AsObject,
        listfriendresponse?: ListFriendResponse.AsObject,
        deletefriendresponse?: DeleteFriendResponse.AsObject,
        singlemessageresponse?: SingleMessageResponse.AsObject,
        listuserinforesponse?: ListUserInfoResponse.AsObject,
        listfriendrequestresponse?: ListFriendRequestResponse.AsObject,
        ackfriendmessageresponse?: AckFriendMessageResponse.AsObject,
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        ONLINERESPONSE = 4,
        BEATHEARTRESPONSE = 5,
        OFFLINERESPONSE = 6,
        ADDFRIENDRESPONSE = 7,
        CONFIRMFRIENDRESPONSE = 8,
        NOTIFYRECEIVEADDFRIENDRESPONSE = 9,
        LISTFRIENDRESPONSE = 10,
        DELETEFRIENDRESPONSE = 11,
        SINGLEMESSAGERESPONSE = 12,
        LISTUSERINFORESPONSE = 13,
        LISTFRIENDREQUESTRESPONSE = 14,
        ACKFRIENDMESSAGERESPONSE = 15,
    }

}

export class OnlineRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): OnlineRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnlineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OnlineRequest): OnlineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnlineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnlineRequest;
    static deserializeBinaryFromReader(message: OnlineRequest, reader: jspb.BinaryReader): OnlineRequest;
}

export namespace OnlineRequest {
    export type AsObject = {
        token: string,
    }
}

export class BeatHeartRequest extends jspb.Message { 
    getSessionid(): string;
    setSessionid(value: string): BeatHeartRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BeatHeartRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BeatHeartRequest): BeatHeartRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BeatHeartRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BeatHeartRequest;
    static deserializeBinaryFromReader(message: BeatHeartRequest, reader: jspb.BinaryReader): BeatHeartRequest;
}

export namespace BeatHeartRequest {
    export type AsObject = {
        sessionid: string,
    }
}

export class OfflineRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): OfflineRequest;
    getSessionid(): string;
    setSessionid(value: string): OfflineRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OfflineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OfflineRequest): OfflineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OfflineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OfflineRequest;
    static deserializeBinaryFromReader(message: OfflineRequest, reader: jspb.BinaryReader): OfflineRequest;
}

export namespace OfflineRequest {
    export type AsObject = {
        token: string,
        sessionid: string,
    }
}

export class AddFriendRequest extends jspb.Message { 
    getReceiveruuid(): string;
    setReceiveruuid(value: string): AddFriendRequest;
    getNote(): string;
    setNote(value: string): AddFriendRequest;
    getEventuuid(): string;
    setEventuuid(value: string): AddFriendRequest;
    getSendtime(): number;
    setSendtime(value: number): AddFriendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddFriendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddFriendRequest): AddFriendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddFriendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddFriendRequest;
    static deserializeBinaryFromReader(message: AddFriendRequest, reader: jspb.BinaryReader): AddFriendRequest;
}

export namespace AddFriendRequest {
    export type AsObject = {
        receiveruuid: string,
        note: string,
        eventuuid: string,
        sendtime: number,
    }
}

export class ConfirmFriendRequest extends jspb.Message { 
    getAddstatcode(): AddStatCode;
    setAddstatcode(value: AddStatCode): ConfirmFriendRequest;
    getEventuuid(): string;
    setEventuuid(value: string): ConfirmFriendRequest;
    getSendtime(): number;
    setSendtime(value: number): ConfirmFriendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfirmFriendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConfirmFriendRequest): ConfirmFriendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfirmFriendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfirmFriendRequest;
    static deserializeBinaryFromReader(message: ConfirmFriendRequest, reader: jspb.BinaryReader): ConfirmFriendRequest;
}

export namespace ConfirmFriendRequest {
    export type AsObject = {
        addstatcode: AddStatCode,
        eventuuid: string,
        sendtime: number,
    }
}

export class NotifyReceiveAddFriendRequest extends jspb.Message { 
    getEventid(): number;
    setEventid(value: number): NotifyReceiveAddFriendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotifyReceiveAddFriendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NotifyReceiveAddFriendRequest): NotifyReceiveAddFriendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotifyReceiveAddFriendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotifyReceiveAddFriendRequest;
    static deserializeBinaryFromReader(message: NotifyReceiveAddFriendRequest, reader: jspb.BinaryReader): NotifyReceiveAddFriendRequest;
}

export namespace NotifyReceiveAddFriendRequest {
    export type AsObject = {
        eventid: number,
    }
}

export class ListFriendRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ListFriendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFriendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFriendRequest): ListFriendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFriendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFriendRequest;
    static deserializeBinaryFromReader(message: ListFriendRequest, reader: jspb.BinaryReader): ListFriendRequest;
}

export namespace ListFriendRequest {
    export type AsObject = {
        token: string,
    }
}

export class DeleteFriendRequest extends jspb.Message { 
    getEventuuid(): string;
    setEventuuid(value: string): DeleteFriendRequest;
    getSendtime(): number;
    setSendtime(value: number): DeleteFriendRequest;
    getRemoveuuid(): string;
    setRemoveuuid(value: string): DeleteFriendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFriendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFriendRequest): DeleteFriendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFriendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFriendRequest;
    static deserializeBinaryFromReader(message: DeleteFriendRequest, reader: jspb.BinaryReader): DeleteFriendRequest;
}

export namespace DeleteFriendRequest {
    export type AsObject = {
        eventuuid: string,
        sendtime: number,
        removeuuid: string,
    }
}

export class SingleMessageRequest extends jspb.Message { 
    clearMessagechainList(): void;
    getMessagechainList(): Array<Message>;
    setMessagechainList(value: Array<Message>): SingleMessageRequest;
    addMessagechain(value?: Message, index?: number): Message;
    getMessageuuid(): string;
    setMessageuuid(value: string): SingleMessageRequest;
    getReceiveruuid(): string;
    setReceiveruuid(value: string): SingleMessageRequest;
    getSendtime(): number;
    setSendtime(value: number): SingleMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SingleMessageRequest): SingleMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleMessageRequest;
    static deserializeBinaryFromReader(message: SingleMessageRequest, reader: jspb.BinaryReader): SingleMessageRequest;
}

export namespace SingleMessageRequest {
    export type AsObject = {
        messagechainList: Array<Message.AsObject>,
        messageuuid: string,
        receiveruuid: string,
        sendtime: number,
    }
}

export class ListUserInfoRequest extends jspb.Message { 
    clearUuidList(): void;
    getUuidList(): Array<string>;
    setUuidList(value: Array<string>): ListUserInfoRequest;
    addUuid(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserInfoRequest): ListUserInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserInfoRequest;
    static deserializeBinaryFromReader(message: ListUserInfoRequest, reader: jspb.BinaryReader): ListUserInfoRequest;
}

export namespace ListUserInfoRequest {
    export type AsObject = {
        uuidList: Array<string>,
    }
}

export class ListFriendRequestRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ListFriendRequestRequest;
    getStarteventid(): number;
    setStarteventid(value: number): ListFriendRequestRequest;
    getCount(): number;
    setCount(value: number): ListFriendRequestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFriendRequestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFriendRequestRequest): ListFriendRequestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFriendRequestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFriendRequestRequest;
    static deserializeBinaryFromReader(message: ListFriendRequestRequest, reader: jspb.BinaryReader): ListFriendRequestRequest;
}

export namespace ListFriendRequestRequest {
    export type AsObject = {
        token: string,
        starteventid: number,
        count: number,
    }
}

export class AckFriendMessageRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AckFriendMessageRequest;
    clearEventidList(): void;
    getEventidList(): Array<number>;
    setEventidList(value: Array<number>): AckFriendMessageRequest;
    addEventid(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AckFriendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AckFriendMessageRequest): AckFriendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AckFriendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AckFriendMessageRequest;
    static deserializeBinaryFromReader(message: AckFriendMessageRequest, reader: jspb.BinaryReader): AckFriendMessageRequest;
}

export namespace AckFriendMessageRequest {
    export type AsObject = {
        token: string,
        eventidList: Array<number>,
    }
}

export class OnlineResponse extends jspb.Message { 
    getSessionid(): string;
    setSessionid(value: string): OnlineResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnlineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OnlineResponse): OnlineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnlineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnlineResponse;
    static deserializeBinaryFromReader(message: OnlineResponse, reader: jspb.BinaryReader): OnlineResponse;
}

export namespace OnlineResponse {
    export type AsObject = {
        sessionid: string,
    }
}

export class BeatHeartResponse extends jspb.Message { 
    getFlag(): BeatHeartResponse.Flag;
    setFlag(value: BeatHeartResponse.Flag): BeatHeartResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BeatHeartResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BeatHeartResponse): BeatHeartResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BeatHeartResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BeatHeartResponse;
    static deserializeBinaryFromReader(message: BeatHeartResponse, reader: jspb.BinaryReader): BeatHeartResponse;
}

export namespace BeatHeartResponse {
    export type AsObject = {
        flag: BeatHeartResponse.Flag,
    }

    export enum Flag {
    ACK = 0,
    FIN = 1,
    RST = 2,
    }

}

export class OfflineResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): OfflineResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OfflineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OfflineResponse): OfflineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OfflineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OfflineResponse;
    static deserializeBinaryFromReader(message: OfflineResponse, reader: jspb.BinaryReader): OfflineResponse;
}

export namespace OfflineResponse {
    export type AsObject = {
        token: string,
    }
}

export class SingleMessageResponse extends jspb.Message { 
    getMessageid(): number;
    setMessageid(value: number): SingleMessageResponse;
    getMessageuuid(): string;
    setMessageuuid(value: string): SingleMessageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleMessageResponse): SingleMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleMessageResponse;
    static deserializeBinaryFromReader(message: SingleMessageResponse, reader: jspb.BinaryReader): SingleMessageResponse;
}

export namespace SingleMessageResponse {
    export type AsObject = {
        messageid: number,
        messageuuid: string,
    }
}

export class AddFriendResponse extends jspb.Message { 
    getEventuuid(): string;
    setEventuuid(value: string): AddFriendResponse;
    getEventid(): number;
    setEventid(value: number): AddFriendResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddFriendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddFriendResponse): AddFriendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddFriendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddFriendResponse;
    static deserializeBinaryFromReader(message: AddFriendResponse, reader: jspb.BinaryReader): AddFriendResponse;
}

export namespace AddFriendResponse {
    export type AsObject = {
        eventuuid: string,
        eventid: number,
    }
}

export class ConfirmFriendResponse extends jspb.Message { 
    getEventid(): number;
    setEventid(value: number): ConfirmFriendResponse;
    getEventuuid(): string;
    setEventuuid(value: string): ConfirmFriendResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfirmFriendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConfirmFriendResponse): ConfirmFriendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfirmFriendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfirmFriendResponse;
    static deserializeBinaryFromReader(message: ConfirmFriendResponse, reader: jspb.BinaryReader): ConfirmFriendResponse;
}

export namespace ConfirmFriendResponse {
    export type AsObject = {
        eventid: number,
        eventuuid: string,
    }
}

export class NotifyReceiveAddFriendResponse extends jspb.Message { 
    getEventid(): number;
    setEventid(value: number): NotifyReceiveAddFriendResponse;
    getRequestuuid(): string;
    setRequestuuid(value: string): NotifyReceiveAddFriendResponse;
    getNote(): string;
    setNote(value: string): NotifyReceiveAddFriendResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotifyReceiveAddFriendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NotifyReceiveAddFriendResponse): NotifyReceiveAddFriendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotifyReceiveAddFriendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotifyReceiveAddFriendResponse;
    static deserializeBinaryFromReader(message: NotifyReceiveAddFriendResponse, reader: jspb.BinaryReader): NotifyReceiveAddFriendResponse;
}

export namespace NotifyReceiveAddFriendResponse {
    export type AsObject = {
        eventid: number,
        requestuuid: string,
        note: string,
    }
}

export class ListFriendResponse extends jspb.Message { 
    clearFrienduuidList(): void;
    getFrienduuidList(): Array<string>;
    setFrienduuidList(value: Array<string>): ListFriendResponse;
    addFrienduuid(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFriendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFriendResponse): ListFriendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFriendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFriendResponse;
    static deserializeBinaryFromReader(message: ListFriendResponse, reader: jspb.BinaryReader): ListFriendResponse;
}

export namespace ListFriendResponse {
    export type AsObject = {
        frienduuidList: Array<string>,
    }
}

export class DeleteFriendResponse extends jspb.Message { 
    getEventuuid(): string;
    setEventuuid(value: string): DeleteFriendResponse;
    getEventid(): number;
    setEventid(value: number): DeleteFriendResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFriendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFriendResponse): DeleteFriendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFriendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFriendResponse;
    static deserializeBinaryFromReader(message: DeleteFriendResponse, reader: jspb.BinaryReader): DeleteFriendResponse;
}

export namespace DeleteFriendResponse {
    export type AsObject = {
        eventuuid: string,
        eventid: number,
    }
}

export class ListUserInfoResponse extends jspb.Message { 
    clearUserinfoList(): void;
    getUserinfoList(): Array<ListUserInfoResponse.UserInfo>;
    setUserinfoList(value: Array<ListUserInfoResponse.UserInfo>): ListUserInfoResponse;
    addUserinfo(value?: ListUserInfoResponse.UserInfo, index?: number): ListUserInfoResponse.UserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserInfoResponse): ListUserInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserInfoResponse;
    static deserializeBinaryFromReader(message: ListUserInfoResponse, reader: jspb.BinaryReader): ListUserInfoResponse;
}

export namespace ListUserInfoResponse {
    export type AsObject = {
        userinfoList: Array<ListUserInfoResponse.UserInfo.AsObject>,
    }


    export class UserInfo extends jspb.Message { 
        getUuid(): string;
        setUuid(value: string): UserInfo;
        getAvatar(): string;
        setAvatar(value: string): UserInfo;
        getNickname(): string;
        setNickname(value: string): UserInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UserInfo.AsObject;
        static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UserInfo;
        static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
    }

    export namespace UserInfo {
        export type AsObject = {
            uuid: string,
            avatar: string,
            nickname: string,
        }
    }

}

export class ListFriendRequestResponse extends jspb.Message { 
    clearAddfriendmessageList(): void;
    getAddfriendmessageList(): Array<ListFriendRequestResponse.AddFriendMessage>;
    setAddfriendmessageList(value: Array<ListFriendRequestResponse.AddFriendMessage>): ListFriendRequestResponse;
    addAddfriendmessage(value?: ListFriendRequestResponse.AddFriendMessage, index?: number): ListFriendRequestResponse.AddFriendMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFriendRequestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFriendRequestResponse): ListFriendRequestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFriendRequestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFriendRequestResponse;
    static deserializeBinaryFromReader(message: ListFriendRequestResponse, reader: jspb.BinaryReader): ListFriendRequestResponse;
}

export namespace ListFriendRequestResponse {
    export type AsObject = {
        addfriendmessageList: Array<ListFriendRequestResponse.AddFriendMessage.AsObject>,
    }


    export class AddFriendMessage extends jspb.Message { 
        getEventuuid(): string;
        setEventuuid(value: string): AddFriendMessage;
        getEventid(): number;
        setEventid(value: number): AddFriendMessage;
        getAck(): boolean;
        setAck(value: boolean): AddFriendMessage;
        getReceiveruuid(): string;
        setReceiveruuid(value: string): AddFriendMessage;
        getSenderuuid(): string;
        setSenderuuid(value: string): AddFriendMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AddFriendMessage.AsObject;
        static toObject(includeInstance: boolean, msg: AddFriendMessage): AddFriendMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AddFriendMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AddFriendMessage;
        static deserializeBinaryFromReader(message: AddFriendMessage, reader: jspb.BinaryReader): AddFriendMessage;
    }

    export namespace AddFriendMessage {
        export type AsObject = {
            eventuuid: string,
            eventid: number,
            ack: boolean,
            receiveruuid: string,
            senderuuid: string,
        }
    }

}

export class AckFriendMessageResponse extends jspb.Message { 
    clearEventidList(): void;
    getEventidList(): Array<string>;
    setEventidList(value: Array<string>): AckFriendMessageResponse;
    addEventid(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AckFriendMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AckFriendMessageResponse): AckFriendMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AckFriendMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AckFriendMessageResponse;
    static deserializeBinaryFromReader(message: AckFriendMessageResponse, reader: jspb.BinaryReader): AckFriendMessageResponse;
}

export namespace AckFriendMessageResponse {
    export type AsObject = {
        eventidList: Array<string>,
    }
}

export class Message extends jspb.Message { 

    hasPlain(): boolean;
    clearPlain(): void;
    getPlain(): Message.Plain | undefined;
    setPlain(value?: Message.Plain): Message;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): Message.Image | undefined;
    setImage(value?: Message.Image): Message;

    hasEmoji(): boolean;
    clearEmoji(): void;
    getEmoji(): Message.Emoji | undefined;
    setEmoji(value?: Message.Emoji): Message;

    getDetailCase(): Message.DetailCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        plain?: Message.Plain.AsObject,
        image?: Message.Image.AsObject,
        emoji?: Message.Emoji.AsObject,
    }


    export class Plain extends jspb.Message { 
        getText(): string;
        setText(value: string): Plain;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Plain.AsObject;
        static toObject(includeInstance: boolean, msg: Plain): Plain.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Plain, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Plain;
        static deserializeBinaryFromReader(message: Plain, reader: jspb.BinaryReader): Plain;
    }

    export namespace Plain {
        export type AsObject = {
            text: string,
        }
    }

    export class Image extends jspb.Message { 
        getUrl(): string;
        setUrl(value: string): Image;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Image.AsObject;
        static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Image;
        static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
    }

    export namespace Image {
        export type AsObject = {
            url: string,
        }
    }

    export class Emoji extends jspb.Message { 
        getName(): string;
        setName(value: string): Emoji;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Emoji.AsObject;
        static toObject(includeInstance: boolean, msg: Emoji): Emoji.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Emoji, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Emoji;
        static deserializeBinaryFromReader(message: Emoji, reader: jspb.BinaryReader): Emoji;
    }

    export namespace Emoji {
        export type AsObject = {
            name: string,
        }
    }


    export enum DetailCase {
        DETAIL_NOT_SET = 0,
        PLAIN = 1,
        IMAGE = 2,
        EMOJI = 3,
    }

}

export enum Code {
    OK = 0,
    CANCELLED = 1,
    UNKNOWN = 2,
    INVALID_ARGUMENT = 3,
    DEADLINE_EXCEEDED = 4,
    NOT_FOUND = 5,
    ALREADY_EXISTS = 6,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    FAILED_PRECONDITION = 9,
    ABORTED = 10,
    OUT_OF_RANGE = 11,
    UNIMPLEMENTED = 12,
    INTERNAL = 13,
    UNAVAILABLE = 14,
    DATA_LOSS = 15,
    UNAUTHENTICATED = 16,
}

export enum AddStatCode {
    WAITING = 0,
    SUCCESS = 1,
    DENIED = 2,
}
