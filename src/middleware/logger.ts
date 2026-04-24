import type { RequestHandler } from "express";

import { env } from "../config/env.js";

export const loggerMiddleware: RequestHandler = (request, response, next) => {
  if (env.logLevel === "silent") {
    next();
    return;
  }

  const startedAt = performance.now();

  response.on("finish", () => {
    const duration = Math.round(performance.now() - startedAt);
    const timestamp = new Date().toISOString();

    console.log(
      `[${timestamp}] ${request.method} ${request.originalUrl} ${response.statusCode} ${duration}ms`,
    );
  });

  next();
};
