import type { HaxFootballApiClient } from "../client";
import type {
  AddMatchEventInput,
  AssociateMatchRecordingInput,
  CreateMatchInput,
  DisableMatchEventInput,
  ListMatchesQuery,
  ListMatchesResponse,
  ListMatchEventsResponse,
  Match,
  MatchEvent,
  MatchMetrics,
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
    listEvents: (id: string, query?: PaginationQuery, config?: RequestConfig) =>
      client.request<ListMatchEventsResponse>({
        path: `/matches/${encodeURIComponent(id)}/events`,
        query,
        ...config
      }),
    addEvent: (id: string, body: AddMatchEventInput, config?: RequestConfig) =>
      client.request<MatchEvent>({
        method: "POST",
        path: `/matches/${encodeURIComponent(id)}/events`,
        body,
        ...config
      }),
    disableEvent: (
      id: string,
      eventId: string,
      body: DisableMatchEventInput = { disabled: true },
      config?: RequestConfig
    ) =>
      client.request<MatchEvent>({
        method: "PATCH",
        path: `/matches/${encodeURIComponent(id)}/events/${encodeURIComponent(
          eventId
        )}`,
        body,
        ...config
      })
  };
}
