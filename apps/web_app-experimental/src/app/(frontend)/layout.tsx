import { GetProfileUserDataDocument } from "@/lib/gql/graphql";
import { getGqlClient } from "@/lib/service/client";
import { getAccessToken, getUserId } from "@/utils/headers";
import { cookies } from "next/headers";
import Navbar from "./Navbar";

async function getUser(id: string, token: string) {
  if (!id) return undefined;
  const client = getGqlClient(token);
  const { user } = await client.request(GetProfileUserDataDocument, {
    id,
  });
  return user!;
}

export default async function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextCookies = cookies();
  const userId = getUserId(nextCookies.get("nhostSession")?.value);
  const token = getAccessToken(nextCookies.get("nhostSession")?.value);
  const user = await getUser(userId, token);
  // console.log("Layuout", user);
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar user={user} />
      {children}
    </div>
  );
}
