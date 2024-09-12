import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from '../../proto/auth';
// import type { ExampleHandlers } from './proto/example_package/Example.ts';

const packageDefinition = protoLoader.loadSync('./mevton-grpc-proto/proto/auth.proto');
const proto = (grpc.loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

export class AuthService {
  // private client: grpc.Client;

  constructor() {
    // this.client = new proto.auth.AuthService(
  }
} 