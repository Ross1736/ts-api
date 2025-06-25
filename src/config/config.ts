import dotenv from "dotenv";
import { Config } from "../types/env";

dotenv.config();

const config: Config = {
  app: {
    port: Number(process.env.PORT) || 8080,
    url: process.env.URL ?? "http://localhost:8080",
    prod: process.env.PROD === "true",
    secure: process.env.SECURE === "true",
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? "secret",
    expiresIn: process.env.JWT_EXPIRES_IN ?? "1d",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",
  },
  user: {
    key: process.env.API_KEY ?? "",
  },
  swagger: {
    password: process.env.PASSWORD_SWAGGER ?? "",
  },
};

export default config;
