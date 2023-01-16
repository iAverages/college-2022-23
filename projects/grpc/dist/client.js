"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const user_service_grpc_pb_1 = require("./proto/grpc/user/v1/user_service_grpc_pb");
const user_service_pb_1 = require("./proto/grpc/user/v1/user_service_pb");
const client = new user_service_grpc_pb_1.UserServiceClient("localhost:4000", grpc_js_1.credentials.createInsecure());
const getUserRequest = new user_service_pb_1.GetUserRequest();
getUserRequest.setId(1);
client.getUser(getUserRequest, (err, response) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Got response from server`, response.getUsername());
});
