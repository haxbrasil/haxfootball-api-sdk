export type ResponseMeta = {
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
};

export type ApiErrorCode =
  | "UNAUTHORIZED"
  | "NOT_FOUND"
  | "BAD_REQUEST"
  | "VALIDATION_ERROR"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});

export type ApiResponseFailure = {
  kind: "api";
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
  code?: ApiErrorCode;
  message: string;
  body: unknown;
};

export type NetworkFailure = {
  kind: "network";
  message: string;
  cause: unknown;
};

export type AbortedFailure = {
  kind: "aborted";
  message: string;
  cause?: unknown;
};

export type InvalidResponseFailure = {
  kind: "invalid-response";
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
  message: string;
  bodyText: string;
};

export type ApiFailure =
  | ApiResponseFailure
  | NetworkFailure
  | AbortedFailure
  | InvalidResponseFailure;

export type ApiSuccess<T> = {
  ok: true;
  data: T;
  response: ResponseMeta;
};

export type ApiResult<T> =
  | ApiSuccess<T>
  | {
      ok: false;
      error: ApiFailure;
      response?: ResponseMeta;
    };

export function success<T>(data: T, response: Response): ApiSuccess<T> {
  return {
    ok: true,
    data,
    response: responseMeta(response)
  };
}

export function responseMeta(response: Response): ResponseMeta {
  return {
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    headers: response.headers
  };
}
