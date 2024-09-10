class MevtonSdkClient {


  constructor() {

  }


}

class MevtonAuth {
  authClient: any;
  key: any;
  accessToken: string | null;
  refreshToken: string | null;
  constructor(private readonly authUrl: string, private readonly privateKey: string) {
    this.accessToken = null;
    this.refreshToken = null;
  }

  
  // static async new(authUrl, privateKey) {
  //   const authClient = new AuthServiceClient(authUrl, grpc.credentials.createInsecure());
  //   const key = await ed25519.utils.randomPrivateKey();
    
  //   return new MevtonAuth(authClient, key);
  // }

  // async authenticate() {
  //   const pubkey = await ed25519.getPublicKey(this.key);

  //   const challengeRequest = new GenerateAuthChallengeRequest();
  //   challengeRequest.setPubkey(Buffer.from(pubkey));

  //   const challengeResponse = await this._makeRequest(this.authClient.generateAuthChallenge.bind(this.authClient), challengeRequest);
  //   const challenge = challengeResponse.getChallenge();

  //   const signedChallenge = await ed25519.sign(challenge, this.key);

  //   const tokenRequest = new GenerateAuthTokensRequest();
  //   tokenRequest.setChallenge(challenge);
  //   tokenRequest.setSignedChallenge(Buffer.from(signedChallenge));

  //   const tokenResponse = await this._makeRequest(this.authClient.generateAuthTokens.bind(this.authClient), tokenRequest);
  //   this.accessToken = tokenResponse.getAccessToken();
  //   this.refreshToken = tokenResponse.getRefreshToken();
  // }

  // async refreshAccessToken() {
  //   if (this.refreshToken) {
  //     const refreshTokenRequest = new RefreshAccessTokenRequest();
  //     refreshTokenRequest.setRefreshToken(this.refreshToken.getValue());

  //     const refreshResponse = await this._makeRequest(this.authClient.refreshAccessToken.bind(this.authClient), refreshTokenRequest);
  //     this.accessToken = refreshResponse.getAccessToken();
  //   } else {
  //     throw new Error('AuthenticationRequired');
  //   }
  // }

  // getAccessToken() {
  //   return this.accessToken;
  // }

  // getRefreshToken() {
  //   return this.refreshToken;
  // }

  // _makeRequest(method, request) {
  //   return new Promise((resolve, reject) => {
  //     method(request, (err, response) => {
  //       if (err) {
  //         return reject(err);
  //       }
  //       resolve(response);
  //     });
  //   });
  // }
}