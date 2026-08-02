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

export type Championship = Schema<"Championship">;
export type ChampionshipDetail = Schema<"ChampionshipDetail">;
export type ChampionshipRules = ChampionshipDetail["rules"];
export type ChampionshipCompetitionType = Schema<"ChampionshipCompetitionType">;
export type ChampionshipTeamIdentity = Schema<"ChampionshipTeamIdentity">;
export type ChampionshipTeam = Schema<"ChampionshipTeam">;
export type ChampionshipParticipant = Schema<"ChampionshipParticipant">;
export type ChampionshipAuditEvent = Schema<"ChampionshipAuditEvent">;
export type ChampionshipThread = Schema<"ChampionshipThread">;
export type ChampionshipComment = Schema<"ChampionshipComment">;
export type ChampionshipAssignment = Schema<"ChampionshipAssignment">;
export type ChampionshipPresence = Schema<"ChampionshipPresence">;
export type ChampionshipInboxItem = Schema<"ChampionshipInboxItem">;
export type ChampionshipSavedView = Schema<"ChampionshipSavedView">;
export type ChampionshipRosterMembership =
  Schema<"ChampionshipRosterMembership">;
export type ChampionshipRosterMovePreview =
  Schema<"ChampionshipRosterMovePreview">;
export type ChampionshipSalaryProjection =
  Schema<"ChampionshipSalaryProjection">;
export type ChampionshipDraft = Schema<"ChampionshipDraft">;
export type ChampionshipDraftCorrectionPreview =
  Schema<"ChampionshipDraftCorrectionPreview">;
export type ChampionshipTrade = Schema<"ChampionshipTrade">;
export type ChampionshipFormat = Schema<"ChampionshipFormat">;
export type ChampionshipStandings = Schema<"ChampionshipStandings">;
export type ChampionshipRoundRobinPreview =
  Schema<"ChampionshipRoundRobinPreview">;
export type ChampionshipSpotPlacementPreview =
  Schema<"ChampionshipSpotPlacementPreview">;
export type ChampionshipMatchScheduling = Schema<"ChampionshipMatchScheduling">;
export type ChampionshipDoubleEliminationPreview =
  Schema<"ChampionshipDoubleEliminationPreview">;
export type ChampionshipMatchOperations = Schema<"ChampionshipMatchOperations">;
export type ChampionshipEvidenceCandidates =
  Schema<"ChampionshipEvidenceCandidates">;
export type ChampionshipSettlementPreview =
  Schema<"ChampionshipSettlementPreview">;
export type ChampionshipStatistics = Schema<"ChampionshipStatistics">;
export type ChampionshipMetricMappings = Schema<"ChampionshipMetricMappings">;
export type ChampionshipHistory = Schema<"ChampionshipHistory">;
export type ChampionshipAward = Schema<"ChampionshipAward">;
export type ChampionshipHonorDefinition = Schema<"ChampionshipHonorDefinition">;
export type ChampionshipHonor = Schema<"ChampionshipHonor">;
export type ChampionshipHonorResolutionPreview =
  Schema<"ChampionshipHonorResolutionPreview">;
export type ChampionshipHistoricalImportBatch =
  Schema<"ChampionshipHistoricalImportBatch">;
export type ChampionshipHistoricalPlayer =
  Schema<"ChampionshipHistoricalPlayer">;
export type TeamIdentityHistory = Schema<"TeamIdentityHistory">;
export type AccountChampionshipHistory = Schema<"AccountChampionshipHistory">;
export type CreateCompetitionTypeInput = Schema<"CreateCompetitionTypeBody">;
export type UpdateCompetitionTypeInput = Schema<"UpdateCompetitionTypeBody">;
export type CreateChampionshipInput = Schema<"CreateChampionshipBody">;
export type UpdateChampionshipInput = Schema<"UpdateChampionshipBody">;
export type TransitionChampionshipInput = Schema<"TransitionChampionshipBody">;
export type CreateChampionshipTeamInput = Schema<"CreateChampionshipTeamBody">;
export type UpdateChampionshipTeamInput = Schema<"UpdateChampionshipTeamBody">;
export type CreateChampionshipParticipantInput =
  Schema<"CreateChampionshipParticipantBody">;
