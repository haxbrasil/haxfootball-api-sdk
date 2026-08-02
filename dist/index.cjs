let graphql = require("graphql");

//#region src/resources/accounts.ts
function createAccountsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/accounts",
			query,
			...config
		}),
		get: (uuid, config) => client.request({
			path: `/accounts/${encodeURIComponent(uuid)}`,
			...config
		}),
		getByName: (name, config) => client.request({
			path: `/accounts/by-name/${encodeURIComponent(name)}`,
			...config
		}),
		getByExternalId: (externalId, config) => client.request({
			path: `/accounts/by-external-id/${encodeURIComponent(externalId)}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/accounts",
			body,
			...config
		}),
		confirm: (body, config) => client.request({
			method: "POST",
			path: "/accounts/confirm",
			body,
			...config
		}),
		update: (uuid, body, config) => client.request({
			method: "PATCH",
			path: `/accounts/${encodeURIComponent(uuid)}`,
			body,
			...config
		})
	};
}

//#endregion
//#region src/resources/auth.ts
function createAuthResource(client) {
	return { createToken: (body, config) => client.requestAuth({
		method: "POST",
		body,
		...config
	}) };
}

//#endregion
//#region src/resources/championships.ts
function createChampionshipsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/championships",
			query,
			...config
		}),
		get: (id, config) => client.request({
			path: championshipPath(id),
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/championships",
			body,
			...config
		}),
		update: (id, body, config) => client.request({
			method: "PATCH",
			path: championshipPath(id),
			body,
			...config
		}),
		transition: (id, body, config) => client.request({
			method: "POST",
			path: `${championshipPath(id)}/transitions`,
			body,
			...config
		}),
		honorDefinitions: {
			list: (query, config) => client.request({
				path: "/championships/honor-definitions",
				query,
				...config
			}),
			create: (body, config) => client.request({
				method: "POST",
				path: "/championships/honor-definitions",
				body,
				...config
			}),
			updateDraft: (definitionId, body, config) => client.request({
				method: "PUT",
				path: `/championships/honor-definitions/${encodeURIComponent(definitionId)}/draft`,
				body,
				...config
			}),
			publish: (definitionId, body, config) => client.request({
				method: "POST",
				path: `/championships/honor-definitions/${encodeURIComponent(definitionId)}/publish`,
				body,
				...config
			}),
			archive: (definitionId, body, config) => client.request({
				method: "POST",
				path: `/championships/honor-definitions/${encodeURIComponent(definitionId)}/archive`,
				body,
				...config
			})
		},
		honors: {
			list: (id, query, config) => client.request({
				path: `${championshipPath(id)}/honors`,
				query,
				...config
			}),
			create: (id, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(id)}/honors`,
				body,
				...config
			}),
			update: (id, honorId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}`,
				body,
				...config
			}),
			reorder: (id, body, config) => client.request({
				method: "PUT",
				path: `${championshipPath(id)}/honors/order`,
				body,
				...config
			}),
			previewResolution: (id, honorId, query, config) => client.request({
				path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/resolution-preview`,
				query,
				...config
			}),
			resolve: (id, honorId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/resolve`,
				body,
				...config
			}),
			grant: (id, honorId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/grants`,
				body,
				...config
			}),
			revokeGrant: (id, honorId, grantId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(id)}/honors/${encodeURIComponent(honorId)}/grants/${encodeURIComponent(grantId)}/revoke`,
				body,
				...config
			})
		},
		history: {
			get: (id, query, config) => client.request({
				path: `${championshipPath(id)}/history`,
				query,
				...config
			}),
			replacePlacements: (id, body, config) => client.request({
				method: "PUT",
				path: `${championshipPath(id)}/placements`,
				body,
				...config
			}),
			createAward: (id, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(id)}/awards`,
				body,
				...config
			}),
			updateAward: (id, awardId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(id)}/awards/${encodeURIComponent(awardId)}`,
				body,
				...config
			}),
			getAccount: (accountId, query, config) => client.request({
				path: `/championships/accounts/${encodeURIComponent(accountId)}/history`,
				query,
				...config
			}),
			imports: {
				list: (id, query, config) => client.request({
					path: `${championshipPath(id)}/historical-imports`,
					query,
					...config
				}),
				preview: (id, body, config) => client.request({
					method: "POST",
					path: `${championshipPath(id)}/historical-imports/preview`,
					body,
					...config
				}),
				get: (id, batchId, query, config) => client.request({
					path: `${championshipPath(id)}/historical-imports/${encodeURIComponent(batchId)}`,
					query,
					...config
				}),
				apply: (id, batchId, body, config) => client.request({
					method: "POST",
					path: `${championshipPath(id)}/historical-imports/${encodeURIComponent(batchId)}/apply`,
					body,
					...config
				}),
				rollback: (id, batchId, body, config) => client.request({
					method: "POST",
					path: `${championshipPath(id)}/historical-imports/${encodeURIComponent(batchId)}/rollback`,
					body,
					...config
				})
			},
			linkHistoricalPlayer: (id, historicalPlayerId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(id)}/historical-players/${encodeURIComponent(historicalPlayerId)}/link`,
				body,
				...config
			})
		},
		types: {
			list: (query, config) => client.request({
				path: "/championships/competition-types",
				query,
				...config
			}),
			create: (body, config) => client.request({
				method: "POST",
				path: "/championships/competition-types",
				body,
				...config
			}),
			update: (id, body, config) => client.request({
				method: "PATCH",
				path: `/championships/competition-types/${encodeURIComponent(id)}`,
				body,
				...config
			})
		},
		teamIdentities: {
			list: (query, config) => client.request({
				path: "/championships/team-identities",
				query,
				...config
			}),
			getHistory: (identityId, query, config) => client.request({
				path: `/championships/team-identities/${encodeURIComponent(identityId)}/history`,
				query,
				...config
			}),
			create: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/team-identities`,
				body,
				...config
			}),
			update: (championshipId, identityId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(championshipId)}/team-identities/${encodeURIComponent(identityId)}`,
				body,
				...config
			})
		},
		teams: {
			list: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/teams`,
				query,
				...config
			}),
			create: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/teams`,
				body,
				...config
			}),
			update: (championshipId, teamId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(championshipId)}/teams/${encodeURIComponent(teamId)}`,
				body,
				...config
			})
		},
		participants: {
			list: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/participants`,
				query,
				...config
			}),
			create: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/participants`,
				body,
				...config
			}),
			update: (championshipId, participantId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(championshipId)}/participants/${encodeURIComponent(participantId)}`,
				body,
				...config
			})
		},
		registration: {
			getSelf: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/registrations/self`,
				query,
				...config
			}),
			transition: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/registration/transitions`,
				body,
				...config
			}),
			selfRegister: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/registrations/self`,
				body,
				...config
			}),
			withdraw: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/registrations/self/withdraw`,
				body,
				...config
			})
		},
		salary: {
			getPublic: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/salary`,
				query,
				...config
			}),
			getAdmin: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/salary/admin`,
				query,
				...config
			}),
			upsertPrices: (championshipId, body, config) => client.request({
				method: "PUT",
				path: `${championshipPath(championshipId)}/salary/prices`,
				body,
				...config
			}),
			freezePrices: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/salary/prices/freeze`,
				body,
				...config
			})
		},
		rosters: {
			previewMove: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/roster-moves/preview`,
				body,
				...config
			}),
			executeMove: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/roster-moves`,
				body,
				...config
			}),
			reorder: (championshipId, body, config) => client.request({
				method: "PUT",
				path: `${championshipPath(championshipId)}/roster-order`,
				body,
				...config
			}),
			history: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/roster-history`,
				query,
				...config
			})
		},
		draft: {
			get: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/draft`,
				query,
				...config
			}),
			configure: (championshipId, body, config) => client.request({
				method: "PUT",
				path: `${championshipPath(championshipId)}/draft`,
				body,
				...config
			}),
			start: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/draft/start`,
				body,
				...config
			}),
			pick: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/draft/picks`,
				body,
				...config
			}),
			end: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/draft/end`,
				body,
				...config
			}),
			cancel: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/draft/cancel`,
				body,
				...config
			}),
			previewCorrection: (championshipId, turnId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/draft/turns/${encodeURIComponent(turnId)}/correction-preview`,
				query,
				...config
			}),
			reversePick: (championshipId, turnId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/draft/turns/${encodeURIComponent(turnId)}/void`,
				body,
				...config
			})
		},
		trades: {
			list: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/trades`,
				query,
				...config
			}),
			create: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/trades`,
				body,
				...config
			}),
			accept: (championshipId, tradeId, body, config) => decideTrade(client, championshipId, tradeId, "accept", body, config),
			reject: (championshipId, tradeId, body, config) => decideTrade(client, championshipId, tradeId, "reject", body, config),
			cancel: (championshipId, tradeId, body, config) => decideTrade(client, championshipId, tradeId, "cancel", body, config)
		},
		format: {
			get: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/format`,
				query,
				...config
			}),
			createStage: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages`,
				body,
				...config
			}),
			updateStage: (championshipId, stageId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}`,
				body,
				...config
			}),
			deleteStage: (championshipId, stageId, body, config) => client.request({
				method: "DELETE",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}`,
				body,
				...config
			}),
			createGroup: (championshipId, stageId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}/groups`,
				body,
				...config
			}),
			configureStandings: (championshipId, stageId, body, config) => client.request({
				method: "PUT",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}/standings-rules`,
				body,
				...config
			}),
			getStandings: (championshipId, stageId, groupId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}/groups/${encodeURIComponent(groupId)}/standings`,
				query,
				...config
			}),
			previewRoundRobin: (championshipId, stageId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}/round-robin/preview`,
				body,
				...config
			}),
			generateRoundRobin: (championshipId, stageId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}/round-robin`,
				body,
				...config
			}),
			previewClassification: (championshipId, stageId, groupId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}/groups/${encodeURIComponent(groupId)}/classification/preview`,
				body,
				...config
			}),
			applyClassification: (championshipId, stageId, groupId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/${encodeURIComponent(stageId)}/groups/${encodeURIComponent(groupId)}/classification/apply`,
				body,
				...config
			}),
			generateSingleElimination: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/single-elimination`,
				body,
				...config
			}),
			previewDoubleElimination: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/double-elimination/preview`,
				body,
				...config
			}),
			generateDoubleElimination: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/stages/double-elimination`,
				body,
				...config
			}),
			createSpot: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/spots`,
				body,
				...config
			}),
			placeSpot: (championshipId, spotId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/spots/${encodeURIComponent(spotId)}/place`,
				body,
				...config
			}),
			previewSpotPlacement: (championshipId, spotId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/spots/${encodeURIComponent(spotId)}/placement-preview`,
				body,
				...config
			}),
			createRoute: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/progression-routes`,
				body,
				...config
			}),
			updateRoute: (championshipId, routeId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(championshipId)}/progression-routes/${encodeURIComponent(routeId)}`,
				body,
				...config
			}),
			createCompetitionRound: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/competition-rounds`,
				body,
				...config
			}),
			createMatch: (championshipId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/championship-matches`,
				body,
				...config
			}),
			scheduleMatch: (championshipId, championshipMatchId, body, config) => client.request({
				method: "PATCH",
				path: `${championshipPath(championshipId)}/championship-matches/${encodeURIComponent(championshipMatchId)}/schedule`,
				body,
				...config
			})
		},
		scheduling: {
			get: (championshipId, championshipMatchId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/championship-matches/${encodeURIComponent(championshipMatchId)}/scheduling`,
				query,
				...config
			}),
			propose: (championshipId, championshipMatchId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/championship-matches/${encodeURIComponent(championshipMatchId)}/schedule-proposals`,
				body,
				...config
			}),
			decide: (championshipId, championshipMatchId, proposalId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/championship-matches/${encodeURIComponent(championshipMatchId)}/schedule-proposals/${encodeURIComponent(proposalId)}/decision`,
				body,
				...config
			}),
			authorizeLatePlay: (championshipId, championshipMatchId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/championship-matches/${encodeURIComponent(championshipMatchId)}/late-play-authorizations`,
				body,
				...config
			}),
			revokeLatePlay: (championshipId, championshipMatchId, authorizationId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/championship-matches/${encodeURIComponent(championshipMatchId)}/late-play-authorizations/${encodeURIComponent(authorizationId)}/revoke`,
				body,
				...config
			}),
			remind: (championshipId, championshipMatchId, body, config) => client.request({
				method: "POST",
				path: `${championshipPath(championshipId)}/championship-matches/${encodeURIComponent(championshipMatchId)}/schedule-reminders`,
				body,
				...config
			})
		},
		matches: {
			get: (championshipId, championshipMatchId, query, config) => client.request({
				path: championshipMatchPath(championshipId, championshipMatchId),
				query,
				...config
			}),
			listEvidenceCandidates: (championshipId, championshipMatchId, query, config) => client.request({
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/evidence-candidates`,
				query,
				...config
			}),
			attachEvidence: (championshipId, championshipMatchId, body, config) => client.request({
				method: "PUT",
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/evidence`,
				body,
				...config
			}),
			detachEvidence: (championshipId, championshipMatchId, body, config) => client.request({
				method: "DELETE",
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/evidence`,
				body,
				...config
			}),
			previewSettlement: (championshipId, championshipMatchId, body, config) => client.request({
				method: "POST",
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/settlement-previews`,
				body,
				...config
			}),
			settle: (championshipId, championshipMatchId, body, config) => client.request({
				method: "POST",
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/settlements`,
				body,
				...config
			}),
			previewCorrection: (championshipId, championshipMatchId, body, config) => client.request({
				method: "POST",
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/correction-previews`,
				body,
				...config
			}),
			correct: (championshipId, championshipMatchId, body, config) => client.request({
				method: "POST",
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/corrections`,
				body,
				...config
			}),
			updateAttributions: (championshipId, championshipMatchId, body, config) => client.request({
				method: "PUT",
				path: `${championshipMatchPath(championshipId, championshipMatchId)}/attributions`,
				body,
				...config
			})
		},
		statistics: {
			get: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/statistics`,
				query,
				...config
			}),
			listMappings: (championshipId, query, config) => client.request({
				path: `${championshipPath(championshipId)}/statistic-mappings`,
				query,
				...config
			}),
			replaceMappings: (championshipId, body, config) => client.request({
				method: "PUT",
				path: `${championshipPath(championshipId)}/statistic-mappings`,
				body,
				...config
			})
		},
		roomPrograms: { change: (championshipId, body, config) => client.request({
			method: "POST",
			path: `${championshipPath(championshipId)}/room-programs`,
			body,
			...config
		}) },
		grants: { change: (championshipId, body, config) => client.request({
			method: "POST",
			path: `${championshipPath(championshipId)}/grants`,
			body,
			...config
		}) },
		audit: { list: (championshipId, query, config) => client.request({
			path: `${championshipPath(championshipId)}/audit`,
			query,
			...config
		}) },
		events: { open: (championshipId, query, config = {}) => {
			const headers = new Headers(config.headers);
			if (config.lastEventId !== void 0) headers.set("last-event-id", String(config.lastEventId));
			return client.openStream({
				path: `${championshipPath(championshipId)}/events`,
				query,
				headers,
				signal: config.signal
			});
		} },
		collaboration: {
			threads: {
				list: (championshipId, query, config) => client.request({
					path: `${championshipPath(championshipId)}/threads`,
					query,
					...config
				}),
				create: (championshipId, body, config) => client.request({
					method: "POST",
					path: `${championshipPath(championshipId)}/threads`,
					body,
					...config
				}),
				update: (championshipId, threadId, body, config) => client.request({
					method: "PATCH",
					path: `${threadPath(championshipId, threadId)}`,
					body,
					...config
				}),
				listComments: (championshipId, threadId, query, config) => client.request({
					path: `${threadPath(championshipId, threadId)}/comments`,
					query,
					...config
				}),
				addComment: (championshipId, threadId, body, config) => client.request({
					method: "POST",
					path: `${threadPath(championshipId, threadId)}/comments`,
					body,
					...config
				})
			},
			assignments: {
				list: (championshipId, query, config) => client.request({
					path: `${championshipPath(championshipId)}/assignments`,
					query,
					...config
				}),
				create: (championshipId, body, config) => client.request({
					method: "POST",
					path: `${championshipPath(championshipId)}/assignments`,
					body,
					...config
				}),
				update: (championshipId, assignmentId, body, config) => client.request({
					method: "PATCH",
					path: `${championshipPath(championshipId)}/assignments/${encodeURIComponent(assignmentId)}`,
					body,
					...config
				})
			},
			presence: {
				list: (championshipId, query, config) => client.request({
					path: `${championshipPath(championshipId)}/presence`,
					query,
					...config
				}),
				heartbeat: (championshipId, body, config) => client.request({
					method: "POST",
					path: `${championshipPath(championshipId)}/presence`,
					body,
					...config
				})
			},
			inbox: {
				list: (query, config) => client.request({
					path: "/championships/inbox",
					query,
					...config
				}),
				update: (inboxItemId, body, config) => client.request({
					method: "PATCH",
					path: `/championships/inbox/${encodeURIComponent(inboxItemId)}`,
					body,
					...config
				})
			},
			savedViews: {
				list: (championshipId, query, config) => client.request({
					path: `${championshipPath(championshipId)}/saved-views`,
					query,
					...config
				}),
				upsert: (championshipId, body, config) => client.request({
					method: "PUT",
					path: `${championshipPath(championshipId)}/saved-views`,
					body,
					...config
				})
			}
		}
	};
}
function championshipPath(id) {
	return `/championships/${encodeURIComponent(id)}`;
}
function championshipMatchPath(championshipId, championshipMatchId) {
	return `${championshipPath(championshipId)}/matches/${encodeURIComponent(championshipMatchId)}`;
}
function threadPath(championshipId, threadId) {
	return `${championshipPath(championshipId)}/threads/${encodeURIComponent(threadId)}`;
}
function decideTrade(client, championshipId, tradeId, action, body, config) {
	return client.request({
		method: "POST",
		path: `${championshipPath(championshipId)}/trades/${encodeURIComponent(tradeId)}/${action}`,
		body,
		...config
	});
}

//#endregion
//#region src/resources/clips.ts
function createClipsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/clips",
			query,
			...config
		}),
		get: (id, config) => client.request({
			path: `/clips/${encodeURIComponent(id)}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/clips",
			body,
			...config
		}),
		update: (id, body, config) => client.request({
			method: "PATCH",
			path: `/clips/${encodeURIComponent(id)}`,
			body,
			...config
		}),
		archive: (id, config) => client.request({
			method: "DELETE",
			path: `/clips/${encodeURIComponent(id)}`,
			...config
		})
	};
}

