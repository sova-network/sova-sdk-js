// Original file: sova-grpc-proto/proto/searcher.proto

import type { AddressSubscriptionV0 as _searcher_AddressSubscriptionV0, AddressSubscriptionV0__Output as _searcher_AddressSubscriptionV0__Output } from '../searcher/AddressSubscriptionV0';
import type { WorkchainSubscriptionV0 as _searcher_WorkchainSubscriptionV0, WorkchainSubscriptionV0__Output as _searcher_WorkchainSubscriptionV0__Output } from '../searcher/WorkchainSubscriptionV0';
import type { WorkchainShardSubscriptionV0 as _searcher_WorkchainShardSubscriptionV0, WorkchainShardSubscriptionV0__Output as _searcher_WorkchainShardSubscriptionV0__Output } from '../searcher/WorkchainShardSubscriptionV0';
import type { ExternalOutMessageBodyOpcodeSubscriptionV0 as _searcher_ExternalOutMessageBodyOpcodeSubscriptionV0, ExternalOutMessageBodyOpcodeSubscriptionV0__Output as _searcher_ExternalOutMessageBodyOpcodeSubscriptionV0__Output } from '../searcher/ExternalOutMessageBodyOpcodeSubscriptionV0';
import type { InternalMessageBodyOpcodeSubscriptionV0 as _searcher_InternalMessageBodyOpcodeSubscriptionV0, InternalMessageBodyOpcodeSubscriptionV0__Output as _searcher_InternalMessageBodyOpcodeSubscriptionV0__Output } from '../searcher/InternalMessageBodyOpcodeSubscriptionV0';

export interface MempoolSubscription {
  'addresses'?: (_searcher_AddressSubscriptionV0 | null);
  'workchain'?: (_searcher_WorkchainSubscriptionV0 | null);
  'workchainShard'?: (_searcher_WorkchainShardSubscriptionV0 | null);
  'externalOutMessageBodyOpcode'?: (_searcher_ExternalOutMessageBodyOpcodeSubscriptionV0 | null);
  'internalMessageBodyOpcode'?: (_searcher_InternalMessageBodyOpcodeSubscriptionV0 | null);
  'subscription'?: "addresses"|"workchain"|"workchainShard"|"externalOutMessageBodyOpcode"|"internalMessageBodyOpcode";
}

export interface MempoolSubscription__Output {
  'addresses'?: (_searcher_AddressSubscriptionV0__Output | null);
  'workchain'?: (_searcher_WorkchainSubscriptionV0__Output | null);
  'workchainShard'?: (_searcher_WorkchainShardSubscriptionV0__Output | null);
  'externalOutMessageBodyOpcode'?: (_searcher_ExternalOutMessageBodyOpcodeSubscriptionV0__Output | null);
  'internalMessageBodyOpcode'?: (_searcher_InternalMessageBodyOpcodeSubscriptionV0__Output | null);
  'subscription': "addresses"|"workchain"|"workchainShard"|"externalOutMessageBodyOpcode"|"internalMessageBodyOpcode";
}
