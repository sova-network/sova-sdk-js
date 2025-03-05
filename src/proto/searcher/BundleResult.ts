// Original file: sova-grpc-proto/proto/searcher.proto

import type { BundleResultAuctionWin as _searcher_BundleResultAuctionWin, BundleResultAuctionWin__Output as _searcher_BundleResultAuctionWin__Output } from '../searcher/BundleResultAuctionWin';
import type { BundleResultAuctionLoose as _searcher_BundleResultAuctionLoose, BundleResultAuctionLoose__Output as _searcher_BundleResultAuctionLoose__Output } from '../searcher/BundleResultAuctionLoose';
import type { BundleResultInterrupted as _searcher_BundleResultInterrupted, BundleResultInterrupted__Output as _searcher_BundleResultInterrupted__Output } from '../searcher/BundleResultInterrupted';
import type { BundleResultAuctionFailed as _searcher_BundleResultAuctionFailed, BundleResultAuctionFailed__Output as _searcher_BundleResultAuctionFailed__Output } from '../searcher/BundleResultAuctionFailed';

export interface BundleResult {
  'id'?: (string);
  'win'?: (_searcher_BundleResultAuctionWin | null);
  'loose'?: (_searcher_BundleResultAuctionLoose | null);
  'drop'?: (_searcher_BundleResultInterrupted | null);
  'failure'?: (_searcher_BundleResultAuctionFailed | null);
  'result'?: "win"|"loose"|"drop"|"failure";
}

export interface BundleResult__Output {
  'id': (string);
  'win'?: (_searcher_BundleResultAuctionWin__Output | null);
  'loose'?: (_searcher_BundleResultAuctionLoose__Output | null);
  'drop'?: (_searcher_BundleResultInterrupted__Output | null);
  'failure'?: (_searcher_BundleResultAuctionFailed__Output | null);
  'result': "win"|"loose"|"drop"|"failure";
}