//#endregion
//#region src/resources/game-modes.ts
function createGameModesResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/game-modes",
			query,
			...config
		}),
		get: (id, config) => client.request({
			path: `/game-modes/${encodeURIComponent(id)}`,
			...config
		}),
		getByName: (name, config) => client.request({
			path: `/game-modes/by-name/${encodeURIComponent(name)}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/game-modes",
			body,
			...config
		}),
		update: (id, body, config) => client.request({
			method: "PATCH",
			path: `/game-modes/${encodeURIComponent(id)}`,
			body,
			...config
		}),
		listEventSchemas: (id, config) => client.request({
			path: `/game-modes/${encodeURIComponent(id)}/event-schemas`,
			...config
		}),
		replaceEventSchemas: (id, body, config) => client.request({
			method: "PUT",
			path: `/game-modes/${encodeURIComponent(id)}/event-schemas`,
			body,
			...config
		})
	};
}

//#endregion
//#region src/resources/matches.ts
function createMatchesResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/matches",
			query,
			...config
		}),
		get: (id, config) => client.request({
			path: `/matches/${encodeURIComponent(id)}`,
			...config
		}),
		getEvidence: (id, query, config) => client.request({
			path: `/matches/${encodeURIComponent(id)}/evidence`,
			query,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/matches",
			body,
			...config
		}),
		update: (id, body, config) => client.request({
			method: "PATCH",
			path: `/matches/${encodeURIComponent(id)}`,
			body,
			...config
		}),
		checkpoint: (id, body, config) => client.request({
			method: "POST",
			path: `/matches/${encodeURIComponent(id)}/checkpoints`,
			body,
			...config
		}),
		checkpointRecording: (id, input, config) => client.request({
			method: "POST",
			path: `/matches/${encodeURIComponent(id)}/recording-checkpoint`,
			formData: recordingCheckpointFormData(input),
			...config
		}),
		getMetrics: (id, config) => client.request({
			path: `/matches/${encodeURIComponent(id)}/metrics`,
			...config
		}),
		queryMetrics: (body, config) => client.request({
			method: "POST",
			path: "/matches/metrics/query",
			body,
			...config
		}),
		associateRecording: (id, body, config) => client.request({
			method: "PATCH",
			path: `/matches/${encodeURIComponent(id)}/recording`,
			body,
			...config
		}),
		createComposition: (body, config) => client.request({
			method: "POST",
			path: "/matches/compositions",
			body,
			...config
		}),
		updateComposition: (id, body, config) => client.request({
			method: "PUT",
			path: `/matches/${encodeURIComponent(id)}/rounds`,
			body,
			...config
		}),
		deleteComposition: (id, config) => client.request({
			method: "DELETE",
			path: `/matches/${encodeURIComponent(id)}/rounds`,
			...config
		}),
		getRound: (id, roundNumber, config) => client.request({
			path: `/matches/${encodeURIComponent(id)}/rounds/${encodeURIComponent(String(roundNumber))}`,
			...config
		}),
		getExtraTime: (id, config) => client.request({
			path: `/matches/${encodeURIComponent(id)}/extra-time`,
			...config
		}),
		listEvents: (id, query, config) => client.request({
			path: `/matches/${encodeURIComponent(id)}/events`,
			query,
			...config
		}),
		addEvent: (id, body, config) => client.request({
			method: "POST",
			path: `/matches/${encodeURIComponent(id)}/events`,
			body,
			...config
		}),
		disableEvent: (id, eventId, body = { disabled: true }, config) => client.request({
			method: "PATCH",
			path: `/matches/${encodeURIComponent(id)}/events/${encodeURIComponent(eventId)}`,
			body,
			...config
		})
	};
}
function recordingCheckpointFormData(input) {
	const formData = new FormData();
	const filename = input.filename ?? "match-checkpoint.hbr2";
	const blob = toBlob$1(input.file, input.contentType);
	formData.set("revision", String(input.revision));
	formData.set("file", blob, filename);
	return formData;
}
function toBlob$1(input, contentType = "application/octet-stream") {
	if (input instanceof Blob) return input;
	if (ArrayBuffer.isView(input)) {
		const bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
		const copy = new Uint8Array(bytes.byteLength);
		copy.set(bytes);
		return new Blob([copy], { type: contentType });
	}
	return new Blob([input], { type: contentType });
}

//#endregion
//#region src/resources/permissions.ts
function createPermissionsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/permissions",
			query,
			...config
		}),
		get: (uuid, config) => client.request({
			path: `/permissions/${encodeURIComponent(uuid)}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/permissions",
			body,
			...config
		}),
		update: (uuid, body, config) => client.request({
			method: "PATCH",
			path: `/permissions/${encodeURIComponent(uuid)}`,
			body,
			...config
		}),
		remove: (uuid, config) => client.request({
			method: "DELETE",
			path: `/permissions/${encodeURIComponent(uuid)}`,
			...config
		})
	};
}

