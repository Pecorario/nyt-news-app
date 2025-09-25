import React, { useContext } from 'react';
import { ArticlesContext } from '../../context/ArticlesContext';
import { ArticleItem } from './ArticleItem';
import * as S from './ArticleList.styles';

export function ArticleList() {
  const { articles, isLoading, error } = useContext(ArticlesContext);

  return (
    <S.ListWrapper>
      {(() => {
        if (isLoading) {
          return <S.Message>Carregando...</S.Message>;
        }

        if (error) {
          return <S.Message>{error}</S.Message>;
        }

        if (articles.length === 0) {
          return <S.Message>Busque por um artigo para começar.</S.Message>;
        }

        return (
          <div>
            {articles.map((article) => (
              <ArticleItem key={article._id} article={article} />
            ))}
          </div>
        );
      })()}
    </S.ListWrapper>
  );
}
