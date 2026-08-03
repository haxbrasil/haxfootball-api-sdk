import type { HaxFootballApiClient } from "../client";
import type {
  Clip,
  ClipConfig,
  CreateClipInput,
  ListClipsQuery,
  ListClipsResponse,
  UpdateClipInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createClipsResource(client: HaxFootballApiClient) {
  return {
    config: (config?: RequestConfig) =>
      client.request<ClipConfig>({
        path: "/clips/config",
        ...config
      }),
    list: (query?: ListClipsQuery, config?: RequestConfig) =>
      client.request<ListClipsResponse>({
        path: "/clips",
        query,
        ...config
      }),
    get: (id: string, config?: RequestConfig) =>
      client.request<Clip>({
        path: `/clips/${encodeURIComponent(id)}`,
        ...config
      }),
    create: (body: CreateClipInput, config?: RequestConfig) =>
      client.request<Clip>({
        method: "POST",
        path: "/clips",
        body,
        ...config
      }),
    update: (id: string, body: UpdateClipInput, config?: RequestConfig) =>
      client.request<Clip>({
        method: "PATCH",
        path: `/clips/${encodeURIComponent(id)}`,
        body,
        ...config
      }),
    archive: (id: string, config?: RequestConfig) =>
      client.request<void>({
        method: "DELETE",
        path: `/clips/${encodeURIComponent(id)}`,
        ...config
      })
  };
}
