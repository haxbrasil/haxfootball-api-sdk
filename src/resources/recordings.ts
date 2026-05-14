import type { HaxFootballApiClient } from "../client";
import type {
  CreateRecordingInput,
  ListRecordingsResponse,
  PaginationQuery,
  Recording
} from "../types";
import type { RequestConfig } from "./shared";

export function createRecordingsResource(client: HaxFootballApiClient) {
  return {
    list: (query?: PaginationQuery, config?: RequestConfig) =>
      client.request<ListRecordingsResponse>({
        path: "/recs",
        query,
        ...config
      }),
    get: (id: string, config?: RequestConfig) =>
      client.request<Recording>({
        path: `/recs/${encodeURIComponent(id)}`,
        ...config
      }),
    create: (input: CreateRecordingInput, config?: RequestConfig) =>
      client.request<Recording>({
        method: "POST",
        path: "/recs",
        formData: recordingFormData(input),
        ...config
      })
  };
}

function recordingFormData(input: CreateRecordingInput): FormData {
  const formData = new FormData();
  const filename = input.filename ?? "match.hbr2";
  const blob = toBlob(input.file, input.contentType);

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
