import { ResourceNotFoundError } from "@/errors/resource-not-found-error";
import { UsersRepository } from "@/interfaces/users-repository";

interface GetUserProfileUseCaseRequest {
  userId: string;
}

interface GetUserProfileUseCaseResponse { }

export class GetUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ userId }: GetUserProfileUseCaseRequest) {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return {
      user
    }
  }
}