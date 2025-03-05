// Original file: sova-grpc-proto/proto/auth.proto


export interface GenerateAuthTokensRequest {
  'challenge'?: (Buffer | Uint8Array | string);
  'signedChallenge'?: (Buffer | Uint8Array | string);
}

export interface GenerateAuthTokensRequest__Output {
  'challenge': (Buffer);
  'signedChallenge': (Buffer);
}
