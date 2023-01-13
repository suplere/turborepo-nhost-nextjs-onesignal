import { Users_Insert_Input } from "../__generated__/graphql";

export type UserMetadata = {
  firstname: string;
  lastname: string;
  mobile: string;
  idHash?: string;
};

export interface UsersInputExtended extends Users_Insert_Input {
  metadata: UserMetadata;
}
