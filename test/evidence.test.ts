import { describe, expect, it, vi } from "vitest";
import { createHaxFootballApiClient, type FetchLike } from "../src";

describe("logical match evidence resources", () => {
  it("reads bounded normalized evidence and validates replay recordings", async () => {
    const fetcher = vi.fn<FetchLike>().mockImplementation(
      async () =>
        new Response("{}", {
          status: 200,
          headers: { "content-type": "application/json" }
        })
    );
    const client = createHaxFootballApiClient({
      apiUrl: "https://api.example.com/api",
      token: "api-token",
      fetch: fetcher
    });

    await client.matches.getEvidence("c23456789", {
      eventLimit: 250,
      participantLimit: 100
    });
    await client.recordings.getInspection("abcdef1");
    await client.recordings.inspect("abcdef1");

    expect(fetcher.mock.calls.map(([url]) => url.toString())).toEqual([
      "https://api.example.com/api/matches/c23456789/evidence?eventLimit=250&participantLimit=100",
      "https://api.example.com/api/recs/abcdef1/inspection",
      "https://api.example.com/api/recs/abcdef1/inspection"
    ]);
    expect(fetcher.mock.calls.map((call) => call[1]?.method)).toEqual([
      "GET",
      "GET",
      "POST"
    ]);
  });
});
