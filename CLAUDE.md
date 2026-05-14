# CLAUDE.md

Guidance for AI agents working in this repository.

## Project

`haxfootball-api-sdk` is a fetch-based TypeScript SDK for HaxFootball rooms and
the HaxFootball API. It is installed from GitHub, not published to npm.

Keep request methods returning `ApiResult<T>` for recoverable API, network,
abort, and invalid-response failures. Client construction may throw for
programmer/configuration errors.

## Commands

Use pnpm:

```sh
pnpm install
pnpm run generate
pnpm run typecheck
pnpm test
pnpm run format:check
pnpm run build
```

## Layout

- `openapi/haxfootball-api.yaml`: API contract source used by the SDK.
- `src/generated/openapi.ts`: generated OpenAPI types. Do not edit by hand.
- `src/client.ts`: transport, auth, URL handling, and result mapping.
- `src/result.ts`: public Result and failure types.
- `src/types.ts`: ergonomic exported aliases over generated schemas.
- `src/resources/`: domain resource methods such as players, matches, rooms,
  and recordings.
- `dist/`: committed build output for GitHub installs.

## Rules

- Do not publish to npm.
- Keep `dist/` updated after source changes with `pnpm run build`.
- Regenerate OpenAPI types with `pnpm run generate` after API contract changes.
- Preserve the public resource shape unless intentionally changing SDK API.
- Add or update tests for request shape, Result behavior, auth, and multipart
  uploads when those areas change.
