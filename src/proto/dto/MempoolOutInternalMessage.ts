// Original file: sova-grpc-proto/proto/dto.proto

import type { Long } from '@grpc/proto-loader';

export interface MempoolOutInternalMessage {
  'ihrDisabled'?: (boolean);
  'bounce'?: (boolean);
  'bounced'?: (boolean);
  'src'?: (Buffer | Uint8Array | string);
  'dest'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'ihrFee'?: (Buffer | Uint8Array | string);
  'fwdFee'?: (Buffer | Uint8Array | string);
  'createdLt'?: (number | string | Long);
  'createdAt'?: (number);
}

export interface MempoolOutInternalMessage__Output {
  'ihrDisabled': (boolean);
  'bounce': (boolean);
  'bounced': (boolean);
  'src': (Buffer);
  'dest': (Buffer);
  'value': (Buffer);
  'ihrFee': (Buffer);
  'fwdFee': (Buffer);
  'createdLt': (string);
  'createdAt': (number);
}
