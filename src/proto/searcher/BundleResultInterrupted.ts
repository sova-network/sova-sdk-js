// Original file: mevton-grpc-proto/proto/searcher.proto

import type { BundleResultPartiallyProcessed as _searcher_BundleResultPartiallyProcessed, BundleResultPartiallyProcessed__Output as _searcher_BundleResultPartiallyProcessed__Output } from '../searcher/BundleResultPartiallyProcessed';
import type { BundleResultPartiallyExpired as _searcher_BundleResultPartiallyExpired, BundleResultPartiallyExpired__Output as _searcher_BundleResultPartiallyExpired__Output } from '../searcher/BundleResultPartiallyExpired';

export interface BundleResultInterrupted {
  'onAuction'?: (boolean);
  'partiallyProcessed'?: (_searcher_BundleResultPartiallyProcessed | null);
  'expired'?: (_searcher_BundleResultPartiallyExpired | null);
  'reason'?: "partiallyProcessed"|"expired";
}

export interface BundleResultInterrupted__Output {
  'onAuction': (boolean);
  'partiallyProcessed'?: (_searcher_BundleResultPartiallyProcessed__Output | null);
  'expired'?: (_searcher_BundleResultPartiallyExpired__Output | null);
  'reason': "partiallyProcessed"|"expired";
}
