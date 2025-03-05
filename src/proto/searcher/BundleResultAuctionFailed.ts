// Original file: sova-grpc-proto/proto/searcher.proto

import type { BundleResultAuctionFailedEstimate as _searcher_BundleResultAuctionFailedEstimate, BundleResultAuctionFailedEstimate__Output as _searcher_BundleResultAuctionFailedEstimate__Output } from '../searcher/BundleResultAuctionFailedEstimate';
import type { BundleResultInternalError as _searcher_BundleResultInternalError, BundleResultInternalError__Output as _searcher_BundleResultInternalError__Output } from '../searcher/BundleResultInternalError';

export interface BundleResultAuctionFailed {
  'estimateError'?: (_searcher_BundleResultAuctionFailedEstimate | null);
  'internalError'?: (_searcher_BundleResultInternalError | null);
  'reason'?: "estimateError"|"internalError";
}

export interface BundleResultAuctionFailed__Output {
  'estimateError'?: (_searcher_BundleResultAuctionFailedEstimate__Output | null);
  'internalError'?: (_searcher_BundleResultInternalError__Output | null);
  'reason': "estimateError"|"internalError";
}
