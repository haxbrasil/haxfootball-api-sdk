export {
  HaxFootballApiClient,
  createHaxFootballApiClient,
  createHaxFootballRoomApiClient,
  type FetchLike,
  type HaxFootballApiClientOptions,
  type MaybePromise,
  type RequestOptions,
  type TokenProvider
} from "./client";
export type { HaxFootballApiResources } from "./resources";
export type {
  AttachLiveRoomInput,
  LiveRoomAttachment,
  LiveRoomControlCommand,
  LiveRoomControlCommandHandler,
  LiveRoomControlSocket,
  LiveRoomControlWebSocketConstructor,
  LiveRoomSnapshotProvider
} from "./resources/room-control";
export {
  queries,
  type FindPlayersByNameQuery,
  type FindPlayersByNameQueryVariables,
  type GetRoomQuery,
  type GetRoomQueryVariables,
  type ListRoomCommandsQuery,
  type ListRoomCommandsQueryVariables,
  type ListRoomsQuery as LiveListRoomsQuery,
  type ListRoomsQueryVariables
} from "./live";
export type {
  AbortedFailure,
  ApiErrorCode,
  ApiFailure,
  ApiResponseFailure,
  ApiResult,
  ApiSuccess,
  GraphqlFailure,
  InvalidResponseFailure,
  NetworkFailure,
  ResponseMeta
} from "./result";
export type * from "./types";
