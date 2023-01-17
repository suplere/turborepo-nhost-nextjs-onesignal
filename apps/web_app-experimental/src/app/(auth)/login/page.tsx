"use client";
import { useToast } from "@/providers/toast/hooks/useToast";
import { useSignInEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/navigation";
import { LoginForm, LoginFormData } from "ui";
import Wrapper from "../Wrapper";

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
        router.replace("/");
      }
      if (needsEmailVerification) {
        toast("error", "Email address is not validated.");
      }
      if (isError) {
        toast("error", error?.message || "Error in login user.");
      }
    } catch {}
  };
  return (
    <Wrapper
      title="Login Page"
      logo="/icons/icon-256x256.png"
      mainText="Sign in to your account"
      secondaryText="create new account"
      secondaryLink="/register"
    >
      <LoginForm onSubmit={onSubmit}></LoginForm>
    </Wrapper>
  );
}

export default Login;
