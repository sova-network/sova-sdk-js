import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { SearcherServiceClient as _searcher_SearcherServiceClient, SearcherServiceDefinition as _searcher_SearcherServiceDefinition } from './searcher/SearcherService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dto: {
    Bundle: MessageTypeDefinition
    ExternalMessage: MessageTypeDefinition
    MempoolExternalMessage: MessageTypeDefinition
    MempoolPacket: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  searcher: {
    AddressSubscriptionV0: MessageTypeDefinition
    BundleResult: MessageTypeDefinition
    BundleResultAuctionFailed: MessageTypeDefinition
    BundleResultAuctionFailedEstimate: MessageTypeDefinition
    BundleResultAuctionLoose: MessageTypeDefinition
    BundleResultAuctionWin: MessageTypeDefinition
    BundleResultInternalError: MessageTypeDefinition
    BundleResultInterrupted: MessageTypeDefinition
    BundleResultPartiallyExpired: MessageTypeDefinition
    BundleResultPartiallyProcessed: MessageTypeDefinition
    GetTipAddressesRequest: MessageTypeDefinition
    GetTipAddressesResponse: MessageTypeDefinition
    MempoolSubscription: MessageTypeDefinition
    SearcherService: SubtypeConstructor<typeof grpc.Client, _searcher_SearcherServiceClient> & { service: _searcher_SearcherServiceDefinition }
    SendBundleResponse: MessageTypeDefinition
    SubscribeBundleResultsRequest: MessageTypeDefinition
  }
}

