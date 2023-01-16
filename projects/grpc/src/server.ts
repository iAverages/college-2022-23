import { ServerUnaryCall, sendUnaryData, Server, ServerCredentials } from "@grpc/grpc-js";
import { GetUserResponse, GetUserRequest } from "./proto/grpc/user/v1/user_service_pb";
import { UserServiceService } from "./proto/grpc/user/v1/user_service_grpc_pb";

const getUser = (call: ServerUnaryCall<GetUserRequest, GetUserResponse>, callBack: sendUnaryData<GetUserResponse>) => {
    const response = new GetUserResponse();

    response.setUsername("testing name g");

    callBack(null, response);
};

const server = new Server();

server.addService(UserServiceService, { getUser });

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), () => {
    server.start();

    console.log("server is running on 0.0.0.0:4000");
});
