import {
  GetAllUsersTestDocument,
  UserItemFragmentDoc,
} from "@/lib/gql/graphql";
import { getGqlClient } from "@/lib/service/client";
import Link from "next/link";
import { cookies } from "next/headers";
import { getAccessToken } from "@/utils/headers";
import { useFragment } from "@/lib/gql";

async function getUsers({ token }: { token?: string }) {
  const client = getGqlClient(token);
  const { users } = await client.request(GetAllUsersTestDocument, {});
  return users;
}

async function Team() {
  const nextCookies = cookies();
  const token = getAccessToken(nextCookies.get("nhostSession")?.value);
  const users = useFragment(UserItemFragmentDoc, await getUsers({ token }));
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-3 pb-8 sm:pt-4 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Team page
        </h1>
        <div className="max-w-5xl ma-auto bg-white rounded text-center my-3 flex flex-col">
          <div>User List:</div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link href={`/team/${user.id}`}>{user.displayName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Team;
