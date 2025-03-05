// Original file: sova-grpc-proto/proto/auth.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Token {
  'value'?: (string);
  'expiresAtUtc'?: (_google_protobuf_Timestamp | null);
}

export interface Token__Output {
  'value': (string);
  'expiresAtUtc': (_google_protobuf_Timestamp__Output | null);
}
