import { createResources, type HaxFootballApiResources } from "./resources";
import {
  responseMeta,
  success,
  type ApiFailure,
  type ApiResult
} from "./result";
import type { CreateTokenResponse } from "./types";

export type FetchLike = (
  input: string | URL | Request,
  init?: RequestInit
) => Promise<Response>;

export type MaybePromise<T> = T | Promise<T>;
export type TokenProvider = () => MaybePromise<string | undefined>;
export type HeadersProvider = () => MaybePromise<HeadersInit | undefined>;

export type HaxFootballApiClientOptions = {
  apiUrl?: string | URL | undefined;
  authUrl?: string | URL | undefined;
  token?: string | TokenProvider | undefined;
  apiKey?: string | undefined;
  fetch?: FetchLike | undefined;
  headers?: HeadersInit | HeadersProvider | undefined;
  timeoutMs?: number | undefined;
};

export type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  query?: Record<string, unknown> | undefined;
  body?: unknown | undefined;
  formData?: FormData | undefined;
  auth?: "bearer" | "none";
  headers?: HeadersInit | undefined;
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
};

export class HaxFootballApiClient {
  readonly accounts: HaxFootballApiResources["accounts"];
  readonly auth: HaxFootballApiResources["auth"];
  readonly gameModes: HaxFootballApiResources["gameModes"];
  readonly matches: HaxFootballApiResources["matches"];
  readonly permissions: HaxFootballApiResources["permissions"];
  readonly players: HaxFootballApiResources["players"];
  readonly recordings: HaxFootballApiResources["recordings"];
  readonly roles: HaxFootballApiResources["roles"];
  readonly rooms: HaxFootballApiResources["rooms"];
  readonly sessions: HaxFootballApiResources["sessions"];
  readonly eventSchemas: HaxFootballApiResources["eventSchemas"];

  readonly apiUrl: URL;
  readonly authUrl: URL;

  private readonly fetcher: FetchLike;
  private readonly token: string | TokenProvider | undefined;
  private readonly apiKey: string | undefined;
  private readonly headers: HeadersInit | HeadersProvider | undefined;
  private readonly timeoutMs: number | undefined;
  private cachedApiKeyToken: string | undefined;

  constructor(options: HaxFootballApiClientOptions = {}) {
    this.fetcher = options.fetch ?? globalThis.fetch?.bind(globalThis);

    if (!this.fetcher) {
      throw new Error(
        "HaxFootballApiClient requires a fetch implementation in this runtime"
      );
    }

    this.apiUrl = normalizeBaseUrl(
      options.apiUrl ?? readEnvironment("HAXFOOTBALL_API_URL"),
      "HaxFootballApiClient requires apiUrl or HAXFOOTBALL_API_URL in the environment"
    );
    this.authUrl = normalizeAuthUrl(options.authUrl, this.apiUrl);
    this.token =
      options.token ??
      readEnvironment("HAXFOOTBALL_API_TOKEN") ??
      readEnvironment("HAXFOOTBALL_API_JWT");
    this.apiKey = options.apiKey ?? readEnvironment("HAXFOOTBALL_API_KEY");
    this.headers = options.headers;
    this.timeoutMs = options.timeoutMs;

    const resources = createResources(this);

    this.accounts = resources.accounts;
    this.auth = resources.auth;
    this.gameModes = resources.gameModes;
    this.matches = resources.matches;
    this.permissions = resources.permissions;
    this.players = resources.players;
    this.recordings = resources.recordings;
    this.roles = resources.roles;
    this.rooms = resources.rooms;
    this.sessions = resources.sessions;
    this.eventSchemas = resources.eventSchemas;
  }

  async request<T>(options: RequestOptions): Promise<ApiResult<T>> {
    const authResult =
      options.auth === "none" ? undefined : await this.resolveBearerToken();

    if (authResult && !authResult.ok) {
      return authResult;
    }

    const url = buildUrl(this.apiUrl, options.path, options.query);
    const headers = await this.buildHeaders(options, authResult?.token);
    const signal = createRequestSignal(
      options.signal,
      options.timeoutMs ?? this.timeoutMs
    );
    const init = requestInit({
      method: options.method ?? "GET",
      headers,
      body: requestBody(options),
      signal: signal.signal
    });

    try {
      const response = await this.fetcher(url, init);

      return parseJsonResponse<T>(response);
    } catch (cause) {
      return fetchFailure(cause);
    } finally {
      signal.dispose();
    }
  }

