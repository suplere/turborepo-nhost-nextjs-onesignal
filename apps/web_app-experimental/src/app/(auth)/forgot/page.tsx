"use client";
import { useToast } from "@/providers/toast/hooks/useToast";
import { useResetPassword } from "@nhost/nextjs";
import { useRouter } from "next/navigation";
import { ForgotPasswordForm, ForgotPasswordFormData } from "ui";
import Wrapper from "../Wrapper";

const appUrl = process.env.NEXT_PUBLIC_APP_FRONTEND_URL || "http://localhost";

function Forgot() {
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
  return (
    <Wrapper
      title="Forgot Page"
      logo="/icons/icon-256x256.png"
      mainText="Forgot your password"
    >
      <ForgotPasswordForm onSubmit={onSubmit}></ForgotPasswordForm>
    </Wrapper>
  );
}

export default Forgot;
