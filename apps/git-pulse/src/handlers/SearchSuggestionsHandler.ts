import getSearchSuggestions from '../controller/getSearchSuggestions'
const searchSuggestionsHandler = async (req, res) => {
  try {
    const response = await getSearchSuggestions();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default searchSuggestionsHandler;
