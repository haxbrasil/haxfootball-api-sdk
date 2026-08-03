import { describe, expect, it, vi } from "vitest";
import { createHaxFootballApiClient, type FetchLike } from "../src";

const actorAccountUuid = "00000000-0000-4000-8000-000000000001";
const championshipUuid = "00000000-0000-4000-8000-000000000002";

describe("championship resources", () => {
  it("exposes the reusable honor catalog and edition award lifecycle", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockImplementation(async () =>
        jsonResponse({ items: [], page: { limit: 20, nextCursor: null } })
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const definitionUuid = "00000000-0000-4000-8000-000000000005";
    const honorUuid = "00000000-0000-4000-8000-000000000006";

    await client.championships.honorDefinitions.list({
      kind: "title",
      limit: 20
    });
    await client.championships.honorDefinitions.publish(definitionUuid, {
      actorAccountUuid,
      expectedRevision: 2
    });
    await client.championships.honors.list(championshipUuid, {
      actorAccountUuid,
      includeDrafts: true,
      limit: 20
    });
    await client.championships.honors.previewResolution(
      championshipUuid,
      honorUuid,
      {
        actorAccountUuid
      }
    );
    await client.championships.honors.resolve(championshipUuid, honorUuid, {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 8,
      reason: "Resultado calculado confirmado"
    });
    await client.championships.honors.grant(championshipUuid, honorUuid, {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 8,
      target: { type: "account", uuid: actorAccountUuid },
      reason: "Resultado oficial"
    });

    expect(fetcher.mock.calls[0]?.[0].toString()).toBe(
      "https://api.example.com/api/championships/honor-definitions?kind=title&limit=20"
    );
    expect(fetcher.mock.calls[1]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/honor-definitions/${definitionUuid}/publish`
    );
    expect(fetcher.mock.calls[2]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/honors?actorAccountUuid=${actorAccountUuid}&includeDrafts=true&limit=20`
    );
    expect(fetcher.mock.calls[3]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/honors/${honorUuid}/resolution-preview?actorAccountUuid=${actorAccountUuid}`
    );
    expect(fetcher.mock.calls[4]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/honors/${honorUuid}/resolve`
    );
    expect(fetcher.mock.calls[5]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/honors/${honorUuid}/grants`
    );
  });

  it("builds bounded list and nested team requests", async () => {
    const fetcher = vi.fn<FetchLike>().mockImplementation(async () =>
      jsonResponse({
        items: [],
        page: { limit: 25, nextCursor: null }
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    await client.championships.list({
      lifecycle: "active",
      visibility: "all",
      limit: 25
    });
    await client.championships.teams.create(championshipUuid, {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 3,
      name: "Aurora"
    });

    expect(fetcher.mock.calls[0]?.[0].toString()).toBe(
      "https://api.example.com/api/championships?lifecycle=active&visibility=all&limit=25"
    );
    expect(fetcher.mock.calls[1]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/teams`
    );
    expect(fetcher.mock.calls[1]?.[1]).toMatchObject({
      method: "POST",
      body: expect.stringContaining('"name":"Aurora"')
    });
  });

  it("exposes collaboration and audit resources with actor queries", async () => {
    const fetcher = vi.fn<FetchLike>().mockImplementation(async () =>
      jsonResponse({
        items: [],
        page: { limit: 10, nextCursor: null }
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    await client.championships.audit.list(championshipUuid, {
      actorAccountUuid,
      afterSequence: 7,
      limit: 10
    });
    await client.championships.collaboration.threads.list(championshipUuid, {
      actorAccountUuid,
      contextType: "match",
      contextUuid: "final",
      state: "open",
      limit: 10
    });

    expect(fetcher.mock.calls[0]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/audit?actorAccountUuid=${actorAccountUuid}&afterSequence=7&limit=10`
    );
    expect(fetcher.mock.calls[1]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/threads?actorAccountUuid=${actorAccountUuid}&contextType=match&contextUuid=final&state=open&limit=10`
    );
  });

  it("opens authenticated SSE without consuming the response body", async () => {
    const streamResponse = new Response(
      'id: 8\nevent: championship-change\ndata: {"sequence":8}\n\n',
      {
        headers: {
          "content-type": "text/event-stream"
        }
      }
    );
    const fetcher = vi.fn<FetchLike>().mockResolvedValue(streamResponse);
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const result = await client.championships.events.open(
      championshipUuid,
      {
        actorAccountUuid,
        afterSequence: 4
      },
      {
        lastEventId: 7
      }
    );

    expect(result.ok).toBe(true);
    expect(result.ok && result.data).toBe(streamResponse);
    expect(result.ok && (await result.data.text())).toContain("sequence");

    const [url, init] = fetcher.mock.calls[0] ?? [];
    const headers = new Headers(init?.headers);

    expect(url?.toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/events?actorAccountUuid=${actorAccountUuid}&afterSequence=4`
    );
    expect(headers.get("authorization")).toBe("Bearer api-token");
    expect(headers.get("accept")).toBe("text/event-stream");
    expect(headers.get("last-event-id")).toBe("7");
  });

  it("returns typed API failures when an event stream is rejected", async () => {
    const fetcher = vi.fn<FetchLike>().mockResolvedValue(
      jsonResponse(
        {
          error: {
            code: "FORBIDDEN",
            message: "Missing championship permission"
          }
        },
        { status: 403, statusText: "Forbidden" }
      )
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const result = await client.championships.events.open(championshipUuid, {
      actorAccountUuid
    });

    expect(result.ok).toBe(false);
    expect(!result.ok && result.error).toMatchObject({
      kind: "api",
      status: 403,
      code: "FORBIDDEN",
      message: "Missing championship permission"
    });
  });

  it("updates inbox state and persists bounded saved views", async () => {
    const fetcher = vi.fn<FetchLike>().mockImplementation(async () =>
      jsonResponse({
        items: [],
        page: { limit: 20, nextCursor: null }
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const inboxItemUuid = "00000000-0000-4000-8000-000000000003";

    await client.championships.collaboration.inbox.update(inboxItemUuid, {
      actorAccountUuid,
      operation: "read"
    });
    await client.championships.collaboration.savedViews.list(championshipUuid, {
      actorAccountUuid,
      surface: "workspace",
      limit: 20
    });
    await client.championships.collaboration.savedViews.upsert(
      championshipUuid,
      {
        actorAccountUuid,
        surface: "workspace",
        name: "Padrão",
        state: { view: "teams", inspector: true },
        isDefault: true
      }
    );

    expect(fetcher.mock.calls[0]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/inbox/${inboxItemUuid}`
    );
    expect(fetcher.mock.calls[0]?.[1]).toMatchObject({
      method: "PATCH",
      body: expect.stringContaining('"operation":"read"')
    });
    expect(fetcher.mock.calls[1]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/saved-views?actorAccountUuid=${actorAccountUuid}&surface=workspace&limit=20`
    );
    expect(fetcher.mock.calls[2]?.[1]).toMatchObject({
      method: "PUT",
      body: expect.stringContaining('"isDefault":true')
    });
  });

  it("exposes registration and bounded salary projections", async () => {
    const fetcher = vi.fn<FetchLike>().mockImplementation(async () =>
      jsonResponse({
        items: [],
        page: { limit: 50, nextCursor: null }
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    await client.championships.registration.selfRegister(championshipUuid, {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 4
    });
    await client.championships.registration.getSelf(championshipUuid, {
      actorAccountUuid
    });
    await client.championships.salary.getAdmin(championshipUuid, {
      actorAccountUuid,
      participantLimit: 50,
      teamLimit: 25
    });
    await client.championships.salary.upsertPrices(championshipUuid, {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 5,
      prices: [
        {
          participantId: "00000000-0000-4000-8000-000000000004",
          priceUnits: 75
        }
      ]
    });

    expect(fetcher.mock.calls[0]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/registrations/self`
    );
    expect(fetcher.mock.calls[0]?.[1]).toMatchObject({ method: "POST" });
    expect(fetcher.mock.calls[1]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/registrations/self?actorAccountUuid=${actorAccountUuid}`
    );
    expect(fetcher.mock.calls[2]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/salary/admin?actorAccountUuid=${actorAccountUuid}&participantLimit=50&teamLimit=25`
    );
    expect(fetcher.mock.calls[3]?.[1]).toMatchObject({
      method: "PUT",
      body: expect.stringContaining('"priceUnits":75')
    });
  });

  it("uses one resource family for roster previews, moves, and history", async () => {
    const fetcher = vi.fn<FetchLike>().mockImplementation(async () =>
      jsonResponse({
        items: [],
        page: { limit: 10, nextCursor: null }
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const participantId = "00000000-0000-4000-8000-000000000004";
    const teamId = "00000000-0000-4000-8000-000000000005";

    await client.championships.rosters.previewMove(championshipUuid, {
      actorAccountUuid,
      participantId,
      targetTeamId: teamId,
      role: "gm"
    });
    await client.championships.rosters.executeMove(championshipUuid, {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 8,
      participantId,
      targetTeamId: teamId,
      role: "gm",
      confirmCapException: true,
      reason: "Exceção aprovada"
    });
    await client.championships.rosters.history(championshipUuid, {
      participantId,
      limit: 10
    });

    expect(fetcher.mock.calls[0]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/roster-moves/preview`
    );
    expect(fetcher.mock.calls[1]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/roster-moves`
    );
    expect(fetcher.mock.calls[2]?.[0].toString()).toBe(
      `https://api.example.com/api/championships/${championshipUuid}/roster-history?participantId=${participantId}&limit=10`
    );
  });

  it("exposes the complete draft command lifecycle", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockImplementation(async () => jsonResponse({ draft: null }));
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const turnId = "00000000-0000-4000-8000-000000000006";
    const commandUuid = crypto.randomUUID();

    await client.championships.draft.get(championshipUuid, {
      actorAccountUuid,
      turnLimit: 64,
      participantLimit: 80
    });
    await client.championships.draft.configure(championshipUuid, {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 4,
      countdownSeconds: 45,
      rounds: 4,
      teamIds: ["team-a", "team-b"]
    });
    await client.championships.draft.start(championshipUuid, {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 5,
      expectedDraftRevision: 1
    });
    await client.championships.draft.pick(championshipUuid, {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 6,
      expectedDraftRevision: 2,
      participantId: "player-a"
    });
    await client.championships.draft.previewCorrection(
      championshipUuid,
      turnId,
      { actorAccountUuid }
    );
    await client.championships.draft.reversePick(championshipUuid, turnId, {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 7,
      expectedDraftRevision: 3,
      reason: "Seleção incorreta"
    });
    await client.championships.draft.end(championshipUuid, {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 8,
      expectedDraftRevision: 4,
      reason: "Encerramento manual"
    });
    await client.championships.draft.cancel(championshipUuid, {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 9,
      expectedDraftRevision: 5,
      reason: "Draft criado por engano"
    });

    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `https://api.example.com/api/championships/${championshipUuid}/draft?actorAccountUuid=${actorAccountUuid}&turnLimit=64&participantLimit=80`,
      `https://api.example.com/api/championships/${championshipUuid}/draft`,
      `https://api.example.com/api/championships/${championshipUuid}/draft/start`,
      `https://api.example.com/api/championships/${championshipUuid}/draft/picks`,
      `https://api.example.com/api/championships/${championshipUuid}/draft/turns/${turnId}/correction-preview?actorAccountUuid=${actorAccountUuid}`,
      `https://api.example.com/api/championships/${championshipUuid}/draft/turns/${turnId}/void`,
      `https://api.example.com/api/championships/${championshipUuid}/draft/end`,
      `https://api.example.com/api/championships/${championshipUuid}/draft/cancel`
    ]);
    expect(fetcher.mock.calls[1]?.[1]).toMatchObject({ method: "PUT" });
    expect(fetcher.mock.calls[2]?.[1]?.method).toBe("POST");
    expect(fetcher.mock.calls[3]?.[1]?.method).toBe("POST");
    expect(fetcher.mock.calls[4]?.[1]?.method).toBe("GET");
    expect(fetcher.mock.calls[5]?.[1]?.method).toBe("POST");
    expect(fetcher.mock.calls[6]?.[1]?.method).toBe("POST");
    expect(fetcher.mock.calls[7]?.[1]?.method).toBe("POST");
  });

  it("keeps pending trade operations in one typed resource family", async () => {
    const fetcher = vi.fn<FetchLike>().mockImplementation(async () =>
      jsonResponse({
        items: [],
        page: { limit: 20, nextCursor: null }
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const tradeId = "00000000-0000-4000-8000-000000000007";
    const commandUuid = crypto.randomUUID();

    await client.championships.trades.list(championshipUuid, {
      actorAccountUuid,
      visibility: "involved",
      state: "proposed",
      limit: 20
    });
    await client.championships.trades.create(championshipUuid, {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 10,
      proposingTeamId: "team-a",
      receivingTeamId: "team-b",
      proposingParticipantIds: ["player-a"],
      receivingParticipantIds: ["player-b"]
    });
    const decision = {
      actorAccountUuid,
      commandUuid,
      expectedRevision: 11,
      expectedTradeRevision: 1
    };
    await client.championships.trades.accept(
      championshipUuid,
      tradeId,
      decision
    );
    await client.championships.trades.reject(
      championshipUuid,
      tradeId,
      decision
    );
    await client.championships.trades.cancel(
      championshipUuid,
      tradeId,
      decision
    );

    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `https://api.example.com/api/championships/${championshipUuid}/trades?actorAccountUuid=${actorAccountUuid}&visibility=involved&state=proposed&limit=20`,
      `https://api.example.com/api/championships/${championshipUuid}/trades`,
      `https://api.example.com/api/championships/${championshipUuid}/trades/${tradeId}/accept`,
      `https://api.example.com/api/championships/${championshipUuid}/trades/${tradeId}/reject`,
      `https://api.example.com/api/championships/${championshipUuid}/trades/${tradeId}/cancel`
    ]);
    expect(
      fetcher.mock.calls.slice(1).every((call) => call[1]?.method === "POST")
    ).toBe(true);
  });

  it("exposes format graph generation, manual editing, and scheduling", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockImplementation(async () =>
        jsonResponse({ championshipUuid, championshipRevision: 1 })
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const stageId = "00000000-0000-4000-8000-000000000010";
    const spotId = "00000000-0000-4000-8000-000000000011";
    const matchId = "00000000-0000-4000-8000-000000000012";
    const base = {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 3
    };

    await client.championships.format.get(championshipUuid, {
      actorAccountUuid,
      limit: 200
    });
    await client.championships.format.generateSingleElimination(
      championshipUuid,
      {
        ...base,
        name: "Mata-mata",
        teamIds: ["team-a", "team-b"],
        createCompetitionRounds: true
      }
    );
    await client.championships.format.previewDoubleElimination(
      championshipUuid,
      {
        actorAccountUuid,
        teamIds: ["team-a", "team-b"],
        grandFinalReset: true
      }
    );
    await client.championships.format.generateDoubleElimination(
      championshipUuid,
      {
        ...base,
        name: "Dupla eliminação",
        teamIds: ["team-a", "team-b"],
        grandFinalReset: true,
        createCompetitionRounds: true
      }
    );
    await client.championships.format.createSpot(championshipUuid, {
      ...base,
      stageId,
      key: "manual",
      label: "Manual",
      kind: "manual"
    });
    await client.championships.format.previewSpotPlacement(
      championshipUuid,
      spotId,
      {
        actorAccountUuid,
        teamId: "00000000-0000-4000-8000-000000000013"
      }
    );
    await client.championships.format.placeSpot(championshipUuid, spotId, {
      ...base,
      expectedSpotRevision: 1,
      teamId: "00000000-0000-4000-8000-000000000013",
      confirmedImpactMatchUuids: []
    });
    await client.championships.format.scheduleMatch(championshipUuid, matchId, {
      ...base,
      expectedMatchRevision: 1,
      scheduledAt: "2026-08-08T21:00:00.000Z",
      scheduleStatus: "scheduled"
    });

    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `https://api.example.com/api/championships/${championshipUuid}/format?actorAccountUuid=${actorAccountUuid}&limit=200`,
      `https://api.example.com/api/championships/${championshipUuid}/stages/single-elimination`,
      `https://api.example.com/api/championships/${championshipUuid}/stages/double-elimination/preview`,
      `https://api.example.com/api/championships/${championshipUuid}/stages/double-elimination`,
      `https://api.example.com/api/championships/${championshipUuid}/spots`,
      `https://api.example.com/api/championships/${championshipUuid}/spots/${spotId}/placement-preview`,
      `https://api.example.com/api/championships/${championshipUuid}/spots/${spotId}/place`,
      `https://api.example.com/api/championships/${championshipUuid}/championship-matches/${matchId}/schedule`
    ]);
    expect(fetcher.mock.calls.map((call) => call[1]?.method)).toEqual([
      "GET",
      "POST",
      "POST",
      "POST",
      "POST",
      "POST",
      "POST",
      "PATCH"
    ]);
  });

  it("exposes standings, round-robin generation, and classification commands", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockImplementation(async () =>
        jsonResponse({ championshipUuid, championshipRevision: 4 })
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const stageId = "00000000-0000-4000-8000-000000000030";
    const groupId = "00000000-0000-4000-8000-000000000031";
    const command = {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 3
    };

    await client.championships.format.createGroup(championshipUuid, stageId, {
      ...command,
      expectedStageRevision: 1,
      name: "Grupo A",
      teamIds: []
    });
    await client.championships.format.configureStandings(
      championshipUuid,
      stageId,
      {
        ...command,
        expectedStageRevision: 2,
        scoring: { win: 3, draw: 1, loss: 0 },
        headToHeadRestart: "restart-for-subgroup",
        rules: [{ criterion: "points", direction: "desc" }]
      }
    );
    await client.championships.format.getStandings(
      championshipUuid,
      stageId,
      groupId,
      { actorAccountUuid }
    );
    await client.championships.format.previewRoundRobin(
      championshipUuid,
      stageId,
      {
        actorAccountUuid,
        sameGroupMeetings: 2,
        crossGroupMeetings: 1
      }
    );
    await client.championships.format.generateRoundRobin(
      championshipUuid,
      stageId,
      {
        ...command,
        expectedStageRevision: 3,
        sameGroupMeetings: 2,
        crossGroupMeetings: 1
      }
    );
    await client.championships.format.previewClassification(
      championshipUuid,
      stageId,
      groupId,
      { actorAccountUuid }
    );
    await client.championships.format.applyClassification(
      championshipUuid,
      stageId,
      groupId,
      {
        ...command,
        expectedStageRevision: 3,
        confirmedImpactMatchUuids: []
      }
    );

    const stageRoot =
      `https://api.example.com/api/championships/${championshipUuid}` +
      `/stages/${stageId}`;
    const groupRoot = `${stageRoot}/groups/${groupId}`;
    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `${stageRoot}/groups`,
      `${stageRoot}/standings-rules`,
      `${groupRoot}/standings?actorAccountUuid=${actorAccountUuid}`,
      `${stageRoot}/round-robin/preview`,
      `${stageRoot}/round-robin`,
      `${groupRoot}/classification/preview`,
      `${groupRoot}/classification/apply`
    ]);
    expect(fetcher.mock.calls.map((call) => call[1]?.method)).toEqual([
      "POST",
      "PUT",
      "GET",
      "POST",
      "POST",
      "POST",
      "POST"
    ]);
  });

  it("covers the complete evidence, settlement, correction, and attribution workflow", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockImplementation(async () =>
        jsonResponse({ championshipUuid, championshipRevision: 8 })
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const matchId = "00000000-0000-4000-8000-000000000020";
    const command = {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 8
    };
    const result = {
      actorAccountUuid,
      method: "played" as const,
      sideAPlayedScore: 3,
      sideBPlayedScore: 2,
      sideAOutcome: "win" as const,
      sideBOutcome: "loss" as const,
      evidenceQualityReviewed: true
    };

    await client.championships.matches.get(championshipUuid, matchId, {
      actorAccountUuid
    });
    await client.championships.matches.listEvidenceCandidates(
      championshipUuid,
      matchId,
      {
        actorAccountUuid,
        quality: "recovered",
        claimState: "available",
        includeAllPrograms: true,
        limit: 25
      }
    );
    await client.championships.matches.attachEvidence(
      championshipUuid,
      matchId,
      {
        ...command,
        expectedEvidenceRevision: 0,
        logicalMatchId: "c23456789",
        orientation: "swapped"
      }
    );
    await client.championships.matches.detachEvidence(
      championshipUuid,
      matchId,
      {
        ...command,
        expectedEvidenceRevision: 1,
        reason: "Registro incorreto"
      }
    );
    await client.championships.matches.previewSettlement(
      championshipUuid,
      matchId,
      result
    );
    await client.championships.matches.settle(championshipUuid, matchId, {
      ...command,
      ...result,
      expectedEvidenceRevision: 1,
      expectedResultRevision: 0,
      previewHash: "settlement-preview"
    });
    await client.championships.matches.previewCorrection(
      championshipUuid,
      matchId,
      result
    );
    await client.championships.matches.correct(championshipUuid, matchId, {
      ...command,
      ...result,
      expectedEvidenceRevision: 1,
      expectedResultRevision: 1,
      previewHash: "correction-preview"
    });
    await client.championships.matches.updateAttributions(
      championshipUuid,
      matchId,
      {
        ...command,
        expectedResultRevision: 2,
        attributions: [
          {
            sourcePlayerId: "player-1",
            mode: "redirect",
            targetParticipantUuid: "00000000-0000-4000-8000-000000000021",
            reason: "Conta oficial"
          }
        ]
      }
    );

    const root = `https://api.example.com/api/championships/${championshipUuid}/matches/${matchId}`;
    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `${root}?actorAccountUuid=${actorAccountUuid}`,
      `${root}/evidence-candidates?actorAccountUuid=${actorAccountUuid}&quality=recovered&claimState=available&includeAllPrograms=true&limit=25`,
      `${root}/evidence`,
      `${root}/evidence`,
      `${root}/settlement-previews`,
      `${root}/settlements`,
      `${root}/correction-previews`,
      `${root}/corrections`,
      `${root}/attributions`
    ]);
    expect(fetcher.mock.calls.map((call) => call[1]?.method)).toEqual([
      "GET",
      "GET",
      "PUT",
      "DELETE",
      "POST",
      "POST",
      "POST",
      "POST",
      "PUT"
    ]);
  });

  it("exposes the complete private scheduling negotiation resource", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockImplementation(async () =>
        jsonResponse({ championshipRevision: 9 })
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });
    const matchId = "00000000-0000-4000-8000-000000000020";
    const proposalId = "00000000-0000-4000-8000-000000000021";
    const authorizationId = "00000000-0000-4000-8000-000000000022";
    const command = {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 8
    };

    await client.championships.scheduling.get(championshipUuid, matchId, {
      actorAccountUuid,
      limit: 50
    });
    await client.championships.scheduling.propose(championshipUuid, matchId, {
      ...command,
      expectedMatchScheduleRevision: 0,
      mode: "exact-time",
      exactTime: "2027-01-01T21:00:00.000Z"
    });
    await client.championships.scheduling.decide(
      championshipUuid,
      matchId,
      proposalId,
      {
        ...command,
        expectedMatchScheduleRevision: 1,
        expectedProposalRevision: 0,
        decision: "accept"
      }
    );
    await client.championships.scheduling.authorizeLatePlay(
      championshipUuid,
      matchId,
      {
        ...command,
        expectedMatchScheduleRevision: 1,
        reason: "Approved"
      }
    );
    await client.championships.scheduling.revokeLatePlay(
      championshipUuid,
      matchId,
      authorizationId,
      {
        ...command,
        expectedAuthorizationRevision: 0,
        reason: "No longer needed"
      }
    );
    await client.championships.scheduling.remind(championshipUuid, matchId, {
      ...command,
      note: "Please answer"
    });

    const root =
      `https://api.example.com/api/championships/${championshipUuid}` +
      `/championship-matches/${matchId}`;
    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `${root}/scheduling?actorAccountUuid=${actorAccountUuid}&limit=50`,
      `${root}/schedule-proposals`,
      `${root}/schedule-proposals/${proposalId}/decision`,
      `${root}/late-play-authorizations`,
      `${root}/late-play-authorizations/${authorizationId}/revoke`,
      `${root}/schedule-reminders`
    ]);
    expect(fetcher.mock.calls.map((call) => call[1]?.method)).toEqual([
      "GET",
      "POST",
      "POST",
      "POST",
      "POST",
      "POST"
    ]);
  });

  it("exposes bounded statistics and audited metric mappings", async () => {
    const fetcher = vi
      .fn<FetchLike>()
      .mockImplementation(async () =>
        jsonResponse({ championshipUuid, items: [], totalCount: 0 })
      );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    await client.championships.statistics.get(championshipUuid, {
      actorAccountUuid,
      limit: 100,
      offset: 20
    });
    await client.championships.statistics.listMappings(championshipUuid, {
      actorAccountUuid,
      limit: 200,
      offset: 0
    });
    await client.championships.statistics.replaceMappings(championshipUuid, {
      actorAccountUuid,
      commandUuid: crypto.randomUUID(),
      expectedRevision: 12,
      mappings: [
        {
          eventSchemaId: "00000000-0000-4000-8000-000000000022",
          eventSchemaVersion: 2,
          sourceMetricKey: "goals",
          canonicalMetricKey: "goals",
          displayLabel: "Gols",
          valueKind: "integer",
          aggregation: "sum"
        }
      ]
    });

    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `https://api.example.com/api/championships/${championshipUuid}/statistics?actorAccountUuid=${actorAccountUuid}&limit=100&offset=20`,
      `https://api.example.com/api/championships/${championshipUuid}/statistic-mappings?actorAccountUuid=${actorAccountUuid}&limit=200&offset=0`,
      `https://api.example.com/api/championships/${championshipUuid}/statistic-mappings`
    ]);
    expect(fetcher.mock.calls[2]?.[1]).toMatchObject({
      method: "PUT",
      body: expect.stringContaining('"canonicalMetricKey":"goals"')
    });
  });

  it("supports historical import preview, apply, rollback, and identity linking", async () => {
    const batchId = "00000000-0000-4000-8000-000000000030";
    const historicalPlayerId = "00000000-0000-4000-8000-000000000031";
    const fetcher = vi.fn<FetchLike>().mockImplementation(async () =>
      jsonResponse({
        items: [],
        page: { limit: 20, nextCursor: null }
      })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    await client.championships.history.imports.list(championshipUuid, {
      actorAccountUuid,
      limit: 20
    });
    await client.championships.history.imports.preview(championshipUuid, {
      actorAccountUuid,
      format: "csv",
      sourceName: "temporada-7.csv",
      source: "type,name\nteam,Aurora",
      mapping: {
        entityTypeColumn: "type",
        fieldMap: { name: "name" }
      }
    });
    await client.championships.history.imports.get(championshipUuid, batchId, {
      actorAccountUuid
    });
    await client.championships.history.imports.apply(
      championshipUuid,
      batchId,
      {
        actorAccountUuid,
        commandUuid: crypto.randomUUID(),
        expectedRevision: 12,
        reason: "Reconstrução revisada"
      }
    );
    await client.championships.history.imports.rollback(
      championshipUuid,
      batchId,
      {
        actorAccountUuid,
        commandUuid: crypto.randomUUID(),
        expectedRevision: 13,
        reason: "Fonte incorreta"
      }
    );
    await client.championships.history.linkHistoricalPlayer(
      championshipUuid,
      historicalPlayerId,
      {
        actorAccountUuid,
        commandUuid: crypto.randomUUID(),
        expectedRevision: 14,
        accountUuid: actorAccountUuid,
        expectedLinkedAccountUuid: null,
        reason: "Identidade confirmada"
      }
    );

    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      `https://api.example.com/api/championships/${championshipUuid}/historical-imports?actorAccountUuid=${actorAccountUuid}&limit=20`,
      `https://api.example.com/api/championships/${championshipUuid}/historical-imports/preview`,
      `https://api.example.com/api/championships/${championshipUuid}/historical-imports/${batchId}?actorAccountUuid=${actorAccountUuid}`,
      `https://api.example.com/api/championships/${championshipUuid}/historical-imports/${batchId}/apply`,
      `https://api.example.com/api/championships/${championshipUuid}/historical-imports/${batchId}/rollback`,
      `https://api.example.com/api/championships/${championshipUuid}/historical-players/${historicalPlayerId}/link`
    ]);
    expect(fetcher.mock.calls.slice(1).map((call) => call[1]?.method)).toEqual([
      "POST",
      "GET",
      "POST",
      "POST",
      "POST"
    ]);
    expect(fetcher.mock.calls[1]?.[1]?.body).toContain("temporada-7.csv");
    expect(fetcher.mock.calls[5]?.[1]?.body).toContain(
      '"expectedLinkedAccountUuid":null'
    );
  });
});

function jsonResponse(
  body: unknown,
  init: ResponseInit = { status: 200, statusText: "OK" }
): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init.headers
    }
  });
}
