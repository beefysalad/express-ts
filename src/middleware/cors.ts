import type { NextFunction, Request, Response } from "express";

import { env } from "../config/env.js";

export const corsMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  response.setHeader("Access-Control-Allow-Origin", env.corsOrigin);
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

  if (request.method === "OPTIONS") {
    response.sendStatus(204);
    return;
  }

  next();
};
