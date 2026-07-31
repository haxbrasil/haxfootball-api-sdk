import type { HaxFootballApiClient } from "../client";
import type {
  AddMatchEventInput,
  AssociateMatchRecordingInput,
  CheckpointMatchInput,
  CheckpointMatchRecordingInput,
  CheckpointMatchRecordingResponse,
  CheckpointMatchResponse,
  ComposedMatch,
  CreateMatchInput,
  DisableMatchEventInput,
  ListMatchesQuery,
  ListMatchesResponse,
  ListMatchEventsResponse,
  LogicalMatchEvidence,
  LogicalMatchEvidenceQuery,
  Match,
  MatchCompositionInput,
  MatchEvent,
  MatchMetrics,
  MatchRound,
  PaginationQuery,
  PhysicalMatch,
  QueryMatchMetricsInput,
  QueryMatchMetricsResponse,
  UpdateMatchInput
} from "../types";
import type { RequestConfig } from "./shared";

export function createMatchesResource(client: HaxFootballApiClient) {
  return {
    list: (query?: ListMatchesQuery, config?: RequestConfig) =>
      client.request<ListMatchesResponse>({
        path: "/matches",
        query,
        ...config
      }),
    get: (id: string, config?: RequestConfig) =>
      client.request<Match>({
        path: `/matches/${encodeURIComponent(id)}`,
        ...config
      }),
    getEvidence: (
      id: string,
      query?: LogicalMatchEvidenceQuery,
      config?: RequestConfig
    ) =>
      client.request<LogicalMatchEvidence>({
        path: `/matches/${encodeURIComponent(id)}/evidence`,
        query,
        ...config
      }),
    create: (body: CreateMatchInput, config?: RequestConfig) =>
      client.request<PhysicalMatch>({
        method: "POST",
        path: "/matches",
        body,
        ...config
      }),
    update: (id: string, body: UpdateMatchInput, config?: RequestConfig) =>
      client.request<PhysicalMatch>({
        method: "PATCH",
        path: `/matches/${encodeURIComponent(id)}`,
        body,
        ...config
      }),
    checkpoint: (
      id: string,
      body: CheckpointMatchInput,
      config?: RequestConfig
    ) =>
      client.request<CheckpointMatchResponse>({
        method: "POST",
        path: `/matches/${encodeURIComponent(id)}/checkpoints`,
        body,
        ...config
      }),
    checkpointRecording: (
      id: string,
      input: CheckpointMatchRecordingInput,
      config?: RequestConfig
    ) =>
      client.request<CheckpointMatchRecordingResponse>({
        method: "POST",
        path: `/matches/${encodeURIComponent(id)}/recording-checkpoint`,
        formData: recordingCheckpointFormData(input),
        ...config
      }),
    getMetrics: (id: string, config?: RequestConfig) =>
      client.request<MatchMetrics>({
        path: `/matches/${encodeURIComponent(id)}/metrics`,
        ...config
      }),
    queryMetrics: (body: QueryMatchMetricsInput, config?: RequestConfig) =>
      client.request<QueryMatchMetricsResponse>({
        method: "POST",
        path: "/matches/metrics/query",
        body,
        ...config
      }),
    associateRecording: (
      id: string,
      body: AssociateMatchRecordingInput,
      config?: RequestConfig
    ) =>
      client.request<PhysicalMatch>({
        method: "PATCH",
        path: `/matches/${encodeURIComponent(id)}/recording`,
        body,
        ...config
      }),
    createComposition: (body: MatchCompositionInput, config?: RequestConfig) =>
      client.request<ComposedMatch>({
        method: "POST",
        path: "/matches/compositions",
        body,
        ...config
      }),
    updateComposition: (
      id: string,
      body: MatchCompositionInput,
      config?: RequestConfig
    ) =>
      client.request<ComposedMatch>({
        method: "PUT",
        path: `/matches/${encodeURIComponent(id)}/rounds`,
        body,
        ...config
      }),
    deleteComposition: (id: string, config?: RequestConfig) =>
      client.request<void>({
        method: "DELETE",
        path: `/matches/${encodeURIComponent(id)}/rounds`,
        ...config
      }),
    getRound: (id: string, roundNumber: number, config?: RequestConfig) =>
      client.request<MatchRound>({
        path: `/matches/${encodeURIComponent(id)}/rounds/${encodeURIComponent(
          String(roundNumber)
        )}`,
        ...config
      }),
    getExtraTime: (id: string, config?: RequestConfig) =>
      client.request<MatchRound>({
        path: `/matches/${encodeURIComponent(id)}/extra-time`,
        ...config
      }),
    listEvents: (id: string, query?: PaginationQuery, config?: RequestConfig) =>
      client.request<ListMatchEventsResponse>({
        path: `/matches/${encodeURIComponent(id)}/events`,
        query,
        ...config
      }),
    addEvent: (id: string, body: AddMatchEventInput, config?: RequestConfig) =>
      client.request<MatchEvent>({
        method: "POST",
        path: `/matches/${encodeURIComponent(id)}/events`,
        body,
        ...config
      }),
    disableEvent: (
      id: string,
      eventId: string,
      body: DisableMatchEventInput = { disabled: true },
      config?: RequestConfig
    ) =>
      client.request<MatchEvent>({
        method: "PATCH",
        path: `/matches/${encodeURIComponent(id)}/events/${encodeURIComponent(
          eventId
        )}`,
        body,
        ...config
      })
  };
}

function recordingCheckpointFormData(
  input: CheckpointMatchRecordingInput
): FormData {
  const formData = new FormData();
  const filename = input.filename ?? "match-checkpoint.hbr2";
  const blob = toBlob(input.file, input.contentType);

  formData.set("revision", String(input.revision));
  formData.set("file", blob, filename);

  return formData;
}

function toBlob(
  input: Blob | ArrayBuffer | ArrayBufferView,
  contentType = "application/octet-stream"
): Blob {
  if (input instanceof Blob) {
    return input;
  }

  if (ArrayBuffer.isView(input)) {
    const bytes = new Uint8Array(
      input.buffer,
      input.byteOffset,
      input.byteLength
    );
    const copy = new Uint8Array(bytes.byteLength);

    copy.set(bytes);

    return new Blob([copy], { type: contentType });
  }

  return new Blob([input], { type: contentType });
}
