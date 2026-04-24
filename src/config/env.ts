import dotenv from "dotenv";

dotenv.config({ quiet: true });
dotenv.config({ path: ".env.local", override: true, quiet: true });

type Env = {
  nodeEnv: string;
  port: number;
  host: string;
  apiPrefix: string;
  logLevel: string;
  corsOrigin: string;
};

const parsePort = (value: string | undefined): number => {
  const port = Number(value ?? 4000);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535");
  }

  return port;
};

export const env: Env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: parsePort(process.env.PORT),
  host: process.env.HOST ?? "localhost",
  apiPrefix: process.env.API_PREFIX ?? "/api",
  logLevel: process.env.LOG_LEVEL ?? "info",
  corsOrigin: process.env.CORS_ORIGIN ?? "*",
};
