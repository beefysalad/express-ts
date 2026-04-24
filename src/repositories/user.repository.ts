import { prisma } from "../config/prisma.js";
import type { CreateUserInput } from "../schemas/user.schema.js";
import type { User } from "../types/user.types.js";

export const userRepository = {
  create(input: CreateUserInput): Promise<User> {
    return prisma.user.create({
      data: input,
    });
  },
};
