import { container } from 'tsyringe';
import { IUserRepository } from '@modules/users/IRepository/IUserRepository';
import { UserRepository } from '@modules/users/infra/repository';

container.registerSingleton<IUserRepository>('Repository', UserRepository);
