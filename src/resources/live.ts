import { print } from "graphql";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { HaxFootballApiClient } from "../client";
import type { ApiResult, GraphqlFailure } from "../result";
import type { RequestConfig } from "./shared";

export type LiveQueryInput<TResult, TVariables> = RequestConfig & {
  document: string | TypedDocumentNode<TResult, TVariables>;
  variables?: TVariables | undefined;
  operationName?: string | undefined;
};

export type EnqueueLiveRoomCommandInput = {
  roomId: string;
  name: string;
  payload?: unknown;
};

export type LiveRoomCommand = {
  id: string;
  roomId: string;
  name: string;
  payload: unknown;
  status: "QUEUED" | "SENT" | "ACKNOWLEDGED" | "FAILED";
  result: unknown;
  error: string | null;
  createdAt: string;
  updatedAt: string;
  sentAt: string | null;
  completedAt: string | null;
};

type GraphqlResponse<TResult> = {
  data?: TResult | null;
  errors?: GraphqlFailure["errors"];
};

type EnqueueLiveRoomCommandMutation = {
  enqueueLiveRoomCommand: LiveRoomCommand;
};

type EnqueueLiveRoomCommandVariables = {
  input: EnqueueLiveRoomCommandInput;
};

const enqueueLiveRoomCommandDocument = `
  mutation EnqueueLiveRoomCommand($input: EnqueueLiveRoomCommandInput!) {
    enqueueLiveRoomCommand(input: $input) {
      id
      roomId
      name
      payload
      status
      result
      error
      createdAt
      updatedAt
      sentAt
      completedAt
    }
  }
`;

export function createLiveResource(client: HaxFootballApiClient) {
  return {
    query: <TResult, TVariables = Record<string, never>>(
      input: LiveQueryInput<TResult, TVariables>
    ) => executeLiveGraphql(client, input),
    enqueueRoomCommand: async (
      input: EnqueueLiveRoomCommandInput,
      config?: RequestConfig
    ): Promise<ApiResult<LiveRoomCommand>> => {
      const result = await executeLiveGraphql<
        EnqueueLiveRoomCommandMutation,
        EnqueueLiveRoomCommandVariables
      >(client, {
        document: enqueueLiveRoomCommandDocument,
        variables: { input },
        ...config
      });

      if (!result.ok) {
        return result;
      }

      return {
        ok: true,
        data: result.data.enqueueLiveRoomCommand,
        response: result.response
      };
    }
  };
}

async function executeLiveGraphql<TResult, TVariables>(
  client: HaxFootballApiClient,
  input: LiveQueryInput<TResult, TVariables>
): Promise<ApiResult<TResult>> {
  const result = await client.request<GraphqlResponse<TResult>>({
    method: "POST",
    path: "/graphql",
    body: {
      query: documentText(input.document),
      ...(input.variables === undefined ? {} : { variables: input.variables }),
      ...(input.operationName ? { operationName: input.operationName } : {})
    },
    signal: input.signal,
    timeoutMs: input.timeoutMs
  });

  if (!result.ok) {
    return graphQlFailureFromApiFailure(result) ?? result;
  }

  if (result.data.errors?.length) {
    return {
      ok: false,
      error: {
        kind: "graphql",
        message: result.data.errors[0]?.message ?? "GraphQL request failed",
        errors: result.data.errors,
        body: result.data
      },
      response: result.response
    };
  }

  return {
    ok: true,
    data: (result.data.data ?? null) as TResult,
    response: result.response
  };
}

function graphQlFailureFromApiFailure<TResult>(
  result: Extract<ApiResult<TResult>, { ok: false }>
): ApiResult<TResult> | null {
  if (result.error.kind !== "api") {
    return null;
  }

  const errors = graphQlErrorsFromBody(result.error.body);

  if (!errors.length) {
    return null;
  }

  return {
    ok: false,
    error: {
      kind: "graphql",
      message: errors[0]?.message ?? result.error.message,
      errors,
      body: result.error.body
    },
    ...(result.response ? { response: result.response } : {})
  };
}

function graphQlErrorsFromBody(body: unknown): GraphqlFailure["errors"] {
  const value =
    body && typeof body === "object" && "value" in body
      ? (body as { value?: unknown }).value
      : body;
  const errors = (value as { errors?: unknown } | undefined)?.errors;

  if (!Array.isArray(errors)) {
    return [];
  }

  return errors.filter(isGraphQlError);
}

function isGraphQlError(
  error: unknown
): error is GraphqlFailure["errors"][number] {
  return (
    !!error &&
    typeof error === "object" &&
    typeof (error as { message?: unknown }).message === "string"
  );
}

function documentText<TResult, TVariables>(
  document: string | TypedDocumentNode<TResult, TVariables>
): string {
  return typeof document === "string" ? document : print(document);
}
