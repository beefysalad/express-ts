# Express TypeScript API Starter

A modular Express API starter using TypeScript, ESM imports, Zod validation, Prisma, and PostgreSQL.

## Stack

- Express 5
- TypeScript
- Zod
- Prisma
- PostgreSQL
- Docker Compose
- Nodemon

## Project Structure

```text
src/
  config/
  controllers/
  middleware/
  repositories/
  routes/
  schemas/
  services/
  types/
  app.ts
  server.ts
```

Request flow:

```text
route -> controller -> service -> repository -> database
```

## Setup

Install dependencies:

```bash
npm install
```

Create your local env file:

```bash
cp .env.example .env
```

Start PostgreSQL:

```bash
npm run db:up
```

Run the API in development:

```bash
npm run dev
```

## Scripts

```bash
npm run dev        # Start dev server with auto-reload
npm run build      # Compile TypeScript
npm run start      # Run compiled app
npm run typecheck  # Type-check without emitting files
npm run db:up      # Start PostgreSQL
npm run db:down    # Stop PostgreSQL
npm run db:logs    # Tail PostgreSQL logs
```

## Endpoints

Health check:

```http
GET /api/health
```

Create user example:

```http
POST /api/users
Content-Type: application/json

{
  "name": "Jane",
  "email": "jane@example.com"
}
```

## Adding Endpoints

When adding a new endpoint, keep it modular:

- Add route definitions in `src/routes`
- Add request handlers in `src/controllers`
- Add business logic in `src/services`
- Add database access in `src/repositories`
- Add Zod schemas in `src/schemas`
- Add shared types in `src/types` when needed

Always validate request input with Zod before it reaches the controller.