  async requestAuth<T>(
    options: Omit<RequestOptions, "path">
  ): Promise<ApiResult<T>> {
    const signal = createRequestSignal(
      options.signal,
      options.timeoutMs ?? this.timeoutMs
    );
    const headers = await this.buildHeaders(options);
    const init = requestInit({
      method: options.method ?? "POST",
      headers,
      body: requestBody(options),
      signal: signal.signal
    });

    try {
      const response = await this.fetcher(this.authUrl, init);

      return parseJsonResponse<T>(response);
    } catch (cause) {
      return fetchFailure(cause);
    } finally {
      signal.dispose();
    }
  }

  private async resolveBearerToken(): Promise<
    { ok: true; token: string | undefined } | { ok: false; error: ApiFailure }
  > {
    if (typeof this.token === "string") {
      return { ok: true, token: this.token };
    }

    if (typeof this.token === "function") {
      return { ok: true, token: await this.token() };
    }

    if (this.cachedApiKeyToken) {
      return { ok: true, token: this.cachedApiKeyToken };
    }

    if (!this.apiKey) {
      return { ok: true, token: undefined };
    }

    const result = await this.requestAuth<CreateTokenResponse>({
      method: "POST",
      body: { apiKey: this.apiKey }
    });

    if (!result.ok) {
      return { ok: false, error: result.error };
    }

    this.cachedApiKeyToken = result.data.token;

    return { ok: true, token: this.cachedApiKeyToken };
  }

  private async buildHeaders(
    options: Pick<RequestOptions, "body" | "formData" | "headers">,
    token?: string
  ): Promise<Headers> {
    const headers = new Headers(await resolveHeaders(this.headers));

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    if (options.body !== undefined && !headers.has("content-type")) {
      headers.set("content-type", "application/json");
    }

    for (const [key, value] of new Headers(options.headers)) {
      headers.set(key, value);
    }

    return headers;
  }
}

export function createHaxFootballApiClient(
  options: HaxFootballApiClientOptions = {}
): HaxFootballApiClient {
  return new HaxFootballApiClient(options);
}

export function createHaxFootballRoomApiClient(
  options: HaxFootballApiClientOptions = {}
): HaxFootballApiClient {
  return new HaxFootballApiClient({
    ...options,
    apiUrl:
      options.apiUrl ??
      readEnvironment("__ROOM_API_URL") ??
      readEnvironment("ROOM_API_URL"),
    token:
      options.token ??
      readEnvironment("__ROOM_API_JWT") ??
      readEnvironment("ROOM_API_JWT")
  });
}

async function resolveHeaders(
  headers: HeadersInit | HeadersProvider | undefined
): Promise<HeadersInit | undefined> {
  return typeof headers === "function" ? headers() : headers;
}

function requestBody(options: Pick<RequestOptions, "body" | "formData">) {
  if (options.formData) {
    return options.formData;
  }

  if (options.body !== undefined) {
    return JSON.stringify(options.body);
  }

  return undefined;
}

function requestInit(input: {
  method: NonNullable<RequestOptions["method"]>;
  headers: Headers;
  body: BodyInit | undefined;
  signal: AbortSignal | undefined;
}): RequestInit {
  const init: RequestInit = {
    method: input.method,
    headers: input.headers
  };

  if (input.body !== undefined) {
    init.body = input.body;
  }

  if (input.signal !== undefined) {
    init.signal = input.signal;
  }

  return init;
}

