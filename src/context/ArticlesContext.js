import { createContext, useState } from 'react';
import axios from 'axios';

export const ArticlesContext = createContext({
  searchValue: '',
  setSearchValue: () => {},
  articles: [],
  isLoading: false,
  error: null,
  fetchArticles: () => {},
});

export function ArticlesProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_NYT_API_KEY;

  async function fetchArticles(query) {
    if (!query) {
      setError('Por favor digite algo na caixa de pesquisa');
      return;
    }

    setIsLoading(true);
    setError(null);
    setArticles([]);

    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
      );
      setArticles(response.data.response.docs);
    } catch (err) {
      setError('Falha ao pesquisar os artigos. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }

  const contextValue = {
    searchValue,
    setSearchValue,
    articles,
    isLoading,
    error,
    fetchArticles,
  };

  return (
    <ArticlesContext.Provider value={contextValue}>
      {children}
    </ArticlesContext.Provider>
  );
}
