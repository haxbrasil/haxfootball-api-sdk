---
name: update-haxfootball-api-sdk
description: Update the HaxFootball API SDK from the latest HaxFootball API contract and behavior. Use when asked to sync, regenerate, refresh, or adapt the SDK after API endpoint, schema, OpenAPI, auth, room, match, recording, player, stat event, or other contract changes.
---

# Update HaxFootball API SDK

## Goal

Keep the SDK aligned with the latest HaxFootball API while preserving the SDK's public design:

- Native `fetch` transport.
- Request methods return `ApiResult<T>` for recoverable API, network, abort, and invalid-response failures.
- Client construction may throw for programmer/configuration errors.
- Generated contract types come from `openapi/haxfootball-api.yaml`.
- Built `dist/` artifacts stay updated because consumers install the package directly from GitHub, not npm.

## Inputs

Use the freshest API contract available in this order:

1. A user-provided API repository path, branch, pull request, commit, release, URL, or OpenAPI file.
2. A nearby checkout named like `haxfootball-api`, if present and clearly the intended API repository.
3. The API repository remote or live OpenAPI endpoint the user specifies.

If the source of truth is ambiguous, ask before changing files.

## Workflow

1. Inspect the SDK worktree and avoid overwriting unrelated user changes.
2. Locate the API source of truth using the Inputs rules.
3. Refresh `openapi/haxfootball-api.yaml` from the API source.
   - Prefer a generated OpenAPI document from the API repository over stale committed output.
   - If the API repository has a documented generation script, run it using that repository's package manager.
   - If using a live endpoint, capture the OpenAPI JSON/YAML exactly and normalize only as needed for `openapi-typescript`.
4. In the SDK repository, run:

```sh
pnpm install
pnpm run generate
```

5. Review the generated type diff and identify contract changes:
   - Added, removed, renamed, or retyped paths.
   - Changed request bodies, path params, query params, responses, or error shapes.
   - Multipart/file upload changes.
   - Auth or base URL changes.
6. Update SDK source files:
   - Keep transport behavior in `src/client.ts`.
   - Keep Result/error types in `src/result.ts`.
   - Keep exported aliases in `src/types.ts`.
   - Update resource methods under `src/resources/`.
   - Do not hand-edit `src/generated/openapi.ts`; regenerate it.
7. Preserve API ergonomics:
   - Use clear domain groups such as `api.players`, `api.matches`, `api.recordings`, and `api.rooms`.
   - Add or update resource-level files rather than growing unrelated modules.
   - Keep method names domain-oriented, not raw HTTP operation IDs.
   - Keep request methods returning `Promise<ApiResult<T>>`.
8. Update tests for changed behavior:
   - Add request-shape tests for new methods.
   - Add result-shape tests for changed error or response behavior.
   - Add multipart tests when upload behavior changes.
9. Update README examples when public SDK usage changes.
10. Rebuild committed artifacts:

```sh
pnpm run typecheck
pnpm test
pnpm run format:check
pnpm run build
```

11. Re-run checks if `build` regenerated files that affect formatting or types.
12. Summarize:

- API contract source used.
- SDK methods/types changed.
- Verification commands and results.
- Any API contract issues discovered.

## Contract Mapping Rules

- Prefer schema-derived types from `src/types.ts` aliases over manually duplicated DTOs.
- Export new commonly used request/response aliases from `src/types.ts`.
- Keep full generated OpenAPI types exported through `components`, `operations`, and `paths`.
- If generated OpenAPI types are overly broad because of schema generation quirks, expose a narrower ergonomic alias only when it reflects actual API behavior verified from API source or tests.
- For list endpoints, use `PaginatedResponse<T>` aliases when the API returns `{ items, page }`.
- For uploads, keep multipart construction inside the relevant resource module.

## Result And Error Rules

- Do not introduce exceptions for normal request failures.
- Map non-2xx JSON error envelopes to `ApiFailure` with `kind: "api"`.
- Map rejected fetch calls to `kind: "network"` unless they are aborts.
- Map aborts to `kind: "aborted"`.
- Map 2xx non-JSON responses to `kind: "invalid-response"` unless the API contract explicitly changes to support non-JSON success bodies.

## GitHub Install Rules

- Do not publish this package to npm.
- Keep `dist/` committed after source changes.
- Keep `package.json` installable from a GitHub repository reference.
- Do not add runtime dependencies unless they clearly improve portability and are justified by the API contract change.
