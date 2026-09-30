## Arquitetura Padrão
- **GitHub**: para o versionamento e pipeline, é um monorepo
- **Netlify**: para o frontend, usa somente /frontend (React)
- **Render**: para o backend usa somente /backend (FastAPI) e para o banco de dados (PostgreSQL)
- **Docker**: usado para rodar localmente
- **React ↔ FastAPI**: comunicação via HTTP/HTTPS

```
              ┌─→ React → Netlify
GitHub →  ────┤
              └─→ FastAPI → Render
                     │
                     ↓
                 PostgreSQL
                  (Render)
```

## Passo a Passo para novos projetos

#### 1. Crie uma cópia deste repositório scaffold

#### 2. Configure o Netlify
Selecione o seu repositório do GitHub e preencha os comandos para deploy:

| Campo | Valor |
|---|---|
|Base directory | `frontend` |
|Build command | `npm run build` |
|Publish directory | `dist` |
|Functions directory | Deixe em branco |

#### 3. Verifique se a página foi para o ar e teste a pipeline fazendo um commit que altera o título da página


## Desenvolver com IA

Para desenvolver com IA, use a pasta sdd. Nela há contextos importantes para o backend, frontend e gerais.

Para um projeto greenfield, registrar todos os requisitos em `ai-specs\requirements.md` e modelo de dados em `ai-specs\database-model.md`. Além disso, na medida que o backend for construído, todas as rotas devem constar em `ai\specs\api-endpoints.md`. Esses documentos são a fonte de verdade e devem sempre estar atualizados.

Em requirements.md haverá os requisitos com história de usuário e seus critérios de aceite usando o EARS.
Em database-model.md haverá o mermaid com o diagrama, as colunas, tipos de dados e dicionário de dados
Em api-endpoints são exibidos todos os endpoints e requisições possíveis.

Em `implementation` haverá a pasta `backend-taks` e `frontend-tasks`. Nelas são detalhadas tasks que devem ser feitas. Sempre que o arquivo md da task tiver sido implementado deve ser indicado com um badge de "FEITO", se não, "PENDENTE"

As tasks que de fato a IA pode executar estarão em: `execution-tasks` que indica como as tasks em frontend-tasks e backend-tasks devem ser feitas para entregarem juntas um incremento.

A IA somente faz alterações no projeto se forem solicitadas através de .mds que estão em execution-tasks

## Rodar local

#### Iniciar frontend (localhost)

O frontend usa React, TypeScript e Vite. Para iniciar em modo de desenvolvimento:

```bash
cd frontend
npm install
npm run dev
```

Para gerar a versão de produção, execute `npm run build` dentro de `frontend`.
O Vite grava os arquivos finais na pasta `frontend/dist`.

#### Iniciar backend (localhost)

#### Iniciar projeto inteiro com Docker

Na raiz do monorepo, execute:

```bash
docker compose up --build
```

A aplicação ficará disponível em <http://localhost:5173>. Para usar outra porta local, defina `FRONTEND_PORT` antes de iniciar. Encerre com `Ctrl+C` ou execute
`docker compose down`.

