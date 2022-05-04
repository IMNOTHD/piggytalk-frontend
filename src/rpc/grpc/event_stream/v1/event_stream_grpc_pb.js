// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protoc --plugin=protoc-gen-ts=..\..\..\..\..\node_modules\.bin\protoc-gen-ts.cmd --ts_out=. -I . .\event_stream.proto
// grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=. .\event_stream.proto
// event_stream_grpc_pb.js修改var grpc = require('@grpc/grpc-js');
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


// 任何带Notify前缀的message, 均为服务端先发
//
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
