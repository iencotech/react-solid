import { IUserReadRepository, IUserWriteRepository } from "./repository";
import { User } from "./user";

export class UserReportService {
  constructor(private userRepository: IUserReadRepository) {
  }

  public print() {
    const users = this.userRepository.getAll();
    console.log(`Printing users`, users);
  }
}

export class UserCreationService {
  constructor(private userRepository: IUserWriteRepository) {
  }

  public create(user: User) {
    this.userRepository.create(user);
  }
}

export class UserDeletionService {
  constructor(private userRepository: IUserWriteRepository) {
  }

  public delete(user: User) {
    this.userRepository.delete(user);
  }
}
