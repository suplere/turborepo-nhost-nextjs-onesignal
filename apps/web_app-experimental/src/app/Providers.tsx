"use client";
import { NhostProvider } from "@nhost/nextjs";
import { oneSignal } from "@/services/onesignal";
import { OneSignalProvider } from "onesignal";
import { nhost } from "@/services/nhost";
import { ToastProvider } from "@/providers/ToastContext";
import ToastContainer from "@/providers/toast/ToastContainer";
import { UserProvider } from "@/providers/UserProvider";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/react-query-client";
import { Portal } from "@/components/Portal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OneSignalProvider oneSignal={oneSignal}>
        <NhostProvider nhost={nhost}>
          <QueryClientProvider client={queryClient}>
            <Hydrate>
              <UserProvider>
                <ToastProvider>
                  {children}
                  <Portal querySelector="#toast">
                    <ToastContainer />
                  </Portal>
                </ToastProvider>
              </UserProvider>
            </Hydrate>
          </QueryClientProvider>
        </NhostProvider>
      </OneSignalProvider>
    </>
  );
}
