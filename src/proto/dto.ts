import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
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

