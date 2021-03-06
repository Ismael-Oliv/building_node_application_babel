import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import '../../container';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3001, () => console.log('Server is running on 3001 port'));
