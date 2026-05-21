import type { HaxFootballApiClient } from "../client";
import type {
  CreateStatEventSchemaInput,
  ListStatEventSchemasResponse,
  PaginationQuery,
  PublishStatEventSchemaVersionInput,
  StatEventSchema,
  UpdateStatEventSchemaInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createStatEventSchemasResource(client: HaxFootballApiClient) {
  return {
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
    getLatestByName: (name: string, config?: RequestConfig) =>
      client.request<StatEventSchema>({
        path: `/stat-event-schemas/by-name/${encodeURIComponent(name)}`,
        ...config
      }),
    getVersion: (id: string, version: number, config?: RequestConfig) =>
      client.request<StatEventSchema>({
        path: `/stat-event-schemas/${encodeURIComponent(
          id
        )}/versions/${encodeURIComponent(String(version))}`,
        ...config
      }),
    getVersionByName: (name: string, version: number, config?: RequestConfig) =>
      client.request<StatEventSchema>({
        path: `/stat-event-schemas/by-name/${encodeURIComponent(
          name
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
  };
}
