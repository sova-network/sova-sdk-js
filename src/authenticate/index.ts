import { AuthServiceClient } from './proto/auth_grpc_pb';
import { GenerateAuthChallengeRequest, GenerateAuthTokensRequest, RefreshAccessTokenRequest } from './proto/auth_pb';
import { ed25519 } from '@noble/ed25519';
import grpc from '@grpc/grpc-js';