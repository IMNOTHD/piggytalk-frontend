// eslint-disable-next-line no-unused-vars
let messages = require('./event_stream_pb');
let services = require('./event_stream_grpc_pb');

let grpc = require('@grpc/grpc-js');

const endPoint = "localhost:9090";

// eslint-disable-next-line no-unused-vars
function EventStream(token) {
    // eslint-disable-next-line no-unused-vars
    let client = new services.EventStreamClient(endPoint,
        grpc.credentials.createInsecure());
}
