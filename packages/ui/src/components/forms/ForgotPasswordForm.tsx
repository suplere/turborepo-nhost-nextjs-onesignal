"use client";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export type ForgotPasswordFormData = {
  email: string;
};

type ForgotPasswordFormProps = {
  onSubmit: (data: ForgotPasswordFormData) => void;
};

export function ForgotPasswordForm({ onSubmit }: ForgotPasswordFormProps) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: "",
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
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
          {errors.email && (
            <div className="my-1">
              <p className="text-xs text-red-500">{errors.email.message}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center"></div>

        <div className="text-sm">
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Back to login?
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
          Forgot password
        </button>
      </div>
    </form>
  );
}
