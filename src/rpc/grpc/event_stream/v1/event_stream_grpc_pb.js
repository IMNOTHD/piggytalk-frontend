// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protoc .\src\rpc\grpc\event_stream.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
'use strict';
var grpc = require('@grpc/grpc-js');
var event_stream_pb = require('./event_stream_pb.js');

function serialize_gateway_api_event_v1_EventStreamRequest(arg) {
  if (!(arg instanceof event_stream_pb.EventStreamRequest)) {
    throw new Error('Expected argument of type gateway.api.event.v1.EventStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_api_event_v1_EventStreamRequest(buffer_arg) {
  return event_stream_pb.EventStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gateway_api_event_v1_EventStreamResponse(arg) {
  if (!(arg instanceof event_stream_pb.EventStreamResponse)) {
    throw new Error('Expected argument of type gateway.api.event.v1.EventStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_api_event_v1_EventStreamResponse(buffer_arg) {
  return event_stream_pb.EventStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventStreamService = exports.EventStreamService = {
  eventStream: {
    path: '/gateway.api.event.v1.EventStream/EventStream',
    requestStream: true,
    responseStream: true,
    requestType: event_stream_pb.EventStreamRequest,
    responseType: event_stream_pb.EventStreamResponse,
    requestSerialize: serialize_gateway_api_event_v1_EventStreamRequest,
    requestDeserialize: deserialize_gateway_api_event_v1_EventStreamRequest,
    responseSerialize: serialize_gateway_api_event_v1_EventStreamResponse,
    responseDeserialize: deserialize_gateway_api_event_v1_EventStreamResponse,
  },
};

exports.EventStreamClient = grpc.makeGenericClientConstructor(EventStreamService);
