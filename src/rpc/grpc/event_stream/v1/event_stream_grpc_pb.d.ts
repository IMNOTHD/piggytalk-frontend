// package: gateway.api.event.v1
// file: event_stream.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as event_stream_pb from "./event_stream_pb";

interface IEventStreamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    eventStream: IEventStreamService_IEventStream;
}

interface IEventStreamService_IEventStream extends grpc.MethodDefinition<event_stream_pb.EventStreamRequest, event_stream_pb.EventStreamResponse> {
    path: "/gateway.api.event.v1.EventStream/EventStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<event_stream_pb.EventStreamRequest>;
    requestDeserialize: grpc.deserialize<event_stream_pb.EventStreamRequest>;
    responseSerialize: grpc.serialize<event_stream_pb.EventStreamResponse>;
    responseDeserialize: grpc.deserialize<event_stream_pb.EventStreamResponse>;
}

export const EventStreamService: IEventStreamService;

export interface IEventStreamServer {
    eventStream: grpc.handleBidiStreamingCall<event_stream_pb.EventStreamRequest, event_stream_pb.EventStreamResponse>;
}

export interface IEventStreamClient {
    eventStream(): grpc.ClientDuplexStream<event_stream_pb.EventStreamRequest, event_stream_pb.EventStreamResponse>;
    eventStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_stream_pb.EventStreamRequest, event_stream_pb.EventStreamResponse>;
    eventStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_stream_pb.EventStreamRequest, event_stream_pb.EventStreamResponse>;
}

export class EventStreamClient extends grpc.Client implements IEventStreamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public eventStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_stream_pb.EventStreamRequest, event_stream_pb.EventStreamResponse>;
    public eventStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_stream_pb.EventStreamRequest, event_stream_pb.EventStreamResponse>;
}
