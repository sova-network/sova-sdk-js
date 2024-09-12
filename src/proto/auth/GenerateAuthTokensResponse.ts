// Original file: mevton-grpc-proto/proto/auth.proto

import type { Token as _auth_Token, Token__Output as _auth_Token__Output } from '../auth/Token';

export interface GenerateAuthTokensResponse {
  'accessToken'?: (_auth_Token | null);
  'refreshToken'?: (_auth_Token | null);
}

export interface GenerateAuthTokensResponse__Output {
  'accessToken': (_auth_Token__Output | null);
  'refreshToken': (_auth_Token__Output | null);
}
