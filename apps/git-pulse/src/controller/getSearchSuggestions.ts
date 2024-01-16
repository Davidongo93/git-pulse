
import GithubService, { Repository } from '../services/githubService';

const token: string | undefined = process.env.GITHUB_ACCESS_TOKEN;
const githubService = new GithubService(token || '');

const getSearchSuggestions = async (query: string): Promise<Repository[]> => {
  try {
    return await githubService.getSearchSuggestions(query);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSearchSuggestions;
