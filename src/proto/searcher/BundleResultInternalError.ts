// Original file: mevton-grpc-proto/proto/searcher.proto


export interface BundleResultInternalError {
  'auctionId'?: (string);
  'digest'?: (Buffer | Uint8Array | string)[];
  'message'?: (string);
}

export interface BundleResultInternalError__Output {
  'auctionId': (string);
  'digest': (Buffer)[];
  'message': (string);
}
