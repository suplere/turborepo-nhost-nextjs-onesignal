// import { getSdk } from "@/utils/__generated__/graphql";
import { GraphQLClient } from "graphql-request";

const endpoint = `${process.env.NHOST_BACKEND_URL}/v1/graphql`;

// This GraphQL Client is only used in serverless functions (secure).
const client = new GraphQLClient(endpoint, {
  headers: {
    ["x-hasura-admin-secret"]: process.env.NHOST_ADMIN_SECRET as string,
  },
});

// export const sdk = getSdk(client);
