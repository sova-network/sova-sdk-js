// Original file: sova-grpc-proto/proto/searcher.proto


export interface ExternalOutMessageBodyOpcodeSubscriptionV0 {
  'workchainId'?: (number);
  'shard'?: (Buffer | Uint8Array | string);
  'opcode'?: (number);
  '_shard'?: "shard";
}

export interface ExternalOutMessageBodyOpcodeSubscriptionV0__Output {
  'workchainId': (number);
  'shard'?: (Buffer);
  'opcode': (number);
  '_shard': "shard";
}
