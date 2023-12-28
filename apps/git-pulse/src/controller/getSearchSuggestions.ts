import axios from 'axios';

const token = process.env.GITHUB_ACCESS_TOKEN;
const query = 'angular';

const getSearchSuggestions = async () => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.items;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSearchSuggestions;
