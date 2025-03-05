// Original file: sova-grpc-proto/proto/dto.proto

import type { ExternalMessage as _dto_ExternalMessage, ExternalMessage__Output as _dto_ExternalMessage__Output } from '../dto/ExternalMessage';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface ValidatorBundle {
  'message'?: (_dto_ExternalMessage)[];
  'expirationNs'?: (_google_protobuf_Timestamp | null);
  'id'?: (string);
}

export interface ValidatorBundle__Output {
  'message': (_dto_ExternalMessage__Output)[];
  'expirationNs': (_google_protobuf_Timestamp__Output | null);
  'id': (string);
}
