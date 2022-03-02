// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var upload_pb = require('./upload_pb.js');

function serialize_gateway_api_upload_v1_ImgUploadRequest(arg) {
  if (!(arg instanceof upload_pb.ImgUploadRequest)) {
    throw new Error('Expected argument of type gateway.api.upload.v1.ImgUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_api_upload_v1_ImgUploadRequest(buffer_arg) {
  return upload_pb.ImgUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gateway_api_upload_v1_ImgUploadResponse(arg) {
  if (!(arg instanceof upload_pb.ImgUploadResponse)) {
    throw new Error('Expected argument of type gateway.api.upload.v1.ImgUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_api_upload_v1_ImgUploadResponse(buffer_arg) {
  return upload_pb.ImgUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UploadService = exports.UploadService = {
  imgUpload: {
    path: '/gateway.api.upload.v1.Upload/ImgUpload',
    requestStream: true,
    responseStream: false,
    requestType: upload_pb.ImgUploadRequest,
    responseType: upload_pb.ImgUploadResponse,
    requestSerialize: serialize_gateway_api_upload_v1_ImgUploadRequest,
    requestDeserialize: deserialize_gateway_api_upload_v1_ImgUploadRequest,
    responseSerialize: serialize_gateway_api_upload_v1_ImgUploadResponse,
    responseDeserialize: deserialize_gateway_api_upload_v1_ImgUploadResponse,
  },
};

exports.UploadClient = grpc.makeGenericClientConstructor(UploadService);
