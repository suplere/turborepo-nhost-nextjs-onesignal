# Turborepo Tailwind CSS + Nhost + Onesignal starter

This is an starter template for Nhost and Next.js PWA app with Onesignal.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by `web` application
- `nhost`: a [Nhost](https://nhost.io/) app with some basic action and event
- `onesignal`: a [Onesignal](https://onesignal.com/) basic provider for Osignal implementation
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

Please provide this enviroment variables:

For Next.js app

```js
NEXT_PUBLIC_NHOST_SUBDOMAIN=localhost
NEXT_PUBLIC_NHOST_REGION=
NEXT_PUBLIC_ONE_SIGNAL_APP_ID=
NEXT_PUBLIC_ONE_SIGNAL_SAFARI_WEB_ID=
NEXT_PUBLIC_APP_FRONTEND_URL=http://localhost:3008
```

For Nhost app

```js
NHOST_SUBDOMAIN=localhost
NHOST_REGION=
APP_FRONTEND_URL=http://localhost:3008
ONE_SIGNAL_REST_API_KEY=
ONE_SIGNAL_APP_ID=
```

Onesignal Rest Api Key is for create ID Hash - use for Identity Verification. Identity Verification is a higher security method used to verify a device or email address is associated with a user.

Run the following command:

```sh
pnpm install
git init . && git add . && git commit -m "Init"
```

At the root monorepo is script for GraphQL codegen - generate helper Typescript function for Nhost function (Graphql request) and Next.js app (React Query). I use this config:

```js
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
```
