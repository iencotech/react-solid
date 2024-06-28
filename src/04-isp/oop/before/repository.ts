import { User } from "./user";

export interface IUserRepository {
  getAll(): User[];
  create(user: User): User;
  delete(user: User): void;
}

export class UserRepository implements IUserRepository {
  public getAll(): User[] {
    return [];
  }

  public create(user: User) {
    console.log(`Creating user ${user.name}`);
    return user;
  }

  public delete(user: User): void {
    console.log(`Deleting user ${user.name}`);
  }
}
