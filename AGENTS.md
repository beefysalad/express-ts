# Agent Instructions

Follow these rules when changing this repository.

## Endpoint Structure

Always modularize new endpoints across the existing folders:

- `src/routes` for route definitions and middleware wiring
- `src/controllers` for Express request/response handlers
- `src/services` for business logic
- `src/repositories` for database access
- `src/schemas` for Zod validation schemas
- `src/types` for shared TypeScript types when needed

Do not create feature-specific `modules` folders. Keep the flat layer-based structure.

## Validation

Always use Zod for request validation.

Use `validateRequest` from `src/middleware/validate-request.ts` in route files before controller handlers.

## TypeScript

Never use the `any` type.

If a value is unknown, use `unknown` and narrow it safely. Prefer explicit request body, params, query, and response types where useful.

## Architecture

Keep the request flow consistent:

```text
route -> controller -> service -> repository -> database
```

Controllers should stay thin. They should read validated request data, call services, and send responses.

Services should contain business logic and call repositories.

Repositories should be the only layer that talks directly to Prisma or the database.
