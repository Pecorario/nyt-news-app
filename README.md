# Busca de Notícias - New York Times

Este projeto é uma aplicação front-end desenvolvida como parte da disciplina de Programação Web Fullstack (ES47B-ES71) da Universidade Tecnológica Federal do Paraná (UTFPR), Campus Cornélio Procópio.

A aplicação consiste em um buscador de artigos que consome a API do New York Times. A interface foi construída seguindo o conceito de SPA (Single Page Application) com React.js e permite aos usuários pesquisar por um termo, visualizar os resultados e receber feedback visual durante o carregamento ou em caso de erro.

---

## ✨ Funcionalidades

- **Busca dinâmica:** Pesquise artigos por qualquer termo.
- **Feedback de Interface:** Exibição de status de "Carregando..." durante a busca e mensagens de erro.
- **Listagem de Resultados:** Apresentação dos artigos encontrados em formato de cards clicáveis.
- **Segurança:** A chave da API é armazenada de forma segura em um arquivo de ambiente.

---

## 🛠️ Tecnologias Utilizadas

- **React.js:** Biblioteca principal para a construção da interface.
- **Styled Components:** Para estilização dos componentes de forma isolada.
- **Axios:** Para realizar as requisições HTTP (AJAX) para a API.
- **Context API:** Para gerenciamento do estado global da aplicação.
- **Git & GitHub:** Para versionamento e hospedagem do código-fonte.

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Pecorario/nyt-news-app.git
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd nyt-news-app
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**

    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Dentro dele, adicione sua chave da API do New York Times, como no exemplo abaixo:
      ```
      REACT_APP_NYT_API_KEY=SUA_CHAVE_DA_API_AQUI
      ```

5.  **Inicie a aplicação:**

    ```bash
    npm start
    ```

    A aplicação estará disponível em `http://localhost:3000`.

---
