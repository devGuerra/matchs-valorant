import { Router } from 'express';

import MatchController from './app/controllers/MatchController';

const routes = Router();

routes.get('/match/:id', MatchController.index);
routes.post('/match/create', MatchController.store);
routes.post('/match/select', MatchController.update);

export default routes;
