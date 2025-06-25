interface AppConfig {
  port: number;
  url: string;
  prod: boolean;
  secure: boolean;
}

interface JwtConfig {
  secret: string;
  expiresIn: string;
  refreshExpiresIn: string;
}

interface UserConfig {
  key: string;
}

interface SwaggerConfig {
  password: string;
}

export interface Config {
  app: AppConfig;
  jwt: JwtConfig;
  user: UserConfig;
  swagger: SwaggerConfig;
}