async function parseJsonResponse<T>(response: Response): Promise<ApiResult<T>> {
  const bodyText = await response.text();
  const body = parseBody(bodyText);

  if (!response.ok) {
    return {
      ok: false,
      error: {
        kind: "api",
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        headers: response.headers,
        ...apiErrorDetails(body, response),
        body
      },
      response: responseMeta(response)
    };
  }

  if (!body.ok) {
    return {
      ok: false,
      error: {
        kind: "invalid-response",
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        headers: response.headers,
        message: "API response was not valid JSON",
        bodyText
      },
      response: responseMeta(response)
    };
  }

  return success(body.value as T, response);
}

function parseBody(
  bodyText: string
): { ok: true; value: unknown } | { ok: false } {
  if (!bodyText) {
    return { ok: true, value: undefined };
  }

  try {
    return { ok: true, value: JSON.parse(bodyText) as unknown };
  } catch {
    return { ok: false };
  }
}

function apiErrorDetails(
  body: { ok: true; value: unknown } | { ok: false },
  response: Response
): { code?: string; message: string; body: unknown } {
  if (body.ok && isErrorEnvelope(body.value)) {
    return {
      code: body.value.error.code,
      message: body.value.error.message,
      body: body.value
    };
  }

  return {
    message: response.statusText || `HTTP ${response.status}`,
    body: body.ok ? body.value : undefined
  };
}

function isErrorEnvelope(value: unknown): value is {
  error: { code: string; message: string };
} {
  if (!value || typeof value !== "object" || !("error" in value)) {
    return false;
  }

  const error = (value as { error: unknown }).error;

  return (
    !!error &&
    typeof error === "object" &&
    typeof (error as { code?: unknown }).code === "string" &&
    typeof (error as { message?: unknown }).message === "string"
  );
}

function fetchFailure<T>(cause: unknown): ApiResult<T> {
  if (isAbortError(cause)) {
    return {
      ok: false,
      error: {
        kind: "aborted",
        message: cause instanceof Error ? cause.message : "Request aborted",
        cause
      }
    };
  }

  return {
    ok: false,
    error: {
      kind: "network",
      message:
        cause instanceof Error ? cause.message : "Network request failed",
      cause
    }
  };
}

function isAbortError(cause: unknown): boolean {
  return (
    (cause instanceof DOMException && cause.name === "AbortError") ||
    (cause instanceof Error && cause.name === "AbortError")
  );
}

function normalizeBaseUrl(
  input: string | URL | undefined,
  missingMessage: string
): URL {
  if (!input) {
    throw new Error(missingMessage);
  }

  const url = new URL(input);
  url.pathname = stripTrailingSlash(url.pathname);

  return url;
}

function normalizeAuthUrl(input: string | URL | undefined, apiUrl: URL): URL {
  if (input) {
    return new URL(input);
  }

  const authUrl = new URL(apiUrl);
  authUrl.pathname = authUrl.pathname.replace(/\/api\/?$/, "") || "/";

  return buildUrl(authUrl, "/auth");
}

function buildUrl(
  baseUrl: URL,
  path: string,
  query?: Record<string, unknown>
): URL {
  const url = new URL(baseUrl);
  const basePath = stripTrailingSlash(url.pathname);
  const requestPath = path.startsWith("/") ? path : `/${path}`;

  url.pathname = `${basePath}${requestPath}`;

  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) {
      continue;
    }

    url.searchParams.set(key, String(value));
  }

  return url;
}

function stripTrailingSlash(pathname: string): string {
  return pathname === "/" ? "" : pathname.replace(/\/+$/, "");
}

function createRequestSignal(
  inputSignal: AbortSignal | undefined,
  timeoutMs: number | undefined
): { signal: AbortSignal | undefined; dispose: () => void } {
  if (!timeoutMs) {
    return {
      signal: inputSignal,
      dispose: () => {}
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const abortFromInput = () => controller.abort(inputSignal?.reason);

  inputSignal?.addEventListener("abort", abortFromInput, { once: true });

  return {
    signal: controller.signal,
    dispose: () => {
      clearTimeout(timeout);
      inputSignal?.removeEventListener("abort", abortFromInput);
    }
  };
}

function readEnvironment(name: string): string | undefined {
  const env = (globalThis as { process?: { env?: Record<string, string> } })
    .process?.env;

  return env?.[name];
}
