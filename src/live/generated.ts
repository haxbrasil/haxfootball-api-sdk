/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type BooleanFilter = {
  equals?: boolean | null | undefined;
};

export type FloatFilter = {
  equals?: number | null | undefined;
};

export type IntFilter = {
  equals?: number | null | undefined;
};

export type LiveGameStatus = "PAUSED" | "RESUMING" | "RUNNING" | "STOPPED";

export type LivePlayerListRelationFilter = {
  every?: LivePlayerWhereInput | null | undefined;
  none?: LivePlayerWhereInput | null | undefined;
  some?: LivePlayerWhereInput | null | undefined;
};

export type LivePlayerSessionKind =
  | "GUEST"
  | "RESOLVING"
  | "SIGNED_IN"
  | "SIGNING_IN";

export type LivePlayerWhereInput = {
  AND?: Array<LivePlayerWhereInput> | null | undefined;
  NOT?: Array<LivePlayerWhereInput> | null | undefined;
  OR?: Array<LivePlayerWhereInput> | null | undefined;
  admin?: BooleanFilter | null | undefined;
  desynced?: BooleanFilter | null | undefined;
  name?: StringFilter | null | undefined;
  playable?: BooleanFilter | null | undefined;
  roomPlayerId?: IntFilter | null | undefined;
  sessionKind?: StringFilter | null | undefined;
  team?: StringFilter | null | undefined;
};

export type LiveRoomCommandStatus =
  | "ACKNOWLEDGED"
  | "FAILED"
  | "QUEUED"
  | "SENT";

export type LiveRoomWhereInput = {
  AND?: Array<LiveRoomWhereInput> | null | undefined;
  NOT?: Array<LiveRoomWhereInput> | null | undefined;
  OR?: Array<LiveRoomWhereInput> | null | undefined;
  connected?: BooleanFilter | null | undefined;
  id?: StringFilter | null | undefined;
  players?: LivePlayerListRelationFilter | null | undefined;
  stateDocuments?: LiveStateDocumentListRelationFilter | null | undefined;
  stateFacts?: LiveStateFactListRelationFilter | null | undefined;
};

export type LiveStateDocumentListRelationFilter = {
  every?: LiveStateDocumentWhereInput | null | undefined;
  none?: LiveStateDocumentWhereInput | null | undefined;
  some?: LiveStateDocumentWhereInput | null | undefined;
};

export type LiveStateDocumentWhereInput = {
  AND?: Array<LiveStateDocumentWhereInput> | null | undefined;
  NOT?: Array<LiveStateDocumentWhereInput> | null | undefined;
  OR?: Array<LiveStateDocumentWhereInput> | null | undefined;
  name?: StringFilter | null | undefined;
  namespace?: StringFilter | null | undefined;
  version?: IntFilter | null | undefined;
};

export type LiveStateFactListRelationFilter = {
  every?: LiveStateFactWhereInput | null | undefined;
  none?: LiveStateFactWhereInput | null | undefined;
  some?: LiveStateFactWhereInput | null | undefined;
};

export type LiveStateFactType = "BOOLEAN" | "NUMBER" | "STRING";

export type LiveStateFactWhereInput = {
  AND?: Array<LiveStateFactWhereInput> | null | undefined;
  NOT?: Array<LiveStateFactWhereInput> | null | undefined;
  OR?: Array<LiveStateFactWhereInput> | null | undefined;
  booleanValue?: BooleanFilter | null | undefined;
  key?: StringFilter | null | undefined;
  namespace?: StringFilter | null | undefined;
  numberValue?: FloatFilter | null | undefined;
  stringValue?: StringFilter | null | undefined;
  type?: StringFilter | null | undefined;
};

export type LiveTeam = "BLUE" | "RED" | "SPECTATORS";

export type StringFilter = {
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  startsWith?: string | null | undefined;
};

export type FindPlayersByNameQueryVariables = Exact<{
  playerName: string;
  connected?: boolean | null | undefined;
}>;

export type FindPlayersByNameQuery = {
  liveRooms: {
    nodes: Array<{
      id: string;
      connected: boolean;
      revision: number;
      lastSeenAt: string;
      room: {
        name: string | null;
        teamsLocked: boolean | null;
        gameStatus: LiveGameStatus;
        scores: { red: number; blue: number } | null;
      };
      players: {
        nodes: Array<{
          roomPlayerId: number;
          name: string;
          team: LiveTeam;
          admin: boolean;
          avatar: string | null;
          desynced: boolean | null;
          sessionKind: LivePlayerSessionKind | null;
          playable: boolean | null;
          playBlockedReason: string | null;
        }>;
      };
    }>;
  };
};

