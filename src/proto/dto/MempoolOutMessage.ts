// Original file: sova-grpc-proto/proto/dto.proto

import type { MempoolOutInternalMessage as _dto_MempoolOutInternalMessage, MempoolOutInternalMessage__Output as _dto_MempoolOutInternalMessage__Output } from '../dto/MempoolOutInternalMessage';
import type { MempoolOutExternalOutMessage as _dto_MempoolOutExternalOutMessage, MempoolOutExternalOutMessage__Output as _dto_MempoolOutExternalOutMessage__Output } from '../dto/MempoolOutExternalOutMessage';

export interface _dto_MempoolOutMessage_Init {
  'code'?: (Buffer | Uint8Array | string);
  'data'?: (Buffer | Uint8Array | string);
  '_code'?: "code";
  '_data'?: "data";
}

export interface _dto_MempoolOutMessage_Init__Output {
  'code'?: (Buffer);
  'data'?: (Buffer);
  '_code': "code";
  '_data': "data";
}

export interface MempoolOutMessage {
  'hash'?: (Buffer | Uint8Array | string);
  'internalMessage'?: (_dto_MempoolOutInternalMessage | null);
  'externalOutMessage'?: (_dto_MempoolOutExternalOutMessage | null);
  'init'?: (_dto_MempoolOutMessage_Init | null);
  'body'?: (Buffer | Uint8Array | string);
  'info'?: "internalMessage"|"externalOutMessage";
  '_init'?: "init";
}

export interface MempoolOutMessage__Output {
  'hash': (Buffer);
  'internalMessage'?: (_dto_MempoolOutInternalMessage__Output | null);
  'externalOutMessage'?: (_dto_MempoolOutExternalOutMessage__Output | null);
  'init'?: (_dto_MempoolOutMessage_Init__Output | null);
  'body': (Buffer);
  'info': "internalMessage"|"externalOutMessage";
  '_init': "init";
}
