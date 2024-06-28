import { IUserRepository } from "./repository";
import { User } from "./user";

export class UserReportService {
  constructor(private userRepository: IUserRepository) {
  }

  public print() {
    const users = this.userRepository.getAll();
    console.log(`Printing users`, users);
  }
}

export class UserCreationService {
  constructor(private userRepository: IUserRepository) {
  }

  public create(user: User) {
    return this.userRepository.create(user);
  }
}

export class UserDeletionService {
  constructor(private userRepository: IUserRepository) {
  }

  public delete(user: User) {
    this.userRepository.delete(user);
  }
}
