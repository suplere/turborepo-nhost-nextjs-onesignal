import { useSignInEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { AuthLayout, LoginForm, LoginFormData } from "ui";
import { useToast } from "../providers/toast/hooks/useToast";

function Login() {
  const { signInEmailPassword } = useSignInEmailPassword();
  const toast = useToast(3000);
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { error, isError, isSuccess, needsEmailVerification } =
        await signInEmailPassword(data.email, data.password);
      if (isSuccess) {
        toast("success", "User is logged in.");
        router.push("/");
      }
      if (needsEmailVerification) {
        toast("error", "Email address is not validated.");
      }
      if (isError) {
        toast("error", error?.message || "Error in login user.");
      }
    } catch {}
  };

  return <LoginForm onSubmit={onSubmit}></LoginForm>;
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout
      title="Login Page"
      logo="/icons/icon-256x256.png"
      mainText="Sign in to your account"
      secondaryText="create new account"
      secondaryLink="/register"
    >
      {page}
    </AuthLayout>
  );
};

export default Login;
