import {AuthenticationService, SearcherService} from "./services";
import {GenerateAuthTokensResponse} from "./proto/auth/GenerateAuthTokensResponse";
import {TESTNET_CA_PEM} from "./services/pem";

export class SovaClient {
    constructor(
        protected url: string,
        protected caPEM?: Buffer,
        protected authToken?: GenerateAuthTokensResponse
    ) {
    }

    async authenticate(privateKey: Buffer) {
        const authenticationService = new AuthenticationService(
            this.url,
            privateKey,
            this.caPEM,
        );

        this.authToken = await authenticationService.authenticate();
    }

    getSearcher() {
        return new SearcherService(
            this.url,
            this.caPEM,
            this.authToken?.accessToken || undefined
        );
    }
}

export function getTestnetClient(authToken?: any) {
    return new SovaClient(
        "https://testnet-engine.sova.finance:30010",
        Buffer.from(TESTNET_CA_PEM, "utf8"),
        authToken
    );
}

export function getMainnetClient() {
    throw new Error('Not implemented');
}