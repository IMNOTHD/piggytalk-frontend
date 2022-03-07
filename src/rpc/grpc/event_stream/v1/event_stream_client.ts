import * as grpc from "@grpc/grpc-js";
import {
    BeatHeartRequest,
    BeatHeartResponse,
    Code,
    EventStreamRequest,
    EventStreamResponse,
    OnlineRequest
} from "./event_stream_pb";
import {EventStreamClient} from "./event_stream_grpc_pb";
import * as electron from "electron";
import Flag = BeatHeartResponse.Flag;

// const messages = require('./event_stream_pb');
// const services = require('./event_stream_grpc_pb');

const endPoint = "localhost:9090";
let sessionId: string | undefined;
let intervalID : NodeJS.Timer;
let token : string = "";
let win : electron.BrowserWindow;

let client: EventStreamClient;

const eventStream = (t: string, ipcMain: electron.IpcMain) => {
    return new Promise<void>((resolve) => {
        token = t;
        const stream: grpc.ClientDuplexStream<EventStreamRequest, EventStreamResponse> = client.eventStream({defaults: true,});
        stream.write(new EventStreamRequest().setToken(token).setOnlinerequest(new OnlineRequest().setToken(token)));

        stream.on("data", (data: EventStreamResponse) => {
            if (data.getCode() === Code.UNAUTHENTICATED) {
                clearInterval(intervalID);
                stream.end();
                win.webContents.send("token-unauthenticated", "")
                resolve();
            }

            switch (data.getEventCase()) {
                case EventStreamResponse.EventCase.EVENT_NOT_SET:
                    break
                case EventStreamResponse.EventCase.ONLINERESPONSE:
                    sessionId = data.getOnlineresponse()?.getSessionid();
                    beatHeart(stream);
                    break
                case EventStreamResponse.EventCase.BEATHEARTRESPONSE:
                    switch (data.getBeatheartresponse()?.getFlag()) {
                        case Flag.ACK:
                            console.log(`${new Date().toString()} beatheart ACK`);
                            break
                        case Flag.FIN:
                            clearInterval(intervalID);
                            stream.end();
                            win.webContents.send("re-online", "")
                            resolve();
                            break
                        case Flag.RST:
                            clearInterval(intervalID);
                            stream.end();
                            win.webContents.send("token-unauthenticated", "")
                            resolve();
                            break
                    }
                    break
                case EventStreamResponse.EventCase.OFFLINERESPONSE:
                    clearInterval(intervalID);
                    stream.end();
                    break
                default:
                    break
            }
        });

        stream.on("end", () => {
            console.log("end")
            resolve();
        });

        // https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/examples/src/grpcjs/client.ts
    });
};

async function main(token: string, i: electron.IpcMain) {
    client = new EventStreamClient(endPoint, grpc.credentials.createInsecure());
    await eventStream(token, i);
}

export default function (i: electron.IpcMain, w: electron.BrowserWindow) {
    i.on("online", (event, token) => {
        console.log(token)
        win = w;
        main(token, i).then((_) => _);
    })
}

//main().then((_) => _);
const beatHeart = (stream: grpc.ClientDuplexStream<EventStreamRequest, EventStreamResponse>) => {
  intervalID = setInterval(() => {
      if (sessionId != undefined) {
          stream.write(new EventStreamRequest().setToken(token).setBeatheartrequest(new BeatHeartRequest().setSessionid(sessionId)))
      }
  }, 30000)
}


process.on("uncaughtException", (err) => {
    console.log(`process on uncaughtException error: ${err}`);
    win.webContents.send("client-error", `${err}`);
});
process.on("unhandledRejection", (err) => {
    console.log(`process on unhandledRejection error: ${err}`);
    win.webContents.send("client-error", `${err}`);
});
