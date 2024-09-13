//SearcherService
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from '../../proto/searcher';
import { SearcherServiceClient } from '../../proto/searcher/SearcherService';
import {promisify} from 'node:util';
import { Bundle } from '../../proto/dto/Bundle';
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

const pkg = proto.searcher;


export class SearcherService {
  private client: SearcherServiceClient;
  
  constructor() {
    this.client = new pkg.SearcherService(
      'localhost:50051',
      grpc.credentials.createInsecure()
    );
  }

  public subscribeBundleResults(){
    return this.client.SubscribeBundleResults({});
  }

  public subscribeMempool(){
    return this.client.SubscribeMempool({});
  }

  public sendBundle(messages: {data: Buffer}[]){
    const request: Bundle = {
      message: messages
    }
    return promisify(this.client.SendBundle.bind(this.client, request))()
  }

  public getTipAddresses(){}
} 