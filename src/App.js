import { GlobalStyle } from './styles/GlobalStyles';
import { Container } from './components/layouts/Container';

function App() {
  return (
    <>
      <GlobalStyle /> 

      <Container>
        <h1>Projeto de Notícias - NYT</h1>
      </Container>
    </>
  );
}

export default App;