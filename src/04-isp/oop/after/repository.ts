import { User } from "./user";

export interface IUserReadRepository {
  getAll(): User[];
}

export interface IUserWriteRepository {
  create(user: User): void;
  delete(user: User): void;
}

export class UserRepository implements IUserReadRepository, IUserWriteRepository {
  public getAll(): User[] {
    return [];
  }

  public create(user: User) {
    console.log(`Creating user ${user.name}`);
  }

  public delete(user: User): void {
    console.log(`Deleting user ${user.name}`);
  }
}
