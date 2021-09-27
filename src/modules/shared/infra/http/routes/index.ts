import { Router } from 'express';
import { UsersRoutes } from '@modules/users/infra/http/routes';

const routes = Router();
routes.use(UsersRoutes);

export { routes };
