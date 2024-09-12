import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from '../../proto/auth';
import { AuthServiceClient } from '../../proto/auth/AuthService';
import {promisify} from 'node:util';
import { GenerateAuthChallengeRequest } from '../../proto/auth/GenerateAuthChallengeRequest';
import { GenerateAuthTokensRequest } from '../../proto/auth/GenerateAuthTokensRequest';
import { RefreshAccessTokenRequest } from '../../proto/auth/RefreshAccessTokenRequest';
import { GenerateAuthChallengeResponse } from '../../proto/auth/GenerateAuthChallengeResponse';
import { GenerateAuthTokensResponse } from '../../proto/auth/GenerateAuthTokensResponse';
const packageDefinition = protoLoader.loadSync('./mevton-grpc-proto/proto/auth.proto',{
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const proto = (grpc.loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const pkg = proto.auth;

export class AuthService {
  private client: AuthServiceClient;
  
  constructor() {
    this.client = new pkg.AuthService(
      'localhost:50051',
      grpc.credentials.createInsecure()
    );
  }

  public async generateAuthChallenge(pubkey: string): Promise<GenerateAuthChallengeResponse | undefined> {
    const request: GenerateAuthChallengeRequest  = {
      pubkey: pubkey
    }
    const r = await promisify(this.client.GenerateAuthChallenge.bind(this.client, request))()
    
    return r;
  }

  public async generateAuthTokens(challenge: string, signature: string): Promise<GenerateAuthTokensResponse| undefined> {
    const request: GenerateAuthTokensRequest  = {
      challenge: challenge,
      signedChallenge: signature
    }
    const r= await promisify(this.client.GenerateAuthTokens.bind(this.client, request))()
    return r;
  }

  public refreshAccessToken(refreshToken: string): Promise<GenerateAuthTokensResponse| undefined> {
    const request: RefreshAccessTokenRequest = {
      refreshToken: refreshToken
    }
    return promisify(this.client.RefreshAccessToken.bind(this.client, {refreshToken: refreshToken}))()
  }

} 