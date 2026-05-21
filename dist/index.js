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
		appendEvents: (id, body, config) => client.request({
			method: "POST",
			path: `/matches/${encodeURIComponent(id)}/events`,
			body,
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
		listStatEvents: (id, query, config) => client.request({
			path: `/matches/${encodeURIComponent(id)}/stat-events`,
			query,
			...config
		}),
		addStatEvent: (id, body, config) => client.request({
			method: "POST",
			path: `/matches/${encodeURIComponent(id)}/stat-events`,
			body,
			...config
		}),
		disableStatEvent: (id, eventId, body = { disabled: true }, config) => client.request({
			method: "PATCH",
			path: `/matches/${encodeURIComponent(id)}/stat-events/${encodeURIComponent(eventId)}`,
			body,
			...config
		})
	};
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
		reportReady: (id, body, config) => client.request({
			method: "POST",
			path: `/rooms/${encodeURIComponent(id)}/ready`,
			body,
			...config
		}),
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
//#region src/resources/stat-event-schemas.ts
function createStatEventSchemasResource(client) {
	return {
		list: (query, config) => client.request({
			path: "/stat-event-schemas",
			query,
			...config
		}),
		getLatest: (id, config) => client.request({
			path: `/stat-event-schemas/${encodeURIComponent(id)}`,
			...config
		}),
		getLatestByName: (name, config) => client.request({
			path: `/stat-event-schemas/by-name/${encodeURIComponent(name)}`,
			...config
		}),
		getVersion: (id, version, config) => client.request({
			path: `/stat-event-schemas/${encodeURIComponent(id)}/versions/${encodeURIComponent(String(version))}`,
			...config
		}),
		getVersionByName: (name, version, config) => client.request({
			path: `/stat-event-schemas/by-name/${encodeURIComponent(name)}/versions/${encodeURIComponent(String(version))}`,
			...config
		}),
		create: (body, config) => client.request({
			method: "POST",
			path: "/stat-event-schemas",
			body,
			...config
		}),
		publishVersion: (id, body, config) => client.request({
			method: "POST",
			path: `/stat-event-schemas/${encodeURIComponent(id)}/versions`,
			body,
			...config
		}),
		updateVersion: (id, version, body, config) => client.request({
			method: "PATCH",
			path: `/stat-event-schemas/${encodeURIComponent(id)}/versions/${encodeURIComponent(String(version))}`,
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
		matches: createMatchesResource(client),
		permissions: createPermissionsResource(client),
		players: createPlayersResource(client),
		recordings: createRecordingsResource(client),
		roles: createRolesResource(client),
		rooms: createRoomsResource(client),
		sessions: createSessionsResource(client),
		statEventSchemas: createStatEventSchemasResource(client)
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
	matches;
	permissions;
	players;
	recordings;
	roles;
	rooms;
	sessions;
	statEventSchemas;
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
		this.matches = resources.matches;
		this.permissions = resources.permissions;
		this.players = resources.players;
		this.recordings = resources.recordings;
		this.roles = resources.roles;
		this.rooms = resources.rooms;
		this.sessions = resources.sessions;
		this.statEventSchemas = resources.statEventSchemas;
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
export { HaxFootballApiClient, createHaxFootballApiClient, createHaxFootballRoomApiClient };
//# sourceMappingURL=index.js.map