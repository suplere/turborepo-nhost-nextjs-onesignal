import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!,
  { fetch }
);

export const getGqlClient = (token?: string) => {
  return token
    ? gqlClient.setHeader("authorization", `Bearer ${token}`)
    : gqlClient;
};
