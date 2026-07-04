import type { HaxFootballApiClient } from "../client";

export type LiveRoomControlCommand = {
  id: string;
  roomId: string;
  name: string;
  payload: unknown;
};

export type LiveRoomControlCommandHandler = (
  command: LiveRoomControlCommand
) => unknown | Promise<unknown>;

export type LiveRoomSnapshotProvider = () => unknown;

export type LiveRoomAttachment = {
  close(): void;
  sendSnapshot(snapshot?: unknown): void;
  sendCommandResult(
    commandId: string,
    outcome: { ok: true; result: unknown } | { ok: false; error: string }
  ): void;
};

export type LiveRoomControlSocket = {
  close(): void;
  send(data: string): void;
  addEventListener?(
    type: "open" | "message" | "close" | "error",
    listener: (event: unknown) => void
  ): void;
  on?(
    type: "open" | "message" | "close" | "error",
    listener: (...args: unknown[]) => void
  ): void;
};

export type LiveRoomControlWebSocketConstructor = new (
  url: string,
  options?: { headers?: HeadersInit }
) => LiveRoomControlSocket;

export type AttachLiveRoomInput = {
  roomId: string;
  commId: string;
  webSocket?: LiveRoomControlWebSocketConstructor | undefined;
  snapshotProvider?: LiveRoomSnapshotProvider | undefined;
  snapshotRevision?: number | null | undefined;
  onAccepted?: (() => void) | undefined;
  onRejected?: ((error: string | null) => void) | undefined;
  onCommand?: LiveRoomControlCommandHandler | undefined;
  onClose?: (() => void) | undefined;
  onError?: ((error: unknown) => void) | undefined;
};

type ApiPongMessage = {
  type: "api.pong";
  accepted: boolean;
  error?: string | null;
  requiresSnapshot?: boolean;
};

type ApiCommandMessage = {
  type: "api.command";
  command: LiveRoomControlCommand;
};

type ApiControlMessage = ApiPongMessage | ApiCommandMessage;

export async function attachLiveRoom(
  client: HaxFootballApiClient,
  input: AttachLiveRoomInput
): Promise<LiveRoomAttachment> {
  const webSocket = input.webSocket ?? globalWebSocket();
  const token = await client.bearerToken();
  const options = token
    ? { headers: { authorization: `Bearer ${token}` } }
    : undefined;

  const socket = new webSocket(
    roomControlUrl(client.apiUrl, input.roomId),
    options
  );

  const connection: LiveRoomAttachment = {
    close: () => socket.close(),
    sendSnapshot: (snapshot = input.snapshotProvider?.()) => {
      if (snapshot === undefined) {
        return;
      }

      socket.send(
        JSON.stringify({
          type: "room.snapshot",
          snapshot
        })
      );
    },
    sendCommandResult: (commandId, outcome) => {
      socket.send(
        JSON.stringify({
          type: "room.command-result",
          commandId,
          ...outcome
        })
      );
    }
  };

  onSocket(socket, "open", () => {
    socket.send(
      JSON.stringify({
        type: "room.ping",
        protocolVersion: 1,
        commId: input.commId,
        snapshotRevision: input.snapshotRevision ?? null
      })
    );
  });

  onSocket(socket, "message", (raw) => {
    const message = parseControlMessage(raw);

    if (!message) {
      return;
    }

    if (message.type === "api.command") {
      void handleCommand(connection, input, message.command);
      return;
    }

    if (!message.accepted) {
      input.onRejected?.(message.error ?? null);
      return;
    }

    input.onAccepted?.();

    if (message.requiresSnapshot) {
      connection.sendSnapshot();
    }
  });

  onSocket(socket, "close", () => input.onClose?.());
  onSocket(socket, "error", (error) => input.onError?.(error));

  return connection;
}

async function handleCommand(
  connection: LiveRoomAttachment,
  input: AttachLiveRoomInput,
  command: LiveRoomControlCommand
): Promise<void> {
  if (!input.onCommand) {
    connection.sendCommandResult(command.id, {
      ok: false,
      error: `Unsupported live room command '${command.name}'`
    });
    return;
  }

  try {
    connection.sendCommandResult(command.id, {
      ok: true,
      result: await input.onCommand(command)
    });
  } catch (error) {
    connection.sendCommandResult(command.id, {
      ok: false,
      error: error instanceof Error ? error.message : "Live room command failed"
    });
  }
}

function roomControlUrl(apiUrl: URL, roomId: string): string {
  const url = new URL(
    `rooms/${encodeURIComponent(roomId)}/control`,
    slashTerminated(apiUrl)
  );

  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";

  return url.toString();
}

function slashTerminated(url: URL): URL {
  const value = new URL(url);

  if (!value.pathname.endsWith("/")) {
    value.pathname = `${value.pathname}/`;
  }

  return value;
}

function globalWebSocket(): LiveRoomControlWebSocketConstructor {
  if (typeof globalThis.WebSocket !== "function") {
    throw new Error(
      "Room control WebSocket requires a WebSocket constructor in this runtime"
    );
  }

  return globalThis.WebSocket as LiveRoomControlWebSocketConstructor;
}

function onSocket(
  socket: LiveRoomControlSocket,
  type: "open" | "message" | "close" | "error",
  listener: (...args: unknown[]) => void
): void {
  if (socket.on) {
    socket.on(type, listener);
    return;
  }

  socket.addEventListener?.(type, (event: unknown) => listener(event));
}

function parseControlMessage(raw: unknown): ApiControlMessage | null {
  try {
    const value = JSON.parse(rawText(raw));

    if (isApiControlMessage(value)) {
      return value;
    }

    return null;
  } catch {
    return null;
  }
}

function rawText(raw: unknown): string {
  if (typeof raw === "string") {
    return raw;
  }

  if (raw instanceof ArrayBuffer) {
    return Buffer.from(raw).toString("utf8");
  }

  if (ArrayBuffer.isView(raw)) {
    return Buffer.from(raw.buffer, raw.byteOffset, raw.byteLength).toString(
      "utf8"
    );
  }

  if (Array.isArray(raw)) {
    return Buffer.concat(raw.map((item) => Buffer.from(item))).toString("utf8");
  }

  const data = (raw as { data?: unknown } | undefined)?.data;

  return data === undefined ? String(raw) : rawText(data);
}

function isApiControlMessage(value: unknown): value is ApiControlMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const message = value as { type?: unknown; command?: unknown };

  if (message.type === "api.pong") {
    return true;
  }

  if (message.type !== "api.command") {
    return false;
  }

  const command = message.command as
    | Partial<LiveRoomControlCommand>
    | undefined;

  return (
    !!command &&
    typeof command.id === "string" &&
    typeof command.roomId === "string" &&
    typeof command.name === "string"
  );
}