//#endregion
//#region src/resources/players.ts
function createPlayersResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/players",
			query,
			...config
		}),
		get: (externalId, config) => client.request({
			path: `/players/${encodeURIComponent(externalId)}`,
			...config
		}),
		listMatches: (externalId, query, config) => client.request({
			path: `/players/${encodeURIComponent(externalId)}/matches`,
			query,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/players",
			body,
			...config
		}),
		associateAccount: (externalId, body, config) => client.request({
			method: "PATCH",
			path: `/players/${encodeURIComponent(externalId)}/account`,
			body,
			...config
		})
	};
}

//#endregion
//#region src/resources/recordings.ts
function createRecordingsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/recs",
			query,
			...config
		}),
		get: (id, config) => client.request({
			path: `/recs/${encodeURIComponent(id)}`,
			...config
		}),
		getInspection: (id, config) => client.request({
			path: `/recs/${encodeURIComponent(id)}/inspection`,
			...config
		}),
		inspect: (id, config) => client.request({
			method: "POST",
			path: `/recs/${encodeURIComponent(id)}/inspection`,
			...config
		}),
		create: (input, config) => client.request({
			method: "POST",
			path: "/recs",
			formData: recordingFormData(input),
			...config
		})
	};
}
function recordingFormData(input) {
	const formData = new FormData();
	const filename = input.filename ?? "match.hbr2";
	const blob = toBlob(input.file, input.contentType);
	formData.set("file", blob, filename);
	return formData;
}
function toBlob(input, contentType = "application/octet-stream") {
	if (input instanceof Blob) return input;
	if (ArrayBuffer.isView(input)) {
		const bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
		const copy = new Uint8Array(bytes.byteLength);
		copy.set(bytes);
		return new Blob([copy], { type: contentType });
	}
	return new Blob([input], { type: contentType });
}