export type UpdateChampionshipParticipantInput =
  Schema<"UpdateChampionshipParticipantBody">;
export type TransitionChampionshipRegistrationInput =
  Schema<"TransitionChampionshipRegistrationBody">;
export type SelfRegisterChampionshipInput =
  Schema<"SelfRegisterChampionshipBody">;
export type WithdrawChampionshipRegistrationInput =
  Schema<"WithdrawChampionshipRegistrationBody">;
export type UpsertChampionshipPricesInput =
  Schema<"UpsertChampionshipPricesBody">;
export type FreezeChampionshipPricesInput =
  Schema<"FreezeChampionshipPricesBody">;
export type PreviewChampionshipRosterMoveInput =
  Schema<"PreviewChampionshipRosterMoveBody">;
export type ExecuteChampionshipRosterMoveInput =
  Schema<"ExecuteChampionshipRosterMoveBody">;
export type ReorderChampionshipRosterInput =
  Schema<"ReorderChampionshipRosterBody">;
export type ChampionshipRosterOrder = Schema<"ChampionshipRosterOrder">;
export type ConfigureChampionshipDraftInput =
  Schema<"ConfigureChampionshipDraftBody">;
export type StartChampionshipDraftInput = Schema<"StartChampionshipDraftBody">;
export type MakeChampionshipDraftPickInput =
  Schema<"MakeChampionshipDraftPickBody">;
export type EndChampionshipDraftInput = Schema<"EndChampionshipDraftBody">;
export type CancelChampionshipDraftInput =
  Schema<"CancelChampionshipDraftBody">;
export type VoidChampionshipDraftPickInput =
  Schema<"VoidChampionshipDraftPickBody">;
export type CreateChampionshipTradeInput =
  Schema<"CreateChampionshipTradeBody">;
export type DecideChampionshipTradeInput =
  Schema<"DecideChampionshipTradeBody">;
export type CreateChampionshipStageInput =
  Schema<"CreateChampionshipStageBody">;
export type UpdateChampionshipStageInput =
  Schema<"UpdateChampionshipStageBody">;
export type DeleteChampionshipStageInput =
  Schema<"DeleteChampionshipStageBody">;
export type CreateChampionshipGroupInput =
  Schema<"CreateChampionshipGroupBody">;
export type ConfigureChampionshipStandingsInput =
  Schema<"ConfigureChampionshipStandingsBody">;
export type PreviewChampionshipRoundRobinInput =
  Schema<"PreviewChampionshipRoundRobinBody">;
export type GenerateChampionshipRoundRobinInput =
  Schema<"GenerateChampionshipRoundRobinBody">;
export type PreviewChampionshipClassificationInput =
  Schema<"PreviewChampionshipClassificationBody">;
export type ApplyChampionshipClassificationInput =
  Schema<"ApplyChampionshipClassificationBody">;
export type GenerateSingleEliminationInput =
  Schema<"GenerateSingleEliminationBody">;
export type PreviewDoubleEliminationInput =
  Schema<"PreviewDoubleEliminationBody">;
export type GenerateDoubleEliminationInput =
  Schema<"GenerateDoubleEliminationBody">;
export type CreateChampionshipSpotInput = Schema<"CreateChampionshipSpotBody">;
export type PlaceChampionshipSpotInput = Schema<"PlaceChampionshipSpotBody">;
export type PreviewChampionshipSpotPlacementInput =
  Schema<"PreviewChampionshipSpotPlacementBody">;
export type CreateChampionshipRouteInput =
  Schema<"CreateChampionshipRouteBody">;
export type UpdateChampionshipRouteInput =
  Schema<"UpdateChampionshipRouteBody">;
export type CreateChampionshipCompetitionRoundInput =
  Schema<"CreateChampionshipCompetitionRoundBody">;
