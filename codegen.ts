import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "http://localhost:1337/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "nhost-admin-secret",
          "x-hasura-role": "admin",
        },
      },
    },
  ],
  generates: {
    "./packages/nhost/functions/_utils/__generated__/graphql.ts": {
      documents: "./packages/nhost/functions/_utils/graphql/*.graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
    "./apps/web/src/utils/__generated__/graphql.ts": {
      documents: [
        "./apps/web/src/**/*.tsx",
        "./apps/web/src/graphql/*.graphql",
      ],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        pureMagicComments: true,
        exposeQueryKeys: true,
        fetcher: { func: "../graphql-fetcher#fetchData", isReactHook: false },
        exposeFetcher: true,
      },
    },
    "./apps/web_app-experimental/src/lib/gql/": {
      documents: [
        // "./apps/web_app-experimental/src/**/*.tsx",
        "./apps/web_app-experimental/src/graphql/*.graphql",
      ],
      preset: "client",
      plugins: [],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
        scalars: {
          numeric: "number",
        },
      },
    },
  },
};

export default config;