//#endregion
//#region src/resources/roles.ts
function createRolesResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/roles",
			query,
			...config
		}),
		get: (uuid, config) => client.request({
			path: `/roles/${encodeURIComponent(uuid)}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/roles",
			body,
			...config
		}),
		update: (uuid, body, config) => client.request({
			method: "PATCH",
			path: `/roles/${encodeURIComponent(uuid)}`,
			body,
			...config
		}),
		remove: (uuid, config) => client.request({
			method: "DELETE",
			path: `/roles/${encodeURIComponent(uuid)}`,
			...config
		})
	};
}

//#endregion
//#region src/resources/live.ts
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
function createLiveResource(client) {
	return {
		query: (input) => executeLiveGraphql(client, input),
		enqueueRoomCommand: async (input, config) => {
			const result = await executeLiveGraphql(client, {
				document: enqueueLiveRoomCommandDocument,
				variables: { input },
				...config
			});
			if (!result.ok) return result;
			return {
				ok: true,
				data: result.data.enqueueLiveRoomCommand,
				response: result.response
			};
		}
	};
}
async function executeLiveGraphql(client, input) {
	const result = await client.request({
		method: "POST",
		path: "/graphql",
		body: {
			query: documentText(input.document),
			...input.variables === void 0 ? {} : { variables: input.variables },
			...input.operationName ? { operationName: input.operationName } : {}
		},
		signal: input.signal,
		timeoutMs: input.timeoutMs
	});
	if (!result.ok) return graphQlFailureFromApiFailure(result) ?? result;
	if (result.data.errors?.length) return {
		ok: false,
		error: {
			kind: "graphql",
			message: result.data.errors[0]?.message ?? "GraphQL request failed",
			errors: result.data.errors,
			body: result.data
		},
		response: result.response
	};
	return {
		ok: true,
		data: result.data.data ?? null,
		response: result.response
	};
}
function graphQlFailureFromApiFailure(result) {
	if (result.error.kind !== "api") return null;
	const errors = graphQlErrorsFromBody(result.error.body);
	if (!errors.length) return null;
	return {
		ok: false,
		error: {
			kind: "graphql",
			message: errors[0]?.message ?? result.error.message,
			errors,
			body: result.error.body
		},
		...result.response ? { response: result.response } : {}
	};
}
function graphQlErrorsFromBody(body) {
	const errors = (body && typeof body === "object" && "value" in body ? body.value : body)?.errors;
	if (!Array.isArray(errors)) return [];
	return errors.filter(isGraphQlError);
}
function isGraphQlError(error) {
	return !!error && typeof error === "object" && typeof error.message === "string";
}
function documentText(document) {
	return typeof document === "string" ? document : (0, graphql.print)(document);
}

//#endregion
//#region src/resources/room-control.ts
async function attachLiveRoom(client, input) {
	const webSocket = input.webSocket ?? globalWebSocket();
	const token = await client.bearerToken();
	const options = token ? { headers: { authorization: `Bearer ${token}` } } : void 0;
	const socket = new webSocket(roomControlUrl(client.apiUrl, input.roomId), options);
	const connection = {
		close: () => socket.close(),
		sendSnapshot: (snapshot = input.snapshotProvider?.()) => {
			if (snapshot === void 0) return;
			socket.send(JSON.stringify({
				type: "room.snapshot",
				snapshot
			}));
		},
		sendCommandResult: (commandId, outcome) => {
			socket.send(JSON.stringify({
				type: "room.command-result",
				commandId,
				...outcome
			}));
		}
	};
	onSocket(socket, "open", () => {
		socket.send(JSON.stringify({
			type: "room.ping",
			protocolVersion: 1,
			commId: input.commId,
			snapshotRevision: input.snapshotRevision ?? null
		}));
	});
	onSocket(socket, "message", (raw) => {
		const message = parseControlMessage(raw);
		if (!message) return;
		if (message.type === "api.command") {
			handleCommand(connection, input, message.command);
			return;
		}
		if (!message.accepted) {
			input.onRejected?.(message.error ?? null);
			return;
		}
		input.onAccepted?.();
		if (message.requiresSnapshot) connection.sendSnapshot();
	});
	onSocket(socket, "close", () => input.onClose?.());
	onSocket(socket, "error", (error) => input.onError?.(error));
	return connection;
}
async function handleCommand(connection, input, command) {
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
function roomControlUrl(apiUrl, roomId) {
	const url = new URL(`rooms/${encodeURIComponent(roomId)}/control`, slashTerminated(apiUrl));
	url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
	return url.toString();
}
function slashTerminated(url) {
	const value = new URL(url);
	if (!value.pathname.endsWith("/")) value.pathname = `${value.pathname}/`;
	return value;
}
function globalWebSocket() {
	if (typeof globalThis.WebSocket !== "function") throw new Error("Room control WebSocket requires a WebSocket constructor in this runtime");
	return globalThis.WebSocket;
}
function onSocket(socket, type, listener) {
	if (socket.on) {
		socket.on(type, listener);
		return;
	}
	socket.addEventListener?.(type, (event) => listener(event));
}
function parseControlMessage(raw) {
	try {
		const value = JSON.parse(rawText(raw));
		if (isApiControlMessage(value)) return value;
		return null;
	} catch {
		return null;
	}
}
function rawText(raw) {
	if (typeof raw === "string") return raw;
	if (raw instanceof ArrayBuffer) return Buffer.from(raw).toString("utf8");
	if (ArrayBuffer.isView(raw)) return Buffer.from(raw.buffer, raw.byteOffset, raw.byteLength).toString("utf8");
	if (Array.isArray(raw)) return Buffer.concat(raw.map((item) => Buffer.from(item))).toString("utf8");
	const data = raw?.data;
	return data === void 0 ? String(raw) : rawText(data);
}
function isApiControlMessage(value) {
	if (!value || typeof value !== "object") return false;
	const message = value;
	if (message.type === "api.pong") return true;
	if (message.type !== "api.command") return false;
	const command = message.command;
	return !!command && typeof command.id === "string" && typeof command.roomId === "string" && typeof command.name === "string";
}

//#endregion
//#region src/resources/rooms.ts
function createRoomsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/rooms",
			query,
			...config
		}),
		get: (id, config) => client.request({
			path: `/rooms/${encodeURIComponent(id)}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/rooms",
			body,
			...config
		}),
		close: (id, config) => client.request({
			method: "POST",
			path: `/rooms/${encodeURIComponent(id)}/close`,
			...config
		}),
		listEvents: (id, query, config) => client.request({
			path: `/rooms/${encodeURIComponent(id)}/events`,
			query,
			...config
		}),
		addEvent: (id, body, config) => client.request({
			method: "POST",
			path: `/rooms/${encodeURIComponent(id)}/events`,
			body,
			...config
		}),
		listIncidents: (id, query, config) => client.request({
			path: `/rooms/${encodeURIComponent(id)}/incidents`,
			query,
			...config
		}),
		addIncident: (id, body, config) => client.request({
			method: "POST",
			path: `/rooms/${encodeURIComponent(id)}/incidents`,
			body,
			...config
		}),
		reportReady: (id, body, config) => client.request({
			method: "POST",
			path: `/rooms/${encodeURIComponent(id)}/ready`,
			body,
			...config
		}),
		attachLive: (input) => attachLiveRoom(client, input),
		programs: createRoomProgramsResource(client),
		proxyEndpoints: createRoomProxyEndpointsResource(client)
	};
}
function createRoomProgramsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/room-programs",
			query,
			...config
		}),
		get: (id, config) => client.request({
			path: `/room-programs/${encodeURIComponent(id)}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/room-programs",
			body,
			...config
		}),
		update: (id, body, config) => client.request({
			method: "PATCH",
			path: `/room-programs/${encodeURIComponent(id)}`,
			body,
			...config
		}),
		listVersions: (id, query, config) => client.request({
			path: `/room-programs/${encodeURIComponent(id)}/versions`,
			query,
			...config
		}),
		createVersion: (id, body, config) => client.request({
			method: "POST",
			path: `/room-programs/${encodeURIComponent(id)}/versions`,
			body,
			...config
		}),
		discoverVersions: (id, body, config) => client.request({
			method: "POST",
			path: `/room-programs/${encodeURIComponent(id)}/versions/discover`,
			body,
			...config
		})
	};
}
function createRoomProxyEndpointsResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/room-proxy-endpoints",
			query,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/room-proxy-endpoints",
			body,
			...config
		}),
		update: (id, body, config) => client.request({
			method: "PATCH",
			path: `/room-proxy-endpoints/${encodeURIComponent(id)}`,
			body,
			...config
		})
	};
}

//#endregion
//#region src/resources/sessions.ts
function createSessionsResource(client) {
	return {
		resolve: (body, config) => client.request({
			method: "POST",
			path: "/sessions/resolve",
			body,
			...config
		}),
		confirm: (body, config) => client.request({
			method: "POST",
			path: "/sessions/confirm",
			body,
			...config
		})
	};
}

//#endregion
//#region src/resources/event-schemas.ts
function createEventSchemasResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/event-schemas",
			query,
			...config
		}),
		getLatest: (id, config) => client.request({
			path: `/event-schemas/${encodeURIComponent(id)}`,
			...config
		}),
		getLatestByName: (name, config) => client.request({
			path: `/event-schemas/by-name/${encodeURIComponent(name)}`,
			...config
		}),
		getVersion: (id, version, config) => client.request({
			path: `/event-schemas/${encodeURIComponent(id)}/versions/${encodeURIComponent(String(version))}`,
			...config
		}),
		getVersionByName: (name, version, config) => client.request({
			path: `/event-schemas/by-name/${encodeURIComponent(name)}/versions/${encodeURIComponent(String(version))}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/event-schemas",
			body,
			...config
		}),
		publishVersion: (id, body, config) => client.request({
			method: "POST",
			path: `/event-schemas/${encodeURIComponent(id)}/versions`,
			body,
			...config
		}),
		updateVersion: (id, version, body, config) => client.request({
			method: "PATCH",
			path: `/event-schemas/${encodeURIComponent(id)}/versions/${encodeURIComponent(String(version))}`,
			body,
			...config
		}),
		getDraft: (id, config) => client.request({
			path: `/event-schemas/${encodeURIComponent(id)}/draft`,
			...config
		}),
		saveDraft: (id, body, config) => client.request({
			method: "PUT",
			path: `/event-schemas/${encodeURIComponent(id)}/draft`,
			body,
			...config
		}),
		validateDraft: (id, config) => client.request({
			method: "POST",
			path: `/event-schemas/${encodeURIComponent(id)}/draft/validate`,
			...config
		}),
		clone: (id, body, config) => client.request({
			method: "POST",
			path: `/event-schemas/${encodeURIComponent(id)}/clone`,
			body,
			...config
		})
	};
}

