import axios, { AxiosResponse } from 'axios';

export interface Repository {
  full_name: string;
  html_url: string;
}

class GithubService {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async getSearchSuggestions(query: string): Promise<Repository[]> {
    try {
      const response: AxiosResponse = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&per_page=10`,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      const formattedData: Repository[] = response.data.items.map(
        ({ full_name, html_url }: { full_name: string; html_url: string }) => ({
          full_name,
          html_url,
        })
      );

      return formattedData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default GithubService;
