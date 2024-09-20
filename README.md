# MINIBLOG
Este projeto é uma aplicação web de __Miniblog__ desenvolvida utilizando React, com componentes de classe e `styled-components` para a estilização. A aplicação permite que usuários criem, visualizem e deletem postagens, e cada postagem pode conter um título, descrição e uma imagem opcional fornecida via URL.

## 📋Funcionalidades
- __Lista de Postagens:__ As postagens são exibidas em uma lista. Cada postagem contém um título, conteúdo e uma imagem opcional.
- __Criação de Postagens:__ Um formulário permite que o usuário adicione novas postagens com título, conteúdo e uma imagem opcional (URL).
- __Deleção de Postagens:__ Cada postagem tem um botão para deletá-la.
- __Visualização Completa:__ Postagens com conteúdo longo possuem um botão "Leia mais", que abre uma modal para exibir o conteúdo completo.
- __Layout Responsivo:__ A interface se ajusta para diferentes tamanhos de tela, como desktops.

## 🚀Tecnologias Utilizadas
- __React:__ Biblioteca JavaScript para construção da interface.
- __Styled-Components:__ Utilizado para estilização dos componentes.
- __Node.js & npm:__ Utilizados para gerenciar dependências e rodar scripts de desenvolvimento.
- __Surge:__ Serviço de deploy para hospedar o projeto de forma rápida e simples.
- __HTML/CSS:__ Estrutura e estilo base da aplicação.

## ⚙️Instalação e Execução
__Pré-requisitos__

- __Node.js__ instalado em sua máquina.

__1. Clone o repositório:__
```
git clone https://github.com/seu-usuario/miniblog.git
cd miniblog
```
__2. Instale as dependências:__
```
npm install
```
__3. Execute o projeto:__
```
npm run start
```
__4. Acesse no navegador:__
```
http://localhost:3000
```

## 🌐Deploy
O deploy foi feito utilizando `Surge` e `Netlify`, e a aplicação pode ser acessada no seguinte link:

[Miniblog Surge](https://miniblogfoda.surge.sh)

[Miniblog Netlify](https://miniblogfoda.netlify.app/)

## 📑Funcionalidades Detalhadas
- __Postagem com Imagem Opcional:__ Se o usuário não fornecer uma URL válida de imagem, será exibida uma imagem padrão.
- __Limite de Caracteres:__ O título da postagem é limitado a 50 caracteres e o conteúdo tem limite de exibição parcial, com opção de "Leia mais" para ver o conteúdo completo.
- __Validação de Inputs:__ O formulário valida se o título e o conteúdo foram preenchidos antes de permitir a criação da postagem.
- __Componentização:__ O código foi dividido em componentes reutilizáveis, mantendo a lógica de estado e a renderização bem organizada.

- ## 📂Estrutura de Arquivos
```
src/
│
├── components/
│   ├── Header.js          # Componente que exibe o cabeçalho do projeto
│   ├── Modal.js           # Componente para exibir conteúdo completo em uma modal
│   ├── PostForm.js        # Componente para o formulário de criação de postagens
│   ├── PostList.js        # Componente que lista as postagens
│   ├── PostItem.js        # Componente que exibe uma postagem individual
│   └── Footer.js          # Componente que exibe o rodapé do projeto
│
├── App.js                 # Componente principal da aplicação
└── index.js               # Arquivo de entrada da aplicação
```

## 📝Feito por
- __Leticia Segurasse__
- __Miguel Dutra__
- __Thiago Roncete__ 
#

