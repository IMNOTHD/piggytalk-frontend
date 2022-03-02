// package: gateway.api.upload.v1
// file: upload.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ImgUploadRequest extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): ImgUploadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImgUploadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImgUploadRequest): ImgUploadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImgUploadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImgUploadRequest;
    static deserializeBinaryFromReader(message: ImgUploadRequest, reader: jspb.BinaryReader): ImgUploadRequest;
}

export namespace ImgUploadRequest {
    export type AsObject = {
        content: Uint8Array | string,
    }
}

export class ImgUploadResponse extends jspb.Message { 
    getCode(): Code;
    setCode(value: Code): ImgUploadResponse;
    getMessage(): string;
    setMessage(value: string): ImgUploadResponse;
    getUrl(): string;
    setUrl(value: string): ImgUploadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImgUploadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImgUploadResponse): ImgUploadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImgUploadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImgUploadResponse;
    static deserializeBinaryFromReader(message: ImgUploadResponse, reader: jspb.BinaryReader): ImgUploadResponse;
}

export namespace ImgUploadResponse {
    export type AsObject = {
        code: Code,
        message: string,
        url: string,
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
