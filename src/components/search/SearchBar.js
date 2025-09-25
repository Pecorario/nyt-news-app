// import React from 'react';
import * as S from './SearchBar.styles';

export function SearchBar() {
  return (
    <S.SearchForm>
      <S.SearchInput 
        type="text" 
        placeholder="Busque por artigos..." 
      />
      <S.SearchButton type="submit">
        Pesquisar
      </S.SearchButton>
    </S.SearchForm>
  );
}