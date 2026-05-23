import type { HaxFootballApiClient } from "../client";
import type {
  AddMatchStatEventInput,
  AppendMatchEventsInput,
  AssociateMatchRecordingInput,
  CreateMatchInput,
  DisableMatchStatEventInput,
  ListMatchesQuery,
  ListMatchesResponse,
  ListMatchStatEventsResponse,
  Match,
  MatchMetrics,
  MatchStatEvent,
  PaginationQuery,
  QueryMatchMetricsInput,
  QueryMatchMetricsResponse,
  UpdateMatchInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createMatchesResource(client: HaxFootballApiClient) {
  return {
    list: (query?: ListMatchesQuery, config?: RequestConfig) =>
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
    queryMetrics: (body: QueryMatchMetricsInput, config?: RequestConfig) =>
      client.request<QueryMatchMetricsResponse>({
        method: "POST",
        path: "/matches/metrics/query",
        body,
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
  };
}
