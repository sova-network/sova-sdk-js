// Original file: mevton-grpc-proto/proto/searcher.proto

import type { AddressSubscriptionV0 as _searcher_AddressSubscriptionV0, AddressSubscriptionV0__Output as _searcher_AddressSubscriptionV0__Output } from '../searcher/AddressSubscriptionV0';

export interface MempoolSubscription {
  'addresses'?: (_searcher_AddressSubscriptionV0 | null);
}

export interface MempoolSubscription__Output {
  'addresses': (_searcher_AddressSubscriptionV0__Output | null);
}
