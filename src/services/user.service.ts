import type { CreateUserInput } from "../schemas/user.schema.js";
import type { User } from "../types/user.types.js";
import { userRepository } from "../repositories/user.repository.js";

export const userService = {
  createUser(input: CreateUserInput): Promise<User> {
    return userRepository.create(input);
  },
};
