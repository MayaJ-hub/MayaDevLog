# Maya DevLog

A monorepo project with a React frontend and Express backend with Prisma ORM.

## Project Structure

```
maya-devlog/
├── backend/              # Express.js server
│   ├── server.js        # Main server entry point
│   ├── prisma/          # Prisma configuration
│   │   └── schema.prisma
│   ├── package.json
│   └── .env
├── frontend/            # React + Vite application
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── public/              # Static assets
├── package.json         # Root workspace configuration
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- SQL Server with MSSQL (configured via `backend/.env`)

### Installation

1. **Install root dependencies:**
   ```bash
   npm install
   ```

2. **Install backend Prisma client:**
   ```bash
   npm run prisma:generate
   ```

3. **Run database migrations (if schema is set up):**
   ```bash
   npm run prisma:migrate
   ```

## Available Scripts

### Development
- **Start both frontend and backend:**
  ```bash
  npm run dev
  ```

- **Start only frontend:**
  ```bash
  npm --prefix frontend run dev
  ```

- **Start only backend:**
  ```bash
  npm --prefix backend run dev
  ```

### Build
- **Build frontend:**
  ```bash
  npm run build
  ```

- **Build all:**
  ```bash
  npm run build:all
  ```

### Database
- **Generate Prisma client:**
  ```bash
  npm run prisma:generate
  ```

- **Run migrations:**
  ```bash
  npm run prisma:migrate
  ```

- **Open Prisma Studio:**
  ```bash
  npm run prisma:studio
  ```

### Linting
- **Lint all packages:**
  ```bash
  npm run lint
  ```

## Frontend

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Port:** 5173 (default)

## Backend

- **Runtime:** Node.js with ES modules
- **Framework:** Express.js
- **Database ORM:** Prisma
- **Database:** SQL Server (MSSQL)
- **Port:** 5000 (configurable via `PORT` env var)
- **CORS:** Enabled

## Environment Variables

### Backend (.env)
```
DATABASE_URL="sqlserver://DESKTOP-A6HV7RH\SQLEXPRESS;database=DevLog;integratedSecurity=true;trustServerCertificate=true"
PORT=5000
```

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