export type CreateChampionshipLogicalMatchInput =
  Schema<"CreateChampionshipMatchBody">;
export type ScheduleChampionshipMatchInput =
  Schema<"ScheduleChampionshipMatchBody">;
export type CreateChampionshipScheduleProposalInput =
  Schema<"CreateChampionshipScheduleProposalBody">;
export type DecideChampionshipScheduleProposalInput =
  Schema<"DecideChampionshipScheduleProposalBody">;
export type AuthorizeChampionshipLatePlayInput =
  Schema<"AuthorizeChampionshipLatePlayBody">;
export type RevokeChampionshipLatePlayInput =
  Schema<"RevokeChampionshipLatePlayBody">;
export type RemindChampionshipScheduleInput =
  Schema<"RemindChampionshipScheduleBody">;
export type AttachChampionshipMatchEvidenceInput =
  Schema<"AttachChampionshipMatchEvidenceBody">;
export type DetachChampionshipMatchEvidenceInput =
  Schema<"DetachChampionshipMatchEvidenceBody">;
export type PreviewChampionshipSettlementInput =
  Schema<"PreviewChampionshipSettlementBody">;
export type SettleChampionshipMatchInput =
  Schema<"SettleChampionshipMatchBody">;
export type UpdateChampionshipAttributionsInput =
  Schema<"UpdateChampionshipAttributionsBody">;
export type ReplaceChampionshipMetricMappingsInput =
  Schema<"ReplaceChampionshipMetricMappingsBody">;
export type ReplaceChampionshipPlacementsInput =
  Schema<"ReplaceChampionshipPlacementsBody">;
export type CreateChampionshipAwardInput =
  Schema<"CreateChampionshipAwardBody">;
export type UpdateChampionshipAwardInput =
  Schema<"UpdateChampionshipAwardBody">;
export type CreateChampionshipHonorDefinitionInput =
  Schema<"CreateChampionshipHonorDefinitionBody">;
export type UpdateChampionshipHonorDefinitionDraftInput =
  Schema<"UpdateChampionshipHonorDefinitionDraftBody">;
export type PublishChampionshipHonorDefinitionInput =
  Schema<"PublishChampionshipHonorDefinitionBody">;
export type ArchiveChampionshipHonorDefinitionInput =
  Schema<"ArchiveChampionshipHonorDefinitionBody">;
export type CreateChampionshipHonorInput =
  Schema<"CreateChampionshipHonorBody">;
export type UpdateChampionshipHonorInput =
  Schema<"UpdateChampionshipHonorBody">;
export type ReorderChampionshipHonorsInput =
  Schema<"ReorderChampionshipHonorsBody">;
export type CreateChampionshipHonorGrantInput =
  Schema<"CreateChampionshipHonorGrantBody">;
export type RevokeChampionshipHonorGrantInput =
  Schema<"RevokeChampionshipHonorGrantBody">;
export type ResolveChampionshipHonorInput =
  Schema<"ResolveChampionshipHonorBody">;
export type PreviewChampionshipHistoricalImportInput =
  Schema<"PreviewChampionshipHistoricalImportBody">;
export type ApplyChampionshipHistoricalImportInput =
  Schema<"ApplyChampionshipHistoricalImportBody">;
export type RollbackChampionshipHistoricalImportInput =
  Schema<"RollbackChampionshipHistoricalImportBody">;
export type LinkChampionshipHistoricalPlayerInput =
  Schema<"LinkChampionshipHistoricalPlayerBody">;
export type CreateTeamIdentityInput = Schema<"CreateTeamIdentityBody">;
export type UpdateTeamIdentityInput = Schema<"UpdateTeamIdentityBody">;
export type UpdateChampionshipRoomProgramInput =
  Schema<"UpdateChampionshipRoomProgramBody">;
export type UpdateChampionshipGrantInput =
  Schema<"UpdateChampionshipGrantBody">;
export type CreateChampionshipThreadInput =
  Schema<"CreateChampionshipThreadBody">;
