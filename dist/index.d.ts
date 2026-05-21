//#region src/resources/shared.d.ts
type RequestConfig = {
  signal?: AbortSignal;
  timeoutMs?: number;
};
//#endregion
//#region src/resources/index.d.ts
type HaxFootballApiResources = ReturnType<typeof createResources>;
declare function createResources(client: HaxFootballApiClient): {
  accounts: {
    list: (query?: ListAccountsQuery, config?: RequestConfig) => Promise<ApiResult<ListAccountsResponse>>;
    get: (uuid: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      externalId: string;
      name: string;
      role: components["schemas"]["Role"];
      updatedAt: string;
      uuid: string;
    }>>;
    getByName: (name: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      externalId: string;
      name: string;
      role: components["schemas"]["Role"];
      updatedAt: string;
      uuid: string;
    }>>;
    getByExternalId: (externalId: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      externalId: string;
      name: string;
      role: components["schemas"]["Role"];
      updatedAt: string;
      uuid: string;
    }>>;
    create: (body: CreateAccountInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      externalId: string;
      name: string;
      role: components["schemas"]["Role"];
      updatedAt: string;
      uuid: string;
    }>>;
    confirm: (body: ConfirmAccountInput, config?: RequestConfig) => Promise<ApiResult<{
      valid: boolean;
    }>>;
    update: (uuid: string, body: UpdateAccountInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      externalId: string;
      name: string;
      role: components["schemas"]["Role"];
      updatedAt: string;
      uuid: string;
    }>>;
  };
  auth: {
    createToken: (body: CreateTokenInput, config?: RequestConfig) => Promise<ApiResult<CreateTokenResponse>>;
  };
  matches: {
    list: (query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListMatchesResponse>>;
    get: (id: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      endedAt: (string | null) | null;
      id: string;
      initiatedAt: (string | null) | null;
      recording: (components["schemas"]["Recording"] | null) | null;
      score: (components["schemas"]["MatchScore"] | null) | null;
      statEventSchema: (components["schemas"]["StatEventSchemaReference"] | null) | null;
      status: "ongoing" | "completed";
      updatedAt: string;
    } & {
      events: components["schemas"]["MatchEvent"][];
      participations: components["schemas"]["MatchStint"][];
    }>>;
    create: (body: CreateMatchInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      endedAt: (string | null) | null;
      id: string;
      initiatedAt: (string | null) | null;
      recording: (components["schemas"]["Recording"] | null) | null;
      score: (components["schemas"]["MatchScore"] | null) | null;
      statEventSchema: (components["schemas"]["StatEventSchemaReference"] | null) | null;
      status: "ongoing" | "completed";
      updatedAt: string;
    } & {
      events: components["schemas"]["MatchEvent"][];
      participations: components["schemas"]["MatchStint"][];
    }>>;
    update: (id: string, body: UpdateMatchInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      endedAt: (string | null) | null;
      id: string;
      initiatedAt: (string | null) | null;
      recording: (components["schemas"]["Recording"] | null) | null;
      score: (components["schemas"]["MatchScore"] | null) | null;
      statEventSchema: (components["schemas"]["StatEventSchemaReference"] | null) | null;
      status: "ongoing" | "completed";
      updatedAt: string;
    } & {
      events: components["schemas"]["MatchEvent"][];
      participations: components["schemas"]["MatchStint"][];
    }>>;
    appendEvents: (id: string, body: AppendMatchEventsInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      endedAt: (string | null) | null;
      id: string;
      initiatedAt: (string | null) | null;
      recording: (components["schemas"]["Recording"] | null) | null;
      score: (components["schemas"]["MatchScore"] | null) | null;
      statEventSchema: (components["schemas"]["StatEventSchemaReference"] | null) | null;
      status: "ongoing" | "completed";
      updatedAt: string;
    } & {
      events: components["schemas"]["MatchEvent"][];
      participations: components["schemas"]["MatchStint"][];
    }>>;
    getMetrics: (id: string, config?: RequestConfig) => Promise<ApiResult<{
      metrics: {
        [key: string]: unknown;
      };
      player: components["schemas"]["Player"];
    }[]>>;
    queryMetrics: (body: QueryMatchMetricsInput, config?: RequestConfig) => Promise<ApiResult<{
      items: {
        contribution: {
          eventsCount: string | number;
          matchesCount: string | number;
          playersCount: string | number;
        };
        group: {
          externalId: string;
          id: string;
          name: string;
          type: "account";
        } | {
          account: (components["schemas"]["PlayerAccount"] | null) | null;
          country: (string | null) | null;
          id: string;
          name: string;
          type: "player";
        };
        metrics: {
          [key: string]: unknown;
        };
        rank: string | number;
      }[];
      meta: {
        availableMetrics: {
          description: (string | null) | null;
          format?: string;
          hidden?: boolean;
          key: string;
          label: string;
          precision?: number;
          valueType?: string;
        }[];
        group: {
          by: "account" | "player" | "account-or-player";
          identityMode: "current";
        };
        schema: {
          id: string;
          isLatest: boolean;
          name: string;
          version: string | number;
        };
        sort: unknown[];
        totals: {
          eventsCount: string | number;
          groupsCount: string | number;
          matchesCount: string | number;
        };
      };
      page: components["schemas"]["PageInfo"];
    }>>;
    associateRecording: (id: string, body: AssociateMatchRecordingInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      endedAt: (string | null) | null;
      id: string;
      initiatedAt: (string | null) | null;
      recording: (components["schemas"]["Recording"] | null) | null;
      score: (components["schemas"]["MatchScore"] | null) | null;
      statEventSchema: (components["schemas"]["StatEventSchemaReference"] | null) | null;
      status: "ongoing" | "completed";
      updatedAt: string;
    } & {
      events: components["schemas"]["MatchEvent"][];
      participations: components["schemas"]["MatchStint"][];
    }>>;
    listStatEvents: (id: string, query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListMatchStatEventsResponse>>;
    addStatEvent: (id: string, body: AddMatchStatEventInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      disabled: boolean;
      disabledAt: (string | null) | null;
      id: string;
      occurredAt: (string | null) | null;
      player: components["schemas"]["Player"];
      sequence: string | number;
      tick: (number | null) | null;
      type: string;
      updatedAt: string;
      value: unknown;
    }>>;
    disableStatEvent: (id: string, eventId: string, body?: DisableMatchStatEventInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      disabled: boolean;
      disabledAt: (string | null) | null;
      id: string;
      occurredAt: (string | null) | null;
      player: components["schemas"]["Player"];
      sequence: string | number;
      tick: (number | null) | null;
      type: string;
      updatedAt: string;
      value: unknown;
    }>>;
  };
  permissions: {
    list: (query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListPermissionsResponse>>;
    get: (uuid: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      key: string;
      title: string | null;
      updatedAt: string;
      uuid: string;
    }>>;
    create: (body: CreatePermissionInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      key: string;
      title: string | null;
      updatedAt: string;
      uuid: string;
    }>>;
    update: (uuid: string, body: UpdatePermissionInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      key: string;
      title: string | null;
      updatedAt: string;
      uuid: string;
    }>>;
    remove: (uuid: string, config?: RequestConfig) => Promise<ApiResult<{
      deleted: boolean;
    }>>;
  };
  players: {
    list: (query?: ListPlayersQuery, config?: RequestConfig) => Promise<ApiResult<ListPlayersResponse>>;
    get: (externalId: string, config?: RequestConfig) => Promise<ApiResult<{
      account: (components["schemas"]["PlayerAccount"] | null) | null;
      country: (string | null) | null;
      createdAt: string;
      id: string;
      name: string;
      updatedAt: string;
    }>>;
    listMatches: (externalId: string, query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListPlayerMatchesResponse>>;
    create: (body: CreatePlayerInput, config?: RequestConfig) => Promise<ApiResult<{
      account: (components["schemas"]["PlayerAccount"] | null) | null;
      country: (string | null) | null;
      createdAt: string;
      id: string;
      name: string;
      updatedAt: string;
    }>>;
    associateAccount: (externalId: string, body: AssociatePlayerAccountInput, config?: RequestConfig) => Promise<ApiResult<{
      account: (components["schemas"]["PlayerAccount"] | null) | null;
      country: (string | null) | null;
      createdAt: string;
      id: string;
      name: string;
      updatedAt: string;
    }>>;
  };
  recordings: {
    list: (query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListRecordingsResponse>>;
    get: (id: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      id: string;
      sizeBytes: number;
      url: string;
    }>>;
    create: (input: CreateRecordingInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      id: string;
      sizeBytes: number;
      url: string;
    }>>;
  };
  roles: {
    list: (query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListRolesResponse>>;
    get: (uuid: string, config?: RequestConfig) => Promise<ApiResult<{
      bypassAllPermissions: boolean;
      createdAt: string;
      isDefault: boolean;
      name: string;
      permissions: string[];
      title: string;
      updatedAt: string;
      uuid: string;
    }>>;
    create: (body: CreateRoleInput, config?: RequestConfig) => Promise<ApiResult<{
      bypassAllPermissions: boolean;
      createdAt: string;
      isDefault: boolean;
      name: string;
      permissions: string[];
      title: string;
      updatedAt: string;
      uuid: string;
    }>>;
    update: (uuid: string, body: UpdateRoleInput, config?: RequestConfig) => Promise<ApiResult<{
      bypassAllPermissions: boolean;
      createdAt: string;
      isDefault: boolean;
      name: string;
      permissions: string[];
      title: string;
      updatedAt: string;
      uuid: string;
    }>>;
    remove: (uuid: string, config?: RequestConfig) => Promise<ApiResult<{
      deleted: boolean;
    }>>;
  };
  rooms: {
    list: (query?: ListRoomsQuery, config?: RequestConfig) => Promise<ApiResult<ListRoomsResponse>>;
    get: (id: string, config?: RequestConfig) => Promise<ApiResult<{
      closedAt: (string | null) | null;
      createdAt: string;
      failedAt: (string | null) | null;
      failureReason: (string | null) | null;
      id: string;
      launchConfig: {
        [key: string]: string | number | boolean | null;
      };
      program: components["schemas"]["RoomResponseProgramSummary"];
      proxyEndpoint: (components["schemas"]["RoomResponseProxyEndpointSummary"] | null) | null;
      public: boolean;
      roomLink: (string | null) | null;
      state: "provisioning" | "running" | "closed" | "failed";
      updatedAt: string;
      version: components["schemas"]["RoomResponseVersionSummary"];
    }>>;
    create: (body: CreateRoomInput, config?: RequestConfig) => Promise<ApiResult<{
      closedAt: (string | null) | null;
      createdAt: string;
      failedAt: (string | null) | null;
      failureReason: (string | null) | null;
      id: string;
      launchConfig: {
        [key: string]: string | number | boolean | null;
      };
      program: components["schemas"]["RoomResponseProgramSummary"];
      proxyEndpoint: (components["schemas"]["RoomResponseProxyEndpointSummary"] | null) | null;
      public: boolean;
      roomLink: (string | null) | null;
      state: "provisioning" | "running" | "closed" | "failed";
      updatedAt: string;
      version: components["schemas"]["RoomResponseVersionSummary"];
    }>>;
    close: (id: string, config?: RequestConfig) => Promise<ApiResult<{
      closedAt: (string | null) | null;
      createdAt: string;
      failedAt: (string | null) | null;
      failureReason: (string | null) | null;
      id: string;
      launchConfig: {
        [key: string]: string | number | boolean | null;
      };
      program: components["schemas"]["RoomResponseProgramSummary"];
      proxyEndpoint: (components["schemas"]["RoomResponseProxyEndpointSummary"] | null) | null;
      public: boolean;
      roomLink: (string | null) | null;
      state: "provisioning" | "running" | "closed" | "failed";
      updatedAt: string;
      version: components["schemas"]["RoomResponseVersionSummary"];
    }>>;
    reportReady: (id: string, body: ReportRoomReadyInput, config?: RequestConfig) => Promise<ApiResult<{
      closedAt: (string | null) | null;
      createdAt: string;
      failedAt: (string | null) | null;
      failureReason: (string | null) | null;
      id: string;
      launchConfig: {
        [key: string]: string | number | boolean | null;
      };
      program: components["schemas"]["RoomResponseProgramSummary"];
      proxyEndpoint: (components["schemas"]["RoomResponseProxyEndpointSummary"] | null) | null;
      public: boolean;
      roomLink: (string | null) | null;
      state: "provisioning" | "running" | "closed" | "failed";
      updatedAt: string;
      version: components["schemas"]["RoomResponseVersionSummary"];
    }>>;
    programs: {
      list: (query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListRoomProgramsResponse>>;
      get: (id: string, config?: RequestConfig) => Promise<ApiResult<{
        createdAt: string;
        description: (string | null) | null;
        haxballTokenEnvVar: string;
        id: string;
        integrationMode: "external" | "integrated";
        launchConfigFields: components["schemas"]["RoomLaunchConfigField"][];
        name: string;
        releaseSource: components["schemas"]["RoomProgramReleaseSource"];
        title: (string | null) | null;
        updatedAt: string;
      }>>;
      create: (body: CreateRoomProgramInput, config?: RequestConfig) => Promise<ApiResult<{
        createdAt: string;
        description: (string | null) | null;
        haxballTokenEnvVar: string;
        id: string;
        integrationMode: "external" | "integrated";
        launchConfigFields: components["schemas"]["RoomLaunchConfigField"][];
        name: string;
        releaseSource: components["schemas"]["RoomProgramReleaseSource"];
        title: (string | null) | null;
        updatedAt: string;
      }>>;
      update: (id: string, body: UpdateRoomProgramInput, config?: RequestConfig) => Promise<ApiResult<{
        createdAt: string;
        description: (string | null) | null;
        haxballTokenEnvVar: string;
        id: string;
        integrationMode: "external" | "integrated";
        launchConfigFields: components["schemas"]["RoomLaunchConfigField"][];
        name: string;
        releaseSource: components["schemas"]["RoomProgramReleaseSource"];
        title: (string | null) | null;
        updatedAt: string;
      }>>;
      listVersions: (id: string, query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListRoomProgramVersionsResponse>>;
      createVersion: (id: string, body: CreateRoomProgramVersionInput, config?: RequestConfig) => Promise<ApiResult<{
        artifact: components["schemas"]["RoomProgramVersionArtifact"];
        createdAt: string;
        entrypoint: string;
        id: string;
        installStrategy: "none" | "npm-ci" | "npm-install";
        programId: string;
        updatedAt: string;
        version: string;
      }>>;
      discoverVersions: (id: string, body: DiscoverRoomProgramVersionsInput, config?: RequestConfig) => Promise<ApiResult<{
        artifact: components["schemas"]["RoomProgramVersionArtifact"];
        createdAt: string;
        entrypoint: string;
        id: string;
        installStrategy: "none" | "npm-ci" | "npm-install";
        programId: string;
        updatedAt: string;
        version: string;
      }[]>>;
    };
    proxyEndpoints: {
      list: (query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListRoomProxyEndpointsResponse>>;
      create: (body: CreateRoomProxyEndpointInput, config?: RequestConfig) => Promise<ApiResult<{
        createdAt: string;
        displayName: string;
        enabled: boolean;
        id: string;
        key: string;
        outboundIp: string;
        proxyUrl: string;
        updatedAt: string;
      }>>;
      update: (id: string, body: UpdateRoomProxyEndpointInput, config?: RequestConfig) => Promise<ApiResult<{
        createdAt: string;
        displayName: string;
        enabled: boolean;
        id: string;
        key: string;
        outboundIp: string;
        proxyUrl: string;
        updatedAt: string;
      }>>;
    };
  };
  sessions: {
    resolve: (body: ResolveSessionInput, config?: RequestConfig) => Promise<ApiResult<{
      account: null;
      playerId: string;
      status: "guest";
    } | {
      account: components["schemas"]["SessionAccount"];
      canonicalName: string;
      playerId: string;
      status: "signed_in";
    } | {
      account: components["schemas"]["SessionAccount"];
      playerId: string;
      status: "password_required";
    }>>;
    confirm: (body: ConfirmSessionInput, config?: RequestConfig) => Promise<ApiResult<{
      valid: false;
    } | {
      account: components["schemas"]["SessionAccount"];
      canonicalName: string;
      playerId: string;
      valid: true;
    }>>;
  };
  statEventSchemas: {
    list: (query?: PaginationQuery, config?: RequestConfig) => Promise<ApiResult<ListStatEventSchemasResponse>>;
    getLatest: (id: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    }>>;
    getLatestByName: (name: string, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    }>>;
    getVersion: (id: string, version: number, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    }>>;
    getVersionByName: (name: string, version: number, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    }>>;
    create: (body: CreateStatEventSchemaInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    }>>;
    publishVersion: (id: string, body: PublishStatEventSchemaVersionInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    }>>;
    updateVersion: (id: string, version: number, body: UpdateStatEventSchemaInput, config?: RequestConfig) => Promise<ApiResult<{
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    }>>;
  };
};
//#endregion
//#region src/result.d.ts
type ResponseMeta = {
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
};
type ApiErrorCode = "UNAUTHORIZED" | "NOT_FOUND" | "BAD_REQUEST" | "VALIDATION_ERROR" | "INTERNAL_SERVER_ERROR" | (string & {});
type ApiResponseFailure = {
  kind: "api";
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
  code?: ApiErrorCode;
  message: string;
  body: unknown;
};
type NetworkFailure = {
  kind: "network";
  message: string;
  cause: unknown;
};
type AbortedFailure = {
  kind: "aborted";
  message: string;
  cause?: unknown;
};
type InvalidResponseFailure = {
  kind: "invalid-response";
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
  message: string;
  bodyText: string;
};
type ApiFailure = ApiResponseFailure | NetworkFailure | AbortedFailure | InvalidResponseFailure;
type ApiSuccess<T> = {
  ok: true;
  data: T;
  response: ResponseMeta;
};
type ApiResult<T> = ApiSuccess<T> | {
  ok: false;
  error: ApiFailure;
  response?: ResponseMeta;
};
//#endregion
//#region src/client.d.ts
type FetchLike = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;
type MaybePromise<T> = T | Promise<T>;
type TokenProvider = () => MaybePromise<string | undefined>;
type HeadersProvider = () => MaybePromise<HeadersInit | undefined>;
type HaxFootballApiClientOptions = {
  apiUrl?: string | URL | undefined;
  authUrl?: string | URL | undefined;
  token?: string | TokenProvider | undefined;
  apiKey?: string | undefined;
  fetch?: FetchLike | undefined;
  headers?: HeadersInit | HeadersProvider | undefined;
  timeoutMs?: number | undefined;
};
type RequestOptions = {
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
declare class HaxFootballApiClient {
  readonly accounts: HaxFootballApiResources["accounts"];
  readonly auth: HaxFootballApiResources["auth"];
  readonly matches: HaxFootballApiResources["matches"];
  readonly permissions: HaxFootballApiResources["permissions"];
  readonly players: HaxFootballApiResources["players"];
  readonly recordings: HaxFootballApiResources["recordings"];
  readonly roles: HaxFootballApiResources["roles"];
  readonly rooms: HaxFootballApiResources["rooms"];
  readonly sessions: HaxFootballApiResources["sessions"];
  readonly statEventSchemas: HaxFootballApiResources["statEventSchemas"];
  readonly apiUrl: URL;
  readonly authUrl: URL;
  private readonly fetcher;
  private readonly token;
  private readonly apiKey;
  private readonly headers;
  private readonly timeoutMs;
  private cachedApiKeyToken;
  constructor(options?: HaxFootballApiClientOptions);
  request<T>(options: RequestOptions): Promise<ApiResult<T>>;
  requestAuth<T>(options: Omit<RequestOptions, "path">): Promise<ApiResult<T>>;
  private resolveBearerToken;
  private buildHeaders;
}
declare function createHaxFootballApiClient(options?: HaxFootballApiClientOptions): HaxFootballApiClient;
declare function createHaxFootballRoomApiClient(options?: HaxFootballApiClientOptions): HaxFootballApiClient;
//#endregion
//#region src/generated/openapi.d.ts
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
interface paths {
  "/api/accounts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List accounts */
    get: operations["getApiAccounts"];
    put?: never;
    /** Create an account */
    post: operations["postApiAccounts"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/accounts/by-external-id/{externalId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get an account by external ID */
    get: operations["getApiAccountsBy-external-idByExternalId"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/accounts/by-name/{name}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get an account by name */
    get: operations["getApiAccountsBy-nameByName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/accounts/confirm": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Confirm an account */
    post: operations["postApiAccountsConfirm"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/accounts/{uuid}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get an account */
    get: operations["getApiAccountsByUuid"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update an account */
    patch: operations["patchApiAccountsByUuid"];
    trace?: never;
  };
  "/api/job-schedules": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List job schedules */
    get: operations["getApiJob-schedules"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/job-schedules/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get job schedule */
    get: operations["getApiJob-schedulesById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/jobs": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List jobs */
    get: operations["getApiJobs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/jobs/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get job */
    get: operations["getApiJobsById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/languages": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List languages */
    get: operations["getApiLanguages"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/matches": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List matches */
    get: operations["getApiMatches"];
    put?: never;
    /** Create a match */
    post: operations["postApiMatches"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/matches/metrics/query": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Query match metrics */
    post: operations["postApiMatchesMetricsQuery"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/matches/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get a match */
    get: operations["getApiMatchesById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update a match */
    patch: operations["patchApiMatchesById"];
    trace?: never;
  };
  "/api/matches/{id}/events": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Append match player events */
    post: operations["postApiMatchesByIdEvents"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/matches/{id}/metrics": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get match metrics */
    get: operations["getApiMatchesByIdMetrics"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/matches/{id}/recording": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Associate a match recording */
    patch: operations["patchApiMatchesByIdRecording"];
    trace?: never;
  };
  "/api/matches/{id}/stat-events": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List match stat events */
    get: operations["getApiMatchesByIdStat-events"];
    put?: never;
    /** Add match stat event */
    post: operations["postApiMatchesByIdStat-events"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/matches/{id}/stat-events/{eventId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Disable match stat event */
    patch: operations["patchApiMatchesByIdStat-eventsByEventId"];
    trace?: never;
  };
  "/api/permissions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List permissions */
    get: operations["getApiPermissions"];
    put?: never;
    /** Create a permission */
    post: operations["postApiPermissions"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/permissions/{uuid}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get a permission */
    get: operations["getApiPermissionsByUuid"];
    put?: never;
    post?: never;
    /** Remove a permission */
    delete: operations["deleteApiPermissionsByUuid"];
    options?: never;
    head?: never;
    /** Update a permission */
    patch: operations["patchApiPermissionsByUuid"];
    trace?: never;
  };
  "/api/players": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List players */
    get: operations["getApiPlayers"];
    put?: never;
    /** Add a player */
    post: operations["postApiPlayers"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/players/{externalId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get a player */
    get: operations["getApiPlayersByExternalId"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/players/{externalId}/account": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Associate a player with an account */
    patch: operations["patchApiPlayersByExternalIdAccount"];
    trace?: never;
  };
  "/api/players/{externalId}/matches": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List player matches */
    get: operations["getApiPlayersByExternalIdMatches"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/recs": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List recordings */
    get: operations["getApiRecs"];
    put?: never;
    /** Save a recording */
    post: operations["postApiRecs"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/recs/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get a recording */
    get: operations["getApiRecsById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/roles": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List roles */
    get: operations["getApiRoles"];
    put?: never;
    /** Create a role */
    post: operations["postApiRoles"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/roles/{uuid}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get a role */
    get: operations["getApiRolesByUuid"];
    put?: never;
    post?: never;
    /** Remove a role */
    delete: operations["deleteApiRolesByUuid"];
    options?: never;
    head?: never;
    /** Update a role */
    patch: operations["patchApiRolesByUuid"];
    trace?: never;
  };
  "/api/room-programs": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List room programs */
    get: operations["getApiRoom-programs"];
    put?: never;
    /** Create room program */
    post: operations["postApiRoom-programs"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/room-programs/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get room program */
    get: operations["getApiRoom-programsById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update room program */
    patch: operations["patchApiRoom-programsById"];
    trace?: never;
  };
  "/api/room-programs/{id}/artifacts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Upload room artifact */
    post: operations["postApiRoom-programsByIdArtifacts"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/room-programs/{id}/version-aliases": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List room program version aliases */
    get: operations["getApiRoom-programsByIdVersion-aliases"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/room-programs/{id}/version-aliases/{alias}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Create or update room program version alias */
    put: operations["putApiRoom-programsByIdVersion-aliasesByAlias"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/room-programs/{id}/versions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List room program versions */
    get: operations["getApiRoom-programsByIdVersions"];
    put?: never;
    /** Create room program version */
    post: operations["postApiRoom-programsByIdVersions"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/room-programs/{id}/versions/discover": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Discover room program versions from GitHub Releases */
    post: operations["postApiRoom-programsByIdVersionsDiscover"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/room-proxy-endpoints": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List room proxy endpoints */
    get: operations["getApiRoom-proxy-endpoints"];
    put?: never;
    /** Create room proxy endpoint */
    post: operations["postApiRoom-proxy-endpoints"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/room-proxy-endpoints/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update room proxy endpoint */
    patch: operations["patchApiRoom-proxy-endpointsById"];
    trace?: never;
  };
  "/api/rooms": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List room instances */
    get: operations["getApiRooms"];
    put?: never;
    /** Launch room instance */
    post: operations["postApiRooms"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/rooms/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get room instance */
    get: operations["getApiRoomsById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/rooms/{id}/close": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Close room instance */
    post: operations["postApiRoomsByIdClose"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/rooms/{id}/ready": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Report integrated room ready */
    post: operations["postApiRoomsByIdReady"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/sessions/confirm": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Confirm room player session */
    post: operations["postApiSessionsConfirm"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/sessions/resolve": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Resolve room player session */
    post: operations["postApiSessionsResolve"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/stat-event-schemas": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List stat event schemas */
    get: operations["getApiStat-event-schemas"];
    put?: never;
    /** Create stat event schema */
    post: operations["postApiStat-event-schemas"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/stat-event-schemas/by-name/{name}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get latest stat event schema by name */
    get: operations["getApiStat-event-schemasBy-nameByName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/stat-event-schemas/by-name/{name}/versions/{version}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get stat event schema version by name */
    get: operations["getApiStat-event-schemasBy-nameByNameVersionsByVersion"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/stat-event-schemas/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get latest stat event schema */
    get: operations["getApiStat-event-schemasById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/stat-event-schemas/{id}/versions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Publish stat event schema version */
    post: operations["postApiStat-event-schemasByIdVersions"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/stat-event-schemas/{id}/versions/{version}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get stat event schema version */
    get: operations["getApiStat-event-schemasByIdVersionsByVersion"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update stat event schema version */
    patch: operations["patchApiStat-event-schemasByIdVersionsByVersion"];
    trace?: never;
  };
  "/api/values/bulk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Bulk upsert localized values */
    post: operations["postApiValuesBulk"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/values/{value}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get a localized value */
    get: operations["getApiValuesByValue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/artifacts/rooms/{branch}/{sha}/{assetName}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Download uploaded room artifact */
    get: operations["getArtifactsRoomsByBranchByShaByAssetName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Create a JWT */
    post: operations["postAuth"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/health": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getHealth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
interface components {
  schemas: {
    Account: {
      createdAt: string;
      externalId: string;
      name: string;
      role: components["schemas"]["Role"];
      updatedAt: string;
      /** Format: uuid */
      uuid: string;
    };
    AddMatchStatEventBody: {
      occurredAt?: string;
      playerId: string;
      tick?: number;
      type: string;
      value: unknown;
    };
    AppendMatchEventsBody: {
      events: components["schemas"]["MatchEventInput"][];
    };
    AssociateMatchRecordingBody: {
      recordingId: string;
    };
    AssociatePlayerAccountBody: {
      /** Format: uuid */
      accountUuid: string;
    };
    BadRequestError: {
      error: {
        /** @constant */
        code: "BAD_REQUEST";
        message: string;
      };
    };
    BadRequestOrValidationError: components["schemas"]["BadRequestError"] | {
      error: {
        /** @constant */
        code: "VALIDATION_ERROR";
        message: string;
      };
    };
    BulkUpsertValuesBody: {
      values: {
        label: string;
        language: string;
        value: string;
      }[];
    };
    CloseRoomResponse: {
      closedAt: (string | null) | null;
      createdAt: string;
      failedAt: (string | null) | null;
      failureReason: (string | null) | null;
      /** Format: uuid */
      id: string;
      launchConfig: {
        [key: string]: string | number | boolean | null;
      };
      program: components["schemas"]["RoomResponseProgramSummary"];
      proxyEndpoint: (components["schemas"]["RoomResponseProxyEndpointSummary"] | null) | null;
      public: boolean;
      roomLink: (string | null) | null;
      /** @enum {string} */
      state: "provisioning" | "running" | "closed" | "failed";
      updatedAt: string;
      version: components["schemas"]["RoomResponseVersionSummary"];
    };
    ConfirmAccountBody: {
      name: string;
      password: string;
    };
    ConfirmAccountResponse: {
      valid: boolean;
    };
    ConfirmSessionBody: components["schemas"]["ResolveSessionBody"] & {
      password: string;
    };
    ConfirmSessionResponse: {
      /** @constant */
      valid: false;
    } | {
      account: components["schemas"]["SessionAccount"];
      canonicalName: string;
      playerId: string;
      /** @constant */
      valid: true;
    };
    CreateAccountBody: {
      externalId: string;
      name: string;
      password: string;
    };
    CreateMatchBody: {
      endedAt?: string;
      events?: components["schemas"]["MatchEventInput"][];
      initiatedAt?: string;
      recordingId?: string;
      score?: {
        blue: string | number;
        red: string | number;
      };
      statEventSchema?: {
        /** Format: uuid */
        id: string;
        version: string | number;
      };
      /** @enum {string} */
      status: "ongoing" | "completed";
    };
    CreatePermissionBody: {
      key: string;
      title?: string | null;
    };
    CreatePlayerBody: {
      country?: string;
      externalId: string;
      name: string;
    };
    CreateRecordingBody: {
      /**
       * Format: binary
       * @default File
       */
      file: string;
    };
    CreateRoleBody: {
      name: string;
      /** @default [] */
      permissions: (string | "*")[];
      title: string;
    };
    CreateRoomBody: {
      haxballToken: string;
      launchConfig?: {
        [key: string]: string | number | boolean | null;
      };
      /** Format: uuid */
      programId: string;
      version: string;
    };
    CreateRoomProgramBody: {
      description?: string;
      haxballTokenEnvVar?: string;
      /** @enum {string} */
      integrationMode: "external" | "integrated";
      launchConfigFields?: components["schemas"]["RoomLaunchConfigField"][];
      name: string;
      releaseSource: components["schemas"]["RoomProgramReleaseSource"];
      title?: string;
    };
    CreateRoomProgramVersionBody: {
      artifact: components["schemas"]["RoomProgramVersionArtifact"];
      entrypoint: string;
      /** @enum {string} */
      installStrategy?: "none" | "npm-ci" | "npm-install";
      version: string;
    };
    CreateRoomProxyEndpointBody: {
      displayName: string;
      enabled?: boolean;
      key: string;
      outboundIp: string;
      proxyUrl: string;
    };
    CreateStatEventSchemaBody: {
      definition: unknown;
      description?: string;
      name: string;
      title?: string;
    };
    CreateTokenBody: {
      apiKey: string;
    };
    CreateTokenResponse: {
      token: string;
    };
    DisableMatchStatEventBody: {
      /** @constant */
      disabled: true;
    };
    DiscoverRoomProgramVersionsBody: {
      entrypoint: string;
      /** @enum {string} */
      installStrategy?: "none" | "npm-ci" | "npm-install";
    };
    DiscoverRoomProgramVersionsResponse: components["schemas"]["RoomProgramVersion"][];
    InternalServerError: {
      error: {
        /** @constant */
        code: "INTERNAL_SERVER_ERROR";
        message: string;
      };
    };
    Job: {
      attempts: string | number;
      createdAt: string;
      error?: unknown;
      finishedAt: (string | null) | null;
      /** Format: uuid */
      id: string;
      lockedAt: (string | null) | null;
      lockedBy: (string | null) | null;
      maxAttempts: string | number;
      payload?: unknown;
      result?: unknown;
      runAfter: string;
      startedAt: (string | null) | null;
      /** @enum {string} */
      status: "queued" | "running" | "succeeded" | "failed" | "canceled";
      type: string;
      updatedAt: string;
    };
    JobSchedule: {
      createdAt: string;
      enabled: boolean;
      /** Format: uuid */
      id: string;
      intervalSeconds: string | number;
      key: string;
      lastEnqueuedAt: (string | null) | null;
      nextRunAt: string;
      payload?: unknown;
      type: string;
      updatedAt: string;
    };
    ListAccounts: {
      items: components["schemas"]["Account"][];
      page: components["schemas"]["PageInfo"];
    };
    ListJobSchedules: {
      items: components["schemas"]["JobSchedule"][];
      page: components["schemas"]["PageInfo"];
    };
    ListJobs: {
      items: components["schemas"]["Job"][];
      page: components["schemas"]["PageInfo"];
    };
    ListLanguages: {
      items: {
        code: string;
        createdAt: string;
        name: string;
        updatedAt: string;
      }[];
      page: components["schemas"]["PageInfo"];
    };
    ListMatchStatEvents: {
      items: components["schemas"]["MatchStatEvent"][];
      page: components["schemas"]["PageInfo"];
    };
    ListMatches: {
      items: components["schemas"]["MatchSummary"][];
      page: components["schemas"]["PageInfo"];
    };
    ListPermissions: {
      items: components["schemas"]["Permission"][];
      page: components["schemas"]["PageInfo"];
    };
    ListPlayerMatches: {
      items: components["schemas"]["MatchSummary"][];
      page: components["schemas"]["PageInfo"];
    };
    ListPlayers: {
      items: components["schemas"]["Player"][];
      page: components["schemas"]["PageInfo"];
    };
    ListRecordings: {
      items: components["schemas"]["Recording"][];
      page: components["schemas"]["PageInfo"];
    };
    ListRoles: {
      items: components["schemas"]["Role"][];
      page: components["schemas"]["PageInfo"];
    };
    ListRoomProgramVersionAliases: {
      items: components["schemas"]["RoomProgramVersionAlias"][];
      page: components["schemas"]["PageInfo"];
    };
    ListRoomProgramVersions: {
      items: components["schemas"]["RoomProgramVersion"][];
      page: components["schemas"]["PageInfo"];
    };
    ListRoomPrograms: {
      items: components["schemas"]["RoomProgram"][];
      page: components["schemas"]["PageInfo"];
    };
    ListRoomProxyEndpoints: {
      items: components["schemas"]["RoomProxyEndpoint"][];
      page: components["schemas"]["PageInfo"];
    };
    ListRooms: {
      items: components["schemas"]["CloseRoomResponse"][];
      page: components["schemas"]["PageInfo"];
    };
    ListStatEventSchemas: {
      items: components["schemas"]["StatEventSchema"][];
      page: components["schemas"]["PageInfo"];
    };
    Match: components["schemas"]["MatchSummary"] & {
      events: components["schemas"]["MatchEvent"][];
      participations: components["schemas"]["MatchStint"][];
    };
    MatchEvent: {
      elapsedSeconds: (number | null) | null;
      occurredAt: (string | null) | null;
      player: components["schemas"]["Player"];
      roomPlayerId: (number | null) | null;
      sequence: number;
      team: (("spectators" | "red" | "blue") | null) | null;
      /** @enum {string} */
      type: "player_join" | "player_leave" | "player_team_change";
    };
    MatchEventInput: {
      elapsedSeconds?: number;
      occurredAt?: string;
      playerId: string;
      roomPlayerId?: string | number;
      /** @enum {string} */
      team?: "spectators" | "red" | "blue";
      /** @enum {string} */
      type: "player_join" | "player_leave" | "player_team_change";
    };
    MatchMetrics: {
      metrics: {
        [key: string]: unknown;
      };
      player: components["schemas"]["Player"];
    }[];
    MatchScore: {
      blue: string | number;
      red: string | number;
    };
    MatchStatEvent: {
      createdAt: string;
      disabled: boolean;
      disabledAt: (string | null) | null;
      /** Format: uuid */
      id: string;
      occurredAt: (string | null) | null;
      player: components["schemas"]["Player"];
      sequence: string | number;
      tick: (number | null) | null;
      type: string;
      updatedAt: string;
      value: unknown;
    };
    MatchStint: {
      joinedAt: (string | null) | null;
      joinedElapsedSeconds: (number | null) | null;
      leftAt: (string | null) | null;
      leftElapsedSeconds: (number | null) | null;
      player: components["schemas"]["Player"];
      roomPlayerId: (number | null) | null;
      /** @enum {string} */
      team: "red" | "blue";
    };
    MatchSummary: {
      createdAt: string;
      endedAt: (string | null) | null;
      id: string;
      initiatedAt: (string | null) | null;
      recording: (components["schemas"]["Recording"] | null) | null;
      score: (components["schemas"]["MatchScore"] | null) | null;
      statEventSchema: (components["schemas"]["StatEventSchemaReference"] | null) | null;
      /** @enum {string} */
      status: "ongoing" | "completed";
      updatedAt: string;
    };
    NotFoundError: {
      error: {
        /** @constant */
        code: "NOT_FOUND";
        message: string;
      };
    };
    PageInfo: {
      limit: string | number;
      nextCursor: (string | null) | null;
    };
    Permission: {
      createdAt: string;
      key: string;
      title: string | null;
      updatedAt: string;
      /** Format: uuid */
      uuid: string;
    };
    Player: {
      account: (components["schemas"]["PlayerAccount"] | null) | null;
      country: (string | null) | null;
      createdAt: string;
      id: string;
      name: string;
      updatedAt: string;
    };
    PlayerAccount: {
      externalId: string;
      name: string;
      /** Format: uuid */
      uuid: string;
    };
    PublishStatEventSchemaVersionBody: {
      definition: unknown;
    };
    QueryMatchMetrics: {
      items: {
        contribution: {
          eventsCount: string | number;
          matchesCount: string | number;
          playersCount: string | number;
        };
        group: {
          externalId: string;
          /** Format: uuid */
          id: string;
          name: string;
          /** @constant */
          type: "account";
        } | {
          account: (components["schemas"]["PlayerAccount"] | null) | null;
          country: (string | null) | null;
          id: string;
          name: string;
          /** @constant */
          type: "player";
        };
        metrics: {
          [key: string]: unknown;
        };
        rank: string | number;
      }[];
      meta: {
        availableMetrics: {
          description: (string | null) | null;
          format?: string;
          hidden?: boolean;
          key: string;
          label: string;
          precision?: number;
          valueType?: string;
        }[];
        group: {
          /** @enum {string} */
          by: "account" | "player" | "account-or-player";
          /** @constant */
          identityMode: "current";
        };
        schema: {
          /** Format: uuid */
          id: string;
          isLatest: boolean;
          name: string;
          version: string | number;
        };
        sort: unknown[];
        totals: {
          eventsCount: string | number;
          groupsCount: string | number;
          matchesCount: string | number;
        };
      };
      page: components["schemas"]["PageInfo"];
    };
    QueryMatchMetricsBody: {
      filters?: {
        accountIds?: string[];
        eventTypes?: string[];
        matchIds?: string[];
        period?: {
          /** @enum {string} */
          field: "initiatedAt" | "endedAt" | "createdAt";
          from?: string;
          to?: string;
        };
        playerIds?: string[];
        statuses?: ("completed" | "ongoing")[];
      };
      group?: {
        /** @enum {string} */
        by: "account" | "player" | "account-or-player";
      };
      language?: string;
      metrics?: string[];
      page?: {
        cursor?: string;
        limit?: string | number;
      };
      schema: {
        /** Format: uuid */
        id: string;
        version?: string | number;
      } | {
        name: string;
        version?: string | number;
      };
      sort?: ({
        direction: "asc" | "desc";
        key: string;
        /** @constant */
        type: "metric";
      } | {
        direction: "asc" | "desc";
        /** @constant */
        key: "name";
        /** @constant */
        type: "field";
      })[];
    };
    Recording: {
      createdAt: string;
      id: string;
      sizeBytes: number;
      url: string;
    };
    RemovePermissionResponse: {
      deleted: boolean;
    };
    RemoveRoleResponse: {
      deleted: boolean;
    };
    ReportRoomReadyBody: {
      commId: string;
      roomLink: string;
    };
    ResolveSessionBody: {
      auth: (string | null) | null;
      conn: (string | null) | null;
      name: string;
      roomId: string;
      roomPlayerId: string | number;
    };
    ResolveSessionResponse: {
      account: null;
      playerId: string;
      /** @constant */
      status: "guest";
    } | {
      account: components["schemas"]["SessionAccount"];
      canonicalName: string;
      playerId: string;
      /** @constant */
      status: "signed_in";
    } | {
      account: components["schemas"]["SessionAccount"];
      playerId: string;
      /** @constant */
      status: "password_required";
    };
    Role: {
      bypassAllPermissions: boolean;
      createdAt: string;
      isDefault: boolean;
      name: string;
      /** @default [] */
      permissions: string[];
      title: string;
      updatedAt: string;
      /** Format: uuid */
      uuid: string;
    };
    Room: {
      closedAt: (string | null) | null;
      createdAt: string;
      failedAt: (string | null) | null;
      failureReason: (string | null) | null;
      /** Format: uuid */
      id: string;
      launchConfig: {
        [key: string]: string | number | boolean | null;
      };
      program: components["schemas"]["RoomResponseProgramSummary"];
      proxyEndpoint: (components["schemas"]["RoomResponseProxyEndpointSummary"] | null) | null;
      public: boolean;
      roomLink: (string | null) | null;
      /** @enum {string} */
      state: "provisioning" | "running" | "closed" | "failed";
      updatedAt: string;
      version: components["schemas"]["RoomResponseVersionSummary"];
    };
    RoomArtifact: {
      assetName: string;
      assetUrl: string;
      checksumSha256: string;
      storageKey: string;
    };
    RoomArtifactParams: {
      assetName: string;
      branch: string;
      sha: string;
    };
    RoomLaunchConfigField: {
      defaultValue?: string | number | boolean | null;
      description?: string;
      displayName: string;
      enumValues?: string[];
      envVar: string;
      key: string;
      maximum?: number;
      minimum?: number;
      required: boolean;
      /** @default false */
      secret: boolean;
      /** @enum {string} */
      valueType: "string" | "number" | "boolean";
    };
    RoomProgram: {
      createdAt: string;
      description: (string | null) | null;
      haxballTokenEnvVar: string;
      /** Format: uuid */
      id: string;
      /** @enum {string} */
      integrationMode: "external" | "integrated";
      launchConfigFields: components["schemas"]["RoomLaunchConfigField"][];
      name: string;
      releaseSource: components["schemas"]["RoomProgramReleaseSource"];
      title: (string | null) | null;
      updatedAt: string;
    };
    RoomProgramReleaseSource: {
      assetPattern: string;
      owner: string;
      repo: string;
    };
    RoomProgramVersion: {
      artifact: components["schemas"]["RoomProgramVersionArtifact"];
      createdAt: string;
      entrypoint: string;
      /** Format: uuid */
      id: string;
      /** @enum {string} */
      installStrategy: "none" | "npm-ci" | "npm-install";
      /** Format: uuid */
      programId: string;
      updatedAt: string;
      version: string;
    };
    RoomProgramVersionAlias: {
      alias: string;
      createdAt: string;
      /** Format: uuid */
      id: string;
      /** Format: uuid */
      programId: string;
      updatedAt: string;
      version: {
        /** Format: uuid */
        id: string;
        version: string;
      };
    };
    RoomProgramVersionArtifact: {
      assetName: string;
      assetUrl: string;
      checksumSha256?: string;
      publishedAt: string;
      releaseId: string;
      tagName: string;
    };
    RoomProxyEndpoint: {
      createdAt: string;
      displayName: string;
      enabled: boolean;
      /** Format: uuid */
      id: string;
      key: string;
      outboundIp: string;
      proxyUrl: string;
      updatedAt: string;
    };
    RoomResponseProgramSummary: {
      /** Format: uuid */
      id: string;
      name: string;
      title: (string | null) | null;
    };
    RoomResponseProxyEndpointSummary: {
      displayName: string;
      /** Format: uuid */
      id: string;
      key: string;
      outboundIp: string;
      proxyUrl: string;
    };
    RoomResponseVersionSummary: {
      /** Format: uuid */
      id: string;
      version: string;
    };
    SessionAccount: {
      externalId: string;
      name: string;
      /** Format: uuid */
      uuid: string;
    };
    StatEventSchema: {
      createdAt: string;
      definition: unknown;
      description: (string | null) | null;
      /** Format: uuid */
      id: string;
      isLatest: boolean;
      name: string;
      title: (string | null) | null;
      updatedAt: string;
      version: string | number;
    };
    StatEventSchemaReference: {
      /** Format: uuid */
      id: string;
      version: string | number;
    };
    UnauthorizedError: {
      error: {
        /** @constant */
        code: "UNAUTHORIZED";
        message: string;
      };
    };
    UpdateAccountBody: {
      externalId?: string;
      name?: string;
      password?: string;
      /** Format: uuid */
      roleUuid?: string;
    };
    UpdateMatchBody: {
      endedAt?: string;
      events?: components["schemas"]["MatchEventInput"][];
      initiatedAt?: string;
      score?: {
        blue: string | number;
        red: string | number;
      };
      statEventSchema?: {
        /** Format: uuid */
        id: string;
        version: string | number;
      };
      /** @enum {string} */
      status?: "ongoing" | "completed";
    };
    UpdatePermissionBody: {
      key?: string;
      title?: string | null;
    };
    UpdateRoleBody: {
      name?: string;
      /** @default [] */
      permissions: (string | "*")[];
      title?: string;
    };
    UpdateRoomProgramBody: {
      description?: (string | null) | null;
      haxballTokenEnvVar?: string;
      /** @enum {string} */
      integrationMode?: "external" | "integrated";
      launchConfigFields?: components["schemas"]["RoomLaunchConfigField"][];
      releaseSource?: {
        assetPattern: string;
        owner: string;
        repo: string;
      };
      title?: (string | null) | null;
    };
    UpdateRoomProxyEndpointBody: {
      displayName?: string;
      enabled?: boolean;
      outboundIp?: string;
      proxyUrl?: string;
    };
    UpdateStatEventSchemaBody: {
      definition: unknown;
    };
    UploadRoomArtifactBody: {
      assetName: string;
      branch: string;
      /**
       * Format: binary
       * @default File
       */
      file: string;
      sha: string;
    };
    UpsertRoomProgramVersionAliasBody: {
      version: string;
    };
    Value: {
      labels: {
        label: string;
        language: {
          code: string;
          createdAt: string;
          name: string;
          updatedAt: string;
        };
      }[];
      value: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
interface operations {
  getApiAccounts: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
        search?: string;
        name?: string;
        externalId?: string;
        roleUuid?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListAccounts"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiAccounts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAccountBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Account"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiAccountsBy-external-idByExternalId": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        externalId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Account"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiAccountsBy-nameByName": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        name: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Account"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiAccountsConfirm: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ConfirmAccountBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ConfirmAccountResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiAccountsByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Account"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  patchApiAccountsByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateAccountBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Account"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiJob-schedules": {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListJobSchedules"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiJob-schedulesById": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["JobSchedule"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiJobs: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListJobs"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiJobsById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Job"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiLanguages: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListLanguages"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiMatches: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListMatches"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiMatches: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateMatchBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Match"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiMatchesMetricsQuery: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["QueryMatchMetricsBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QueryMatchMetrics"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiMatchesById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Match"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  patchApiMatchesById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateMatchBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Match"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiMatchesByIdEvents: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AppendMatchEventsBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Match"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiMatchesByIdMetrics: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["MatchMetrics"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  patchApiMatchesByIdRecording: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AssociateMatchRecordingBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Match"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiMatchesByIdStat-events": {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListMatchStatEvents"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiMatchesByIdStat-events": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AddMatchStatEventBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["MatchStatEvent"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "patchApiMatchesByIdStat-eventsByEventId": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
        eventId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["DisableMatchStatEventBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["MatchStatEvent"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiPermissions: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListPermissions"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiPermissions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreatePermissionBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Permission"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiPermissionsByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Permission"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  deleteApiPermissionsByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RemovePermissionResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  patchApiPermissionsByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdatePermissionBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Permission"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiPlayers: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
        search?: string;
        accountUuid?: string;
        country?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListPlayers"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiPlayers: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreatePlayerBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Player"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiPlayersByExternalId: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        externalId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Player"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  patchApiPlayersByExternalIdAccount: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        externalId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AssociatePlayerAccountBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Player"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiPlayersByExternalIdMatches: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path: {
        externalId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListPlayerMatches"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiRecs: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListRecordings"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiRecs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["CreateRecordingBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Recording"];
        };
      };
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Recording"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiRecsById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Recording"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiRoles: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListRoles"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiRoles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateRoleBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Role"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiRolesByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Role"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  deleteApiRolesByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RemoveRoleResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  patchApiRolesByUuid: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateRoleBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Role"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiRoom-programs": {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListRoomPrograms"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiRoom-programs": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateRoomProgramBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomProgram"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiRoom-programsById": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomProgram"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "patchApiRoom-programsById": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateRoomProgramBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomProgram"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiRoom-programsByIdArtifacts": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["UploadRoomArtifactBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomArtifact"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiRoom-programsByIdVersion-aliases": {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListRoomProgramVersionAliases"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "putApiRoom-programsByIdVersion-aliasesByAlias": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
        alias: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpsertRoomProgramVersionAliasBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomProgramVersionAlias"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiRoom-programsByIdVersions": {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListRoomProgramVersions"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiRoom-programsByIdVersions": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateRoomProgramVersionBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomProgramVersion"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiRoom-programsByIdVersionsDiscover": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["DiscoverRoomProgramVersionsBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DiscoverRoomProgramVersionsResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiRoom-proxy-endpoints": {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListRoomProxyEndpoints"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiRoom-proxy-endpoints": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateRoomProxyEndpointBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomProxyEndpoint"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "patchApiRoom-proxy-endpointsById": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateRoomProxyEndpointBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RoomProxyEndpoint"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiRooms: {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
        state?: "open" | "provisioning" | "running" | "closed" | "failed" | "all";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListRooms"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiRooms: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateRoomBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Room"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiRoomsById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Room"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiRoomsByIdClose: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CloseRoomResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiRoomsByIdReady: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ReportRoomReadyBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Room"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiSessionsConfirm: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ConfirmSessionBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ConfirmSessionResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiSessionsResolve: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ResolveSessionBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ResolveSessionResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiStat-event-schemas": {
    parameters: {
      query?: {
        limit?: string | number;
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListStatEventSchemas"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiStat-event-schemas": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateStatEventSchemaBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["StatEventSchema"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiStat-event-schemasBy-nameByName": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        name: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["StatEventSchema"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiStat-event-schemasBy-nameByNameVersionsByVersion": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        name: string;
        version: string | number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["StatEventSchema"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiStat-event-schemasById": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["StatEventSchema"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "postApiStat-event-schemasByIdVersions": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PublishStatEventSchemaVersionBody"];
      };
    };
    responses: {
      /** @description Response for status 201 */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["StatEventSchema"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "getApiStat-event-schemasByIdVersionsByVersion": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
        version: string | number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["StatEventSchema"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  "patchApiStat-event-schemasByIdVersionsByVersion": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
        version: string | number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateStatEventSchemaBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["StatEventSchema"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postApiValuesBulk: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["BulkUpsertValuesBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Value"][];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getApiValuesByValue: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        value: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Value"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getArtifactsRoomsByBranchByShaByAssetName: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        branch: string;
        sha: string;
        assetName: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 404 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NotFoundError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  postAuth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateTokenBody"];
      };
    };
    responses: {
      /** @description Response for status 200 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CreateTokenResponse"];
        };
      };
      /** @description Response for status 400 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BadRequestOrValidationError"];
        };
      };
      /** @description Response for status 401 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UnauthorizedError"];
        };
      };
      /** @description Response for status 500 */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["InternalServerError"];
        };
      };
    };
  };
  getHealth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: never;
  };
}
//#endregion
//#region src/types.d.ts
type Schema<Name extends keyof components["schemas"]> = components["schemas"][Name];
type PaginatedResponse<T> = {
  items: T[];
  page: PageInfo;
};
type PaginationQuery = {
  limit?: number;
  cursor?: string;
};
type PageInfo = {
  limit: number;
  nextCursor: string | null;
};
type Account = Schema<"Account">;
type ConfirmAccountInput = Schema<"ConfirmAccountBody">;
type ConfirmAccountResponse = Schema<"ConfirmAccountResponse">;
type CreateAccountInput = Schema<"CreateAccountBody">;
type UpdateAccountInput = Schema<"UpdateAccountBody">;
type ListAccountsQuery = operations["getApiAccounts"]["parameters"]["query"];
type ListAccountsResponse = PaginatedResponse<Account>;
type Permission = Schema<"Permission">;
type CreatePermissionInput = Schema<"CreatePermissionBody">;
type UpdatePermissionInput = Schema<"UpdatePermissionBody">;
type RemovePermissionResponse = Schema<"RemovePermissionResponse">;
type ListPermissionsResponse = PaginatedResponse<Permission>;
type Role = Schema<"Role">;
type CreateRoleInput = Schema<"CreateRoleBody">;
type UpdateRoleInput = Schema<"UpdateRoleBody">;
type RemoveRoleResponse = Schema<"RemoveRoleResponse">;
type ListRolesResponse = PaginatedResponse<Role>;
type Player = Schema<"Player">;
type PlayerAccount = Schema<"PlayerAccount">;
type CreatePlayerInput = Schema<"CreatePlayerBody">;
type AssociatePlayerAccountInput = Schema<"AssociatePlayerAccountBody">;
type ListPlayersQuery = operations["getApiPlayers"]["parameters"]["query"];
type ListPlayersResponse = PaginatedResponse<Player>;
type ListPlayerMatchesResponse = PaginatedResponse<MatchSummary>;
type Recording = Schema<"Recording">;
type ListRecordingsResponse = PaginatedResponse<Recording>;
type Match = Schema<"Match">;
type MatchSummary = Schema<"MatchSummary">;
type MatchEvent = Schema<"MatchEvent">;
type MatchEventInput = Schema<"MatchEventInput">;
type MatchMetrics = Schema<"MatchMetrics">;
type QueryMatchMetricsInput = Schema<"QueryMatchMetricsBody">;
type QueryMatchMetricsResponse = Schema<"QueryMatchMetrics">;
type MatchScore = Schema<"MatchScore">;
type MatchStatEvent = Schema<"MatchStatEvent">;
type MatchStint = Schema<"MatchStint">;
type CreateMatchInput = Schema<"CreateMatchBody">;
type UpdateMatchInput = Schema<"UpdateMatchBody">;
type AppendMatchEventsInput = Schema<"AppendMatchEventsBody">;
type AddMatchStatEventInput = Schema<"AddMatchStatEventBody">;
type DisableMatchStatEventInput = Schema<"DisableMatchStatEventBody">;
type AssociateMatchRecordingInput = Schema<"AssociateMatchRecordingBody">;
type ListMatchesResponse = PaginatedResponse<MatchSummary>;
type ListMatchStatEventsResponse = PaginatedResponse<MatchStatEvent>;
type CreateTokenInput = Schema<"CreateTokenBody">;
type CreateTokenResponse = Schema<"CreateTokenResponse">;
type SessionAccount = Schema<"SessionAccount">;
type ResolveSessionInput = Schema<"ResolveSessionBody">;
type ResolveSessionResponse = Schema<"ResolveSessionResponse">;
type ConfirmSessionInput = Schema<"ConfirmSessionBody">;
type ConfirmSessionResponse = Schema<"ConfirmSessionResponse">;
type LaunchConfig = {
  [key: string]: string | number | boolean | null;
};
type Room = Schema<"Room">;
type RoomLaunchConfigField = Schema<"RoomLaunchConfigField">;
type RoomProgram = Schema<"RoomProgram">;
type RoomProgramReleaseSource = Schema<"RoomProgramReleaseSource">;
type RoomProgramVersion = Schema<"RoomProgramVersion">;
type RoomProgramVersionArtifact = Schema<"RoomProgramVersionArtifact">;
type RoomProxyEndpoint = Schema<"RoomProxyEndpoint">;
type RoomResponseProgramSummary = Schema<"RoomResponseProgramSummary">;
type RoomResponseProxyEndpointSummary = Schema<"RoomResponseProxyEndpointSummary">;
type RoomResponseVersionSummary = Schema<"RoomResponseVersionSummary">;
type CreateRoomInput = Schema<"CreateRoomBody">;
type ReportRoomReadyInput = Schema<"ReportRoomReadyBody">;
type CreateRoomProgramInput = Schema<"CreateRoomProgramBody">;
type UpdateRoomProgramInput = Schema<"UpdateRoomProgramBody">;
type CreateRoomProgramVersionInput = Schema<"CreateRoomProgramVersionBody">;
type DiscoverRoomProgramVersionsInput = Schema<"DiscoverRoomProgramVersionsBody">;
type DiscoverRoomProgramVersionsResponse = Schema<"DiscoverRoomProgramVersionsResponse">;
type CreateRoomProxyEndpointInput = Schema<"CreateRoomProxyEndpointBody">;
type UpdateRoomProxyEndpointInput = Schema<"UpdateRoomProxyEndpointBody">;
type ListRoomsQuery = PaginationQuery & {
  state?: "open" | "provisioning" | "running" | "closed" | "all";
};
type ListRoomsResponse = PaginatedResponse<Room>;
type ListRoomProgramsResponse = PaginatedResponse<RoomProgram>;
type ListRoomProgramVersionsResponse = PaginatedResponse<RoomProgramVersion>;
type ListRoomProxyEndpointsResponse = PaginatedResponse<RoomProxyEndpoint>;
type StatEventSchema = Schema<"StatEventSchema">;
type StatEventSchemaReference = Schema<"StatEventSchemaReference">;
type CreateStatEventSchemaInput = Schema<"CreateStatEventSchemaBody">;
type PublishStatEventSchemaVersionInput = Schema<"PublishStatEventSchemaVersionBody">;
type UpdateStatEventSchemaInput = Schema<"UpdateStatEventSchemaBody">;
type ListStatEventSchemasResponse = PaginatedResponse<StatEventSchema>;
type CreateRecordingInput = {
  file: Blob | ArrayBuffer | ArrayBufferView;
  filename?: string;
  contentType?: string;
};
//#endregion
export { type AbortedFailure, Account, AddMatchStatEventInput, type ApiErrorCode, type ApiFailure, type ApiResponseFailure, type ApiResult, type ApiSuccess, AppendMatchEventsInput, AssociateMatchRecordingInput, AssociatePlayerAccountInput, ConfirmAccountInput, ConfirmAccountResponse, ConfirmSessionInput, ConfirmSessionResponse, CreateAccountInput, CreateMatchInput, CreatePermissionInput, CreatePlayerInput, CreateRecordingInput, CreateRoleInput, CreateRoomInput, CreateRoomProgramInput, CreateRoomProgramVersionInput, CreateRoomProxyEndpointInput, CreateStatEventSchemaInput, CreateTokenInput, CreateTokenResponse, DisableMatchStatEventInput, DiscoverRoomProgramVersionsInput, DiscoverRoomProgramVersionsResponse, type FetchLike, HaxFootballApiClient, type HaxFootballApiClientOptions, type HaxFootballApiResources, type InvalidResponseFailure, LaunchConfig, ListAccountsQuery, ListAccountsResponse, ListMatchStatEventsResponse, ListMatchesResponse, ListPermissionsResponse, ListPlayerMatchesResponse, ListPlayersQuery, ListPlayersResponse, ListRecordingsResponse, ListRolesResponse, ListRoomProgramVersionsResponse, ListRoomProgramsResponse, ListRoomProxyEndpointsResponse, ListRoomsQuery, ListRoomsResponse, ListStatEventSchemasResponse, Match, MatchEvent, MatchEventInput, MatchMetrics, MatchScore, MatchStatEvent, MatchStint, MatchSummary, type MaybePromise, type NetworkFailure, PageInfo, PaginatedResponse, PaginationQuery, Permission, Player, PlayerAccount, PublishStatEventSchemaVersionInput, QueryMatchMetricsInput, QueryMatchMetricsResponse, Recording, RemovePermissionResponse, RemoveRoleResponse, ReportRoomReadyInput, type RequestOptions, ResolveSessionInput, ResolveSessionResponse, type ResponseMeta, Role, Room, RoomLaunchConfigField, RoomProgram, RoomProgramReleaseSource, RoomProgramVersion, RoomProgramVersionArtifact, RoomProxyEndpoint, RoomResponseProgramSummary, RoomResponseProxyEndpointSummary, RoomResponseVersionSummary, Schema, SessionAccount, StatEventSchema, StatEventSchemaReference, type TokenProvider, UpdateAccountInput, UpdateMatchInput, UpdatePermissionInput, UpdateRoleInput, UpdateRoomProgramInput, UpdateRoomProxyEndpointInput, UpdateStatEventSchemaInput, type components, createHaxFootballApiClient, createHaxFootballRoomApiClient, type operations, type paths };
//# sourceMappingURL=index.d.ts.map