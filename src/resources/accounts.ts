import type { HaxFootballApiClient } from "../client";
import type {
  Account,
  ConfirmAccountInput,
  ConfirmAccountResponse,
  CreateAccountInput,
  ListAccountsQuery,
  ListAccountsResponse,
  UpdateAccountInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createAccountsResource(client: HaxFootballApiClient) {
  return {
    list: (query?: ListAccountsQuery, config?: RequestConfig) =>
      client.request<ListAccountsResponse>({
        path: "/accounts",
        query,
        ...config
      }),
    get: (uuid: string, config?: RequestConfig) =>
      client.request<Account>({
        path: `/accounts/${encodeURIComponent(uuid)}`,
        ...config
      }),
    getByName: (name: string, config?: RequestConfig) =>
      client.request<Account>({
        path: `/accounts/by-name/${encodeURIComponent(name)}`,
        ...config
      }),
    getByExternalId: (externalId: string, config?: RequestConfig) =>
      client.request<Account>({
        path: `/accounts/by-external-id/${encodeURIComponent(externalId)}`,
        ...config
      }),
    create: (body: CreateAccountInput, config?: RequestConfig) =>
      client.request<Account>({
        method: "POST",
        path: "/accounts",
        body,
        ...config
      }),
    confirm: (body: ConfirmAccountInput, config?: RequestConfig) =>
      client.request<ConfirmAccountResponse>({
        method: "POST",
        path: "/accounts/confirm",
        body,
        ...config
      }),
    update: (uuid: string, body: UpdateAccountInput, config?: RequestConfig) =>
      client.request<Account>({
        method: "PATCH",
        path: `/accounts/${encodeURIComponent(uuid)}`,
        body,
        ...config
      })
  };
}