//#endregion
//#region src/resources/visualizations.ts
function createVisualizationsResource(client) {
	return {
		templates: {
			list: (query, config) => client.request({
				path: "/visualizations/templates",
				query,
				...config
			}),
			create: (body, config) => client.request({
				method: "POST",
				path: "/visualizations/templates",
				body,
				...config
			}),
			updateDraft: (id, body, config) => client.request({
				method: "PUT",
				path: `/visualizations/templates/${encodeURIComponent(id)}/draft`,
				body,
				...config
			}),
			publish: (id, body, config) => client.request({
				method: "POST",
				path: `/visualizations/templates/${encodeURIComponent(id)}/publish`,
				body,
				...config
			})
		},
		preview: (body, config) => client.request({
			method: "POST",
			path: "/visualizations/preview",
			body,
			...config
		}),
		match: (id, config) => client.request({
			path: `/visualizations/matches/${encodeURIComponent(id)}`,
			...config
		}),
		championship: (id, query, config) => client.request({
			path: `/visualizations/championships/${encodeURIComponent(id)}`,
			query,
			...config
		}),
		upsertChampionshipInstance: (id, body, config) => client.request({
			method: "PUT",
			path: `/visualizations/championships/${encodeURIComponent(id)}/instances`,
			body,
			...config
		})
	};
}

