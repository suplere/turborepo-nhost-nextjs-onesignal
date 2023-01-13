import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement } from "react";
import { NhostProvider } from "@nhost/nextjs";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "../providers/ToastContext";
import ToastContainer from "../providers/toast/ToastContainer";
import { queryClient } from "../utils/react-query-client";
import { nhost } from "../utils/nhost";
import { OneSignalProvider } from "onesignal";
import { oneSignal } from "../utils/onesignal";
import { UserProvider } from "../providers/UserProvider";
import { MyAppProps } from "ui";
import { Portal } from "../components/Portal";

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <OneSignalProvider oneSignal={oneSignal}>
        <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <UserProvider>
                <ToastProvider>
                  {getLayout(<Component {...pageProps} />)}
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
