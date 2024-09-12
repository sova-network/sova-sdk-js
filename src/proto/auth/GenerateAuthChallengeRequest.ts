// Original file: mevton-grpc-proto/proto/auth.proto


export interface GenerateAuthChallengeRequest {
  'pubkey'?: (Buffer | Uint8Array | string);
}

export interface GenerateAuthChallengeRequest__Output {
  'pubkey': (Buffer);
}
