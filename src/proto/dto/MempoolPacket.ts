// Original file: mevton-grpc-proto/proto/dto.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { MempoolExternalMessage as _dto_MempoolExternalMessage, MempoolExternalMessage__Output as _dto_MempoolExternalMessage__Output } from '../dto/MempoolExternalMessage';

export interface MempoolPacket {
  'serverTs'?: (_google_protobuf_Timestamp | null);
  'expirationNs'?: (number);
  'externalMessages'?: (_dto_MempoolExternalMessage)[];
}

export interface MempoolPacket__Output {
  'serverTs': (_google_protobuf_Timestamp__Output | null);
  'expirationNs': (number);
  'externalMessages': (_dto_MempoolExternalMessage__Output)[];
}
