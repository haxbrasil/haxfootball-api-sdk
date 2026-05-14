# HaxFootball API SDK

Fetch-based TypeScript SDK for bridging HaxFootball rooms and the HaxFootball
API.

This package is public source, but it is not published to npm. Install it from
GitHub:

```sh
pnpm add github:haxbrasil/haxfootball-api-sdk
```

## Runtime

The SDK uses the runtime's native `fetch`, `FormData`, and `Blob`
implementations. It targets Node.js 20+ and other modern fetch-compatible
runtimes.

## Room Usage

Production rooms receive `__ROOM_API_URL` and `__ROOM_API_JWT` from the API.
The SDK reads those by default:

```ts
import { createHaxFootballApiClient } from "@haxbrasil/haxfootball-api-sdk";

const api = createHaxFootballApiClient();

const result = await api.rooms.reportReady(roomId, {
  commId,
  roomLink
});

if (!result.ok) {
  console.error(result.error);
  return;
}

console.log(result.data.roomLink);
```

## Explicit Client

```ts
import { createHaxFootballApiClient } from "@haxbrasil/haxfootball-api-sdk";

const api = createHaxFootballApiClient({
  apiUrl: "https://api.bfl.haxbrasil.com/api",
  token: process.env.HAXFOOTBALL_API_JWT
});
```

For scripts that only have the app API key, pass `apiKey`. The SDK creates and
caches a JWT before protected requests:

```ts
const api = createHaxFootballApiClient({
  apiUrl: "https://api.bfl.haxbrasil.com/api",
  apiKey: process.env.HAXFOOTBALL_APP_API_KEY
});
```

## Result Contract

Request methods do not throw for recoverable request failures. They return a
discriminated result:

```ts
const result = await api.players.create({
  externalId: "player-auth-or-conn-id",
  name: "Player",
  country: "br"
});

if (result.ok) {
  result.data.id;
} else if (result.error.kind === "api") {
  result.error.status;
  result.error.code;
  result.error.message;
} else {
  result.error.kind;
  result.error.message;
}
```

Client construction can throw for programmer/configuration errors, such as a
missing `apiUrl` when room environment variables are not available.

## Recordings

```ts
const result = await api.recordings.create({
  file: recordingBytes,
  filename: "match.hbr2"
});
```

## Contract Types

The SDK exports ergonomic aliases and the full generated OpenAPI contract:

```ts
import type {
  ApiResult,
  Match,
  CreateMatchInput,
  components,
  paths
} from "@haxbrasil/haxfootball-api-sdk";
```

Update `openapi/haxfootball-api.yaml` from the API repository, then regenerate
types:

```sh
pnpm run generate
```

## Development

```sh
pnpm install
pnpm run typecheck
pnpm test
pnpm run build
pnpm run format:check
```

`dist/` is intentionally committed because this package is installed directly
from GitHub instead of npm.
