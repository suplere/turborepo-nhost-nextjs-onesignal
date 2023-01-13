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
      schema: {
        "http://localhost:1337/v1/graphql": {
          headers: {
            "x-hasura-admin-secret": "nhost-admin-secret",
            "x-hasura-role": "admin",
          },
        },
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
    // "./packages/nhost/functions/_utils/__generated__/schema.graphql": {
    //   schema: {
    //     "http://localhost:1337/v1/graphql": {
    //       headers: {
    //         "x-hasura-admin-secret": "nhost-admin-secret",
    //         "x-hasura-role": "admin",
    //       },
    //     },
    //   },
    //   plugins: ["schema-ast"],
    // },
    "./apps/web/src/utils/__generated__/graphql.ts": {
      documents: [
        "./apps/web/src/**/*.tsx",
        "./apps/web/src/graphql/*.graphql",
      ],
      schema: {
        "http://localhost:1337/v1/graphql": {
          headers: {
            "x-hasura-admin-secret": "nhost-admin-secret",
            "x-hasura-role": "admin",
          },
        },
      },
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
  },
};

export default config;
