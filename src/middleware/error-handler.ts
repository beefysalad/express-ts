import type { ErrorRequestHandler, RequestHandler } from "express";

import { env } from "../config/env.js";

export const notFoundHandler: RequestHandler = (request, response) => {
  response.status(404).json({
    error: "Not Found",
    message: `Route ${request.method} ${request.originalUrl} does not exist`,
  });
};

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  const statusCode =
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    typeof error.status === "number"
      ? error.status
      : 500;

  const message = error instanceof Error ? error.message : "Internal Server Error";

  response.status(statusCode).json({
    error: statusCode >= 500 ? "Internal Server Error" : "Request Error",
    message,
    stack: env.nodeEnv === "development" && error instanceof Error ? error.stack : undefined,
  });
};
