import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ quiet: true });
dotenv.config({ path: ".env.local", override: true, quiet: true });

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z
    .string()
    .default("4000")
    .transform((value) => Number(value))
    .pipe(z.number().int().positive().max(65535)),
  HOST: z.string().default("localhost"),
  API_PREFIX: z.string().default("/api"),
  LOG_LEVEL: z.string().default("info"),
  CORS_ORIGIN: z.string().default("*"),
  DATABASE_URL: z.url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(`Invalid environment variables: ${z.prettifyError(parsedEnv.error)}`);
}

export const env = {
  nodeEnv: parsedEnv.data.NODE_ENV,
  port: parsedEnv.data.PORT,
  host: parsedEnv.data.HOST,
  apiPrefix: parsedEnv.data.API_PREFIX,
  logLevel: parsedEnv.data.LOG_LEVEL,
  corsOrigin: parsedEnv.data.CORS_ORIGIN,
  databaseUrl: parsedEnv.data.DATABASE_URL,
};
