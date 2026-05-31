import type { HaxFootballApiClient } from "../client";
import type {
  CreateEventSchemaInput,
  EventSchema,
  ListEventSchemasResponse,
  PaginationQuery,
  PublishEventSchemaVersionInput,
  UpdateEventSchemaInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createEventSchemasResource(client: HaxFootballApiClient) {
  return {
    list: (query?: PaginationQuery, config?: RequestConfig) =>
      client.request<ListEventSchemasResponse>({
        path: "/event-schemas",
        query,
        ...config
      }),
    getLatest: (id: string, config?: RequestConfig) =>
      client.request<EventSchema>({
        path: `/event-schemas/${encodeURIComponent(id)}`,
        ...config
      }),
    getLatestByName: (name: string, config?: RequestConfig) =>
      client.request<EventSchema>({
        path: `/event-schemas/by-name/${encodeURIComponent(name)}`,
        ...config
      }),
    getVersion: (id: string, version: number, config?: RequestConfig) =>
      client.request<EventSchema>({
        path: `/event-schemas/${encodeURIComponent(
          id
        )}/versions/${encodeURIComponent(String(version))}`,
        ...config
      }),
    getVersionByName: (name: string, version: number, config?: RequestConfig) =>
      client.request<EventSchema>({
        path: `/event-schemas/by-name/${encodeURIComponent(
          name
        )}/versions/${encodeURIComponent(String(version))}`,
        ...config
      }),
    create: (body: CreateEventSchemaInput, config?: RequestConfig) =>
      client.request<EventSchema>({
        method: "POST",
        path: "/event-schemas",
        body,
        ...config
      }),
    publishVersion: (
      id: string,
      body: PublishEventSchemaVersionInput,
      config?: RequestConfig
    ) =>
      client.request<EventSchema>({
        method: "POST",
        path: `/event-schemas/${encodeURIComponent(id)}/versions`,
        body,
        ...config
      }),
    updateVersion: (
      id: string,
      version: number,
      body: UpdateEventSchemaInput,
      config?: RequestConfig
    ) =>
      client.request<EventSchema>({
        method: "PATCH",
        path: `/event-schemas/${encodeURIComponent(
          id
        )}/versions/${encodeURIComponent(String(version))}`,
        body,
        ...config
      })
  };
}