//#endregion
//#region src/resources/index.ts
function createResources(client) {
	return {
		accounts: createAccountsResource(client),
		auth: createAuthResource(client),
		championships: createChampionshipsResource(client),
		clips: createClipsResource(client),
		gameModes: createGameModesResource(client),
		matches: createMatchesResource(client),
		permissions: createPermissionsResource(client),
		players: createPlayersResource(client),
		recordings: createRecordingsResource(client),
		roles: createRolesResource(client),
		live: createLiveResource(client),
		rooms: createRoomsResource(client),
		sessions: createSessionsResource(client),
		eventSchemas: createEventSchemasResource(client),
		visualizations: createVisualizationsResource(client)
	};
}

//#endregion
//#region src/result.ts
function success(data, response) {
	return {
		ok: true,
		data,
		response: responseMeta(response)
	};
}
function responseMeta(response) {
	return {
		status: response.status,
		statusText: response.statusText,
		url: response.url,
		headers: response.headers
	};
}

//#endregion
//#region src/client.ts
var HaxFootballApiClient = class {
	accounts;
	auth;
	championships;
	clips;
	gameModes;
	matches;
	permissions;
	players;
	recordings;
	roles;
	live;
	rooms;
	sessions;
	eventSchemas;
	visualizations;
	apiUrl;
	authUrl;
	fetcher;
	token;
	apiKey;
	headers;
	timeoutMs;
	cachedApiKeyToken;
	constructor(options = {}) {
		this.fetcher = options.fetch ?? globalThis.fetch?.bind(globalThis);
		if (!this.fetcher) throw new Error("HaxFootballApiClient requires a fetch implementation in this runtime");
		this.apiUrl = normalizeBaseUrl(options.apiUrl ?? readEnvironment("HAXFOOTBALL_API_URL"), "HaxFootballApiClient requires apiUrl or HAXFOOTBALL_API_URL in the environment");
		this.authUrl = normalizeAuthUrl(options.authUrl, this.apiUrl);
		this.token = options.token ?? readEnvironment("HAXFOOTBALL_API_TOKEN") ?? readEnvironment("HAXFOOTBALL_API_JWT");
		this.apiKey = options.apiKey ?? readEnvironment("HAXFOOTBALL_API_KEY");
		this.headers = options.headers;
		this.timeoutMs = options.timeoutMs;
		const resources = createResources(this);
		this.accounts = resources.accounts;
		this.auth = resources.auth;
		this.championships = resources.championships;
		this.clips = resources.clips;
		this.gameModes = resources.gameModes;
		this.matches = resources.matches;
		this.permissions = resources.permissions;
		this.players = resources.players;
		this.recordings = resources.recordings;
		this.roles = resources.roles;
		this.live = resources.live;
		this.rooms = resources.rooms;
		this.sessions = resources.sessions;
		this.eventSchemas = resources.eventSchemas;
		this.visualizations = resources.visualizations;
	}
	async request(options) {
		const authResult = options.auth === "none" ? void 0 : await this.resolveBearerToken();
		if (authResult && !authResult.ok) return authResult;
		const url = buildUrl(this.apiUrl, options.path, options.query);
		const headers = await this.buildHeaders(options, authResult?.token);
		const signal = createRequestSignal(options.signal, options.timeoutMs ?? this.timeoutMs);
		const init = requestInit({
			method: options.method ?? "GET",
			headers,
			body: requestBody(options),
			signal: signal.signal
		});
		try {
			return parseJsonResponse(await this.fetcher(url, init));
		} catch (cause) {
			return fetchFailure(cause);
		} finally {
			signal.dispose();
		}
	}
	async requestAuth(options) {
		const signal = createRequestSignal(options.signal, options.timeoutMs ?? this.timeoutMs);
		const headers = await this.buildHeaders(options);
		const init = requestInit({
			method: options.method ?? "POST",
			headers,
			body: requestBody(options),
			signal: signal.signal
		});
		try {
			return parseJsonResponse(await this.fetcher(this.authUrl, init));
		} catch (cause) {
			return fetchFailure(cause);
		} finally {
			signal.dispose();
		}
	}
	async openStream(options) {
		const authResult = await this.resolveBearerToken();
		if (!authResult.ok) return authResult;
		const url = buildUrl(this.apiUrl, options.path, options.query);
		const headers = await this.buildHeaders({ headers: options.headers }, authResult.token);
		headers.set("accept", "text/event-stream");
		try {
			const init = {
				method: "GET",
				headers
			};
			if (options.signal) init.signal = options.signal;
			const response = await this.fetcher(url, init);
			if (!response.ok) return parseJsonResponse(response);
			return success(response, response);
		} catch (cause) {
			return fetchFailure(cause);
		}
	}
	async bearerToken() {
		const authResult = await this.resolveBearerToken();
		if (!authResult.ok) throw new Error(authResult.error.message);
		return authResult.token;
	}
	async resolveBearerToken() {
		if (typeof this.token === "string") return {
			ok: true,
			token: this.token
		};
		if (typeof this.token === "function") return {
			ok: true,
			token: await this.token()
		};
		if (this.cachedApiKeyToken) return {
			ok: true,
			token: this.cachedApiKeyToken
		};
		if (!this.apiKey) return {
			ok: true,
			token: void 0
		};
		const result = await this.requestAuth({
			method: "POST",
			body: { apiKey: this.apiKey }
		});
		if (!result.ok) return {
			ok: false,
			error: result.error
		};
		this.cachedApiKeyToken = result.data.token;
		return {
			ok: true,
			token: this.cachedApiKeyToken
		};
	}
	async buildHeaders(options, token) {
		const headers = new Headers(await resolveHeaders(this.headers));
		if (token) headers.set("authorization", `Bearer ${token}`);
		if (options.body !== void 0 && !headers.has("content-type")) headers.set("content-type", "application/json");
		for (const [key, value] of new Headers(options.headers)) headers.set(key, value);
		return headers;
	}
};
function createHaxFootballApiClient(options = {}) {
	return new HaxFootballApiClient(options);
}
function createHaxFootballRoomApiClient(options = {}) {
	return new HaxFootballApiClient({
		...options,
		apiUrl: options.apiUrl ?? readEnvironment("__ROOM_API_URL") ?? readEnvironment("ROOM_API_URL"),
		token: options.token ?? readEnvironment("__ROOM_API_JWT") ?? readEnvironment("ROOM_API_JWT")
	});
}
async function resolveHeaders(headers) {
	return typeof headers === "function" ? headers() : headers;
}
function requestBody(options) {
	if (options.formData) return options.formData;
	if (options.body !== void 0) return JSON.stringify(options.body);
}
function requestInit(input) {
	const init = {
		method: input.method,
		headers: input.headers
	};
	if (input.body !== void 0) init.body = input.body;
	if (input.signal !== void 0) init.signal = input.signal;
	return init;
}
async function parseJsonResponse(response) {
	const bodyText = await response.text();
	const body = parseBody(bodyText);
	if (!response.ok) return {
		ok: false,
		error: {
			kind: "api",
			status: response.status,
			statusText: response.statusText,
			url: response.url,
			headers: response.headers,
			...apiErrorDetails(body, response),
			body
		},
		response: responseMeta(response)
	};
	if (!body.ok) return {
		ok: false,
		error: {
			kind: "invalid-response",
			status: response.status,
			statusText: response.statusText,
			url: response.url,
			headers: response.headers,
			message: "API response was not valid JSON",
			bodyText
		},
		response: responseMeta(response)
	};
	return success(body.value, response);
}
function parseBody(bodyText) {
	if (!bodyText) return {
		ok: true,
		value: void 0
	};
	try {
		return {
			ok: true,
			value: JSON.parse(bodyText)
		};
	} catch {
		return { ok: false };
	}
}
function apiErrorDetails(body, response) {
	if (body.ok && isErrorEnvelope(body.value)) return {
		code: body.value.error.code,
		message: body.value.error.message,
		body: body.value
	};
	return {
		message: response.statusText || `HTTP ${response.status}`,
		body: body.ok ? body.value : void 0
	};
}
function isErrorEnvelope(value) {
	if (!value || typeof value !== "object" || !("error" in value)) return false;
	const error = value.error;
	return !!error && typeof error === "object" && typeof error.code === "string" && typeof error.message === "string";
}
function fetchFailure(cause) {
	if (isAbortError(cause)) return {
		ok: false,
		error: {
			kind: "aborted",
			message: cause instanceof Error ? cause.message : "Request aborted",
			cause
		}
	};
	return {
		ok: false,
		error: {
			kind: "network",
			message: cause instanceof Error ? cause.message : "Network request failed",
			cause
		}
	};
}
function isAbortError(cause) {
	return cause instanceof DOMException && cause.name === "AbortError" || cause instanceof Error && cause.name === "AbortError";
}
function normalizeBaseUrl(input, missingMessage) {
	if (!input) throw new Error(missingMessage);
	const url = new URL(input);
	url.pathname = stripTrailingSlash(url.pathname);
	return url;
}
function normalizeAuthUrl(input, apiUrl) {
	if (input) return new URL(input);
	const authUrl = new URL(apiUrl);
	authUrl.pathname = authUrl.pathname.replace(/\/api\/?$/, "") || "/";
	return buildUrl(authUrl, "/auth");
}
function buildUrl(baseUrl, path, query) {
	const url = new URL(baseUrl);
	url.pathname = `${stripTrailingSlash(url.pathname)}${path.startsWith("/") ? path : `/${path}`}`;
	for (const [key, value] of Object.entries(query ?? {})) {
		if (value === void 0 || value === null) continue;
		url.searchParams.set(key, String(value));
	}
	return url;
}
function stripTrailingSlash(pathname) {
	return pathname === "/" ? "" : pathname.replace(/\/+$/, "");
}
function createRequestSignal(inputSignal, timeoutMs) {
	if (!timeoutMs) return {
		signal: inputSignal,
		dispose: () => {}
	};
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), timeoutMs);
	const abortFromInput = () => controller.abort(inputSignal?.reason);
	inputSignal?.addEventListener("abort", abortFromInput, { once: true });
	return {
		signal: controller.signal,
		dispose: () => {
			clearTimeout(timeout);
			inputSignal?.removeEventListener("abort", abortFromInput);
		}
	};
}
function readEnvironment(name) {
	return (globalThis.process?.env)?.[name];
}

