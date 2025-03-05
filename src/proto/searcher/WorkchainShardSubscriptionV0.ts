// Original file: sova-grpc-proto/proto/searcher.proto


export interface WorkchainShardSubscriptionV0 {
  'workchainId'?: (number);
  'shard'?: (Buffer | Uint8Array | string);
}

export interface WorkchainShardSubscriptionV0__Output {
  'workchainId': (number);
  'shard': (Buffer);
}