export type GetRoomQueryVariables = Exact<{
  id: string | number;
}>;

export type GetRoomQuery = {
  liveRoom: {
    id: string;
    connected: boolean;
    revision: number;
    lastSeenAt: string;
    room: {
      name: string | null;
      teamsLocked: boolean | null;
      gameStatus: LiveGameStatus;
      scores: { red: number; blue: number } | null;
    };
    players: {
      nodes: Array<{
        roomPlayerId: number;
        name: string;
        team: LiveTeam;
        admin: boolean;
        avatar: string | null;
        desynced: boolean | null;
        sessionKind: LivePlayerSessionKind | null;
        playable: boolean | null;
        playBlockedReason: string | null;
      }>;
    };
    stateDocuments: Array<{
      namespace: string;
      name: string;
      version: number;
      revision: number;
      updatedAt: string;
      payload: unknown;
    }>;
    stateFacts: Array<{
      namespace: string;
      key: string;
      type: LiveStateFactType;
      stringValue: string | null;
      numberValue: number | null;
      booleanValue: boolean | null;
    }>;
  } | null;
};

export type ListRoomsQueryVariables = Exact<{
  where?: LiveRoomWhereInput | null | undefined;
  first?: number | null | undefined;
  after?: string | null | undefined;
}>;

export type ListRoomsQuery = {
  liveRooms: {
    nodes: Array<{
      id: string;
      connected: boolean;
      revision: number;
      lastSeenAt: string;
      room: {
        name: string | null;
        teamsLocked: boolean | null;
        gameStatus: LiveGameStatus;
        scores: { red: number; blue: number } | null;
      };
    }>;
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
  };
};

export type ListRoomCommandsQueryVariables = Exact<{
  roomId: string | number;
  status?: LiveRoomCommandStatus | null | undefined;
  first?: number | null | undefined;
  after?: string | null | undefined;
}>;

export type ListRoomCommandsQuery = {
  liveRoomCommands: {
    nodes: Array<{
      id: string;
      roomId: string;
      name: string;
      payload: unknown;
      status: LiveRoomCommandStatus;
      result: unknown;
      error: string | null;
      createdAt: string;
      updatedAt: string;
      sentAt: string | null;
      completedAt: string | null;
    }>;
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
  };
};

export const FindPlayersByNameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindPlayersByName" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "playerName" }
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "connected" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          defaultValue: { kind: "BooleanValue", value: true }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "liveRooms" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "connected" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "equals" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "connected" }
                            }
                          }
                        ]
                      }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "players" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "some" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "equals" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "playerName"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "connected" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "revision" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastSeenAt" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "room" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamsLocked" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gameStatus" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "scores" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "red" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "blue" }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "players" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "equals" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "playerName"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "roomPlayerId"
                                    }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "team" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "admin" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "avatar" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "desynced" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionKind" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "playable" }
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "playBlockedReason"
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  FindPlayersByNameQuery,
  FindPlayersByNameQueryVariables
>;
export const GetRoomDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetRoom" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "liveRoom" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "connected" } },
                { kind: "Field", name: { kind: "Name", value: "revision" } },
                { kind: "Field", name: { kind: "Name", value: "lastSeenAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "room" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamsLocked" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gameStatus" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "scores" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "red" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blue" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "players" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "roomPlayerId" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "team" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "admin" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "desynced" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionKind" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "playable" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "playBlockedReason" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "stateDocuments" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "namespace" }
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "version" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "revision" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "payload" }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "stateFacts" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "namespace" }
                      },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "stringValue" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "numberValue" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "booleanValue" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetRoomQuery, GetRoomQueryVariables>;
export const ListRoomsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ListRooms" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" }
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "LiveRoomWhereInput" }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "50" }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "liveRooms" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" }
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" }
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "connected" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "revision" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastSeenAt" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "room" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamsLocked" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gameStatus" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "scores" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "red" }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "blue" }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<ListRoomsQuery, ListRoomsQueryVariables>;
export const ListRoomCommandsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ListRoomCommands" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "roomId" }
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" }
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "LiveRoomCommandStatus" }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "50" }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "liveRoomCommands" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "roomId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "roomId" }
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "status" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "status" }
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" }
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "roomId" }
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "payload" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "result" }
                      },
                      { kind: "Field", name: { kind: "Name", value: "error" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sentAt" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "completedAt" }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  ListRoomCommandsQuery,
  ListRoomCommandsQueryVariables
>;
