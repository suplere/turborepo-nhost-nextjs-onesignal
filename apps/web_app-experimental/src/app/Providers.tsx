"use client";
import { NhostProvider } from "@nhost/nextjs";
import { oneSignal } from "@/services/onesignal";
import { OneSignalProvider } from "onesignal";
import { nhost } from "@/services/nhost";
import { ToastProvider } from "@/providers/ToastContext";
import ToastContainer from "@/providers/toast/ToastContainer";
import { Portal } from "./Portal";
import { UserProvider } from "@/providers/UserProvider";
import { ReactNode, useEffect, useState } from "react";

type ProviderProps = {
  children: ReactNode;
  placeholder?: ReactNode;
};

export function Providers({ children, ...props }: ProviderProps) {
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return props.placeholder ? <>{props.placeholder}</> : null;
  }
  return (
    <>
      <OneSignalProvider oneSignal={oneSignal}>
        <NhostProvider nhost={nhost}>
          <UserProvider>
            <ToastProvider>
              {children}
              <Portal querySelector="#toast">
                <ToastContainer />
              </Portal>
            </ToastProvider>
          </UserProvider>
        </NhostProvider>
      </OneSignalProvider>
    </>
  );
}
