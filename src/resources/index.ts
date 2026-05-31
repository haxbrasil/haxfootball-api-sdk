import type { HaxFootballApiClient } from "../client";
import { createAccountsResource } from "./accounts";
import { createAuthResource } from "./auth";
import { createGameModesResource } from "./game-modes";
import { createMatchesResource } from "./matches";
import { createPermissionsResource } from "./permissions";
import { createPlayersResource } from "./players";
import { createRecordingsResource } from "./recordings";
import { createRolesResource } from "./roles";
import { createRoomsResource } from "./rooms";
import { createSessionsResource } from "./sessions";
import { createEventSchemasResource } from "./event-schemas";

export type { RequestConfig } from "./shared";

export type HaxFootballApiResources = ReturnType<typeof createResources>;

export function createResources(client: HaxFootballApiClient) {
  return {
    accounts: createAccountsResource(client),
    auth: createAuthResource(client),
    gameModes: createGameModesResource(client),
    matches: createMatchesResource(client),
    permissions: createPermissionsResource(client),
    players: createPlayersResource(client),
    recordings: createRecordingsResource(client),
    roles: createRolesResource(client),
    rooms: createRoomsResource(client),
    sessions: createSessionsResource(client),
    eventSchemas: createEventSchemasResource(client)
  };
}
