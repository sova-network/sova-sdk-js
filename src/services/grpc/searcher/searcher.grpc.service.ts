//SearcherService
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from '../../../proto/searcher';
import { SearcherServiceClient } from '../../../proto/searcher/SearcherService';
import { promisify } from 'node:util';
import { Bundle } from '../../../proto/dto/Bundle';
const packageDefinition = protoLoader.loadSync('./mevton-grpc-proto/proto/auth.proto', {
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


export class SearcherGrpcService {
  private client: SearcherServiceClient;
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
    return new pkg.SearcherService(
      this.url,
      grpc.credentials.createInsecure(),
      { metadata }
    );
  }

  public subscribeBundleResults() {
    return this.client.SubscribeBundleResults({}, {
    });
  }

  public subscribeMempool() {
    return this.client.SubscribeMempool({});
  }

  public sendBundle(messages: { data: Buffer }[]) {
    const request: Bundle = {
      message: messages
    }
    return promisify(this.client.SendBundle.bind(this.client, request))()
  }

  public getTipAddresses() { }
}
