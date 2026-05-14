import type { HaxFootballApiClient } from "./client";
import type { ApiResult } from "./result";
import type {
  Account,
  AddMatchStatEventInput,
  AppendMatchEventsInput,
  AssociateMatchRecordingInput,
  AssociatePlayerAccountInput,
  ConfirmAccountInput,
  ConfirmAccountResponse,
  CreateAccountInput,
  CreateMatchInput,
  CreatePermissionInput,
  CreatePlayerInput,
  CreateRecordingInput,
  CreateRoleInput,
  CreateRoomInput,
  CreateRoomProgramInput,
  CreateRoomProgramVersionInput,
  CreateRoomProxyEndpointInput,
  CreateStatEventSchemaInput,
  CreateTokenInput,
  CreateTokenResponse,
  DisableMatchStatEventInput,
  DiscoverRoomProgramVersionsInput,
  DiscoverRoomProgramVersionsResponse,
  ListAccountsResponse,
  ListMatchesResponse,
  ListMatchStatEventsResponse,
  ListPermissionsResponse,
  ListPlayersResponse,
  ListRecordingsResponse,
  ListRolesResponse,
  ListRoomProgramsResponse,
  ListRoomProgramVersionsResponse,
  ListRoomProxyEndpointsResponse,
  ListRoomsQuery,
  ListRoomsResponse,
  ListStatEventSchemasResponse,
  Match,
  MatchMetrics,
  MatchStatEvent,
  PaginationQuery,
  Permission,
  Player,
  PublishStatEventSchemaVersionInput,
  Recording,
  RemovePermissionResponse,
  RemoveRoleResponse,
  ReportRoomReadyInput,
  Role,
  Room,
  RoomProgram,
  RoomProgramVersion,
  RoomProxyEndpoint,
  StatEventSchema,
  UpdateAccountInput,
  UpdateMatchInput,
  UpdatePermissionInput,
  UpdateRoleInput,
  UpdateRoomProgramInput,
  UpdateRoomProxyEndpointInput,
  UpdateStatEventSchemaInput
} from "./types";

type RequestConfig = {
  signal?: AbortSignal;
  timeoutMs?: number;
};

export type HaxFootballApiResources = ReturnType<typeof createResources>;

