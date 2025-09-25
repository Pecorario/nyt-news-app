import React, { useContext } from 'react';
import { ArticlesContext } from '../../context/ArticlesContext';
import * as S from './SearchBar.styles';

export function SearchBar() {
  const { searchValue, setSearchValue, fetchArticles } =
    useContext(ArticlesContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetchArticles(searchValue);
  }
  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <S.SearchInput
        type="text"
        placeholder="Busque por artigos..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <S.SearchButton type="submit">Pesquisar</S.SearchButton>
    </S.SearchForm>
  );
}
