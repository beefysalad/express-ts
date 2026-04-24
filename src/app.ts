import express from "express";

import { env } from "./config/env.js";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";
import { apiRouter } from "./routes/index.js";

export const app = express();
const API_PREFIX = env.apiPrefix;

console.clear();
app.disable("x-powered-by");
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(API_PREFIX, apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);
