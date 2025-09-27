import { createContext, useReducer } from 'react';
import axios from 'axios';

export const ArticlesContext = createContext();

const initialState = {
  searchValue: '',
  articles: [],
  isLoading: false,
  error: null,
};

function articlesReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchValue: action.payload };

    case 'FETCH_START':
      return { ...state, isLoading: true, error: null, articles: [] };

    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, articles: action.payload };

    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}

export function ArticlesProvider({ children }) {
  const [state, dispatch] = useReducer(articlesReducer, initialState);

  const API_KEY = process.env.REACT_APP_NYT_API_KEY;

  async function fetchArticles(query) {
    if (!query) {
      dispatch({ type: 'FETCH_ERROR', payload: 'Por favor digite algo na caixa de pesquisa' });
      return;
    }

    dispatch({ type: 'FETCH_START' });

    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
      );
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data.response.docs });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: 'Falha ao pesquisar os artigos. Tente novamente mais tarde.',
      });
    }
  }

  const contextValue = {
    searchValue: state.searchValue,
    setSearchValue: (val) => dispatch({ type: 'SET_SEARCH', payload: val }),
    articles: state.articles,
    isLoading: state.isLoading,
    error: state.error,
    fetchArticles,
  };

  return (
    <ArticlesContext.Provider value={contextValue}>
      {children}
    </ArticlesContext.Provider>
  );
}
