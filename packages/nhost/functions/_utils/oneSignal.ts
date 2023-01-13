import { createHmac } from "crypto";
import * as OneSignal from "onesignal-node";
import { CreateNotificationBody } from "onesignal-node/lib/types";

const ONESIGNAL_REST_API_KEY = process.env.ONE_SIGNAL_REST_API_KEY!;
const ONE_SIGNAL_APP_ID = process.env.ONE_SIGNAL_APP_ID!;

export const getHash = (text: string): string => {
  const hmac = createHmac("sha256", ONESIGNAL_REST_API_KEY);
  hmac.update(text);
  // or hmac.update(identifier);
  // console.log(ONESIGNAL_REST_API_KEY);
  // console.log(text);
  return hmac.digest("hex");
};

const client = new OneSignal.Client(ONE_SIGNAL_APP_ID, ONESIGNAL_REST_API_KEY);

export const sendNotification = (body: CreateNotificationBody) => {
  return client.createNotification(body);
};
