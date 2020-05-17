import { Router } from 'express';

import MatchController from './app/controllers/MatchController';
import UserController from './app/controllers/UserController';
import TeamController from './app/controllers/TeamController';
import MapaController from './app/controllers/MapaController';

const routes = Router();

routes.get('/match/:id', MatchController.index);
routes.post('/match/create', MatchController.store);
routes.post('/match/select', MatchController.update);

routes.get('/user', UserController.index);
routes.post('/user/create', UserController.store);

routes.get('/team/:id', TeamController.show);
routes.get('/team/create', TeamController.store);
routes.post('/team/:id/:token', TeamController.update);

routes.get('/map', MapaController.index);
routes.post('/map/create', MapaController.store);
export default routes;
