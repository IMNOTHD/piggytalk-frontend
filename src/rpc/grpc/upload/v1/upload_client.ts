import * as grpc from "@grpc/grpc-js";
import {Code, ImgUploadRequest, ImgUploadResponse} from "./upload_pb"
import {UploadClient} from "./upload_grpc_pb"

const endPoint = "localhost:9090";
const client = new UploadClient(endPoint, grpc.credentials.createInsecure());

const imgUpload = async (file: File) => {
    const uploadPromise = (file: File) => {
        return new Promise((resolve, reject) => {
            let b: string = "";
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === "string") {
                    b = reader.result.replace(/^data:image\/\w+;base64,/, "");
                }

                if (b.length === 0) {
                    resolve("")
                }

                const stream: grpc.ClientWritableStream<ImgUploadRequest> = client.imgUpload((err, data: ImgUploadResponse) => {
                    if (err != null) {
                        resolve("")
                    }
                    if (data.getCode() != Code.OK) {
                        resolve("")
                    }

                    resolve(data.getUrl())
                });

                for (let i = 0; i < b.length / 1024 + 1; i++) {
                    const req = new ImgUploadRequest();
                    req.setContent(new TextEncoder().encode(b.substr(i * 1024, 1024)));
                    stream.write(req);
                }
                stream.end();
            }
            reader.readAsDataURL(file);
        });
    };

    return await uploadPromise(file)
};


export default imgUpload;

process.on("uncaughtException", (err) => {
    console.log(`process on uncaughtException error: ${err}`);
});
process.on("unhandledRejection", (err) => {
    console.log(`process on unhandledRejection error: ${err}`);
});
