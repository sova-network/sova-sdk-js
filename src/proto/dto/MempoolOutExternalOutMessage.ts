// Original file: sova-grpc-proto/proto/dto.proto

import type { Long } from '@grpc/proto-loader';

export interface MempoolOutExternalOutMessage {
  'src'?: (Buffer | Uint8Array | string);
  'dest'?: (Buffer | Uint8Array | string);
  'createdLt'?: (number | string | Long);
  'createdAt'?: (number);
}

export interface MempoolOutExternalOutMessage__Output {
  'src': (Buffer);
  'dest': (Buffer);
  'createdLt': (string);
  'createdAt': (number);
}
