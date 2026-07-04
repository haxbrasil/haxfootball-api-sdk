import type { CodegenConfig } from "@graphql-codegen/cli";

const config = {
  schema: "graphql/live-state.schema.graphql",
  documents: "src/live/queries.graphql",
  generates: {
    "src/live/generated.ts": {
      plugins: ["typescript-operations", "typed-document-node"],
      config: {
        scalars: {
          DateTime: {
            input: "string",
            output: "string"
          },
          JSON: {
            input: "unknown",
            output: "unknown"
          }
        },
        onlyOperationTypes: true,
        preResolveTypes: false
      }
    }
  }
} satisfies CodegenConfig;

export default config;
