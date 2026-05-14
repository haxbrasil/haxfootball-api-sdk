import type { HaxFootballApiClient } from "../client";
import type { ApiResult } from "../result";
import type { CreateTokenInput, CreateTokenResponse } from "../types";
import type { RequestConfig } from "./shared";

export function createAuthResource(client: HaxFootballApiClient) {
  return {
    createToken: (
      body: CreateTokenInput,
      config?: RequestConfig
    ): Promise<ApiResult<CreateTokenResponse>> =>
      client.requestAuth<CreateTokenResponse>({
        method: "POST",
        body,
        ...config
      })
  };
}
