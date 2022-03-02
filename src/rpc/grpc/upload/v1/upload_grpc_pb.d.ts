// package: gateway.api.upload.v1
// file: upload.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as upload_pb from "./upload_pb";

interface IUploadService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    imgUpload: IUploadService_IImgUpload;
}

interface IUploadService_IImgUpload extends grpc.MethodDefinition<upload_pb.ImgUploadRequest, upload_pb.ImgUploadResponse> {
    path: "/gateway.api.upload.v1.Upload/ImgUpload";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<upload_pb.ImgUploadRequest>;
    requestDeserialize: grpc.deserialize<upload_pb.ImgUploadRequest>;
    responseSerialize: grpc.serialize<upload_pb.ImgUploadResponse>;
    responseDeserialize: grpc.deserialize<upload_pb.ImgUploadResponse>;
}

export const UploadService: IUploadService;

export interface IUploadServer {
    imgUpload: grpc.handleClientStreamingCall<upload_pb.ImgUploadRequest, upload_pb.ImgUploadResponse>;
}

export interface IUploadClient {
    imgUpload(callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
    imgUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
    imgUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
    imgUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
}

export class UploadClient extends grpc.Client implements IUploadClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public imgUpload(callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
    public imgUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
    public imgUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
    public imgUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: upload_pb.ImgUploadResponse) => void): grpc.ClientWritableStream<upload_pb.ImgUploadRequest>;
}
