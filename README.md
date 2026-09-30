#### Serviços de Deploy
- **GitHub**: para o versionamento e pipeline, é um monorepo
- **Netlify**: para o frontend, usa somente /frontend
- **Render**: para o backend, usa somente /backend e para o banco de dados
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

