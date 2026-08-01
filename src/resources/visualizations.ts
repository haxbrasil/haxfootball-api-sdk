import type { HaxFootballApiClient } from "../client";
import type {
  RenderedVisualization,
  VisualizationDashboard,
  VisualizationSpecification,
  VisualizationTemplate,
  VisualizationTemplateList
} from "../types";
import type { RequestConfig } from "./shared";

export function createVisualizationsResource(client: HaxFootballApiClient) {
  return {
    templates: {
      list: (
        query?: { scope?: "match" | "championship"; includeArchived?: boolean },
        config?: RequestConfig
      ) =>
        client.request<VisualizationTemplateList>({
          path: "/visualizations/templates",
          query,
          ...config
        }),
      create: (
        body: {
          name: string;
          title: string;
          description?: string | null;
          scope: "match" | "championship";
          tags?: string[];
          internalNotes?: string | null;
          specification: VisualizationSpecification;
          actorAccountUuid?: string;
        },
        config?: RequestConfig
      ) =>
        client.request<VisualizationTemplate>({
          method: "POST",
          path: "/visualizations/templates",
          body,
          ...config
        }),
      updateDraft: (
        id: string,
        body: {
          specification: VisualizationSpecification;
          expectedRevision: number;
          actorAccountUuid?: string;
        },
        config?: RequestConfig
      ) =>
        client.request<VisualizationTemplate>({
          method: "PUT",
          path: `/visualizations/templates/${encodeURIComponent(id)}/draft`,
          body,
          ...config
        }),
      publish: (
        id: string,
        body: { expectedRevision: number; actorAccountUuid?: string },
        config?: RequestConfig
      ) =>
        client.request<VisualizationTemplate>({
          method: "POST",
          path: `/visualizations/templates/${encodeURIComponent(id)}/publish`,
          body,
          ...config
        })
    },
    preview: (
      body: {
        specification: VisualizationSpecification;
        datasets?: Record<string, Array<Record<string, unknown>>>;
      },
      config?: RequestConfig
    ) =>
      client.request<RenderedVisualization>({
        method: "POST",
        path: "/visualizations/preview",
        body,
        ...config
      }),
    match: (id: string, config?: RequestConfig) =>
      client.request<VisualizationDashboard>({
        path: `/visualizations/matches/${encodeURIComponent(id)}`,
        ...config
      }),
    championship: (
      id: string,
      query: { surface: "overview" | "statistics"; actorAccountUuid?: string },
      config?: RequestConfig
    ) =>
      client.request<VisualizationDashboard>({
        path: `/visualizations/championships/${encodeURIComponent(id)}`,
        query,
        ...config
      }),
    upsertChampionshipInstance: (
      id: string,
      body: Record<string, unknown>,
      config?: RequestConfig
    ) =>
      client.request<Record<string, unknown>>({
        method: "PUT",
        path: `/visualizations/championships/${encodeURIComponent(id)}/instances`,
        body,
        ...config
      })
  };
}
