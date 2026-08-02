import type { HaxFootballApiClient } from "../client";
import type {
  AddChampionshipCommentInput,
  ApplyChampionshipHistoricalImportInput,
  ApplyChampionshipClassificationInput,
  AttachChampionshipMatchEvidenceInput,
  AuthorizeChampionshipLatePlayInput,
  ChampionshipAssignment,
  ChampionshipComment,
  ChampionshipCompetitionType,
  ChampionshipDetail,
  ChampionshipDraft,
  ChampionshipDraftCorrectionPreview,
  ChampionshipDraftCorrectionQuery,
  ChampionshipDraftQuery,
  CancelChampionshipDraftInput,
  ChampionshipEvidenceCandidates,
  ChampionshipEvidenceCandidatesQuery,
  ChampionshipHistory,
  ChampionshipHistoryQuery,
  ChampionshipHistoricalImportBatch,
  ChampionshipHistoricalImportsQuery,
  ChampionshipHistoricalPlayer,
  ChampionshipAward,
  ChampionshipHonor,
  ChampionshipHonorResolutionPreview,
  ChampionshipHonorDefinition,
  ChampionshipHonorsQuery,
  AccountChampionshipHistory,
  ChampionshipEventsQuery,
  ChampionshipFormat,
  ChampionshipStandings,
  ChampionshipStandingsQuery,
  ChampionshipRoundRobinPreview,
  ChampionshipSpotPlacementPreview,
  ChampionshipDoubleEliminationPreview,
  ChampionshipFormatQuery,
  ChampionshipInboxItem,
  ChampionshipInboxQuery,
  ChampionshipMatchOperations,
  ChampionshipMatchScheduling,
  ChampionshipMatchSchedulingQuery,
  ChampionshipMatchOperationsQuery,
  ChampionshipMetricMappings,
  ChampionshipMetricMappingsQuery,
  ChampionshipParticipant,
  ChampionshipPresence,
  ChampionshipPresenceInput,
  ChampionshipPresenceQuery,
  ChampionshipRosterHistoryQuery,
  ChampionshipRosterMembership,
  ChampionshipRosterMovePreview,
  ChampionshipRosterOrder,
  ChampionshipSalaryAdminQuery,
  ChampionshipSalaryProjection,
  ChampionshipSalaryQuery,
  ChampionshipSelfRegistrationQuery,
  ChampionshipSavedView,
  ChampionshipSavedViewsQuery,
  ChampionshipSettlementPreview,
  ChampionshipStatistics,
  ChampionshipStatisticsQuery,
  ChampionshipTeam,
  ChampionshipTeamIdentity,
  TeamIdentityHistory,
  ChampionshipThread,
  ChampionshipTrade,
  ChampionshipTradesQuery,
  ConfigureChampionshipDraftInput,
  ConfigureChampionshipStandingsInput,
  CreateChampionshipCompetitionRoundInput,
  CreateChampionshipLogicalMatchInput,
  CreateChampionshipRouteInput,
  CreateChampionshipSpotInput,
  CreateChampionshipStageInput,
  DeleteChampionshipStageInput,
  CreateChampionshipGroupInput,
  CreateChampionshipScheduleProposalInput,
  CreateChampionshipAssignmentInput,
  CreateChampionshipAwardInput,
  CreateChampionshipHonorDefinitionInput,
  CreateChampionshipHonorGrantInput,
  CreateChampionshipHonorInput,
  CreateChampionshipInput,
  CreateChampionshipParticipantInput,
  CreateChampionshipTeamInput,
  CreateChampionshipTradeInput,
  CreateChampionshipThreadInput,
  CreateCompetitionTypeInput,
  CreateTeamIdentityInput,
  DecideChampionshipTradeInput,
  DecideChampionshipScheduleProposalInput,
  DetachChampionshipMatchEvidenceInput,
  ExecuteChampionshipRosterMoveInput,
  ReorderChampionshipRosterInput,
  EndChampionshipDraftInput,
  GenerateSingleEliminationInput,
  GenerateDoubleEliminationInput,
  GenerateChampionshipRoundRobinInput,
  FreezeChampionshipPricesInput,
  ListChampionshipAssignmentsResponse,
  ListChampionshipAuditQuery,
  ListChampionshipAuditResponse,
  ListChampionshipCollaborationQuery,
  ListChampionshipCommentsResponse,
  ListChampionshipInboxResponse,
  ListChampionshipHistoricalImportsResponse,
  ListChampionshipHonorDefinitionsQuery,
  ListChampionshipHonorDefinitionsResponse,
  ListChampionshipHonorsResponse,
  ListChampionshipSavedViewsResponse,
  ListChampionshipParticipantsQuery,
  ListChampionshipParticipantsResponse,
  ListChampionshipRosterHistoryResponse,
  ListChampionshipsQuery,
  ListChampionshipsResponse,
  ListChampionshipTeamsResponse,
  ListChampionshipTradesResponse,
  ListChampionshipThreadsResponse,
  ListCompetitionTypesQuery,
  ListCompetitionTypesResponse,
  ListTeamIdentitiesResponse,
  PaginationQuery,
  MakeChampionshipDraftPickInput,
  PlaceChampionshipSpotInput,
  PreviewChampionshipHistoricalImportInput,
  PreviewChampionshipRosterMoveInput,
  PreviewChampionshipClassificationInput,
  PreviewChampionshipRoundRobinInput,
  PreviewChampionshipSpotPlacementInput,
  PreviewDoubleEliminationInput,
  PreviewChampionshipSettlementInput,
  ReplaceChampionshipMetricMappingsInput,
  ReplaceChampionshipPlacementsInput,
  RemindChampionshipScheduleInput,
  RevokeChampionshipLatePlayInput,
  RollbackChampionshipHistoricalImportInput,
  RevokeChampionshipHonorGrantInput,
  ResolveChampionshipHonorInput,
  ReorderChampionshipHonorsInput,
  ScheduleChampionshipMatchInput,
  SelfRegisterChampionshipInput,
  SettleChampionshipMatchInput,
  StartChampionshipDraftInput,
  TransitionChampionshipInput,
  TransitionChampionshipRegistrationInput,
  UpdateChampionshipAssignmentInput,
  UpdateChampionshipAwardInput,
  UpdateChampionshipHonorDefinitionDraftInput,
  UpdateChampionshipHonorInput,
  UpdateChampionshipAttributionsInput,
  UpdateChampionshipGrantInput,
  UpdateChampionshipInput,
  UpdateChampionshipParticipantInput,
  UpdateChampionshipRoomProgramInput,
  UpdateChampionshipTeamInput,
  UpdateChampionshipThreadInput,
  UpdateChampionshipInboxItemInput,
  LinkChampionshipHistoricalPlayerInput,
  UpdateCompetitionTypeInput,
  UpdateTeamIdentityInput,
  UpdateChampionshipRouteInput,
  UpdateChampionshipStageInput,
  UpsertChampionshipPricesInput,
  UpsertChampionshipSavedViewInput,
  VoidChampionshipDraftPickInput,
  WithdrawChampionshipRegistrationInput,
  PublishChampionshipHonorDefinitionInput,
  ArchiveChampionshipHonorDefinitionInput
} from "../types";
import type { RequestConfig } from "./shared";

