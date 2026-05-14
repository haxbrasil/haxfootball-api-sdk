import type { components, operations, paths } from "./generated/openapi";

export type { components, operations, paths };

export type Schema<Name extends keyof components["schemas"]> =
  components["schemas"][Name];

export type PaginatedResponse<T> = {
  items: T[];
  page: PageInfo;
};

export type PaginationQuery = {
  limit?: number;
  cursor?: string;
};

export type PageInfo = {
  limit: number;
  nextCursor: string | null;
};

export type Account = Schema<"Account">;
export type ConfirmAccountInput = Schema<"ConfirmAccountBody">;
export type ConfirmAccountResponse = Schema<"ConfirmAccountResponse">;
export type CreateAccountInput = Schema<"CreateAccountBody">;
export type UpdateAccountInput = Schema<"UpdateAccountBody">;
export type ListAccountsResponse = PaginatedResponse<Account>;

export type Permission = Schema<"Permission">;
export type CreatePermissionInput = Schema<"CreatePermissionBody">;
export type UpdatePermissionInput = Schema<"UpdatePermissionBody">;
export type RemovePermissionResponse = Schema<"RemovePermissionResponse">;
export type ListPermissionsResponse = PaginatedResponse<Permission>;

export type Role = Schema<"Role">;
export type CreateRoleInput = Schema<"CreateRoleBody">;
export type UpdateRoleInput = Schema<"UpdateRoleBody">;
export type RemoveRoleResponse = Schema<"RemoveRoleResponse">;
export type ListRolesResponse = PaginatedResponse<Role>;

export type Player = Schema<"Player">;
export type PlayerAccount = Schema<"PlayerAccount">;
export type CreatePlayerInput = Schema<"CreatePlayerBody">;
export type AssociatePlayerAccountInput = Schema<"AssociatePlayerAccountBody">;
export type ListPlayersResponse = PaginatedResponse<Player>;

export type Recording = Schema<"Recording">;
export type ListRecordingsResponse = PaginatedResponse<Recording>;

export type Match = Schema<"Match">;
export type MatchSummary = Schema<"MatchSummary">;
export type MatchEvent = Schema<"MatchEvent">;
export type MatchEventInput = Schema<"MatchEventInput">;
export type MatchMetrics = Schema<"MatchMetrics">;
export type MatchScore = Schema<"MatchScore">;
export type MatchStatEvent = Schema<"MatchStatEvent">;
export type MatchStint = Schema<"MatchStint">;
export type CreateMatchInput = Schema<"CreateMatchBody">;
export type UpdateMatchInput = Schema<"UpdateMatchBody">;
export type AppendMatchEventsInput = Schema<"AppendMatchEventsBody">;
export type AddMatchStatEventInput = Schema<"AddMatchStatEventBody">;
export type DisableMatchStatEventInput = Schema<"DisableMatchStatEventBody">;
export type AssociateMatchRecordingInput =
  Schema<"AssociateMatchRecordingBody">;
export type ListMatchesResponse = PaginatedResponse<MatchSummary>;
export type ListMatchStatEventsResponse = PaginatedResponse<MatchStatEvent>;

export type CreateTokenInput = Schema<"CreateTokenBody">;
export type CreateTokenResponse = Schema<"CreateTokenResponse">;

export type LaunchConfig = {
  [key: string]: string | number | boolean | null;
};
export type Room = Schema<"Room">;
export type RoomLaunchConfigField = Schema<"RoomLaunchConfigField">;
export type RoomProgram = Schema<"RoomProgram">;
export type RoomProgramReleaseSource = Schema<"RoomProgramReleaseSource">;
export type RoomProgramVersion = Schema<"RoomProgramVersion">;
export type RoomProgramVersionArtifact = Schema<"RoomProgramVersionArtifact">;
export type RoomProxyEndpoint = Schema<"RoomProxyEndpoint">;
export type RoomResponseProgramSummary = Schema<"RoomResponseProgramSummary">;
export type RoomResponseProxyEndpointSummary =
  Schema<"RoomResponseProxyEndpointSummary">;
export type RoomResponseVersionSummary = Schema<"RoomResponseVersionSummary">;
export type CreateRoomInput = Schema<"CreateRoomBody">;
export type ReportRoomReadyInput = Schema<"ReportRoomReadyBody">;
export type CreateRoomProgramInput = Schema<"CreateRoomProgramBody">;
export type UpdateRoomProgramInput = Schema<"UpdateRoomProgramBody">;
export type CreateRoomProgramVersionInput =
  Schema<"CreateRoomProgramVersionBody">;
export type DiscoverRoomProgramVersionsInput =
  Schema<"DiscoverRoomProgramVersionsBody">;
export type DiscoverRoomProgramVersionsResponse =
  Schema<"DiscoverRoomProgramVersionsResponse">;
export type CreateRoomProxyEndpointInput =
  Schema<"CreateRoomProxyEndpointBody">;
export type UpdateRoomProxyEndpointInput =
  Schema<"UpdateRoomProxyEndpointBody">;
export type ListRoomsQuery = PaginationQuery & {
  state?: "open" | "provisioning" | "running" | "closed" | "all";
};
export type ListRoomsResponse = PaginatedResponse<Room>;
export type ListRoomProgramsResponse = PaginatedResponse<RoomProgram>;
export type ListRoomProgramVersionsResponse =
  PaginatedResponse<RoomProgramVersion>;
export type ListRoomProxyEndpointsResponse =
  PaginatedResponse<RoomProxyEndpoint>;

export type StatEventSchema = Schema<"StatEventSchema">;
export type StatEventSchemaReference = Schema<"StatEventSchemaReference">;
export type CreateStatEventSchemaInput = Schema<"CreateStatEventSchemaBody">;
export type PublishStatEventSchemaVersionInput =
  Schema<"PublishStatEventSchemaVersionBody">;
export type UpdateStatEventSchemaInput = Schema<"UpdateStatEventSchemaBody">;
export type ListStatEventSchemasResponse = PaginatedResponse<StatEventSchema>;

export type CreateRecordingInput = {
  file: Blob | ArrayBuffer | ArrayBufferView;
  filename?: string;
  contentType?: string;
};
