# Pokedex SPA - React JS

## Link para o Projeto

https://icarovscarvalho.github.io/pokedexSPA/

---

## Descrição do Projeto

Este é um projeto de uma **Pokedex** desenvolvido como uma **Single Page Application (SPA)** utilizando **React JS**. A aplicação consome uma API de Pokémon para listar, detalhar e buscar informações sobre diferentes Pokémon. O objetivo principal é apresentar os dados de forma simples, interativa e responsiva.

---

## Funcionalidades

- **Listagem de Pokémon**: Mostra uma lista paginada com os Pokémon disponíveis.
- **Busca por Nome/ID**: Permite buscar Pokémon pelo nome ou ID.
- **Detalhes do Pokémon**: Exibe informações detalhadas de um Pokémon selecionado, como tipos, habilidades, status, e imagem.
- **Favoritar Pokémon**: Permite salvar seus Pokémon favoritos (dados armazenados localmente no navegador).
- **Interface Responsiva**: Funciona bem em dispositivos móveis e desktops.

---

## Tecnologias Utilizadas

- **React JS**: Biblioteca principal para construção da interface.
- **Axios**: Para requisições HTTP.
- **React Router**: Gerenciamento de rotas da aplicação SPA.
- **CSS Modules / Styled Components**: Estilização modular ou personalizada.
- **Context API**: Gerenciamento de estados globais, como favoritos.
- **LocalStorage**: Para salvar os Pokémon favoritos.

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Instalação

1. **Clone o repositório:**
  ```bash
  git clone https://github.com/seu-usuario/pokedex-spa.git
```

2. **Instale as dependências:**
  ```bash
  npm install
  # ou
  yarn install
```

3. **Instale as dependências:**
  ```bash
  npm start
  # ou
  yarn start
```

---

## Como Usar

1. **Funcionamento básico**

Olá filho, eu sou o Professor Carvalho. Se você quiser procurar algum pokemon, você pode escrever seu *nome* ou número de *ID* na barra de pesquisa e então clicar na Pokebola ao lado dele. Vamos tentar. Por exemplo, digite *Pikachu* ou apenas o número *25*.

2. **Salvar Dados**

Se você quiser salvar as informações para visualizar mais tarde, você pode clicar no botão de seta para baixo para fechar este menu, então você notará outro botão preto, que é a área de pokebola. Quando você clicar em qualquer um deles, as informações sobre o Pokémon atual na busca serão salvas dentro da Pokebola escolhida.

3. **Favoritos**

Depois disso, uma *estrela* aparecerá e, se você clicar nela, serão mostradas diretamente todas as informações sobre o Pokémon escolhido.

4. **Sobrescrever**

Cuidado, se você girar a mesma pokebola em outro pokemon, os dados serão sobrescritos. Funciona como um atalho para você ver os dados do seu pokemon favorito.

5. **Funcionamento básico**

Você também pode ver, logo *abaixo* da *estrela*, um botão para *trocar de skin* caso queira escolher outro tipo de pokebola.

---

## API Utilizada

Este projeto consome a PokéAPI, uma API gratuita com informações sobre todos os Pokémon.

- *Endpoint principal:* https://pokeapi.co/api/v2/pokemon/
