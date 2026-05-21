import type { HaxFootballApiClient } from "../client";
import type {
  AssociatePlayerAccountInput,
  CreatePlayerInput,
  ListPlayerMatchesResponse,
  ListPlayersQuery,
  ListPlayersResponse,
  PaginationQuery,
  Player
} from "../types";
import type { RequestConfig } from "./shared";

export function createPlayersResource(client: HaxFootballApiClient) {
  return {
    list: (query?: ListPlayersQuery, config?: RequestConfig) =>
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
    listMatches: (
      externalId: string,
      query?: PaginationQuery,
      config?: RequestConfig
    ) =>
      client.request<ListPlayerMatchesResponse>({
        path: `/players/${encodeURIComponent(externalId)}/matches`,
        query,
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
  };
}
