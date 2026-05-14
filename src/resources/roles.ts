import type { HaxFootballApiClient } from "../client";
import type {
  CreateRoleInput,
  ListRolesResponse,
  PaginationQuery,
  RemoveRoleResponse,
  Role,
  UpdateRoleInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createRolesResource(client: HaxFootballApiClient) {
  return {
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
  };
}
