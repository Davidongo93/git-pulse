import getSearchSuggestions from '../controller/getSearchSuggestions'

const searchSuggestionsHandler = async (req, res): Promise<void> => {
  try {
    const {query}: {query:string} = req.params;
    const response = await getSearchSuggestions(query);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default searchSuggestionsHandler;
