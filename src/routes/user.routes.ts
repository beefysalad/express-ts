import { Router } from "express";

import { userController } from "../controllers/user.controller.js";
import { validateRequest } from "../middleware/validate-request.js";
import { createUserSchema } from "../schemas/user.schema.js";

export const userRouter = Router();

userRouter.post("/", validateRequest({ body: createUserSchema }), userController.createUser);
