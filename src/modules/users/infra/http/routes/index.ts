import { Router, Request, Response } from 'express';

const UsersRoutes = Router();

UsersRoutes.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'OK Users',
  });
});

export { UsersRoutes };
