# Eita Frontend

O produto consiste em aplicativo de geração de conteúdo de educação personalizado para o usuário.

No frontend temos a tela de criação de usuário (`/`) onde ele fornece diversas informações sobre conteúdos que ele gosta e que não gosta,
e a partir disso na tela de Feed (`/feed`) sistema gera um conteúdo personalizado para ele.

## Stack

- TypeScript
- Nuxt.js
- Quasar Framework

## Setup

Você precisa ter o [eita-backend](https://github.com/vitebo/eita-backend) rodando localmente para que o frontend funcione corretamente.

Você consegue configurar o `HOST` com a env: `NUXT_PUBLIC_HOST`, para isso basta criar um arquivo `.env` na aplicação com o seguinte conteúdo:

```bash
NUXT_PUBLIC_HOST=http://localhost:3000
```

Instale as dependências:

```bash
# npm
npm install
`

Suba o servidor:

```bash
# npm
npm run dev
```
