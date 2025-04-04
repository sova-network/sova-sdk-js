import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BlockEngineValidatorClient as _block_engine_BlockEngineValidatorClient, BlockEngineValidatorDefinition as _block_engine_BlockEngineValidatorDefinition } from './block_engine/BlockEngineValidator';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  block_engine: {
    BlockEngineValidator: SubtypeConstructor<typeof grpc.Client, _block_engine_BlockEngineValidatorClient> & { service: _block_engine_BlockEngineValidatorDefinition }
    StreamMempoolResponse: MessageTypeDefinition
    SubscribeBundlesRequest: MessageTypeDefinition
  }
  dto: {
    Bundle: MessageTypeDefinition
    ExternalMessage: MessageTypeDefinition
    MempoolExternalMessage: MessageTypeDefinition
    MempoolOutExternalOutMessage: MessageTypeDefinition
    MempoolOutInternalMessage: MessageTypeDefinition
    MempoolOutMessage: MessageTypeDefinition
    MempoolPacket: MessageTypeDefinition
    ValidatorBundle: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

