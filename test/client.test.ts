import { describe, expect, it, vi } from "vitest";
import {
  createHaxFootballApiClient,
  createHaxFootballRoomApiClient,
  type FetchLike
} from "../src";

describe("HaxFootballApiClient", () => {
  it("sends typed JSON requests with bearer auth and returns data results", async () => {
    const fetcher = vi.fn<FetchLike>().mockResolvedValue(
      jsonResponse({
        id: "player-1",
        name: "Gabriel",
        country: "br",
        account: null,
        createdAt: "2026-01-01T00:00:00.000Z",
        updatedAt: "2026-01-01T00:00:00.000Z"
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    const result = await client.players.create({
      externalId: "player-1",
      name: "Gabriel",
      country: "br"
    });

    expect(result.ok).toBe(true);
    expect(result.ok && result.data.id).toBe("player-1");

    const [url, init] = fetcher.mock.calls[0] ?? [];

    expect(url?.toString()).toBe("https://api.example.com/api/players");
    expect(init?.method).toBe("POST");
    expect(new Headers(init?.headers).get("authorization")).toBe(
      "Bearer api-token"
    );
    expect(new Headers(init?.headers).get("content-type")).toBe(
      "application/json"
    );
    expect(init?.body).toBe(
      JSON.stringify({
        externalId: "player-1",
        name: "Gabriel",
        country: "br"
      })
    );
  });

  it("returns API failures instead of throwing for non-2xx responses", async () => {
    const fetcher = vi.fn<FetchLike>().mockResolvedValue(
      jsonResponse(
        {
          error: {
            code: "BAD_REQUEST",
            message: "Player external ID already exists"
          }
        },
        { status: 400, statusText: "Bad Request" }
      )
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    const result = await client.players.create({
      externalId: "player-1",
      name: "Gabriel"
    });

    expect(result.ok).toBe(false);
    expect(!result.ok && result.error).toMatchObject({
      kind: "api",
      status: 400,
      code: "BAD_REQUEST",
      message: "Player external ID already exists"
    });
  });

  it("returns network failures instead of throwing fetch rejections", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockRejectedValue(new TypeError("fetch failed"));
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    const result = await client.players.get("player-1");

    expect(result.ok).toBe(false);
    expect(!result.ok && result.error).toMatchObject({
      kind: "network",
      message: "fetch failed"
    });
  });

  it("returns aborted failures for aborted requests", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockRejectedValue(
        new DOMException("The operation was aborted", "AbortError")
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    const result = await client.players.get("player-1");

    expect(result.ok).toBe(false);
    expect(!result.ok && result.error.kind).toBe("aborted");
  });

  it("can authenticate with an API key and reuse the returned token", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockResolvedValueOnce(jsonResponse({ token: "jwt-token" }))
      .mockResolvedValueOnce(
        jsonResponse({
          items: [],
          page: { limit: 50, nextCursor: null }
        })
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      apiKey: "app-key",
      fetch: fetcher
    });

    const result = await client.players.list();

    expect(result.ok).toBe(true);
    expect(fetcher).toHaveBeenCalledTimes(2);

    const [authUrl, authInit] = fetcher.mock.calls[0] ?? [];
    const [, listInit] = fetcher.mock.calls[1] ?? [];

    expect(authUrl?.toString()).toBe("https://api.example.com/auth");
    expect(authInit?.body).toBe(JSON.stringify({ apiKey: "app-key" }));
    expect(new Headers(listInit?.headers).get("authorization")).toBe(
      "Bearer jwt-token"
    );
  });

  it("sends recordings as multipart form data without forcing content-type", async () => {
    const fetcher = vi.fn<FetchLike>().mockResolvedValue(
      jsonResponse({
        id: "abc1234",
        url: "https://recs.example.com/abc1234.hbr2",
        sizeBytes: 3,
        createdAt: "2026-01-01T00:00:00.000Z"
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    const result = await client.recordings.create({
      file: new Uint8Array([1, 2, 3]),
      filename: "match.hbr2"
    });

    expect(result.ok).toBe(true);

    const [, init] = fetcher.mock.calls[0] ?? [];

    expect(init?.body).toBeInstanceOf(FormData);
    expect(new Headers(init?.headers).has("content-type")).toBe(false);
  });

  it("throws for missing client configuration", () => {
    expect(() =>
      createHaxFootballApiClient({
        fetch: vi.fn<FetchLike>()
      })
    ).toThrow("requires apiUrl or HAXFOOTBALL_API_URL");
  });

  it("can read generic API configuration from the environment", async () => {
    const fetcher = vi.fn<FetchLike>().mockResolvedValue(
      jsonResponse({
        items: [],
        page: { limit: 50, nextCursor: null }
      })
    );

    await withEnvironment(
      {
        HAXFOOTBALL_API_URL: "https://api.example.com/api",
        HAXFOOTBALL_API_TOKEN: "generic-token"
      },
      async () => {
        const client = createHaxFootballApiClient({ fetch: fetcher });
        const result = await client.players.list();

        expect(result.ok).toBe(true);
      }
    );

    const [url, init] = fetcher.mock.calls[0] ?? [];

    expect(url?.toString()).toBe("https://api.example.com/api/players");
    expect(new Headers(init?.headers).get("authorization")).toBe(
      "Bearer generic-token"
    );
  });

  it("keeps room process environment support behind an explicit helper", async () => {
    const fetcher = vi.fn<FetchLike>().mockResolvedValue(
      jsonResponse({
        items: [],
        page: { limit: 50, nextCursor: null }
      })
    );

    await withEnvironment(
      {
        __ROOM_API_URL: "https://room-api.example.com/api",
        __ROOM_API_JWT: "room-token"
      },
      async () => {
        const client = createHaxFootballRoomApiClient({ fetch: fetcher });
        const result = await client.players.list();

        expect(result.ok).toBe(true);
      }
    );

    const [url, init] = fetcher.mock.calls[0] ?? [];

    expect(url?.toString()).toBe("https://room-api.example.com/api/players");
    expect(new Headers(init?.headers).get("authorization")).toBe(
      "Bearer room-token"
    );
  });
});

function jsonResponse(
  body: unknown,
  init: ResponseInit = { status: 200, statusText: "OK" }
): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init.headers
    }
  });
}

async function withEnvironment<T>(
  values: Record<string, string>,
  callback: () => Promise<T>
): Promise<T> {
  const previousValues = new Map<string, string | undefined>();

  for (const [key, value] of Object.entries(values)) {
    previousValues.set(key, process.env[key]);
    process.env[key] = value;
  }

  try {
    return await callback();
  } finally {
    for (const [key, value] of previousValues) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}
