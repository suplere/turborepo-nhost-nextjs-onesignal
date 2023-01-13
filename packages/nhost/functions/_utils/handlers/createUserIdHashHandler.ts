import { sdk } from "../graphql-sdk";
import { getHash } from "../oneSignal";
import { UserMetadata } from "../types";
import { CreateUserIdOutput } from "../types/actions";

export async function createUserIdHashHandler(): Promise<CreateUserIdOutput> {
  let affected_rows = 0;
  try {
    const res = await sdk.getAllUsers();
    const unresolvedPromises = res.users.map((u) => {
      const { id } = u;
      const metadata: UserMetadata = {
        ...u.metadata,
        idHash: getHash(id),
      };
      return sdk.updateUserById({
        id,
        user: {
          metadata,
        },
      });
    });
    const results = await Promise.all(unresolvedPromises);

    return {
      affected_rows: results.length,
    };
  } catch (e) {
    return {
      affected_rows,
    };
  }
}
