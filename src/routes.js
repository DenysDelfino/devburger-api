import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) =>
  response.status(200).json({ message: 'Hello World!' }),
);

export default routes; // Sintaxe moderna