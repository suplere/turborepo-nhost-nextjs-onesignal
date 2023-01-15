import { useResetPassword } from "@nhost/nextjs";
import UnauthenticatedLayout from "layouts/UnauthenticatedLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { AuthLayout, ForgotPasswordForm, ForgotPasswordFormData } from "ui";
import { useToast } from "../providers/toast/hooks/useToast";

const appUrl = process.env.NEXT_PUBLIC_APP_FRONTEND_URL || "http://localhost";
function ForgotPassword() {
  const toast = useToast();
  const router = useRouter();
  const { resetPassword } = useResetPassword();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    // console.log(data);
    try {
      const { isSent, isError, error } = await resetPassword(data.email, {
        redirectTo: `${appUrl}/profile`,
      });
      if (isError) {
        toast("error", error?.message || "Error in reset password.");
      }

      if (isSent) {
        toast("success", "Email with instruction was sent. Check your inbox");
        router.push("/");
      }
    } catch {}
  };
  return <ForgotPasswordForm onSubmit={onSubmit}></ForgotPasswordForm>;
}

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
  return (
    <UnauthenticatedLayout>
      <AuthLayout
        title="Forgot Page"
        logo="/icons/icon-256x256.png"
        mainText="Forgot your password"
      >
        {page}
      </AuthLayout>
    </UnauthenticatedLayout>
  );
};

export default ForgotPassword;
