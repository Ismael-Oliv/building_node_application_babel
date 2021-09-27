import { Request, response, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from '@modules/users/services/CreateUserService';

export class UsersControllers {
  public execute(request: Request, Response: Response) {
    const createUserService = container.resolve(CreateUserService);

    const { username, password } = request.body;

    const user = createUserService.execute({
      username,
      password,
    });

    return response.status(202).json(user);
  }
}
