"use client";
import { NhostProvider } from "@nhost/nextjs";
import { oneSignal } from "@/services/onesignal";
import { OneSignalProvider } from "onesignal";
import { nhost } from "@/services/nhost";
import { ToastProvider } from "@/providers/ToastContext";
import ToastContainer from "@/providers/toast/ToastContainer";
import { Portal } from "./Portal";
import { UserProvider } from "@/providers/UserProvider";

export function Providers({ children }: { children: React.ReactNode }) {
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