export type AddChampionshipCommentInput = Schema<"AddChampionshipCommentBody">;
export type UpdateChampionshipThreadInput =
  Schema<"UpdateChampionshipThreadBody">;
export type CreateChampionshipAssignmentInput =
  Schema<"CreateChampionshipAssignmentBody">;
export type UpdateChampionshipAssignmentInput =
  Schema<"UpdateChampionshipAssignmentBody">;
export type ChampionshipPresenceInput = NonNullable<
  operations["postApiChampionshipsByIdPresence"]["requestBody"]
>["content"]["application/json"];
export type ListChampionshipsQuery =
  operations["getApiChampionships"]["parameters"]["query"];
export type ListCompetitionTypesQuery =
  operations["getApiChampionshipsCompetition-types"]["parameters"]["query"];
export type ListChampionshipParticipantsQuery =
  operations["getApiChampionshipsByIdParticipants"]["parameters"]["query"];
export type ListChampionshipAuditQuery =
  operations["getApiChampionshipsByIdAudit"]["parameters"]["query"];
export type ListChampionshipCollaborationQuery =
  operations["getApiChampionshipsByIdThreads"]["parameters"]["query"];
export type ChampionshipEventsQuery =
  operations["getApiChampionshipsByIdEvents"]["parameters"]["query"];
export type ChampionshipPresenceQuery =
  operations["getApiChampionshipsByIdPresence"]["parameters"]["query"];
export type ChampionshipInboxQuery =
  operations["getApiChampionshipsInbox"]["parameters"]["query"];
export type ChampionshipSavedViewsQuery =
  operations["getApiChampionshipsByIdSaved-views"]["parameters"]["query"];
export type ChampionshipSalaryQuery =
  operations["getApiChampionshipsByIdSalary"]["parameters"]["query"];
export type ChampionshipSalaryAdminQuery =
  operations["getApiChampionshipsByIdSalaryAdmin"]["parameters"]["query"];
export type ChampionshipSelfRegistrationQuery =
  operations["getApiChampionshipsByIdRegistrationsSelf"]["parameters"]["query"];
export type ChampionshipRosterHistoryQuery =
  operations["getApiChampionshipsByIdRoster-history"]["parameters"]["query"];
export type ChampionshipDraftQuery =
  operations["getApiChampionshipsByIdDraft"]["parameters"]["query"];
export type ChampionshipDraftCorrectionQuery =
  operations["getApiChampionshipsByIdDraftTurnsByTurnIdCorrection-preview"]["parameters"]["query"];
export type ChampionshipTradesQuery =
  operations["getApiChampionshipsByIdTrades"]["parameters"]["query"];
export type ChampionshipFormatQuery =
  operations["getApiChampionshipsByIdFormat"]["parameters"]["query"];
export type ChampionshipStandingsQuery =
  operations["getApiChampionshipsByIdStagesByStageIdGroupsByGroupIdStandings"]["parameters"]["query"];
export type ChampionshipMatchSchedulingQuery =
  operations["getApiChampionshipsByIdChampionship-matchesByChampionshipMatchIdScheduling"]["parameters"]["query"];
export type ChampionshipMatchOperationsQuery =
  operations["getApiChampionshipsByIdMatchesByChampionshipMatchId"]["parameters"]["query"];
export type ChampionshipEvidenceCandidatesQuery =
  operations["getApiChampionshipsByIdMatchesByChampionshipMatchIdEvidence-candidates"]["parameters"]["query"];
export type ChampionshipStatisticsQuery =
  operations["getApiChampionshipsByIdStatistics"]["parameters"]["query"];
export type ChampionshipMetricMappingsQuery =
  operations["getApiChampionshipsByIdStatistic-mappings"]["parameters"]["query"];
export type ChampionshipHistoryQuery =
  operations["getApiChampionshipsByIdHistory"]["parameters"]["query"];
export type ChampionshipHistoricalImportsQuery =
  operations["getApiChampionshipsByIdHistorical-imports"]["parameters"]["query"];
