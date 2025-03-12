import {AuthenticationService, SearcherService} from "./services";
import {GenerateAuthTokensResponse} from "./proto/auth/GenerateAuthTokensResponse";

export class SovaClient {
    constructor(
        protected url: string,
        protected secureConnection: boolean,
        protected authToken?: GenerateAuthTokensResponse
    ) {
    }

    async authenticate(privateKey: Buffer) {
        const authenticationService = new AuthenticationService(
            this.url,
            privateKey,
            this.secureConnection,
        );

        this.authToken = await authenticationService.authenticate();
    }

    getSearcher() {
        return new SearcherService(
            this.url,
            this.secureConnection,
            this.authToken?.accessToken || undefined
        );
    }
}

export function getTestnetClient(authToken?: any) {
    return new SovaClient(
        "testnet-engine.sova.network:30020",
        true,
        authToken
    );
}

export function getMainnetClient() {
    throw new Error('Not implemented');
}