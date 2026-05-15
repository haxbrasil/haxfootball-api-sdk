import type { HaxFootballApiClient } from "../client";
import type {
  ConfirmSessionInput,
  ConfirmSessionResponse,
  ResolveSessionInput,
  ResolveSessionResponse
} from "../types";
import type { RequestConfig } from "./shared";

export function createSessionsResource(client: HaxFootballApiClient) {
  return {
    resolve: (body: ResolveSessionInput, config?: RequestConfig) =>
      client.request<ResolveSessionResponse>({
        method: "POST",
        path: "/sessions/resolve",
        body,
        ...config
      }),
    confirm: (body: ConfirmSessionInput, config?: RequestConfig) =>
      client.request<ConfirmSessionResponse>({
        method: "POST",
        path: "/sessions/confirm",
        body,
        ...config
      })
  };
}
