// Original file: sova-grpc-proto/proto/searcher.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Bundle as _dto_Bundle, Bundle__Output as _dto_Bundle__Output } from '../dto/Bundle';
import type { BundleResult as _searcher_BundleResult, BundleResult__Output as _searcher_BundleResult__Output } from '../searcher/BundleResult';
import type { GetTipAddressesRequest as _searcher_GetTipAddressesRequest, GetTipAddressesRequest__Output as _searcher_GetTipAddressesRequest__Output } from '../searcher/GetTipAddressesRequest';
import type { GetTipAddressesResponse as _searcher_GetTipAddressesResponse, GetTipAddressesResponse__Output as _searcher_GetTipAddressesResponse__Output } from '../searcher/GetTipAddressesResponse';
import type { MempoolPacket as _dto_MempoolPacket, MempoolPacket__Output as _dto_MempoolPacket__Output } from '../dto/MempoolPacket';
import type { MempoolSubscription as _searcher_MempoolSubscription, MempoolSubscription__Output as _searcher_MempoolSubscription__Output } from '../searcher/MempoolSubscription';
import type { SendBundleResponse as _searcher_SendBundleResponse, SendBundleResponse__Output as _searcher_SendBundleResponse__Output } from '../searcher/SendBundleResponse';
import type { SubscribeBundleResultsRequest as _searcher_SubscribeBundleResultsRequest, SubscribeBundleResultsRequest__Output as _searcher_SubscribeBundleResultsRequest__Output } from '../searcher/SubscribeBundleResultsRequest';

export interface SearcherServiceClient extends grpc.Client {
  GetTipAddresses(argument: _searcher_GetTipAddressesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  GetTipAddresses(argument: _searcher_GetTipAddressesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  GetTipAddresses(argument: _searcher_GetTipAddressesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  GetTipAddresses(argument: _searcher_GetTipAddressesRequest, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  getTipAddresses(argument: _searcher_GetTipAddressesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  getTipAddresses(argument: _searcher_GetTipAddressesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  getTipAddresses(argument: _searcher_GetTipAddressesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  getTipAddresses(argument: _searcher_GetTipAddressesRequest, callback: grpc.requestCallback<_searcher_GetTipAddressesResponse__Output>): grpc.ClientUnaryCall;
  
  SendBundle(argument: _dto_Bundle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  SendBundle(argument: _dto_Bundle, metadata: grpc.Metadata, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  SendBundle(argument: _dto_Bundle, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  SendBundle(argument: _dto_Bundle, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  sendBundle(argument: _dto_Bundle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  sendBundle(argument: _dto_Bundle, metadata: grpc.Metadata, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  sendBundle(argument: _dto_Bundle, options: grpc.CallOptions, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  sendBundle(argument: _dto_Bundle, callback: grpc.requestCallback<_searcher_SendBundleResponse__Output>): grpc.ClientUnaryCall;
  
  SubscribeBundleResults(argument: _searcher_SubscribeBundleResultsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_searcher_BundleResult__Output>;
  SubscribeBundleResults(argument: _searcher_SubscribeBundleResultsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_searcher_BundleResult__Output>;
  subscribeBundleResults(argument: _searcher_SubscribeBundleResultsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_searcher_BundleResult__Output>;
  subscribeBundleResults(argument: _searcher_SubscribeBundleResultsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_searcher_BundleResult__Output>;
  
  SubscribeMempool(argument: _searcher_MempoolSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_MempoolPacket__Output>;
  SubscribeMempool(argument: _searcher_MempoolSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_MempoolPacket__Output>;
  subscribeMempool(argument: _searcher_MempoolSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_MempoolPacket__Output>;
  subscribeMempool(argument: _searcher_MempoolSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_MempoolPacket__Output>;
  
}

export interface SearcherServiceHandlers extends grpc.UntypedServiceImplementation {
  GetTipAddresses: grpc.handleUnaryCall<_searcher_GetTipAddressesRequest__Output, _searcher_GetTipAddressesResponse>;
  
  SendBundle: grpc.handleUnaryCall<_dto_Bundle__Output, _searcher_SendBundleResponse>;
  
  SubscribeBundleResults: grpc.handleServerStreamingCall<_searcher_SubscribeBundleResultsRequest__Output, _searcher_BundleResult>;
  
  SubscribeMempool: grpc.handleServerStreamingCall<_searcher_MempoolSubscription__Output, _dto_MempoolPacket>;
  
}

export interface SearcherServiceDefinition extends grpc.ServiceDefinition {
  GetTipAddresses: MethodDefinition<_searcher_GetTipAddressesRequest, _searcher_GetTipAddressesResponse, _searcher_GetTipAddressesRequest__Output, _searcher_GetTipAddressesResponse__Output>
  SendBundle: MethodDefinition<_dto_Bundle, _searcher_SendBundleResponse, _dto_Bundle__Output, _searcher_SendBundleResponse__Output>
  SubscribeBundleResults: MethodDefinition<_searcher_SubscribeBundleResultsRequest, _searcher_BundleResult, _searcher_SubscribeBundleResultsRequest__Output, _searcher_BundleResult__Output>
  SubscribeMempool: MethodDefinition<_searcher_MempoolSubscription, _dto_MempoolPacket, _searcher_MempoolSubscription__Output, _dto_MempoolPacket__Output>
}
