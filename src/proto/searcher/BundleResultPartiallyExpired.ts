// Original file: mevton-grpc-proto/proto/searcher.proto


export interface BundleResultPartiallyExpired {
  'auctionId'?: (string);
  'digest'?: (Buffer | Uint8Array | string)[];
}

export interface BundleResultPartiallyExpired__Output {
  'auctionId': (string);
  'digest': (Buffer)[];
}
