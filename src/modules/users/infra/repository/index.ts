import { IUserRepository } from '../../IRepository/IUserRepository';

interface IUser {
  username: string;
  password: string;
}

export class UserRepository implements IUserRepository {
  private dataBase: IUser[] = [];

  public create({ username, password }: IUser): IUser {
    const user = {
      username,
      password,
    };

    this.dataBase.push(user);

    return user;
  }
}