export function createResources(client: HaxFootballApiClient) {
  return {
    accounts: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListAccountsResponse>({
          path: "/accounts",
          query,
          ...config
        }),
      get: (uuid: string, config?: RequestConfig) =>
        client.request<Account>({
          path: `/accounts/${encodeURIComponent(uuid)}`,
          ...config
        }),
      create: (body: CreateAccountInput, config?: RequestConfig) =>
        client.request<Account>({
          method: "POST",
          path: "/accounts",
          body,
          ...config
        }),
      confirm: (body: ConfirmAccountInput, config?: RequestConfig) =>
        client.request<ConfirmAccountResponse>({
          method: "POST",
          path: "/accounts/confirm",
          body,
          ...config
        }),
      update: (
        uuid: string,
        body: UpdateAccountInput,
        config?: RequestConfig
      ) =>
        client.request<Account>({
          method: "PATCH",
          path: `/accounts/${encodeURIComponent(uuid)}`,
          body,
          ...config
        })
    },
    auth: {
      createToken: (
        body: CreateTokenInput,
        config?: RequestConfig
      ): Promise<ApiResult<CreateTokenResponse>> =>
        client.requestAuth<CreateTokenResponse>({
          method: "POST",
          body,
          ...config
        })
    },
    matches: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListMatchesResponse>({
          path: "/matches",
          query,
          ...config
        }),
      get: (id: string, config?: RequestConfig) =>
        client.request<Match>({
          path: `/matches/${encodeURIComponent(id)}`,
          ...config
        }),
      create: (body: CreateMatchInput, config?: RequestConfig) =>
        client.request<Match>({
          method: "POST",
          path: "/matches",
          body,
          ...config
        }),
      update: (id: string, body: UpdateMatchInput, config?: RequestConfig) =>
        client.request<Match>({
          method: "PATCH",
          path: `/matches/${encodeURIComponent(id)}`,
          body,
          ...config
        }),
      appendEvents: (
        id: string,
        body: AppendMatchEventsInput,
        config?: RequestConfig
      ) =>
        client.request<Match>({
          method: "POST",
          path: `/matches/${encodeURIComponent(id)}/events`,
          body,
          ...config
        }),
      getMetrics: (id: string, config?: RequestConfig) =>
        client.request<MatchMetrics>({
          path: `/matches/${encodeURIComponent(id)}/metrics`,
          ...config
        }),
      associateRecording: (
        id: string,
        body: AssociateMatchRecordingInput,
        config?: RequestConfig
      ) =>
        client.request<Match>({
          method: "PATCH",
          path: `/matches/${encodeURIComponent(id)}/recording`,
          body,
          ...config
        }),
      listStatEvents: (
        id: string,
        query?: PaginationQuery,
        config?: RequestConfig
      ) =>
        client.request<ListMatchStatEventsResponse>({
          path: `/matches/${encodeURIComponent(id)}/stat-events`,
          query,
          ...config
        }),
      addStatEvent: (
        id: string,
        body: AddMatchStatEventInput,
        config?: RequestConfig
      ) =>
        client.request<MatchStatEvent>({
          method: "POST",
          path: `/matches/${encodeURIComponent(id)}/stat-events`,
          body,
          ...config
        }),
      disableStatEvent: (
        id: string,
        eventId: string,
        body: DisableMatchStatEventInput = { disabled: true },
        config?: RequestConfig
      ) =>
        client.request<MatchStatEvent>({
          method: "PATCH",
          path: `/matches/${encodeURIComponent(id)}/stat-events/${encodeURIComponent(
            eventId
          )}`,
          body,
          ...config
        })
    },
    permissions: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListPermissionsResponse>({
          path: "/permissions",
          query,
          ...config
        }),
      get: (uuid: string, config?: RequestConfig) =>
        client.request<Permission>({
          path: `/permissions/${encodeURIComponent(uuid)}`,
          ...config
        }),
      create: (body: CreatePermissionInput, config?: RequestConfig) =>
        client.request<Permission>({
          method: "POST",
          path: "/permissions",
          body,
          ...config
        }),
      update: (
        uuid: string,
        body: UpdatePermissionInput,
        config?: RequestConfig
      ) =>
        client.request<Permission>({
          method: "PATCH",
          path: `/permissions/${encodeURIComponent(uuid)}`,
          body,
          ...config
        }),
      remove: (uuid: string, config?: RequestConfig) =>
        client.request<RemovePermissionResponse>({
          method: "DELETE",
          path: `/permissions/${encodeURIComponent(uuid)}`,
          ...config
        })
    },
    players: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListPlayersResponse>({
          path: "/players",
          query,
          ...config
        }),
      get: (externalId: string, config?: RequestConfig) =>
        client.request<Player>({
          path: `/players/${encodeURIComponent(externalId)}`,
          ...config
        }),
      create: (body: CreatePlayerInput, config?: RequestConfig) =>
        client.request<Player>({
          method: "POST",
          path: "/players",
          body,
          ...config
        }),
      associateAccount: (
        externalId: string,
        body: AssociatePlayerAccountInput,
        config?: RequestConfig
      ) =>
        client.request<Player>({
          method: "PATCH",
          path: `/players/${encodeURIComponent(externalId)}/account`,
          body,
          ...config
        })
    },
    recordings: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListRecordingsResponse>({
          path: "/recs",
          query,
          ...config
        }),
      get: (id: string, config?: RequestConfig) =>
        client.request<Recording>({
          path: `/recs/${encodeURIComponent(id)}`,
          ...config
        }),
      create: (input: CreateRecordingInput, config?: RequestConfig) =>
        client.request<Recording>({
          method: "POST",
          path: "/recs",
          formData: recordingFormData(input),
          ...config
        })
    },
    roles: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListRolesResponse>({
          path: "/roles",
          query,
          ...config
        }),
      get: (uuid: string, config?: RequestConfig) =>
        client.request<Role>({
          path: `/roles/${encodeURIComponent(uuid)}`,
          ...config
        }),
      create: (body: CreateRoleInput, config?: RequestConfig) =>
        client.request<Role>({
          method: "POST",
          path: "/roles",
          body,
          ...config
        }),
      update: (uuid: string, body: UpdateRoleInput, config?: RequestConfig) =>
        client.request<Role>({
          method: "PATCH",
          path: `/roles/${encodeURIComponent(uuid)}`,
          body,
          ...config
        }),
      remove: (uuid: string, config?: RequestConfig) =>
        client.request<RemoveRoleResponse>({
          method: "DELETE",
          path: `/roles/${encodeURIComponent(uuid)}`,
          ...config
        })
    },
    rooms: {
      list: (query?: ListRoomsQuery, config?: RequestConfig) =>
        client.request<ListRoomsResponse>({
          path: "/rooms",
          query,
          ...config
        }),
      get: (id: string, config?: RequestConfig) =>
        client.request<Room>({
          path: `/rooms/${encodeURIComponent(id)}`,
          ...config
        }),
      create: (body: CreateRoomInput, config?: RequestConfig) =>
        client.request<Room>({
          method: "POST",
          path: "/rooms",
          body,
          ...config
        }),
      close: (id: string, config?: RequestConfig) =>
        client.request<Room>({
          method: "POST",
          path: `/rooms/${encodeURIComponent(id)}/close`,
          ...config
        }),
      reportReady: (
        id: string,
        body: ReportRoomReadyInput,
        config?: RequestConfig
      ) =>
        client.request<Room>({
          method: "POST",
          path: `/rooms/${encodeURIComponent(id)}/ready`,
          body,
          ...config
        }),
      programs: {
        list: (query?: PaginationQuery, config?: RequestConfig) =>
          client.request<ListRoomProgramsResponse>({
            path: "/room-programs",
            query,
            ...config
          }),
        get: (id: string, config?: RequestConfig) =>
          client.request<RoomProgram>({
            path: `/room-programs/${encodeURIComponent(id)}`,
            ...config
          }),
        create: (body: CreateRoomProgramInput, config?: RequestConfig) =>
          client.request<RoomProgram>({
            method: "POST",
            path: "/room-programs",
            body,
            ...config
          }),
        update: (
          id: string,
          body: UpdateRoomProgramInput,
          config?: RequestConfig
        ) =>
          client.request<RoomProgram>({
            method: "PATCH",
            path: `/room-programs/${encodeURIComponent(id)}`,
            body,
            ...config
          }),
        listVersions: (
          id: string,
          query?: PaginationQuery,
          config?: RequestConfig
        ) =>
          client.request<ListRoomProgramVersionsResponse>({
            path: `/room-programs/${encodeURIComponent(id)}/versions`,
            query,
            ...config
          }),
        createVersion: (
          id: string,
          body: CreateRoomProgramVersionInput,
          config?: RequestConfig
        ) =>
          client.request<RoomProgramVersion>({
            method: "POST",
            path: `/room-programs/${encodeURIComponent(id)}/versions`,
            body,
            ...config
          }),
        discoverVersions: (
          id: string,
          body: DiscoverRoomProgramVersionsInput,
          config?: RequestConfig
        ) =>
          client.request<DiscoverRoomProgramVersionsResponse>({
            method: "POST",
            path: `/room-programs/${encodeURIComponent(id)}/versions/discover`,
            body,
            ...config
          })
      },
      proxyEndpoints: {
        list: (query?: PaginationQuery, config?: RequestConfig) =>
          client.request<ListRoomProxyEndpointsResponse>({
            path: "/room-proxy-endpoints",
            query,
            ...config
          }),
        create: (body: CreateRoomProxyEndpointInput, config?: RequestConfig) =>
          client.request<RoomProxyEndpoint>({
            method: "POST",
            path: "/room-proxy-endpoints",
            body,
            ...config
          }),
        update: (
          id: string,
          body: UpdateRoomProxyEndpointInput,
          config?: RequestConfig
        ) =>
          client.request<RoomProxyEndpoint>({
            method: "PATCH",
            path: `/room-proxy-endpoints/${encodeURIComponent(id)}`,
            body,
            ...config
          })
      }
    },
    statEventSchemas: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListStatEventSchemasResponse>({
          path: "/stat-event-schemas",
          query,
          ...config
        }),
      getLatest: (id: string, config?: RequestConfig) =>
        client.request<StatEventSchema>({
          path: `/stat-event-schemas/${encodeURIComponent(id)}`,
          ...config
        }),
      getVersion: (id: string, version: number, config?: RequestConfig) =>
        client.request<StatEventSchema>({
          path: `/stat-event-schemas/${encodeURIComponent(
            id
          )}/versions/${encodeURIComponent(String(version))}`,
          ...config
        }),
      create: (body: CreateStatEventSchemaInput, config?: RequestConfig) =>
        client.request<StatEventSchema>({
          method: "POST",
          path: "/stat-event-schemas",
          body,
          ...config
        }),
      publishVersion: (
        id: string,
        body: PublishStatEventSchemaVersionInput,
        config?: RequestConfig
      ) =>
        client.request<StatEventSchema>({
          method: "POST",
          path: `/stat-event-schemas/${encodeURIComponent(id)}/versions`,
          body,
          ...config
        }),
      updateVersion: (
        id: string,
        version: number,
        body: UpdateStatEventSchemaInput,
        config?: RequestConfig
      ) =>
        client.request<StatEventSchema>({
          method: "PATCH",
          path: `/stat-event-schemas/${encodeURIComponent(
            id
          )}/versions/${encodeURIComponent(String(version))}`,
          body,
          ...config
        })
    }
  };
}

function recordingFormData(input: CreateRecordingInput): FormData {
  const formData = new FormData();
  const filename = input.filename ?? "match.hbr2";
  const blob = toBlob(input.file, input.contentType);

  formData.set("file", blob, filename);

  return formData;
}

function toBlob(
  input: Blob | ArrayBuffer | ArrayBufferView,
  contentType = "application/octet-stream"
): Blob {
  if (input instanceof Blob) {
    return input;
  }

  if (ArrayBuffer.isView(input)) {
    const bytes = new Uint8Array(
      input.buffer,
      input.byteOffset,
      input.byteLength
    );
    const copy = new Uint8Array(bytes.byteLength);

    copy.set(bytes);

    return new Blob([copy], { type: contentType });
  }

  return new Blob([input], { type: contentType });
}
