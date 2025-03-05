// Original file: sova-grpc-proto/proto/searcher.proto

import type { Long } from '@grpc/proto-loader';

export interface BundleResultAuctionWin {
  'auctionId'?: (string);
  'estimatedNanotonTip'?: (number | string | Long);
}

export interface BundleResultAuctionWin__Output {
  'auctionId': (string);
  'estimatedNanotonTip': (string);
}
