import * as grpc from "@grpc/grpc-js";
import {
    AddFriendRequest,
    BeatHeartRequest,
    BeatHeartResponse,
    Code,
    EventStreamRequest,
    EventStreamResponse,
    ListFriendRequest, ListFriendRequestRequest, ListUserInfoRequest,
    OnlineRequest
} from "./event_stream_pb";
import {EventStreamClient} from "./event_stream_grpc_pb";
import * as electron from "electron";
import Flag = BeatHeartResponse.Flag;
const { v4: uuidV4 } = require('uuid')

// const messages = require('./event_stream_pb');
// const services = require('./event_stream_grpc_pb');

const endPoint = "localhost:9090";
let sessionId: string | undefined;
let intervalID: NodeJS.Timer;
let token: string = "";
let win: electron.BrowserWindow;

let client: EventStreamClient;

const eventStream = (t: string, ipcMain: electron.IpcMain) => {
    return new Promise<void>((resolve) => {
        token = t;
        const stream: grpc.ClientDuplexStream<EventStreamRequest, EventStreamResponse> = client.eventStream({defaults: true,});
        stream.write(new EventStreamRequest().setToken(token).setOnlinerequest(new OnlineRequest().setToken(token)));

        ipcMain.on("list-friend-request-request", (event, args)=>{
            console.log(`send list-friend-request-request`)
            stream.write(new EventStreamRequest().setToken(token).setListfriendrequestrequest(new ListFriendRequestRequest().setToken(token).setCount(args.count).setStarteventid(args.startId)))
        })
        ipcMain.on("list-friend-request", () => {
            console.log(`send list-friend-request`)
            //stream.write(new EventStreamRequest().setToken(token).setListfriendrequest(new ListFriendRequest().setToken(token)))
        })
        ipcMain.on("add-friend-request", (event, args) => {
            console.log(`send add-friend-request`)
            stream.write(new EventStreamRequest().setToken(token).setAddfriendrequest(new AddFriendRequest().setReceiveruuid(args.receiverUuid).setNote(args.note).setEventuuid(uuidV4()).setSendtime(Date.now())))
        })
        ipcMain.on("userinfo-list-request", (event, args) => {
            if (args.length != 0) {
                console.log(`send userinfo-list-request: ${args}`)
                stream.write(new EventStreamRequest().setToken(token).setListuserinforequest(new ListUserInfoRequest().setUuidList(args)))
            }
        })

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
                    win.webContents.send("online-success", "")
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
                case EventStreamResponse.EventCase.LISTFRIENDRESPONSE: {
                    const friendList = data.getListfriendresponse()?.getFrienduuidList();
                    win.webContents.send("friend-list", friendList)
                    break
                }
                case EventStreamResponse.EventCase.LISTUSERINFORESPONSE: {
                    const userInfoList = data.getListuserinforesponse()?.getUserinfoList();
                    win.webContents.send("userinfo-list", userInfoList)
                    break
                }
                case EventStreamResponse.EventCase.LISTFRIENDREQUESTRESPONSE: {
                    const friendRequestList = data.getListfriendrequestresponse()?.getAddfriendmessageList()
                    const list : Array<any> = new Array<any>()
                    if (friendRequestList !== undefined) {
                        for (let i = 0; i < friendRequestList.length; i++) {
                            if (friendRequestList[i].getAck() === undefined) {
                                friendRequestList[i].setAck(false)
                            }
                            list.push({
                                eventUuid: friendRequestList[i].getEventid(),
                                ack: friendRequestList[i].getAck(),
                                eventId: friendRequestList[i].getEventid(),
                                receiverUuid: friendRequestList[i].getReceiveruuid(),
                                senderUuid: friendRequestList[i].getSenderuuid(),
                            })
                        }
                    }
                    win.webContents.send("list-friend-request", list)
                    break
                }
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
