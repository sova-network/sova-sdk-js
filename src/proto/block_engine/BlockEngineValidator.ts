// Original file: sova-grpc-proto/proto/block_engine.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MempoolPacket as _dto_MempoolPacket, MempoolPacket__Output as _dto_MempoolPacket__Output } from '../dto/MempoolPacket';
import type { StreamMempoolResponse as _block_engine_StreamMempoolResponse, StreamMempoolResponse__Output as _block_engine_StreamMempoolResponse__Output } from '../block_engine/StreamMempoolResponse';
import type { SubscribeBundlesRequest as _block_engine_SubscribeBundlesRequest, SubscribeBundlesRequest__Output as _block_engine_SubscribeBundlesRequest__Output } from '../block_engine/SubscribeBundlesRequest';
import type { ValidatorBundle as _dto_ValidatorBundle, ValidatorBundle__Output as _dto_ValidatorBundle__Output } from '../dto/ValidatorBundle';

export interface BlockEngineValidatorClient extends grpc.Client {
  StreamMempool(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  StreamMempool(metadata: grpc.Metadata, callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  StreamMempool(options: grpc.CallOptions, callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  StreamMempool(callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  streamMempool(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  streamMempool(metadata: grpc.Metadata, callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  streamMempool(options: grpc.CallOptions, callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  streamMempool(callback: grpc.requestCallback<_block_engine_StreamMempoolResponse__Output>): grpc.ClientWritableStream<_dto_MempoolPacket>;
  
  SubscribeBundles(argument: _block_engine_SubscribeBundlesRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_ValidatorBundle__Output>;
  SubscribeBundles(argument: _block_engine_SubscribeBundlesRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_ValidatorBundle__Output>;
  subscribeBundles(argument: _block_engine_SubscribeBundlesRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_ValidatorBundle__Output>;
  subscribeBundles(argument: _block_engine_SubscribeBundlesRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_dto_ValidatorBundle__Output>;
  
}

export interface BlockEngineValidatorHandlers extends grpc.UntypedServiceImplementation {
  StreamMempool: grpc.handleClientStreamingCall<_dto_MempoolPacket__Output, _block_engine_StreamMempoolResponse>;
  
  SubscribeBundles: grpc.handleServerStreamingCall<_block_engine_SubscribeBundlesRequest__Output, _dto_ValidatorBundle>;
  
}

export interface BlockEngineValidatorDefinition extends grpc.ServiceDefinition {
  StreamMempool: MethodDefinition<_dto_MempoolPacket, _block_engine_StreamMempoolResponse, _dto_MempoolPacket__Output, _block_engine_StreamMempoolResponse__Output>
  SubscribeBundles: MethodDefinition<_block_engine_SubscribeBundlesRequest, _dto_ValidatorBundle, _block_engine_SubscribeBundlesRequest__Output, _dto_ValidatorBundle__Output>
}
