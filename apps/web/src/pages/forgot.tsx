import { useResetPassword } from "@nhost/nextjs";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { AuthLayout, ForgotPasswordForm, ForgotPasswordFormData } from "ui";
import { useToast } from "../providers/toast/hooks/useToast";

function ForgotPassword() {
  const toast = useToast();
  const router = useRouter();
  const { resetPassword } = useResetPassword();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    // console.log(data);
    try {
      const { isSent, isError, error } = await resetPassword(data.email, {
        redirectTo: "/profile",
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
    <AuthLayout
      title="Forgot Page"
      logo="/icons/icon-256x256.png"
      mainText="Forgot your password"
    >
      {page}
    </AuthLayout>
  );
};

export default ForgotPassword;
