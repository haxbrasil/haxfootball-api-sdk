export {
  HaxFootballApiClient,
  createHaxFootballApiClient,
  type FetchLike,
  type HaxFootballApiClientOptions,
  type MaybePromise,
  type RequestOptions,
  type TokenProvider
} from "./client";
export type { HaxFootballApiResources } from "./resources";
export type {
  AbortedFailure,
  ApiErrorCode,
  ApiFailure,
  ApiResponseFailure,
  ApiResult,
  ApiSuccess,
  InvalidResponseFailure,
  NetworkFailure,
  ResponseMeta
} from "./result";
export type * from "./types";
