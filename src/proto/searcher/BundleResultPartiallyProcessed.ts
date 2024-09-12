// Original file: mevton-grpc-proto/proto/searcher.proto


export interface BundleResultPartiallyProcessed {
  'auctionId'?: (string);
  'digest'?: (Buffer | Uint8Array | string)[];
}

export interface BundleResultPartiallyProcessed__Output {
  'auctionId': (string);
  'digest': (Buffer)[];
}
