// Original file: sova-grpc-proto/proto/dto.proto

import type { MempoolOutMessage as _dto_MempoolOutMessage, MempoolOutMessage__Output as _dto_MempoolOutMessage__Output } from '../dto/MempoolOutMessage';
import type { Long } from '@grpc/proto-loader';

export interface MempoolExternalMessage {
  'hash'?: (Buffer | Uint8Array | string);
  'workchainId'?: (number);
  'shard'?: (Buffer | Uint8Array | string);
  'data'?: (Buffer | Uint8Array | string);
  'stdSmcAddress'?: (Buffer | Uint8Array | string);
  'gasSpent'?: (number | string | Long);
  'outMsgs'?: (Buffer | Uint8Array | string)[];
  'parsedOutMsgs'?: (_dto_MempoolOutMessage)[];
}

export interface MempoolExternalMessage__Output {
  'hash': (Buffer);
  'workchainId': (number);
  'shard': (Buffer);
  'data': (Buffer);
  'stdSmcAddress': (Buffer);
  'gasSpent': (string);
  'outMsgs': (Buffer)[];
  'parsedOutMsgs': (_dto_MempoolOutMessage__Output)[];
}
