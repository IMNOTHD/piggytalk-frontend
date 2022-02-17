// eslint-disable-next-line no-unused-vars
const messages = require('./event_stream_pb');
const services = require('./event_stream_grpc_pb');

const grpc = require('@grpc/grpc-js');

const endPoint = "localhost:9090";

// eslint-disable-next-line no-unused-vars
function EventStream(token: string) {
    // eslint-disable-next-line no-unused-vars
    const client = new services.EventStreamClient(endPoint,
        grpc.credentials.createInsecure());
}
