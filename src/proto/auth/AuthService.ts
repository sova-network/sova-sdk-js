// Original file: sova-grpc-proto/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GenerateAuthChallengeRequest as _auth_GenerateAuthChallengeRequest, GenerateAuthChallengeRequest__Output as _auth_GenerateAuthChallengeRequest__Output } from '../auth/GenerateAuthChallengeRequest';
import type { GenerateAuthChallengeResponse as _auth_GenerateAuthChallengeResponse, GenerateAuthChallengeResponse__Output as _auth_GenerateAuthChallengeResponse__Output } from '../auth/GenerateAuthChallengeResponse';
import type { GenerateAuthTokensRequest as _auth_GenerateAuthTokensRequest, GenerateAuthTokensRequest__Output as _auth_GenerateAuthTokensRequest__Output } from '../auth/GenerateAuthTokensRequest';
import type { GenerateAuthTokensResponse as _auth_GenerateAuthTokensResponse, GenerateAuthTokensResponse__Output as _auth_GenerateAuthTokensResponse__Output } from '../auth/GenerateAuthTokensResponse';
import type { RefreshAccessTokenRequest as _auth_RefreshAccessTokenRequest, RefreshAccessTokenRequest__Output as _auth_RefreshAccessTokenRequest__Output } from '../auth/RefreshAccessTokenRequest';
import type { RefreshAccessTokenResponse as _auth_RefreshAccessTokenResponse, RefreshAccessTokenResponse__Output as _auth_RefreshAccessTokenResponse__Output } from '../auth/RefreshAccessTokenResponse';

export interface AuthServiceClient extends grpc.Client {
  GenerateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  GenerateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  GenerateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  GenerateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  generateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  generateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  generateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  generateAuthChallenge(argument: _auth_GenerateAuthChallengeRequest, callback: grpc.requestCallback<_auth_GenerateAuthChallengeResponse__Output>): grpc.ClientUnaryCall;
  
  GenerateAuthTokens(argument: _auth_GenerateAuthTokensRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  GenerateAuthTokens(argument: _auth_GenerateAuthTokensRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  GenerateAuthTokens(argument: _auth_GenerateAuthTokensRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  GenerateAuthTokens(argument: _auth_GenerateAuthTokensRequest, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  generateAuthTokens(argument: _auth_GenerateAuthTokensRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  generateAuthTokens(argument: _auth_GenerateAuthTokensRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  generateAuthTokens(argument: _auth_GenerateAuthTokensRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  generateAuthTokens(argument: _auth_GenerateAuthTokensRequest, callback: grpc.requestCallback<_auth_GenerateAuthTokensResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshAccessToken(argument: _auth_RefreshAccessTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshAccessToken(argument: _auth_RefreshAccessTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshAccessToken(argument: _auth_RefreshAccessTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshAccessToken(argument: _auth_RefreshAccessTokenRequest, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _auth_RefreshAccessTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _auth_RefreshAccessTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _auth_RefreshAccessTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _auth_RefreshAccessTokenRequest, callback: grpc.requestCallback<_auth_RefreshAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GenerateAuthChallenge: grpc.handleUnaryCall<_auth_GenerateAuthChallengeRequest__Output, _auth_GenerateAuthChallengeResponse>;
  
  GenerateAuthTokens: grpc.handleUnaryCall<_auth_GenerateAuthTokensRequest__Output, _auth_GenerateAuthTokensResponse>;
  
  RefreshAccessToken: grpc.handleUnaryCall<_auth_RefreshAccessTokenRequest__Output, _auth_RefreshAccessTokenResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GenerateAuthChallenge: MethodDefinition<_auth_GenerateAuthChallengeRequest, _auth_GenerateAuthChallengeResponse, _auth_GenerateAuthChallengeRequest__Output, _auth_GenerateAuthChallengeResponse__Output>
  GenerateAuthTokens: MethodDefinition<_auth_GenerateAuthTokensRequest, _auth_GenerateAuthTokensResponse, _auth_GenerateAuthTokensRequest__Output, _auth_GenerateAuthTokensResponse__Output>
  RefreshAccessToken: MethodDefinition<_auth_RefreshAccessTokenRequest, _auth_RefreshAccessTokenResponse, _auth_RefreshAccessTokenRequest__Output, _auth_RefreshAccessTokenResponse__Output>
}
