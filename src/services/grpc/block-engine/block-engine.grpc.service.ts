import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from '../../../proto/block_engine';
import { BlockEngineValidatorClient } from '../../../proto/block_engine/BlockEngineValidator';
import { MempoolPacket } from '../../../proto/dto/MempoolPacket';
import { Bundle__Output } from '../../../proto/dto/Bundle';

const packageDefinition = protoLoader.loadSync('./mevton-grpc-proto/proto/auth.proto',{
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const proto = (grpc.loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const pkg = proto.block_engine;

export class BlockEngineGrpcService {
  private client: BlockEngineValidatorClient;
  private accessToken: string | undefined;
  private url: string;

  constructor(
    url: string,
    accessToken?: string,
  ) {
    this.url = url;
    this.accessToken = accessToken;

    this.client = this.getClient();
  }


  getClient() {
    const metadata = new grpc.Metadata();
    if (this.accessToken){
      metadata.add('authorization', `Bearer ${this.accessToken}`);
    }
    return new pkg.BlockEngineValidator(
      this.url,
      grpc.credentials.createInsecure(),
      { metadata }
    );
  }

  streamMempool(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<any>): grpc.ClientWritableStream<MempoolPacket> {
    return this.client.StreamMempool(metadata, options, callback);
  }

  subscribeBundles(argument: any, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<Bundle__Output> {
    return this.client.SubscribeBundles(argument, metadata, options);
  }
} 