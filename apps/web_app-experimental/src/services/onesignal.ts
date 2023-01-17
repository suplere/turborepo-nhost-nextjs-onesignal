import { IInitObject, OneSignalClient } from "onesignal";

const initObject: IInitObject = {
  appId: process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID || "",
  safari_web_id: process.env.NEXT_PUBLIC_ONE_SIGNAL_SAFARI_WEB_ID,
  allowLocalhostAsSecureOrigin: process.env.NODE_ENV === "development",
  // notifyButton: {
  //   enable: true,
  // },
  serviceWorkerParam: {
    scope: "/js/onesignal/",
  },
  serviceWorkerPath: "js/onesignal/OneSignalSDKWorker.js",
  promptOptions: {
    actionMessage:
      "Pokud chcete v budoucnu dostávat webpush notifikace, povolte je prosím zde.",
    acceptButton: "Povolit",
    cancelButton: "Zrušit",
  },
};

const oneSignal = OneSignalClient.getInstance(initObject);

export { oneSignal };
