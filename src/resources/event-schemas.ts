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
      }),
    getDraft: (id: string, config?: RequestConfig) =>
      client.request<Record<string, unknown>>({
        path: `/event-schemas/${encodeURIComponent(id)}/draft`,
        ...config
      }),
    saveDraft: (
      id: string,
      body: { definition: unknown; expectedRevision?: number },
      config?: RequestConfig
    ) =>
      client.request<Record<string, unknown>>({
        method: "PUT",
        path: `/event-schemas/${encodeURIComponent(id)}/draft`,
        body,
        ...config
      }),
    validateDraft: (id: string, config?: RequestConfig) =>
      client.request<{ valid: boolean; issues: string[] }>({
        method: "POST",
        path: `/event-schemas/${encodeURIComponent(id)}/draft/validate`,
        ...config
      }),
    clone: (
      id: string,
      body: { name: string; title?: string; description?: string },
      config?: RequestConfig
    ) =>
      client.request<Record<string, unknown>>({
        method: "POST",
        path: `/event-schemas/${encodeURIComponent(id)}/clone`,
        body,
        ...config
      })
  };
}
