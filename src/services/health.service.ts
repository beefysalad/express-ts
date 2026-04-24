import type { HealthStatus } from "../types/health.types.js";

export const healthService = {
  getStatus(): HealthStatus {
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  },
};
