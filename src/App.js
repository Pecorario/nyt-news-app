import { GlobalStyle } from './styles/GlobalStyles';
import { Container } from './components/layouts/Container';
import { SearchBar } from './components/search/SearchBar';

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <h1>Projeto de Notícias - NYT</h1>
        <SearchBar />
      </Container>
    </>
  );
}

export default App;
