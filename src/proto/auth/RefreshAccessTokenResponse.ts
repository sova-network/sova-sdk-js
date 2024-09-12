// Original file: mevton-grpc-proto/proto/auth.proto

import type { Token as _auth_Token, Token__Output as _auth_Token__Output } from '../auth/Token';

export interface RefreshAccessTokenResponse {
  'accessToken'?: (_auth_Token | null);
}

export interface RefreshAccessTokenResponse__Output {
  'accessToken': (_auth_Token__Output | null);
}
