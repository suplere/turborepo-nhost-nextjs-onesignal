import {
  GetProfileUserDataDocument,
  GetUserDataDocument,
} from "@/lib/gql/graphql";
import { getGqlClient } from "@/lib/service/client";
import { getAccessToken, getUserId } from "@/utils/headers";
import { cookies } from "next/headers";
import { ChangePassword } from "./ChangePassword";
import { ProfileEdit } from "./ProfileEdit";

async function getUser(id: string, token: string) {
  const client = getGqlClient(token);
  const { user } = await client.request(GetProfileUserDataDocument, {
    id,
  });
  return user!;
}

async function Profile() {
  const nextCookies = cookies();
  const token = getAccessToken(nextCookies.get("nhostSession")?.value);
  const userId = getUserId(nextCookies.get("nhostSession")?.value);
  const user = await getUser(userId, token);

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-0 pt-3 sm:px-3">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          {user && <ProfileEdit user={user} />}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-0 pt-3 sm:px-3">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Change password
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Here you can change your password.
              </p>
            </div>
          </div>
          {user && <ChangePassword />}
        </div>
      </div>
    </main>
  );
}

export default Profile;
