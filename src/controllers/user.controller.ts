import type { Request, Response } from "express";

import type { CreateUserInput } from "../schemas/user.schema.js";
import { userService } from "../services/user.service.js";

export const userController = {
  createUser: (request: Request<object, object, CreateUserInput>, response: Response) => {
    const user = userService.createUser(request.body);

    response.status(201).json({
      user,
    });
  },
};
