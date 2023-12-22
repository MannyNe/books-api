import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const MONGO_USERNAME = process.env.MONGOUSER || "";
const MONGO_PASSWORD = process.env.MONGOPASS || "";
const MONGO_HOST = process.env.MONGOHOST || "";
const PORT = process.env.PORT || 3031;
const MONGO_ACCESS_TOKEN_PIK = process.env.MONGO_ACCESS_TOKEN_PIK || "";
const MONGO_ACCESS_TOKEN_PUK = process.env.MONGO_ACCESS_TOKEN_PUK || "";
const MONGO_REFRESH_TOKEN_PIK = process.env.MONGO_REFRESH_TOKEN_PIK || "";
const MONGO_REFRESH_TOKEN_PUK = process.env.MONGO_REFRESH_TOKEN_PUK || "";

const config = {
  port: PORT,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: MONGO_ACCESS_TOKEN_PIK,
  accessTokenPublicKey: MONGO_ACCESS_TOKEN_PUK,
  refreshTokenPrivateKey: MONGO_REFRESH_TOKEN_PIK,
  refreshTokenPublicKey: MONGO_REFRESH_TOKEN_PUK,

  MONGO: {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
      autoIndex: false,
      retryWrites: true,
    },
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
  },
};

export default config;
