import { GenerateAuthTokensResponse } from "../../proto/auth/GenerateAuthTokensResponse";
import { Token } from "../../proto/auth/Token";
import { AuthGrpcService, BlockEngineGrpcService, SearcherGrpcService } from "../grpc";

export class MevtonAuth{
  authSvc: AuthGrpcService;
  blockEngineSvc: BlockEngineGrpcService;
  searcherSvc: SearcherGrpcService;
  accessToken: Token | null;
  refreshToken: Token | null;
  lastRefresh: number | null;
  constructor(url: string) {
    this.authSvc = new AuthGrpcService(url);
    this.blockEngineSvc = new BlockEngineGrpcService(url);
    this.searcherSvc = new SearcherGrpcService(url);
    
    this.accessToken = null;
    this.refreshToken = null;
    this.lastRefresh = null;
  }
  public async authenticate(pubkey: string): Promise<void> {
    const challenge = await this.authSvc.generateAuthChallenge(pubkey);

    const signature = await this.signChallenge(challenge?.challenge as string);

    let res= await this.authSvc.generateAuthTokens(pubkey, signature);

    if (res === undefined) {
      throw new Error("Failed to authenticate");
    }

    

    this.accessToken = res.accessToken as Token;
    this.refreshToken = res.refreshToken as Token;
    this.lastRefresh = Date.now();
  }
  signChallenge(challenge: string): string {
    throw new Error("Method not implemented.");
  }

  get isAuthenticated() {
    return this.accessToken !== null;
  }

  public async refreshTokens() {
    if (this.refreshToken === null) {
      throw new Error("No refresh token available");
    }

    this.authSvc.refreshAccessToken(this.refreshToken);
  }
}