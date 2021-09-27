interface IUser {
  username: string;
  password: string;
}

export interface IUserRepository {
  create({ username, password }: IUser): IUser;
}
