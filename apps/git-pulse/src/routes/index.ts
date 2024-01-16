import { Router, Request, Response } from 'express';
import SearchSuggestionsHandler from '../handlers/SearchSuggestionsHandler';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello API' });
});

routes.get('/search-suggestions/:query', SearchSuggestionsHandler);

export default routes;