//#endregion
//#region src/live/generated.ts
const FindPlayersByNameDocument = {
	kind: "Document",
	definitions: [{
		kind: "OperationDefinition",
		operation: "query",
		name: {
			kind: "Name",
			value: "FindPlayersByName"
		},
		variableDefinitions: [{
			kind: "VariableDefinition",
			variable: {
				kind: "Variable",
				name: {
					kind: "Name",
					value: "playerName"
				}
			},
			type: {
				kind: "NonNullType",
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "String"
					}
				}
			}
		}, {
			kind: "VariableDefinition",
			variable: {
				kind: "Variable",
				name: {
					kind: "Name",
					value: "connected"
				}
			},
			type: {
				kind: "NamedType",
				name: {
					kind: "Name",
					value: "Boolean"
				}
			},
			defaultValue: {
				kind: "BooleanValue",
				value: true
			}
		}],
		selectionSet: {
			kind: "SelectionSet",
			selections: [{
				kind: "Field",
				name: {
					kind: "Name",
					value: "liveRooms"
				},
				arguments: [{
					kind: "Argument",
					name: {
						kind: "Name",
						value: "where"
					},
					value: {
						kind: "ObjectValue",
						fields: [{
							kind: "ObjectField",
							name: {
								kind: "Name",
								value: "connected"
							},
							value: {
								kind: "ObjectValue",
								fields: [{
									kind: "ObjectField",
									name: {
										kind: "Name",
										value: "equals"
									},
									value: {
										kind: "Variable",
										name: {
											kind: "Name",
											value: "connected"
										}
									}
								}]
							}
						}, {
							kind: "ObjectField",
							name: {
								kind: "Name",
								value: "players"
							},
							value: {
								kind: "ObjectValue",
								fields: [{
									kind: "ObjectField",
									name: {
										kind: "Name",
										value: "some"
									},
									value: {
										kind: "ObjectValue",
										fields: [{
											kind: "ObjectField",
											name: {
												kind: "Name",
												value: "name"
											},
											value: {
												kind: "ObjectValue",
												fields: [{
													kind: "ObjectField",
													name: {
														kind: "Name",
														value: "equals"
													},
													value: {
														kind: "Variable",
														name: {
															kind: "Name",
															value: "playerName"
														}
													}
												}]
											}
										}]
									}
								}]
							}
						}]
					}
				}],
				selectionSet: {
					kind: "SelectionSet",
					selections: [{
						kind: "Field",
						name: {
							kind: "Name",
							value: "nodes"
						},
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "id"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "connected"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "revision"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "lastSeenAt"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "room"
									},
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "name"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "teamsLocked"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "gameStatus"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "scores"
												},
												selectionSet: {
													kind: "SelectionSet",
													selections: [{
														kind: "Field",
														name: {
															kind: "Name",
															value: "red"
														}
													}, {
														kind: "Field",
														name: {
															kind: "Name",
															value: "blue"
														}
													}]
												}
											}
										]
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "players"
									},
									arguments: [{
										kind: "Argument",
										name: {
											kind: "Name",
											value: "where"
										},
										value: {
											kind: "ObjectValue",
											fields: [{
												kind: "ObjectField",
												name: {
													kind: "Name",
													value: "name"
												},
												value: {
													kind: "ObjectValue",
													fields: [{
														kind: "ObjectField",
														name: {
															kind: "Name",
															value: "equals"
														},
														value: {
															kind: "Variable",
															name: {
																kind: "Name",
																value: "playerName"
															}
														}
													}]
												}
											}]
										}
									}],
									selectionSet: {
										kind: "SelectionSet",
										selections: [{
											kind: "Field",
											name: {
												kind: "Name",
												value: "nodes"
											},
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
														name: {
															kind: "Name",
															value: "name"
														}
													},
													{
														kind: "Field",
														name: {
															kind: "Name",
															value: "team"
														}
													},
													{
														kind: "Field",
														name: {
															kind: "Name",
															value: "admin"
														}
													},
													{
														kind: "Field",
														name: {
															kind: "Name",
															value: "avatar"
														}
													},
													{
														kind: "Field",
														name: {
															kind: "Name",
															value: "desynced"
														}
													},
													{
														kind: "Field",
														name: {
															kind: "Name",
															value: "sessionKind"
														}
													},
													{
														kind: "Field",
														name: {
															kind: "Name",
															value: "playable"
														}
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
										}]
									}
								}
							]
						}
					}]
				}
			}]
		}
	}]
};
const GetRoomDocument = {
	kind: "Document",
	definitions: [{
		kind: "OperationDefinition",
		operation: "query",
		name: {
			kind: "Name",
			value: "GetRoom"
		},
		variableDefinitions: [{
			kind: "VariableDefinition",
			variable: {
				kind: "Variable",
				name: {
					kind: "Name",
					value: "id"
				}
			},
			type: {
				kind: "NonNullType",
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ID"
					}
				}
			}
		}],
		selectionSet: {
			kind: "SelectionSet",
			selections: [{
				kind: "Field",
				name: {
					kind: "Name",
					value: "liveRoom"
				},
				arguments: [{
					kind: "Argument",
					name: {
						kind: "Name",
						value: "id"
					},
					value: {
						kind: "Variable",
						name: {
							kind: "Name",
							value: "id"
						}
					}
				}],
				selectionSet: {
					kind: "SelectionSet",
					selections: [
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "id"
							}
						},
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "connected"
							}
						},
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "revision"
							}
						},
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "lastSeenAt"
							}
						},
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "room"
							},
							selectionSet: {
								kind: "SelectionSet",
								selections: [
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "name"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "teamsLocked"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "gameStatus"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "scores"
										},
										selectionSet: {
											kind: "SelectionSet",
											selections: [{
												kind: "Field",
												name: {
													kind: "Name",
													value: "red"
												}
											}, {
												kind: "Field",
												name: {
													kind: "Name",
													value: "blue"
												}
											}]
										}
									}
								]
							}
						},
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "players"
							},
							selectionSet: {
								kind: "SelectionSet",
								selections: [{
									kind: "Field",
									name: {
										kind: "Name",
										value: "nodes"
									},
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
												name: {
													kind: "Name",
													value: "name"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "team"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "admin"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "avatar"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "desynced"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "sessionKind"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "playable"
												}
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
								}]
							}
						},
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "stateDocuments"
							},
							selectionSet: {
								kind: "SelectionSet",
								selections: [
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "namespace"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "name"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "version"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "revision"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "updatedAt"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "payload"
										}
									}
								]
							}
						},
						{
							kind: "Field",
							name: {
								kind: "Name",
								value: "stateFacts"
							},
							selectionSet: {
								kind: "SelectionSet",
								selections: [
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "namespace"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "key"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "type"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "stringValue"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "numberValue"
										}
									},
									{
										kind: "Field",
										name: {
											kind: "Name",
											value: "booleanValue"
										}
									}
								]
							}
						}
					]
				}
			}]
		}
	}]
};
const ListRoomsDocument = {
	kind: "Document",
	definitions: [{
		kind: "OperationDefinition",
		operation: "query",
		name: {
			kind: "Name",
			value: "ListRooms"
		},
		variableDefinitions: [
			{
				kind: "VariableDefinition",
				variable: {
					kind: "Variable",
					name: {
						kind: "Name",
						value: "where"
					}
				},
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "LiveRoomWhereInput"
					}
				}
			},
			{
				kind: "VariableDefinition",
				variable: {
					kind: "Variable",
					name: {
						kind: "Name",
						value: "first"
					}
				},
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "Int"
					}
				},
				defaultValue: {
					kind: "IntValue",
					value: "50"
				}
			},
			{
				kind: "VariableDefinition",
				variable: {
					kind: "Variable",
					name: {
						kind: "Name",
						value: "after"
					}
				},
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "String"
					}
				}
			}
		],
		selectionSet: {
			kind: "SelectionSet",
			selections: [{
				kind: "Field",
				name: {
					kind: "Name",
					value: "liveRooms"
				},
				arguments: [
					{
						kind: "Argument",
						name: {
							kind: "Name",
							value: "where"
						},
						value: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "where"
							}
						}
					},
					{
						kind: "Argument",
						name: {
							kind: "Name",
							value: "first"
						},
						value: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "first"
							}
						}
					},
					{
						kind: "Argument",
						name: {
							kind: "Name",
							value: "after"
						},
						value: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "after"
							}
						}
					}
				],
				selectionSet: {
					kind: "SelectionSet",
					selections: [{
						kind: "Field",
						name: {
							kind: "Name",
							value: "nodes"
						},
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "id"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "connected"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "revision"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "lastSeenAt"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "room"
									},
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "name"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "teamsLocked"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "gameStatus"
												}
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "scores"
												},
												selectionSet: {
													kind: "SelectionSet",
													selections: [{
														kind: "Field",
														name: {
															kind: "Name",
															value: "red"
														}
													}, {
														kind: "Field",
														name: {
															kind: "Name",
															value: "blue"
														}
													}]
												}
											}
										]
									}
								}
							]
						}
					}, {
						kind: "Field",
						name: {
							kind: "Name",
							value: "pageInfo"
						},
						selectionSet: {
							kind: "SelectionSet",
							selections: [{
								kind: "Field",
								name: {
									kind: "Name",
									value: "hasNextPage"
								}
							}, {
								kind: "Field",
								name: {
									kind: "Name",
									value: "endCursor"
								}
							}]
						}
					}]
				}
			}]
		}
	}]
};
const ListRoomCommandsDocument = {
	kind: "Document",
	definitions: [{
		kind: "OperationDefinition",
		operation: "query",
		name: {
			kind: "Name",
			value: "ListRoomCommands"
		},
		variableDefinitions: [
			{
				kind: "VariableDefinition",
				variable: {
					kind: "Variable",
					name: {
						kind: "Name",
						value: "roomId"
					}
				},
				type: {
					kind: "NonNullType",
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ID"
						}
					}
				}
			},
			{
				kind: "VariableDefinition",
				variable: {
					kind: "Variable",
					name: {
						kind: "Name",
						value: "status"
					}
				},
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "LiveRoomCommandStatus"
					}
				}
			},
			{
				kind: "VariableDefinition",
				variable: {
					kind: "Variable",
					name: {
						kind: "Name",
						value: "first"
					}
				},
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "Int"
					}
				},
				defaultValue: {
					kind: "IntValue",
					value: "50"
				}
			},
			{
				kind: "VariableDefinition",
				variable: {
					kind: "Variable",
					name: {
						kind: "Name",
						value: "after"
					}
				},
				type: {
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "String"
					}
				}
			}
		],
		selectionSet: {
			kind: "SelectionSet",
			selections: [{
				kind: "Field",
				name: {
					kind: "Name",
					value: "liveRoomCommands"
				},
				arguments: [
					{
						kind: "Argument",
						name: {
							kind: "Name",
							value: "roomId"
						},
						value: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "roomId"
							}
						}
					},
					{
						kind: "Argument",
						name: {
							kind: "Name",
							value: "status"
						},
						value: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "status"
							}
						}
					},
					{
						kind: "Argument",
						name: {
							kind: "Name",
							value: "first"
						},
						value: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "first"
							}
						}
					},
					{
						kind: "Argument",
						name: {
							kind: "Name",
							value: "after"
						},
						value: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "after"
							}
						}
					}
				],
				selectionSet: {
					kind: "SelectionSet",
					selections: [{
						kind: "Field",
						name: {
							kind: "Name",
							value: "nodes"
						},
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "id"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "roomId"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "name"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "payload"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "status"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "result"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "error"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "createdAt"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "updatedAt"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "sentAt"
									}
								},
								{
									kind: "Field",
									name: {
										kind: "Name",
										value: "completedAt"
									}
								}
							]
						}
					}, {
						kind: "Field",
						name: {
							kind: "Name",
							value: "pageInfo"
						},
						selectionSet: {
							kind: "SelectionSet",
							selections: [{
								kind: "Field",
								name: {
									kind: "Name",
									value: "hasNextPage"
								}
							}, {
								kind: "Field",
								name: {
									kind: "Name",
									value: "endCursor"
								}
							}]
						}
					}]
				}
			}]
		}
	}]
};

//#endregion
//#region src/live/index.ts
const queries = {
	findPlayersByName: FindPlayersByNameDocument,
	getRoom: GetRoomDocument,
	listRooms: ListRoomsDocument,
	listRoomCommands: ListRoomCommandsDocument
};

//#endregion
exports.HaxFootballApiClient = HaxFootballApiClient;
exports.createHaxFootballApiClient = createHaxFootballApiClient;
exports.createHaxFootballRoomApiClient = createHaxFootballRoomApiClient;
exports.queries = queries;
//# sourceMappingURL=index.cjs.map