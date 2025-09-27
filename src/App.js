import { GlobalStyle } from './GlobalStyles';
import { Container } from './components/layouts/Container';
import { SearchBar } from './components/search/SearchBar';
import { ArticleList } from './components/articles/ArticleList';

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <h1>Projeto de Notícias - NYT</h1>
        <SearchBar />
        <ArticleList />
      </Container>
    </>
  );
}

export default App;
