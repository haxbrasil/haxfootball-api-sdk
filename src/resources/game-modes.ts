import type { HaxFootballApiClient } from "../client";
import type {
  CreateGameModeInput,
  GameMode,
  ListGameModesQuery,
  ListGameModesResponse,
  UpdateGameModeInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createGameModesResource(client: HaxFootballApiClient) {
  return {
    list: (query?: ListGameModesQuery, config?: RequestConfig) =>
      client.request<ListGameModesResponse>({
        path: "/game-modes",
        query,
        ...config
      }),
    get: (id: string, config?: RequestConfig) =>
      client.request<GameMode>({
        path: `/game-modes/${encodeURIComponent(id)}`,
        ...config
      }),
    getByName: (name: string, config?: RequestConfig) =>
      client.request<GameMode>({
        path: `/game-modes/by-name/${encodeURIComponent(name)}`,
        ...config
      }),
    create: (body: CreateGameModeInput, config?: RequestConfig) =>
      client.request<GameMode>({
        method: "POST",
        path: "/game-modes",
        body,
        ...config
      }),
    update: (id: string, body: UpdateGameModeInput, config?: RequestConfig) =>
      client.request<GameMode>({
        method: "PATCH",
        path: `/game-modes/${encodeURIComponent(id)}`,
        body,
        ...config
      })
  };
}
