import path from "node:path";
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from '../proto/auth';
import { AuthServiceClient } from '../proto/auth/AuthService';
import {promisify} from 'node:util';
import { GenerateAuthChallengeRequest } from '../proto/auth/GenerateAuthChallengeRequest';
import { GenerateAuthTokensRequest } from '../proto/auth/GenerateAuthTokensRequest';
import { RefreshAccessTokenRequest } from '../proto/auth/RefreshAccessTokenRequest';
import { GenerateAuthTokensResponse } from '../proto/auth/GenerateAuthTokensResponse';
import {Token__Output} from '../proto/auth/Token';
import {ChannelCredentials} from "@grpc/grpc-js";

const protoPath = path.join(__dirname, '..', 'sova-grpc-proto', 'proto', 'auth.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {
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

import { ed25519 } from '@noble/curves/ed25519';

export class AuthenticationService {
  private client: AuthServiceClient;
  private privateKey: Buffer;

  private accessToken?: Token__Output | null;
  private refreshToken?: Token__Output | null;

  constructor(
      url: string,
      privateKey: Buffer,
      secureConnection?: boolean,
  ) {
    this.client = new pkg.AuthService(
        url,
        secureConnection ? ChannelCredentials.createSsl() : grpc.credentials.createInsecure(),
    );
    this.privateKey = privateKey;
  }

  public async authenticate(): Promise<GenerateAuthTokensResponse | undefined> {
    const pubkey = ed25519.getPublicKey(this.privateKey);

    const request: GenerateAuthChallengeRequest  = {
      pubkey: pubkey
    }

    const generateAuthChallengeResponseOutput = await promisify(this.client.GenerateAuthChallenge.bind(this.client, request))();

    if (! generateAuthChallengeResponseOutput) {
      throw new Error("Failed to generate authentication challenge");
    }

    const signature = ed25519.sign(generateAuthChallengeResponseOutput.challenge, this.privateKey);

    const generateAuthTokensRequest: GenerateAuthTokensRequest  = {
      challenge: generateAuthChallengeResponseOutput.challenge,
      signedChallenge: signature
    }

    const generateAuthTokensResponseOutput= await promisify(this.client.GenerateAuthTokens.bind(this.client, generateAuthTokensRequest))();

    if (! generateAuthTokensResponseOutput) {
      throw new Error("Failed to generate tokens");
    }

    this.accessToken = generateAuthTokensResponseOutput.accessToken;
    this.refreshToken = generateAuthTokensResponseOutput.refreshToken;

    return generateAuthTokensResponseOutput;
  }

  public refreshAccessToken(): Promise<GenerateAuthTokensResponse| undefined> {
    const request: RefreshAccessTokenRequest = {
      refreshToken: this.refreshToken?.value
    }
    return promisify(this.client.RefreshAccessToken.bind(this.client, request))()
  }
} 