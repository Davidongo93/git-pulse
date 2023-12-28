import SearchSuggestionsHandler from '../handlers/SearchSuggestionsHandler';
import { Router } from 'express';
const routes = Router();


routes.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

routes.get('/search-suggestions', SearchSuggestionsHandler);

export default routes;
