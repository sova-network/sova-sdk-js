// Original file: sova-grpc-proto/proto/searcher.proto


export interface BundleResultAuctionFailedEstimate {
  'auctionId'?: (string);
  'digest'?: (Buffer | Uint8Array | string);
  'message'?: (string);
}

export interface BundleResultAuctionFailedEstimate__Output {
  'auctionId': (string);
  'digest': (Buffer);
  'message': (string);
}
