"use client";

import { useToast } from "@/providers/toast/hooks/useToast";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/navigation";
import { RegisterForm, RegisterFormData } from "ui";
import Wrapper from "../Wrapper";

const appUrl = process.env.NEXT_PUBLIC_APP_FRONTEND_URL || "http://localhost";

function Register() {
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
          redirectTo: `${appUrl}/profile`,
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
  return (
    <Wrapper
      title="Register Page"
      logo="/icons/icon-256x256.png"
      mainText="Create new account"
      secondaryText="login to your account"
      secondaryLink="/login"
    >
      <RegisterForm onSubmit={onSubmit}></RegisterForm>
    </Wrapper>
  );
}

export default Register;
