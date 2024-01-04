import axios from 'axios';

const token = process.env.GITHUB_ACCESS_TOKEN;
const query = 'angular'; //Provisional query.

const getSearchSuggestions = async () => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const formattedData = response.data.items.map(({ full_name, html_url }) => ({
      full_name,
      html_url,
    }));

    return formattedData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSearchSuggestions;
