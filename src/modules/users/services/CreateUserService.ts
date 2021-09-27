import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../IRepository/IUserRepository';

interface IUser {
  username: string;
  password: string;
}

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private repository: IUserRepository
  ) {}

  public execute({ username, password }: IUser) {
    const user = this.repository.create({
      username,
      password,
    });

    return user;
  }
}
