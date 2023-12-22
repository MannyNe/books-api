declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: number;
    readonly MONGO_USERNAME: string;
    readonly MONGO_PASSWORD: string;
    readonly MONGO_HOST: string;
    readonly MONGO_ACCESS_TOKEN_PUK: string;
    readonly MONGO_REFRESH_TOKEN_PUK: string;
    readonly MONGO_ACCESS_TOKEN_PIK: string;
    readonly MONGO_REFRESH_TOKEN_PIK: string;
  }
}
