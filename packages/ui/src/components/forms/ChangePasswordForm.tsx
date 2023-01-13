import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export type ChangePasswordFormData = {
  password: string;
  confirm: string;
};

type ChangePasswordFormProps = {
  onSubmit: (data: ChangePasswordFormData) => void;
};

export const ChangePasswordForm = ({ onSubmit }: ChangePasswordFormProps) => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    defaultValues: {
      password: "",
      confirm: "",
    },
    resolver: yupResolver(validationSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <div className="flex flex-col">
                  <input
                    {...register("password")}
                    type="password"
                    className="block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.password && (
                    <div className="my-1">
                      <p className="text-xs text-red-500">
                        {errors.password.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="confirm"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm new password
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <div className="flex flex-col">
                  <input
                    {...register("confirm")}
                    type="password"
                    className="block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.confirm && (
                    <div className="my-1">
                      <p className="text-xs text-red-500">
                        {errors.confirm.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Change password
          </button>
        </div>
      </div>
    </form>
  );
};
