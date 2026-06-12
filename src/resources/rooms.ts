import type { HaxFootballApiClient } from "../client";
import type {
  AddRoomEventInput,
  AddRoomIncidentInput,
  CreateRoomInput,
  CreateRoomProgramInput,
  CreateRoomProgramVersionInput,
  CreateRoomProxyEndpointInput,
  DiscoverRoomProgramVersionsInput,
  DiscoverRoomProgramVersionsResponse,
  ListRoomProgramsResponse,
  ListRoomProgramVersionsResponse,
  ListRoomProxyEndpointsResponse,
  ListRoomEventsResponse,
  ListRoomIncidentsResponse,
  ListRoomsQuery,
  ListRoomsResponse,
  PaginationQuery,
  ReportRoomReadyInput,
  Room,
  RoomEvent,
  RoomIncident,
  RoomProgram,
  RoomProgramVersion,
  RoomProxyEndpoint,
  UpdateRoomProgramInput,
  UpdateRoomProxyEndpointInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createRoomsResource(client: HaxFootballApiClient) {
  return {
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
    listEvents: (id: string, query?: PaginationQuery, config?: RequestConfig) =>
      client.request<ListRoomEventsResponse>({
        path: `/rooms/${encodeURIComponent(id)}/events`,
        query,
        ...config
      }),
    addEvent: (id: string, body: AddRoomEventInput, config?: RequestConfig) =>
      client.request<RoomEvent>({
        method: "POST",
        path: `/rooms/${encodeURIComponent(id)}/events`,
        body,
        ...config
      }),
    listIncidents: (
      id: string,
      query?: PaginationQuery,
      config?: RequestConfig
    ) =>
      client.request<ListRoomIncidentsResponse>({
        path: `/rooms/${encodeURIComponent(id)}/incidents`,
        query,
        ...config
      }),
    addIncident: (
      id: string,
      body: AddRoomIncidentInput,
      config?: RequestConfig
    ) =>
      client.request<RoomIncident>({
        method: "POST",
        path: `/rooms/${encodeURIComponent(id)}/incidents`,
        body,
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
    programs: createRoomProgramsResource(client),
    proxyEndpoints: createRoomProxyEndpointsResource(client)
  };
}

function createRoomProgramsResource(client: HaxFootballApiClient) {
  return {
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
  };
}

function createRoomProxyEndpointsResource(client: HaxFootballApiClient) {
  return {
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
  };
}
