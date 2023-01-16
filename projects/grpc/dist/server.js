"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const user_service_pb_1 = require("./proto/grpc/user/v1/user_service_pb");
const user_service_grpc_pb_1 = require("./proto/grpc/user/v1/user_service_grpc_pb");
const getUser = (call, callBack) => {
    const response = new user_service_pb_1.GetUserResponse();
    response.setUsername("testing name g");
    callBack(null, response);
};
const server = new grpc_js_1.Server();
server.addService(user_service_grpc_pb_1.UserServiceService, { getUser });
server.bindAsync("0.0.0.0:4000", grpc_js_1.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("server is running on 0.0.0.0:4000");
});
