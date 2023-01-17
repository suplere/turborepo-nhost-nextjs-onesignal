"use client";
import { useToast } from "@/providers/toast/hooks/useToast";
import { useChangePassword } from "@nhost/nextjs";
import { ChangePasswordForm, ChangePasswordFormData } from "ui";

export function ChangePassword() {
  const toast = useToast(3000);
  const { changePassword } = useChangePassword();
  const onChangePassword = async (data: ChangePasswordFormData) => {
    try {
      const res = await changePassword(data.password);
      if (res.isSuccess) {
        toast("success", "Password was change.");
      }
    } catch {}
  };
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <ChangePasswordForm onSubmit={onChangePassword} />
    </div>
  );
}
