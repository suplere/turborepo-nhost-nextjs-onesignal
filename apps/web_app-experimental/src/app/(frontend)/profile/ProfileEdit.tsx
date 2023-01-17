"use client";

import { FragmentType, useFragment } from "@/lib/gql/fragment-masking";
import {
  UpdateUserDataDocument,
  UserSecureItemFragmentDoc,
} from "@/lib/gql/graphql";
import { getGqlClient } from "@/lib/service/client";
import { useToast } from "@/providers/toast/hooks/useToast";
import { removeFileById, uploadFileToStorage } from "@/services/nhost";
import { useAccessToken, useUserId } from "@nhost/nextjs";
import { ProfileForm, ProfileFormData } from "ui";
import { useRouter } from "next/navigation";

type ProfileEditProps = {
  user: FragmentType<typeof UserSecureItemFragmentDoc>;
};

export function ProfileEdit(props: ProfileEditProps) {
  const router = useRouter();
  const user = useFragment(UserSecureItemFragmentDoc, props.user);
  const userId = useUserId();
  const accessToken = useAccessToken();
  const toast = useToast(3000);

  const onSubmit = async (data: ProfileFormData) => {
    // console.log(data);
    const { avatarUrl, firstname, lastname, mobile } = data;
    try {
      const client = getGqlClient(accessToken || undefined);
      const {} = client.request(UpdateUserDataDocument, {
        id: userId,
        data: {
          avatarUrl,
          displayName: `${lastname} ${firstname}`,
          metadata: {
            lastname,
            firstname,
            mobile,
          },
        },
      });
      toast("success", "Data was saved.");
      router.refresh();
    } catch {}
  };
  const removeFunction = async () => {
    if (userId) removeFileById({ fileId: userId });
  };
  const uploadFunction = async (file: File) => {
    await removeFunction();
    const url = await uploadFileToStorage({
      file,
      id: userId,
      nhostFilename: `avatar_${userId}`,
      maxSize: 150,
    });
    if (url) return url;
    return "/images/avatar.png";
  };
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <ProfileForm
        initialData={{
          avatarUrl: user.avatarUrl,
          firstname: user.metadata.firstname,
          lastname: user.metadata.lastname,
          mobile: user.metadata.mobile,
        }}
        onSubmit={onSubmit}
        avatarHandle={{
          removeFunction,
          uploadFunction,
        }}
      />
    </div>
  );
}
