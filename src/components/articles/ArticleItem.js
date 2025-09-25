import React from 'react';
import * as S from './ArticleItem.styles';

export function ArticleItem({ article }) {
  return (
    <S.ItemWrapper
      href={article.web_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.Title>{article.headline.main}</S.Title>
      <S.Abstract>{article.abstract}</S.Abstract>
    </S.ItemWrapper>
  );
}