export type ChampionshipEventStreamConfig = {
  lastEventId?: number;
  headers?: HeadersInit;
  signal?: AbortSignal;
};

export function createChampionshipsResource(client: HaxFootballApiClient) {
  return {
    list: (query?: ListChampionshipsQuery, config?: RequestConfig) =>
      client.request<ListChampionshipsResponse>({
        path: "/championships",
        query,
        ...config
      }),
    get: (id: string, config?: RequestConfig) =>
      client.request<ChampionshipDetail>({
        path: championshipPath(id),
        ...config
      }),
    create: (body: CreateChampionshipInput, config?: RequestConfig) =>
      client.request<ChampionshipDetail>({
        method: "POST",
        path: "/championships",
        body,
        ...config
      }),
    update: (
      id: string,
      body: UpdateChampionshipInput,
      config?: RequestConfig
    ) =>
      client.request<ChampionshipDetail>({
        method: "PATCH",
        path: championshipPath(id),
        body,
        ...config
      }),
    transition: (
      id: string,
      body: TransitionChampionshipInput,
      config?: RequestConfig
    ) =>
      client.request<ChampionshipDetail>({
        method: "POST",
        path: `${championshipPath(id)}/transitions`,
        body,
        ...config
      }),
    honorDefinitions: {
      list: (
        query?: ListChampionshipHonorDefinitionsQuery,
        config?: RequestConfig
      ) =>
        client.request<ListChampionshipHonorDefinitionsResponse>({
          path: "/championships/honor-definitions",
          query,
          ...config
        }),
      create: (
        body: CreateChampionshipHonorDefinitionInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonorDefinition>({
          method: "POST",
          path: "/championships/honor-definitions",
          body,
          ...config
        }),
      updateDraft: (
        definitionId: string,
        body: UpdateChampionshipHonorDefinitionDraftInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonorDefinition>({
          method: "PUT",
          path: `/championships/honor-definitions/${encodeURIComponent(definitionId)}/draft`,
          body,
          ...config
        }),
      publish: (
        definitionId: string,
        body: PublishChampionshipHonorDefinitionInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonorDefinition & { published: boolean }>({
          method: "POST",
          path: `/championships/honor-definitions/${encodeURIComponent(definitionId)}/publish`,
          body,
          ...config
        }),
      archive: (
        definitionId: string,
        body: ArchiveChampionshipHonorDefinitionInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonorDefinition>({
          method: "POST",
          path: `/championships/honor-definitions/${encodeURIComponent(definitionId)}/archive`,
          body,
          ...config
        })
    },
    honors: {
      list: (
        id: string,
        query?: ChampionshipHonorsQuery,
        config?: RequestConfig
      ) =>
        client.request<ListChampionshipHonorsResponse>({
          path: `${championshipPath(id)}/honors`,
          query,
          ...config
        }),
      create: (
        id: string,
        body: CreateChampionshipHonorInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonor>({
          method: "POST",
          path: `${championshipPath(id)}/honors`,
          body,
          ...config
        }),
      update: (
        id: string,
        honorId: string,
        body: UpdateChampionshipHonorInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonor>({
          method: "PATCH",
          path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}`,
          body,
          ...config
        }),
      reorder: (
        id: string,
        body: ReorderChampionshipHonorsInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonor[]>({
          method: "PUT",
          path: `${championshipPath(id)}/honors/order`,
          body,
          ...config
        }),
      previewResolution: (
        id: string,
        honorId: string,
        query?: { actorAccountUuid?: string },
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonorResolutionPreview>({
          path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/resolution-preview`,
          query,
          ...config
        }),
      resolve: (
        id: string,
        honorId: string,
        body: ResolveChampionshipHonorInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonor>({
          method: "POST",
          path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/resolve`,
          body,
          ...config
        }),
      grant: (
        id: string,
        honorId: string,
        body: CreateChampionshipHonorGrantInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonor>({
          method: "POST",
          path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/grants`,
          body,
          ...config
        }),
      revokeGrant: (
        id: string,
        honorId: string,
        grantId: string,
        body: RevokeChampionshipHonorGrantInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHonor>({
          method: "POST",
          path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/grants/${encodeURIComponent(grantId)}/revoke`,
          body,
          ...config
        })
    },
    history: {
      get: (
        id: string,
        query?: ChampionshipHistoryQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHistory>({
          path: `${championshipPath(id)}/history`,
          query,
          ...config
        }),
      replacePlacements: (
        id: string,
        body: ReplaceChampionshipPlacementsInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHistory>({
          method: "PUT",
          path: `${championshipPath(id)}/placements`,
          body,
          ...config
        }),
      createAward: (
        id: string,
        body: CreateChampionshipAwardInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipAward>({
          method: "POST",
          path: `${championshipPath(id)}/awards`,
          body,
          ...config
        }),
      updateAward: (
        id: string,
        awardId: string,
        body: UpdateChampionshipAwardInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipAward>({
          method: "PATCH",
          path: `${championshipPath(id)}/awards/${encodeURIComponent(awardId)}`,
          body,
          ...config
        }),
      getAccount: (
        accountId: string,
        query?: ChampionshipHistoryQuery,
        config?: RequestConfig
      ) =>
        client.request<AccountChampionshipHistory>({
          path: `/championships/accounts/${encodeURIComponent(accountId)}/history`,
          query,
          ...config
        }),
      imports: {
        list: (
          id: string,
          query: ChampionshipHistoricalImportsQuery,
          config?: RequestConfig
        ) =>
          client.request<ListChampionshipHistoricalImportsResponse>({
            path: `${championshipPath(id)}/historical-imports`,
            query,
            ...config
          }),
        preview: (
          id: string,
          body: PreviewChampionshipHistoricalImportInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipHistoricalImportBatch>({
            method: "POST",
            path: `${championshipPath(id)}/historical-imports/preview`,
            body,
            ...config
          }),
        get: (
          id: string,
          batchId: string,
          query: { actorAccountUuid: string },
          config?: RequestConfig
        ) =>
          client.request<ChampionshipHistoricalImportBatch>({
            path: `${championshipPath(id)}/historical-imports/${encodeURIComponent(batchId)}`,
            query,
            ...config
          }),
        apply: (
          id: string,
          batchId: string,
          body: ApplyChampionshipHistoricalImportInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipHistoricalImportBatch>({
            method: "POST",
            path: `${championshipPath(id)}/historical-imports/${encodeURIComponent(batchId)}/apply`,
            body,
            ...config
          }),
        rollback: (
          id: string,
          batchId: string,
          body: RollbackChampionshipHistoricalImportInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipHistoricalImportBatch>({
            method: "POST",
            path: `${championshipPath(id)}/historical-imports/${encodeURIComponent(batchId)}/rollback`,
            body,
            ...config
          })
      },
      linkHistoricalPlayer: (
        id: string,
        historicalPlayerId: string,
        body: LinkChampionshipHistoricalPlayerInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipHistoricalPlayer>({
          method: "POST",
          path: `${championshipPath(id)}/historical-players/${encodeURIComponent(historicalPlayerId)}/link`,
          body,
          ...config
        })
    },
    types: {
      list: (query?: ListCompetitionTypesQuery, config?: RequestConfig) =>
        client.request<ListCompetitionTypesResponse>({
          path: "/championships/competition-types",
          query,
          ...config
        }),
      create: (body: CreateCompetitionTypeInput, config?: RequestConfig) =>
        client.request<ChampionshipCompetitionType>({
          method: "POST",
          path: "/championships/competition-types",
          body,
          ...config
        }),
      update: (
        id: string,
        body: UpdateCompetitionTypeInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipCompetitionType>({
          method: "PATCH",
          path: `/championships/competition-types/${encodeURIComponent(id)}`,
          body,
          ...config
        })
    },
    teamIdentities: {
      list: (query?: PaginationQuery, config?: RequestConfig) =>
        client.request<ListTeamIdentitiesResponse>({
          path: "/championships/team-identities",
          query,
          ...config
        }),
      getHistory: (
        identityId: string,
        query?: ChampionshipHistoryQuery,
        config?: RequestConfig
      ) =>
        client.request<TeamIdentityHistory>({
          path: `/championships/team-identities/${encodeURIComponent(
            identityId
          )}/history`,
          query,
          ...config
        }),
      create: (
        championshipId: string,
        body: CreateTeamIdentityInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipTeamIdentity>({
          method: "POST",
          path: `${championshipPath(championshipId)}/team-identities`,
          body,
          ...config
        }),
      update: (
        championshipId: string,
        identityId: string,
        body: UpdateTeamIdentityInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipTeamIdentity>({
          method: "PATCH",
          path: `${championshipPath(
            championshipId
          )}/team-identities/${encodeURIComponent(identityId)}`,
          body,
          ...config
        })
    },
    teams: {
      list: (
        championshipId: string,
        query?: PaginationQuery,
        config?: RequestConfig
      ) =>
        client.request<ListChampionshipTeamsResponse>({
          path: `${championshipPath(championshipId)}/teams`,
          query,
          ...config
        }),
      create: (
        championshipId: string,
        body: CreateChampionshipTeamInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipTeam>({
          method: "POST",
          path: `${championshipPath(championshipId)}/teams`,
          body,
          ...config
        }),
      update: (
        championshipId: string,
        teamId: string,
        body: UpdateChampionshipTeamInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipTeam>({
          method: "PATCH",
          path: `${championshipPath(championshipId)}/teams/${encodeURIComponent(
            teamId
          )}`,
          body,
          ...config
        })
    },
    participants: {
      list: (
        championshipId: string,
        query?: ListChampionshipParticipantsQuery,
        config?: RequestConfig
      ) =>
        client.request<ListChampionshipParticipantsResponse>({
          path: `${championshipPath(championshipId)}/participants`,
          query,
          ...config
        }),
      create: (
        championshipId: string,
        body: CreateChampionshipParticipantInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipParticipant>({
          method: "POST",
          path: `${championshipPath(championshipId)}/participants`,
          body,
          ...config
        }),
      update: (
        championshipId: string,
        participantId: string,
        body: UpdateChampionshipParticipantInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipParticipant>({
          method: "PATCH",
          path: `${championshipPath(
            championshipId
          )}/participants/${encodeURIComponent(participantId)}`,
          body,
          ...config
        })
    },
    registration: {
      getSelf: (
        championshipId: string,
        query: ChampionshipSelfRegistrationQuery,
        config?: RequestConfig
      ) =>
        client.request<{ participant: ChampionshipParticipant | null }>({
          path: `${championshipPath(championshipId)}/registrations/self`,
          query,
          ...config
        }),
      transition: (
        championshipId: string,
        body: TransitionChampionshipRegistrationInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDetail>({
          method: "POST",
          path: `${championshipPath(championshipId)}/registration/transitions`,
          body,
          ...config
        }),
      selfRegister: (
        championshipId: string,
        body: SelfRegisterChampionshipInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipParticipant>({
          method: "POST",
          path: `${championshipPath(championshipId)}/registrations/self`,
          body,
          ...config
        }),
      withdraw: (
        championshipId: string,
        body: WithdrawChampionshipRegistrationInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipParticipant>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/registrations/self/withdraw`,
          body,
          ...config
        })
    },
    salary: {
      getPublic: (
        championshipId: string,
        query?: ChampionshipSalaryQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipSalaryProjection>({
          path: `${championshipPath(championshipId)}/salary`,
          query,
          ...config
        }),
      getAdmin: (
        championshipId: string,
        query: ChampionshipSalaryAdminQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipSalaryProjection>({
          path: `${championshipPath(championshipId)}/salary/admin`,
          query,
          ...config
        }),
      upsertPrices: (
        championshipId: string,
        body: UpsertChampionshipPricesInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipSalaryProjection>({
          method: "PUT",
          path: `${championshipPath(championshipId)}/salary/prices`,
          body,
          ...config
        }),
      freezePrices: (
        championshipId: string,
        body: FreezeChampionshipPricesInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipSalaryProjection>({
          method: "POST",
          path: `${championshipPath(championshipId)}/salary/prices/freeze`,
          body,
          ...config
        })
    },
    rosters: {
      previewMove: (
        championshipId: string,
        body: PreviewChampionshipRosterMoveInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipRosterMovePreview>({
          method: "POST",
          path: `${championshipPath(championshipId)}/roster-moves/preview`,
          body,
          ...config
        }),
      executeMove: (
        championshipId: string,
        body: ExecuteChampionshipRosterMoveInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipRosterMembership>({
          method: "POST",
          path: `${championshipPath(championshipId)}/roster-moves`,
          body,
          ...config
        }),
      reorder: (
        championshipId: string,
        body: ReorderChampionshipRosterInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipRosterOrder>({
          method: "PUT",
          path: `${championshipPath(championshipId)}/roster-order`,
          body,
          ...config
        }),
      history: (
        championshipId: string,
        query?: ChampionshipRosterHistoryQuery,
        config?: RequestConfig
      ) =>
        client.request<ListChampionshipRosterHistoryResponse>({
          path: `${championshipPath(championshipId)}/roster-history`,
          query,
          ...config
        })
    },
    draft: {
      get: (
        championshipId: string,
        query?: ChampionshipDraftQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraft>({
          path: `${championshipPath(championshipId)}/draft`,
          query,
          ...config
        }),
      configure: (
        championshipId: string,
        body: ConfigureChampionshipDraftInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraft>({
          method: "PUT",
          path: `${championshipPath(championshipId)}/draft`,
          body,
          ...config
        }),
      start: (
        championshipId: string,
        body: StartChampionshipDraftInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraft>({
          method: "POST",
          path: `${championshipPath(championshipId)}/draft/start`,
          body,
          ...config
        }),
      pick: (
        championshipId: string,
        body: MakeChampionshipDraftPickInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraft>({
          method: "POST",
          path: `${championshipPath(championshipId)}/draft/picks`,
          body,
          ...config
        }),
      end: (
        championshipId: string,
        body: EndChampionshipDraftInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraft>({
          method: "POST",
          path: `${championshipPath(championshipId)}/draft/end`,
          body,
          ...config
        }),
      cancel: (
        championshipId: string,
        body: CancelChampionshipDraftInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraft>({
          method: "POST",
          path: `${championshipPath(championshipId)}/draft/cancel`,
          body,
          ...config
        }),
      previewCorrection: (
        championshipId: string,
        turnId: string,
        query: ChampionshipDraftCorrectionQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraftCorrectionPreview>({
          path: `${championshipPath(
            championshipId
          )}/draft/turns/${encodeURIComponent(turnId)}/correction-preview`,
          query,
          ...config
        }),
      reversePick: (
        championshipId: string,
        turnId: string,
        body: VoidChampionshipDraftPickInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDraft>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/draft/turns/${encodeURIComponent(turnId)}/void`,
          body,
          ...config
        })
    },
    trades: {
      list: (
        championshipId: string,
        query?: ChampionshipTradesQuery,
        config?: RequestConfig
      ) =>
        client.request<ListChampionshipTradesResponse>({
          path: `${championshipPath(championshipId)}/trades`,
          query,
          ...config
        }),
      create: (
        championshipId: string,
        body: CreateChampionshipTradeInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipTrade>({
          method: "POST",
          path: `${championshipPath(championshipId)}/trades`,
          body,
          ...config
        }),
      accept: (
        championshipId: string,
        tradeId: string,
        body: DecideChampionshipTradeInput,
        config?: RequestConfig
      ) => decideTrade(client, championshipId, tradeId, "accept", body, config),
      reject: (
        championshipId: string,
        tradeId: string,
        body: DecideChampionshipTradeInput,
        config?: RequestConfig
      ) => decideTrade(client, championshipId, tradeId, "reject", body, config),
      cancel: (
        championshipId: string,
        tradeId: string,
        body: DecideChampionshipTradeInput,
        config?: RequestConfig
      ) => decideTrade(client, championshipId, tradeId, "cancel", body, config)
    },
    format: {
      get: (
        championshipId: string,
        query?: ChampionshipFormatQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          path: `${championshipPath(championshipId)}/format`,
          query,
          ...config
        }),
      createStage: (
        championshipId: string,
        body: CreateChampionshipStageInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages`,
          body,
          ...config
        }),
      updateStage: (
        championshipId: string,
        stageId: string,
        body: UpdateChampionshipStageInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "PATCH",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}`,
          body,
          ...config
        }),
      deleteStage: (
        championshipId: string,
        stageId: string,
        body: DeleteChampionshipStageInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "DELETE",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}`,
          body,
          ...config
        }),
      createGroup: (
        championshipId: string,
        stageId: string,
        body: CreateChampionshipGroupInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}/groups`,
          body,
          ...config
        }),
      configureStandings: (
        championshipId: string,
        stageId: string,
        body: ConfigureChampionshipStandingsInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "PUT",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}/standings-rules`,
          body,
          ...config
        }),
      getStandings: (
        championshipId: string,
        stageId: string,
        groupId: string,
        query?: ChampionshipStandingsQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipStandings>({
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}/groups/${encodeURIComponent(groupId)}/standings`,
          query,
          ...config
        }),
      previewRoundRobin: (
        championshipId: string,
        stageId: string,
        body: PreviewChampionshipRoundRobinInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipRoundRobinPreview>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}/round-robin/preview`,
          body,
          ...config
        }),
      generateRoundRobin: (
        championshipId: string,
        stageId: string,
        body: GenerateChampionshipRoundRobinInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}/round-robin`,
          body,
          ...config
        }),
      previewClassification: (
        championshipId: string,
        stageId: string,
        groupId: string,
        body: PreviewChampionshipClassificationInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipStandings>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}/groups/${encodeURIComponent(groupId)}/classification/preview`,
          body,
          ...config
        }),
      applyClassification: (
        championshipId: string,
        stageId: string,
        groupId: string,
        body: ApplyChampionshipClassificationInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipStandings>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(
            stageId
          )}/groups/${encodeURIComponent(groupId)}/classification/apply`,
          body,
          ...config
        }),
      generateSingleElimination: (
        championshipId: string,
        body: GenerateSingleEliminationInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages/single-elimination`,
          body,
          ...config
        }),
      previewDoubleElimination: (
        championshipId: string,
        body: PreviewDoubleEliminationInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDoubleEliminationPreview>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/stages/double-elimination/preview`,
          body,
          ...config
        }),
      generateDoubleElimination: (
        championshipId: string,
        body: GenerateDoubleEliminationInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/stages/double-elimination`,
          body,
          ...config
        }),
      createSpot: (
        championshipId: string,
        body: CreateChampionshipSpotInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/spots`,
          body,
          ...config
        }),
      placeSpot: (
        championshipId: string,
        spotId: string,
        body: PlaceChampionshipSpotInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/spots/${encodeURIComponent(
            spotId
          )}/place`,
          body,
          ...config
        }),
      previewSpotPlacement: (
        championshipId: string,
        spotId: string,
        body: PreviewChampionshipSpotPlacementInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipSpotPlacementPreview>({
          method: "POST",
          path: `${championshipPath(championshipId)}/spots/${encodeURIComponent(
            spotId
          )}/placement-preview`,
          body,
          ...config
        }),
      createRoute: (
        championshipId: string,
        body: CreateChampionshipRouteInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/progression-routes`,
          body,
          ...config
        }),
      updateRoute: (
        championshipId: string,
        routeId: string,
        body: UpdateChampionshipRouteInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "PATCH",
          path: `${championshipPath(
            championshipId
          )}/progression-routes/${encodeURIComponent(routeId)}`,
          body,
          ...config
        }),
      createCompetitionRound: (
        championshipId: string,
        body: CreateChampionshipCompetitionRoundInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/competition-rounds`,
          body,
          ...config
        }),
      createMatch: (
        championshipId: string,
        body: CreateChampionshipLogicalMatchInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "POST",
          path: `${championshipPath(championshipId)}/championship-matches`,
          body,
          ...config
        }),
      scheduleMatch: (
        championshipId: string,
        championshipMatchId: string,
        body: ScheduleChampionshipMatchInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipFormat>({
          method: "PATCH",
          path: `${championshipPath(
            championshipId
          )}/championship-matches/${encodeURIComponent(
            championshipMatchId
          )}/schedule`,
          body,
          ...config
        })
    },
    scheduling: {
      get: (
        championshipId: string,
        championshipMatchId: string,
        query: ChampionshipMatchSchedulingQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchScheduling>({
          path: `${championshipPath(
            championshipId
          )}/championship-matches/${encodeURIComponent(
            championshipMatchId
          )}/scheduling`,
          query,
          ...config
        }),
      propose: (
        championshipId: string,
        championshipMatchId: string,
        body: CreateChampionshipScheduleProposalInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchScheduling>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/championship-matches/${encodeURIComponent(
            championshipMatchId
          )}/schedule-proposals`,
          body,
          ...config
        }),
      decide: (
        championshipId: string,
        championshipMatchId: string,
        proposalId: string,
        body: DecideChampionshipScheduleProposalInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchScheduling>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/championship-matches/${encodeURIComponent(
            championshipMatchId
          )}/schedule-proposals/${encodeURIComponent(proposalId)}/decision`,
          body,
          ...config
        }),
      authorizeLatePlay: (
        championshipId: string,
        championshipMatchId: string,
        body: AuthorizeChampionshipLatePlayInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchScheduling>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/championship-matches/${encodeURIComponent(
            championshipMatchId
          )}/late-play-authorizations`,
          body,
          ...config
        }),
      revokeLatePlay: (
        championshipId: string,
        championshipMatchId: string,
        authorizationId: string,
        body: RevokeChampionshipLatePlayInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchScheduling>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/championship-matches/${encodeURIComponent(
            championshipMatchId
          )}/late-play-authorizations/${encodeURIComponent(
            authorizationId
          )}/revoke`,
          body,
          ...config
        }),
      remind: (
        championshipId: string,
        championshipMatchId: string,
        body: RemindChampionshipScheduleInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchScheduling>({
          method: "POST",
          path: `${championshipPath(
            championshipId
          )}/championship-matches/${encodeURIComponent(
            championshipMatchId
          )}/schedule-reminders`,
          body,
          ...config
        })
    },
    matches: {
      get: (
        championshipId: string,
        championshipMatchId: string,
        query?: ChampionshipMatchOperationsQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchOperations>({
          path: championshipMatchPath(championshipId, championshipMatchId),
          query,
          ...config
        }),
      listEvidenceCandidates: (
        championshipId: string,
        championshipMatchId: string,
        query: ChampionshipEvidenceCandidatesQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipEvidenceCandidates>({
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/evidence-candidates`,
          query,
          ...config
        }),
      attachEvidence: (
        championshipId: string,
        championshipMatchId: string,
        body: AttachChampionshipMatchEvidenceInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchOperations>({
          method: "PUT",
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/evidence`,
          body,
          ...config
        }),
      detachEvidence: (
        championshipId: string,
        championshipMatchId: string,
        body: DetachChampionshipMatchEvidenceInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchOperations>({
          method: "DELETE",
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/evidence`,
          body,
          ...config
        }),
      previewSettlement: (
        championshipId: string,
        championshipMatchId: string,
        body: PreviewChampionshipSettlementInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipSettlementPreview>({
          method: "POST",
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/settlement-previews`,
          body,
          ...config
        }),
      settle: (
        championshipId: string,
        championshipMatchId: string,
        body: SettleChampionshipMatchInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchOperations>({
          method: "POST",
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/settlements`,
          body,
          ...config
        }),
      previewCorrection: (
        championshipId: string,
        championshipMatchId: string,
        body: PreviewChampionshipSettlementInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipSettlementPreview>({
          method: "POST",
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/correction-previews`,
          body,
          ...config
        }),
      correct: (
        championshipId: string,
        championshipMatchId: string,
        body: SettleChampionshipMatchInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchOperations>({
          method: "POST",
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/corrections`,
          body,
          ...config
        }),
      updateAttributions: (
        championshipId: string,
        championshipMatchId: string,
        body: UpdateChampionshipAttributionsInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMatchOperations>({
          method: "PUT",
          path: `${championshipMatchPath(
            championshipId,
            championshipMatchId
          )}/attributions`,
          body,
          ...config
        })
    },
    statistics: {
      get: (
        championshipId: string,
        query?: ChampionshipStatisticsQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipStatistics>({
          path: `${championshipPath(championshipId)}/statistics`,
          query,
          ...config
        }),
      listMappings: (
        championshipId: string,
        query: ChampionshipMetricMappingsQuery,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMetricMappings>({
          path: `${championshipPath(championshipId)}/statistic-mappings`,
          query,
          ...config
        }),
      replaceMappings: (
        championshipId: string,
        body: ReplaceChampionshipMetricMappingsInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipMetricMappings>({
          method: "PUT",
          path: `${championshipPath(championshipId)}/statistic-mappings`,
          body,
          ...config
        })
    },
    roomPrograms: {
      change: (
        championshipId: string,
        body: UpdateChampionshipRoomProgramInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDetail>({
          method: "POST",
          path: `${championshipPath(championshipId)}/room-programs`,
          body,
          ...config
        })
    },
    grants: {
      change: (
        championshipId: string,
        body: UpdateChampionshipGrantInput,
        config?: RequestConfig
      ) =>
        client.request<ChampionshipDetail>({
          method: "POST",
          path: `${championshipPath(championshipId)}/grants`,
          body,
          ...config
        })
    },
    audit: {
      list: (
        championshipId: string,
        query: ListChampionshipAuditQuery,
        config?: RequestConfig
      ) =>
        client.request<ListChampionshipAuditResponse>({
          path: `${championshipPath(championshipId)}/audit`,
          query,
          ...config
        })
    },
    events: {
      open: (
        championshipId: string,
        query: ChampionshipEventsQuery,
        config: ChampionshipEventStreamConfig = {}
      ) => {
        const headers = new Headers(config.headers);

        if (config.lastEventId !== undefined) {
          headers.set("last-event-id", String(config.lastEventId));
        }

        return client.openStream({
          path: `${championshipPath(championshipId)}/events`,
          query,
          headers,
          signal: config.signal
        });
      }
    },
    collaboration: {
      threads: {
        list: (
          championshipId: string,
          query: ListChampionshipCollaborationQuery,
          config?: RequestConfig
        ) =>
          client.request<ListChampionshipThreadsResponse>({
            path: `${championshipPath(championshipId)}/threads`,
            query,
            ...config
          }),
        create: (
          championshipId: string,
          body: CreateChampionshipThreadInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipThread>({
            method: "POST",
            path: `${championshipPath(championshipId)}/threads`,
            body,
            ...config
          }),
        update: (
          championshipId: string,
          threadId: string,
          body: UpdateChampionshipThreadInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipThread>({
            method: "PATCH",
            path: `${threadPath(championshipId, threadId)}`,
            body,
            ...config
          }),
        listComments: (
          championshipId: string,
          threadId: string,
          query: ListChampionshipCollaborationQuery,
          config?: RequestConfig
        ) =>
          client.request<ListChampionshipCommentsResponse>({
            path: `${threadPath(championshipId, threadId)}/comments`,
            query,
            ...config
          }),
        addComment: (
          championshipId: string,
          threadId: string,
          body: AddChampionshipCommentInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipComment>({
            method: "POST",
            path: `${threadPath(championshipId, threadId)}/comments`,
            body,
            ...config
          })
      },
      assignments: {
        list: (
          championshipId: string,
          query: ListChampionshipCollaborationQuery,
          config?: RequestConfig
        ) =>
          client.request<ListChampionshipAssignmentsResponse>({
            path: `${championshipPath(championshipId)}/assignments`,
            query,
            ...config
          }),
        create: (
          championshipId: string,
          body: CreateChampionshipAssignmentInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipAssignment>({
            method: "POST",
            path: `${championshipPath(championshipId)}/assignments`,
            body,
            ...config
          }),
        update: (
          championshipId: string,
          assignmentId: string,
          body: UpdateChampionshipAssignmentInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipAssignment>({
            method: "PATCH",
            path: `${championshipPath(
              championshipId
            )}/assignments/${encodeURIComponent(assignmentId)}`,
            body,
            ...config
          })
      },
      presence: {
        list: (
          championshipId: string,
          query: ChampionshipPresenceQuery,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipPresence[]>({
            path: `${championshipPath(championshipId)}/presence`,
            query,
            ...config
          }),
        heartbeat: (
          championshipId: string,
          body: ChampionshipPresenceInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipPresence[]>({
            method: "POST",
            path: `${championshipPath(championshipId)}/presence`,
            body,
            ...config
          })
      },
      inbox: {
        list: (query: ChampionshipInboxQuery, config?: RequestConfig) =>
          client.request<ListChampionshipInboxResponse>({
            path: "/championships/inbox",
            query,
            ...config
          }),
        update: (
          inboxItemId: string,
          body: UpdateChampionshipInboxItemInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipInboxItem>({
            method: "PATCH",
            path: `/championships/inbox/${encodeURIComponent(inboxItemId)}`,
            body,
            ...config
          })
      },
      savedViews: {
        list: (
          championshipId: string,
          query: ChampionshipSavedViewsQuery,
          config?: RequestConfig
        ) =>
          client.request<ListChampionshipSavedViewsResponse>({
            path: `${championshipPath(championshipId)}/saved-views`,
            query,
            ...config
          }),
        upsert: (
          championshipId: string,
          body: UpsertChampionshipSavedViewInput,
          config?: RequestConfig
        ) =>
          client.request<ChampionshipSavedView>({
            method: "PUT",
            path: `${championshipPath(championshipId)}/saved-views`,
            body,
            ...config
          })
      }
    }
  };
}

function championshipPath(id: string): string {
  return `/championships/${encodeURIComponent(id)}`;
}

function championshipMatchPath(
  championshipId: string,
  championshipMatchId: string
): string {
  return `${championshipPath(championshipId)}/matches/${encodeURIComponent(
    championshipMatchId
  )}`;
}

function threadPath(championshipId: string, threadId: string): string {
  return `${championshipPath(championshipId)}/threads/${encodeURIComponent(
    threadId
  )}`;
}

function decideTrade(
  client: HaxFootballApiClient,
  championshipId: string,
  tradeId: string,
  action: "accept" | "reject" | "cancel",
  body: DecideChampionshipTradeInput,
  config?: RequestConfig
) {
  return client.request<ChampionshipTrade>({
    method: "POST",
    path: `${championshipPath(
      championshipId
    )}/trades/${encodeURIComponent(tradeId)}/${action}`,
    body,
    ...config
  });
}
