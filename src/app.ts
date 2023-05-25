import express, { Request, Response } from 'express';
import packageRoute from './router/packageRouter';

const app = express();

app.use(express.json());

app.use('/packages', packageRoute);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