export type ListChampionshipHonorDefinitionsQuery = PaginationQuery & {
  kind?: "title" | "award";
  state?: "active" | "archived" | "all";
};
export type ChampionshipHonorsQuery = PaginationQuery & {
  actorAccountUuid?: string;
  includeDrafts?: boolean;
};
export type UpdateChampionshipInboxItemInput =
  Schema<"UpdateChampionshipInboxItemBody">;
export type UpsertChampionshipSavedViewInput =
  Schema<"UpsertChampionshipSavedViewBody">;
export type ListChampionshipsResponse = PaginatedResponse<Championship>;
export type ListCompetitionTypesResponse =
  PaginatedResponse<ChampionshipCompetitionType>;
export type ListChampionshipTeamsResponse = PaginatedResponse<ChampionshipTeam>;
export type ListTeamIdentitiesResponse =
  PaginatedResponse<ChampionshipTeamIdentity>;
export type ListChampionshipParticipantsResponse =
  PaginatedResponse<ChampionshipParticipant>;
export type ListChampionshipAuditResponse =
  PaginatedResponse<ChampionshipAuditEvent>;
export type ListChampionshipThreadsResponse =
  PaginatedResponse<ChampionshipThread>;
export type ListChampionshipCommentsResponse =
  PaginatedResponse<ChampionshipComment>;
export type ListChampionshipAssignmentsResponse =
  PaginatedResponse<ChampionshipAssignment>;
export type ListChampionshipInboxResponse =
  PaginatedResponse<ChampionshipInboxItem>;
export type ListChampionshipSavedViewsResponse =
  PaginatedResponse<ChampionshipSavedView>;
export type ListChampionshipRosterHistoryResponse =
  PaginatedResponse<ChampionshipRosterMembership>;
export type ListChampionshipTradesResponse = Schema<"ListChampionshipTrades">;
export type ListChampionshipHistoricalImportsResponse =
  Schema<"ListChampionshipHistoricalImports">;
export type ListChampionshipHonorDefinitionsResponse =
  PaginatedResponse<ChampionshipHonorDefinition>;
export type ListChampionshipHonorsResponse =
  PaginatedResponse<ChampionshipHonor>;

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
export type RecordingInspection = Schema<"RecordingInspection">;
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
export type LogicalMatchEvidence = Schema<"LogicalMatchEvidence">;
export type LogicalMatchEvidenceQuery =
  operations["getApiMatchesByIdEvidence"]["parameters"]["query"];
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

export type VisualizationScope = "match" | "championship";
export type VisualizationRow = Record<string, unknown>;
export type VisualizationSpecification = {
  datasets: Array<{
    id: string;
    source: string;
    operations?: Array<Record<string, unknown>>;
  }>;
  option: Record<string, unknown>;
  interactions?: Record<string, unknown>;
  accessibility?: { summary?: string; table?: boolean };
};
export type VisualizationTemplate = {
  id: string;
  name: string;
  title: string;
  description: string | null;
  scope: VisualizationScope;
  state: "active" | "archived";
  tags: string[];
  internalNotes: string | null;
  revision: number;
  draft: {
    specification: VisualizationSpecification;
    revision: number;
    updatedAt: string;
  } | null;
  versions: Array<{ id: number; version: number; createdAt: string }>;
  latestVersion: number | null;
};
export type VisualizationTemplateList = {
  items: VisualizationTemplate[];
  totalCount: number;
  truncated: boolean;
};
export type RenderedVisualization = {
  id: string;
  title: string;
  description?: string | null;
  version?: number;
  option: Record<string, unknown>;
  datasets: Array<{ id: string; rows: VisualizationRow[] }>;
  accessibility: { summary?: string; table?: boolean };
  interactions: Record<string, unknown>;
  layout?: {
    width: "compact" | "half" | "full";
    height: "short" | "medium" | "tall" | "viewport";
  };
  revision?: number;
};
export type VisualizationDashboard = { items: RenderedVisualization[] };

export type CreateRecordingInput = {
  file: Blob | ArrayBuffer | ArrayBufferView;
  filename?: string;
  contentType?: string;
};
