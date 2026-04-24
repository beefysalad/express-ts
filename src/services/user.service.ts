import type { CreateUserInput } from "../schemas/user.schema.js";
import type { User } from "../types/user.types.js";

export const userService = {
  createUser(input: CreateUserInput): User {
    return {
      id: crypto.randomUUID(),
      name: input.name,
      email: input.email,
    };
  },
};
