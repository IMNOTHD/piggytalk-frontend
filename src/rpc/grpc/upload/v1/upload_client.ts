import * as grpc from "@grpc/grpc-js";
import {Code, ImgUploadRequest, ImgUploadResponse} from "./upload_pb"
import {UploadClient} from "./upload_grpc_pb"

const endPoint = "localhost:9090";
const client = new UploadClient(endPoint, grpc.credentials.createInsecure());

const imgUpload = (file: File) => {
    let b: string = "";
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        if (typeof reader.result === "string") {
            b = reader.result.replace(/^data:image\/\w+;base64,/, "");
        }
    }

    if (b.length === 0) {
        return ""
    }

    const stream: grpc.ClientWritableStream<ImgUploadRequest> = client.imgUpload((err, data: ImgUploadResponse) => {
        if (err != null) {
            return ""
        }
        if (data.getCode() != Code.OK) {
            return ""
        }

        return data.getUrl();
    });

    for (let i = 0; i < b.length / 1024 + 1; i++) {
        const req = new ImgUploadRequest();
        req.setContent(b.substr(i * 1024, 1024));
        stream.write(req);
    }
    stream.end();
};


export default imgUpload;
