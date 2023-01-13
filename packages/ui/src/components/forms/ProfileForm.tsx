import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { Controller, useForm } from "react-hook-form";
import { ImageAvatarEditNhost } from "../editors";

export type ProfileFormData = {
  avatarUrl: string;
  firstname: string;
  lastname: string;
  mobile: string;
};

type ProfileFormProps = {
  initialData?: ProfileFormData;
  onSubmit: (data: ProfileFormData) => void;
  avatarHandle?: {
    removeFunction?: () => void | Promise<void>;
    uploadFunction?: (f: File) => string | Promise<string>;
  };
};

export const ProfileForm = ({
  initialData,
  onSubmit,
  avatarHandle,
}: ProfileFormProps) => {
  const { register, handleSubmit, control } = useForm<ProfileFormData>({
    defaultValues: {
      avatarUrl: initialData?.avatarUrl,
      firstname: initialData?.firstname,
      lastname: initialData?.lastname,
      mobile: initialData?.mobile,
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  {...register("firstname", { required: "Field is reguired" })}
                  type="text"
                  className="block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  {...register("lastname", { required: "Field is reguired" })}
                  type="text"
                  className="block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile phone
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  <DevicePhoneMobileIcon className="h-6 w-6" />
                </span>
                <input
                  {...register("mobile", { required: "Field is reguired" })}
                  type="text"
                  className="block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Mobile Phone"
                />
              </div>
            </div>
          </div>

          <Controller
            render={({ field: { value, onChange } }) => (
              <ImageAvatarEditNhost
                label="Avatar photo"
                value={value}
                onChange={onChange}
                removeFunction={avatarHandle?.removeFunction}
                uploadFunction={avatarHandle?.uploadFunction}
              />
            )}
            name="avatarUrl"
            control={control}
          />

          {/* <DragAndDropImageEdit /> */}
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
