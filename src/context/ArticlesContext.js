import { createContext, useState } from 'react';

export const ArticlesContext = createContext({});

export function ArticlesProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const contextValue = {
    searchValue,
    setSearchValue,
  };

  return (
    <ArticlesContext.Provider value={contextValue}>
      {children}
    </ArticlesContext.Provider>
  );
}
