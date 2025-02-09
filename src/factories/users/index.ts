import { PrismaUsersRepository } from "@/repositories/prisma/users";
import { RegisterUseCase } from "@/use-cases/users/register";

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const registerUseCase = new RegisterUseCase(usersRepository);

  return registerUseCase
}