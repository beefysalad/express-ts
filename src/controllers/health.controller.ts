import type { Request, Response } from "express";

import { healthService } from "../services/health.service.js";

export const healthController = {
  getStatus: (_request: Request, response: Response) => {
    response.status(200).json({
      status: healthService.getStatus(),
    });
  },
};
