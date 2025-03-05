//SearcherService
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from '../proto/searcher';
import { SearcherServiceClient } from '../proto/searcher/SearcherService';
import { promisify } from 'node:util';
import { Bundle } from '../proto/dto/Bundle';
import {ChannelCredentials} from "@grpc/grpc-js";
import {Token} from "../proto/auth/Token";
import {GetTipAddressesRequest} from "../proto/searcher/GetTipAddressesRequest";
import type {MempoolSubscription as _searcher_MempoolSubscription} from "../proto/searcher/MempoolSubscription";
const packageDefinition = protoLoader.loadSync('./sova-grpc-proto/proto/auth.proto', {
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
  private accessToken?: Token;

  constructor(
    url: string,
    caPEM?: Buffer,
    accessToken?: Token,
  ) {
    this.accessToken = accessToken;

    const metadata = new grpc.Metadata();

    if (this.accessToken){
      metadata.add('authorization', `Bearer ${this.accessToken.value}`);
    }

    this.client = new pkg.SearcherService(
        url,
        caPEM ? ChannelCredentials.createSsl(caPEM) : grpc.credentials.createInsecure(),
        { metadata }
    );
  }

  public subscribeBundleResults() {
    return this.client.SubscribeBundleResults({}, {
    });
  }

  public sendBundle(messages: { data: Buffer }[]) {
    const request: Bundle = {
      message: messages
    }
    return promisify(this.client.SendBundle.bind(this.client, request))()
  }

  public getTipAddresses() {
    return promisify(this.client.GetTipAddresses.bind(this.client, {}))();
  }

  public subscribeMempool(subscription: _searcher_MempoolSubscription) {
    return this.client.subscribeMempool(subscription);
  }

  public subscribeByAddresses(addresses: Array<string>) {
    return this.subscribeMempool({
      addresses: {
        address: addresses,
      }
    });
  }

  public subscribeByWorkchain(workchainId: number) {
    return this.subscribeMempool({
      workchain: {
        workchainId,
      }
    });
  }

  public subscribeByWorkchainShard(workchainId: number, shard: Buffer) {
    return this.subscribeMempool({
      workchainShard: {
        workchainId,
        shard,
      }
    });
  }

  public subscribeByExternalOutMessageOpcode(opcode: number) {
    return this.subscribeMempool({
      externalOutMessageBodyOpcode: {
        opcode
      }
    });
  }

  public subscribeByInternalMessageOpcode(opcode: number) {
    return this.subscribeMempool({
      internalMessageBodyOpcode: {
        opcode
      }
    });
  }
}
