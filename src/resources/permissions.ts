import type { HaxFootballApiClient } from "../client";
import type {
  CreatePermissionInput,
  ListPermissionsResponse,
  PaginationQuery,
  Permission,
  RemovePermissionResponse,
  UpdatePermissionInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createPermissionsResource(client: HaxFootballApiClient) {
  return {
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
  };
}
