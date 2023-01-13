import { useSignUpEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { AuthLayout, RegisterForm, RegisterFormData } from "ui";
import { useToast } from "../providers/toast/hooks/useToast";

function Login() {
  const { signUpEmailPassword } = useSignUpEmailPassword();
  const toast = useToast(3000);
  const router = useRouter();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const { isError, error, needsEmailVerification, isSuccess } =
        await signUpEmailPassword(data.email, data.password, {
          defaultRole: "user",
          allowedRoles: ["user"],
          locale: "cs",
          displayName: `${data.lastname} ${data.firstname}`,
          redirectTo: "/profile",
          metadata: {
            firstname: data.firstname,
            lastname: data.lastname,
            mobile: data.mobile,
          },
        });
      if (isError) {
        toast("error", "Error creating user account." + error?.message);
      }
      if (isSuccess) {
        toast(
          "success",
          "User account was created. Please check your email inbox."
        );
        router.push("/login");
      }
      if (needsEmailVerification) {
        toast("error", "Email address is not validated.");
        router.push("/login");
      }
    } catch {}
  };
  return <RegisterForm onSubmit={onSubmit}></RegisterForm>;
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout
      title="Register Page"
      logo="/icons/icon-256x256.png"
      mainText="Create new account"
      secondaryText="login to your account"
      secondaryLink="/login"
    >
      {page}
    </AuthLayout>
  );
};

export default Login;
