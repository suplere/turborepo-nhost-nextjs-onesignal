import { sdk } from "../graphql-sdk";
import { getHash } from "../oneSignal";
import { UserMetadata } from "../types";
import { Users } from "../__generated__/graphql";
import { EventResponse } from "./../types/events";
export async function createUserHandler(body: any): Promise<EventResponse> {
  const out: EventResponse = {
    message: "",
    status: 200,
  };
  try {
    let {
      event: { data },
    } = body;
    const user = data.new as Users;
    const metadata: UserMetadata = {
      ...user.metadata,
      idHash: getHash(user.id),
    };
    await sdk.updateUserById({
      id: user.id,
      user: {
        metadata,
      },
    });
    out.message = "User hash updated";
  } catch (error) {
    out.status = 400;
    out.message = "Error UserCreate event";
  }

  return out;
}
