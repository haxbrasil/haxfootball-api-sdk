export {
  FindPlayersByNameDocument,
  GetRoomDocument,
  ListRoomCommandsDocument,
  ListRoomsDocument,
  type FindPlayersByNameQuery,
  type FindPlayersByNameQueryVariables,
  type GetRoomQuery,
  type GetRoomQueryVariables,
  type ListRoomCommandsQuery,
  type ListRoomCommandsQueryVariables,
  type ListRoomsQuery,
  type ListRoomsQueryVariables
} from "./generated";

import {
  FindPlayersByNameDocument,
  GetRoomDocument,
  ListRoomCommandsDocument,
  ListRoomsDocument
} from "./generated";

export const queries = {
  findPlayersByName: FindPlayersByNameDocument,
  getRoom: GetRoomDocument,
  listRooms: ListRoomsDocument,
  listRoomCommands: ListRoomCommandsDocument
};
