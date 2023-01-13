import Script from "next/script";
import { createContext, PropsWithChildren, useContext, useState } from "react";

import React from "react";
import { OneSignalClient } from "./client";
import { PermissionChange } from "./types/type";

type OneSignalProviderProps = {
  oneSignal: OneSignalClient;
};

type OneSignalContext = {
  oneSignal: OneSignalClient;
  isSubscribed: boolean;
  notificationPermission: NotificationPermission;
};

export const OneSignalReactContext = createContext<OneSignalContext>({
  oneSignal: {} as OneSignalClient,
  isSubscribed: false,
  notificationPermission: "default",
});

export const OneSignalProvider: React.FC<
  PropsWithChildren<OneSignalProviderProps>
> = ({ oneSignal, ...props }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission>("default");
  const oneSignalOnLoad = () => {
    oneSignal.init().then(() => {
      oneSignal.on("subscriptionChange", function (isSubscribed: boolean) {
        setIsSubscribed(isSubscribed);
      });
      oneSignal.on(
        "notificationPermissionChange",
        function (e: PermissionChange) {
          setNotificationPermission(e.to);
        }
      );
      oneSignal.isPushNotificationsEnabled((state) => setIsSubscribed(state));
      oneSignal.getNotificationPermission((state) =>
        setNotificationPermission(state)
      );
    });
  };
  const oneSignalOnError = () => {
    throw new Error("Error loading OneSignal script.");
  };
  return (
    <>
      <Script
        src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
        async
        onLoad={oneSignalOnLoad}
        onError={oneSignalOnError}
      ></Script>
      <OneSignalReactContext.Provider
        value={{ oneSignal, isSubscribed, notificationPermission }}
      >
        {props.children}
      </OneSignalReactContext.Provider>
    </>
  );
};

export function useOneSignalContext() {
  return useContext(OneSignalReactContext);
}
