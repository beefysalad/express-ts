import type { RequestHandler } from "express";
import type { ZodType } from "zod";
import { z } from "zod";

type RequestSchema = {
  body?: ZodType;
  params?: ZodType;
  query?: ZodType;
};

export const validateRequest = (schema: RequestSchema): RequestHandler => {
  return (request, response, next) => {
    const result = z
      .object({
        body: schema.body ?? z.any(),
        params: schema.params ?? z.any(),
        query: schema.query ?? z.any(),
      })
      .safeParse({
        body: request.body,
        params: request.params,
        query: request.query,
      });

    if (!result.success) {
      response.status(400).json({
        error: "Validation Error",
        issues: result.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      });
      return;
    }

    request.body = result.data.body;

    next();
  };
};
