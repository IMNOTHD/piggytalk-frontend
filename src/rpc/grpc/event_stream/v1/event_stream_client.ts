import * as grpc from "@grpc/grpc-js"
import {EventStreamRequest, EventStreamResponse} from "./event_stream_pb";
import {EventStreamClient} from "./event_stream_grpc_pb"

// const messages = require('./event_stream_pb');
// const services = require('./event_stream_grpc_pb');

const endPoint = "localhost:9090";

let client: EventStreamClient;

const eventStream = () => {
    return new Promise<void>((resolve) => {
        const stream: grpc.ClientDuplexStream<EventStreamRequest, EventStreamResponse> = client.eventStream();

        stream.on("data", (data: EventStreamResponse) => {
            switch (data.getEventCase()) {
                case EventStreamResponse.EventCase.EVENT_NOT_SET:
                    break
                case EventStreamResponse.EventCase.ONLINERESPONSE:
                    break
                case EventStreamResponse.EventCase.BEATHEARTRESPONSE:
                    break
                case EventStreamResponse.EventCase.OFFLINERESPONSE:
                    stream.end();
                    break
                default:
                    break
            }
        });
        stream.on("end", () => {
            resolve();
        });

        // stream.write(req);
        // https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/examples/src/grpcjs/client.ts
    });
};

// eslint-disable-next-line no-unused-vars
async function main(token: string) {
    // eslint-disable-next-line no-unused-vars
    client = new EventStreamClient(endPoint, grpc.credentials.createInsecure());
    await eventStream();
}

//main().then((_) => _);

process.on("uncaughtException", (err) => {
    console.log(`process on uncaughtException error: ${err}`);
});
process.on("unhandledRejection", (err) => {
    console.log(`process on unhandledRejection error: ${err}`);
});
