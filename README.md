# HaxFootball API SDK

Fetch-based TypeScript SDK for the HaxFootball API. It is intended for
HaxFootball web pages, admin portals, scripts, services, and room runtimes.

This package is public source, but it is not published to npm. Install it from
GitHub:

```sh
pnpm add github:haxbrasil/haxfootball-api-sdk
```

## Runtime

The SDK uses the runtime's native `fetch`, `FormData`, and `Blob`
implementations. It targets Node.js 20+ and other modern fetch-compatible
runtimes.

## Usage

Create a client with an API base URL and either a bearer token or an app API
key:

```ts
import { createHaxFootballApiClient } from "@haxbrasil/haxfootball-api-sdk";

const api = createHaxFootballApiClient({
  apiUrl: "https://api.bfl.haxbrasil.com/api",
  token: process.env.HAXFOOTBALL_API_TOKEN
});

const result = await api.players.list();

if (!result.ok) {
  console.error(result.error);
  return;
}

console.log(result.data.items);
```

The client also reads generic environment variables when present:

- `HAXFOOTBALL_API_URL`
- `HAXFOOTBALL_API_TOKEN`
- `HAXFOOTBALL_API_JWT`
- `HAXFOOTBALL_API_KEY`

For scripts that only have the app API key, pass `apiKey`. The SDK creates and
caches a JWT before protected requests:

```ts
const api = createHaxFootballApiClient({
  apiUrl: "https://api.bfl.haxbrasil.com/api",
  apiKey: process.env.HAXFOOTBALL_API_KEY
});
```

## Room Runtime Adapter

Room processes receive `__ROOM_API_URL` and `__ROOM_API_JWT` from the API. Use
the explicit room helper in that environment:

```ts
import { createHaxFootballRoomApiClient } from "@haxbrasil/haxfootball-api-sdk";

const api = createHaxFootballRoomApiClient();

const result = await api.rooms.reportReady(roomId, {
  commId,
  roomLink
});
```

## Sessions

```ts
const resolved = await api.sessions.resolve({
  roomId,
  roomPlayerId,
  name,
  auth,
  conn
});

const confirmed = await api.sessions.confirm({
  roomId,
  roomPlayerId,
  name,
  auth,
  conn,
  password
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
missing `apiUrl` when no supported environment variable is available.

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
