import { credentials } from "@grpc/grpc-js";

import { UserServiceClient } from "./proto/grpc/user/v1/user_service_grpc_pb";
import { GetUserRequest } from "./proto/grpc/user/v1/user_service_pb";

const client = new UserServiceClient("localhost:4000", credentials.createInsecure());

const getUserRequest = new GetUserRequest();
getUserRequest.setId(1);

client.getUser(getUserRequest, (err, response) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Got response from server`, response.getUsername());
});
