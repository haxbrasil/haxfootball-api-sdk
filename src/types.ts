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
export type ListAccountsQuery =
  operations["getApiAccounts"]["parameters"]["query"];
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

export type GameMode = Schema<"GameMode">;
export type GameModeReference = Schema<"GameModeReference">;
export type CreateGameModeInput = Schema<"CreateGameModeBody">;
export type UpdateGameModeInput = Schema<"UpdateGameModeBody">;
export type ListGameModesQuery =
  operations["getApiGame-modes"]["parameters"]["query"];
export type ListGameModesResponse = PaginatedResponse<GameMode>;

export type Player = Schema<"Player">;
export type PlayerAccount = Schema<"PlayerAccount">;
export type CreatePlayerInput = Schema<"CreatePlayerBody">;
export type AssociatePlayerAccountInput = Schema<"AssociatePlayerAccountBody">;
export type ListPlayersQuery =
  operations["getApiPlayers"]["parameters"]["query"];
export type ListPlayersResponse = PaginatedResponse<Player>;
export type ListPlayerMatchesResponse = PaginatedResponse<MatchSummary>;

export type Recording = Schema<"Recording">;
export type ListRecordingsResponse = PaginatedResponse<Recording>;

export type Match = Schema<"Match">;
export type PhysicalMatch = Schema<"PhysicalMatch">;
export type ComposedMatch = Schema<"ComposedMatch">;
export type MatchSummary = Schema<"MatchSummary">;
export type MatchRound = Schema<"MatchRound">;
export type MatchRoundOrientation = MatchRound["orientation"];
export type MatchEvent = Schema<"MatchEvent">;
export type MatchEventInput = Schema<"MatchEventInput">;
export type MatchMetrics = Schema<"MatchMetrics">;
export type QueryMatchMetricsInput = Schema<"QueryMatchMetricsBody">;
export type QueryMatchMetricsResponse = Schema<"QueryMatchMetrics">;
export type MatchScore = Schema<"MatchScore">;
export type MatchStint = Schema<"MatchStint">;
export type CreateMatchInput = Schema<"CreateMatchBody">;
export type CheckpointMatchInput = Schema<"CheckpointMatchBody">;
export type CheckpointMatchResponse = Schema<"CheckpointMatchResponse">;
export type CheckpointMatchRecordingResponse =
  Schema<"CheckpointMatchRecordingResponse">;
export type CheckpointMatchRecordingInput = {
  revision: number;
  file: Blob | ArrayBuffer | ArrayBufferView;
  filename?: string;
  contentType?: string;
};
export type UpdateMatchInput = Schema<"UpdateMatchBody">;
export type MatchCompositionInput = Schema<"MatchCompositionBody">;
export type MatchRoundOrientationInput = NonNullable<
  MatchCompositionInput["rounds"][number]["orientation"]
>;
export type AddMatchEventInput = Schema<"AddMatchEventBody">;
export type DisableMatchEventInput = Schema<"DisableMatchEventBody">;
export type AssociateMatchRecordingInput =
  Schema<"AssociateMatchRecordingBody">;
export type ListMatchesQuery =
  operations["getApiMatches"]["parameters"]["query"];
export type ListMatchesResponse = PaginatedResponse<MatchSummary>;
export type ListMatchEventsResponse = Schema<"ListMatchEvents">;

export type CreateTokenInput = Schema<"CreateTokenBody">;
export type CreateTokenResponse = Schema<"CreateTokenResponse">;

export type SessionAccount = Schema<"SessionAccount">;
export type ResolveSessionInput = Schema<"ResolveSessionBody">;
export type ResolveSessionResponse = Schema<"ResolveSessionResponse">;
export type ConfirmSessionInput = Schema<"ConfirmSessionBody">;
export type ConfirmSessionResponse = Schema<"ConfirmSessionResponse">;

export type LaunchConfig = {
  [key: string]: string | number | boolean | null;
};
export type Room = Schema<"Room">;
export type RoomEvent = Schema<"RoomEvent">;
export type RoomIncident = Schema<"RoomIncident">;
export type RoomProgram = Schema<"RoomProgram">;
export type RoomLaunchConfigField = RoomProgram["launchConfigFields"][number];
export type RoomProgramReleaseSource = Schema<"RoomProgramReleaseSource">;
export type RoomProgramVersion = Schema<"RoomProgramVersion">;
export type RoomProgramVersionArtifact = Schema<"RoomProgramVersionArtifact">;
export type RoomProxyEndpoint = Schema<"RoomProxyEndpoint">;
export type RoomResponseProgramSummary = Schema<"RoomResponseProgramSummary">;
export type RoomResponseProxyEndpointSummary =
  Schema<"RoomResponseProxyEndpointSummary">;
export type RoomResponseVersionSummary = Schema<"RoomResponseVersionSummary">;
export type CreateRoomInput = Schema<"CreateRoomBody">;
export type AddRoomEventInput = Schema<"AddRoomEventBody">;
export type AddRoomIncidentInput = Schema<"AddRoomIncidentBody">;
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
export type ListRoomEventsResponse = PaginatedResponse<RoomEvent>;
export type ListRoomIncidentsResponse = PaginatedResponse<RoomIncident>;
export type ListRoomProgramsResponse = PaginatedResponse<RoomProgram>;
export type ListRoomProgramVersionsResponse =
  PaginatedResponse<RoomProgramVersion>;
export type ListRoomProxyEndpointsResponse =
  PaginatedResponse<RoomProxyEndpoint>;

export type EventSchema = Schema<"EventSchema">;
export type EventSchemaReference = Schema<"EventSchemaReference">;
export type CreateEventSchemaInput = Schema<"CreateEventSchemaBody">;
export type PublishEventSchemaVersionInput =
  Schema<"PublishEventSchemaVersionBody">;
export type UpdateEventSchemaInput = Schema<"UpdateEventSchemaBody">;
export type ListEventSchemasResponse = PaginatedResponse<EventSchema>;

export type CreateRecordingInput = {
  file: Blob | ArrayBuffer | ArrayBufferView;
  filename?: string;
  contentType?: string;
};
