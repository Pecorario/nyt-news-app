import React, { useContext } from 'react';
import { ArticlesContext } from '../../context/ArticlesContext';
import * as S from './SearchBar.styles';

export function SearchBar() {
  const { searchValue, setSearchValue } = useContext(ArticlesContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('termo buscado: ', searchValue);
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
