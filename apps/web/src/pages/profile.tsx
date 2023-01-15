import {
  SignedIn,
  useChangePassword,
  useUserDisplayName,
  useUserId,
} from "@nhost/nextjs";
import AuthenticatedLayout from "layouts/AuthenticatedLayout";
import { ReactElement } from "react";
import {
  ChangePasswordForm,
  ChangePasswordFormData,
  ProfileForm,
  ProfileFormData,
} from "ui";

import FrontendMainLayout from "../layouts/FrontendMainLayout";
import { useToast } from "../providers/toast/hooks/useToast";
import { removeFileById, uploadFileToStorage } from "../utils/nhost";
import {
  useGetUserDataQuery,
  useUpdateUserDataMutation,
} from "../utils/__generated__/graphql";

function Profile() {
  const userId = useUserId();
  const { data, refetch } = useGetUserDataQuery(
    {
      id: userId,
    },
    {
      enabled: !!userId,
    }
  );

  const { mutateAsync } = useUpdateUserDataMutation();
  const toast = useToast(3000);
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
  const onSubmit = async (data: ProfileFormData) => {
    console.log(data);
    const { avatarUrl, firstname, lastname, mobile } = data;
    try {
      await mutateAsync({
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
      refetch();
      toast("success", "Data was saved.");
    } catch {}
  };
  const { changePassword } = useChangePassword();
  const onChangePassword = async (data: ChangePasswordFormData) => {
    try {
      const res = await changePassword(data.password);
      if (res.isSuccess) {
        toast("success", "Password was change.");
      }
    } catch {}
  };
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
          {data?.user && (
            <div className="mt-5 md:col-span-2 md:mt-0">
              <ProfileForm
                initialData={{
                  avatarUrl: data.user.avatarUrl,
                  firstname: data.user.metadata.firstname,
                  lastname: data.user.metadata.lastname,
                  mobile: data.user.metadata.mobile,
                }}
                onSubmit={onSubmit}
                avatarHandle={{
                  removeFunction,
                  uploadFunction,
                }}
              />
            </div>
          )}
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
          {data?.user && (
            <div className="mt-5 md:col-span-2 md:mt-0">
              <ChangePasswordForm onSubmit={onChangePassword} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthenticatedLayout>
      <FrontendMainLayout title="Profile Page">{page}</FrontendMainLayout>
    </AuthenticatedLayout>
  );
};

export default Profile;
