import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export type RegisterFormData = {
  email: string;
  password: string;
  confirm: string;
  firstname: string;
  lastname: string;
  mobile: string;
};

type RegisterFormProps = {
  onSubmit: (data: RegisterFormData) => void;
};

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      firstname: "",
      lastname: "",
      mobile: "",
    },
    resolver: yupResolver(validationSchema),
  });
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
          {errors.email && (
            <div className="my-1">
              <p className="text-xs text-red-500">{errors.email.message}</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            autoComplete="current-password"
            className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
          {errors.password && (
            <div className="my-1">
              <p className="text-xs text-red-500">{errors.password.message}</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password again
          </label>
          <input
            {...register("confirm")}
            type="password"
            autoComplete="current-password"
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password again"
          />
          {errors.confirm && (
            <div className="my-1">
              <p className="text-xs text-red-500">{errors.confirm.message}</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="firstname" className="sr-only">
            First Name
          </label>
          <input
            {...register("firstname")}
            type="text"
            autoComplete="firstName"
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="First Name"
          />
          {errors.firstname && (
            <div className="my-1">
              <p className="text-xs text-red-500">{errors.firstname.message}</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="lastname" className="sr-only">
            Last Name
          </label>
          <input
            {...register("lastname")}
            type="text"
            autoComplete="lastName"
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Last Name"
          />
          {errors.lastname && (
            <div className="my-1">
              <p className="text-xs text-red-500">{errors.lastname.message}</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="mobile" className="sr-only">
            Mobile Phone
          </label>
          <input
            {...register("mobile")}
            type="text"
            autoComplete="mobile"
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Mobile Phone"
          />
          {errors.mobile && (
            <div className="my-1">
              <p className="text-xs text-red-500">{errors.mobile.message}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center"></div>

        <div className="text-sm">
          <Link
            href="/forgot"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
}
