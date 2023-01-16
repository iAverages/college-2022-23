// package: grpc.user.v1
// file: grpc/user/v1/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as grpc_user_v1_user_service_pb from "../../../grpc/user/v1/user_service_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<grpc_user_v1_user_service_pb.GetUserRequest, grpc_user_v1_user_service_pb.GetUserResponse> {
    path: "/grpc.user.v1.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_user_v1_user_service_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<grpc_user_v1_user_service_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<grpc_user_v1_user_service_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<grpc_user_v1_user_service_pb.GetUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUser: grpc.handleUnaryCall<grpc_user_v1_user_service_pb.GetUserRequest, grpc_user_v1_user_service_pb.GetUserResponse>;
}

export interface IUserServiceClient {
    getUser(request: grpc_user_v1_user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: grpc_user_v1_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: grpc_user_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_user_v1_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: grpc_user_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_user_v1_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUser(request: grpc_user_v1_user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: grpc_user_v1_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: grpc_user_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_user_v1_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: grpc_user_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_user_v1_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}
