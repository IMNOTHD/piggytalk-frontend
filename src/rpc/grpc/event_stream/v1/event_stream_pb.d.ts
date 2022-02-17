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
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        ONLINEREQUEST = 2,
        BEATHEARTREQUEST = 3,
        OFFLINEREQUEST = 4,
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
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        ONLINERESPONSE = 4,
        BEATHEARTRESPONSE = 5,
        OFFLINERESPONSE = 6,
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
