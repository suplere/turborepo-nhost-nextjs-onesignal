import { OneSignalReact } from "./oneSignal";
import {
  FunctionQueueElement,
  IInitObject,
  AutoPromptOptions,
  Action,
  IOneSignal,
  RegisterOptions,
  TagsObject,
} from "./types/type";

const doesOneSignalExist = () => {
  if (window["OneSignal"]) {
    return true;
  }
  return false;
};

export class OneSignalClient {
  private static instance: OneSignalClient;
  _isOneSignalInitialized: boolean;
  _isOneSignalScriptFailed: boolean;
  _nextOneSignalFunctionQueue: Array<FunctionQueueElement>;
  _options: IInitObject;
  // OneSignalReact: IOneSignal;

  constructor(config: IInitObject) {
    this._isOneSignalInitialized = false;
    this._isOneSignalScriptFailed = false;
    this._nextOneSignalFunctionQueue = [];
    if (!config.appId) {
      throw new Error("You need to provide your OneSignal appId.");
    }
    this._options = config;
  }

  public static getInstance(config: IInitObject): OneSignalClient {
    if (!OneSignalClient.instance) {
      OneSignalClient.instance = new OneSignalClient(config);
    }

    return OneSignalClient.instance;
  }

  private handleOnLoad(resolve: () => void, options: IInitObject) {
    this._isOneSignalInitialized = true;

    // OneSignal is assumed to be loaded correctly because this method
    // is called after the script is successfully loaded by CDN, but
    // just in case.
    window["OneSignal"] = window["OneSignal"] || [];

    window["OneSignal"].push(() => {
      window["OneSignal"].init(options);
      // resolve();
    });

    window["OneSignal"].push(() => {
      this.processQueuedOneSignalFunctions();
      resolve();
    });
  }

  private doesOneSignalExist() {
    if (window["OneSignal"]) {
      return true;
    }
    return false;
  }

  processQueuedOneSignalFunctions = () => {
    this._nextOneSignalFunctionQueue.forEach((element) => {
      const { name, args, promiseResolver } = element;

      if (!!promiseResolver) {
        OneSignalReact[name](...args).then((result: any) => {
          promiseResolver(result);
        });
      } else {
        OneSignalReact[name](...args);
      }
    });
  };

  init() {
    return new Promise<void>((resolve) => {
      if (this._isOneSignalInitialized) {
        resolve();
        return;
      }

      if (!document) {
        resolve();
        return;
      }
      this.handleOnLoad(resolve, this._options);
    });
  }

  on(event: string, listener: (eventData?: any) => void): void {
    if (!doesOneSignalExist()) {
      this._nextOneSignalFunctionQueue.push({
        name: "on",
        args: arguments,
      });
      return;
    }

    OneSignalReact.on(event, listener);
  }

  off(event: string, listener: (eventData?: any) => void): void {
    if (!doesOneSignalExist()) {
      this._nextOneSignalFunctionQueue.push({
        name: "off",
        args: arguments,
      });
      return;
    }

    OneSignalReact.off(event, listener);
  }

  once(event: string, listener: (eventData?: any) => void): void {
    if (!doesOneSignalExist()) {
      this._nextOneSignalFunctionQueue.push({
        name: "once",
        args: arguments,
      });
      return;
    }

    OneSignalReact.once(event, listener);
  }

  isPushNotificationsEnabled(callback?: Action<boolean>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "isPushNotificationsEnabled",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.isPushNotificationsEnabled(callback);
    });
  }

  showHttpPrompt(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showHttpPrompt",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.showHttpPrompt(options);
    });
  }

  registerForPushNotifications(options?: RegisterOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "registerForPushNotifications",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.registerForPushNotifications(options);
    });
  }

  setDefaultNotificationUrl(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setDefaultNotificationUrl",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.setDefaultNotificationUrl(url);
    });
  }

  setDefaultTitle(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setDefaultTitle",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.setDefaultTitle(title);
    });
  }

  getTags(callback?: Action<any>): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getTags",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.getTags(callback);
    });
  }

  sendTag(
    key: string,
    value: any,
    callback?: Action<Object>
  ): Promise<Object | null> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "sendTag",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }
      return OneSignalReact.sendTag(key, value, callback);
    });
  }

  sendTags(
    tags: TagsObject<any>,
    callback?: Action<Object>
  ): Promise<Object | null> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "sendTags",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.sendTags(tags, callback);
    });
  }

  deleteTag(tag: string): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve([]);
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "deleteTag",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.deleteTag(tag);
    });
  }

  deleteTags(
    tags: Array<string>,
    callback?: Action<Array<string>>
  ): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve([]);
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "deleteTags",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.deleteTags(tags, callback);
    });
  }

  addListenerForNotificationOpened(
    callback?: Action<Notification>
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "addListenerForNotificationOpened",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.addListenerForNotificationOpened(callback);
    });
  }

  setSubscription(newSubscription: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setSubscription",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.setSubscription(newSubscription);
    });
  }

  showHttpPermissionRequest(options?: AutoPromptOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showHttpPermissionRequest",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }
      return OneSignalReact.showHttpPermissionRequest(options);
    });
  }

  showNativePrompt(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showNativePrompt",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.showNativePrompt();
    });
  }

  showSlidedownPrompt(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showSlidedownPrompt",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.showSlidedownPrompt(options);
    });
  }

  showCategorySlidedown(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showCategorySlidedown",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.showCategorySlidedown(options);
    });
  }

  getNotificationPermission(
    onComplete?: Action<NotificationPermission>
  ): Promise<NotificationPermission> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getNotificationPermission",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.getNotificationPermission(onComplete);
    });
  }

  getUserId(
    callback?: Action<string | undefined | null>
  ): Promise<string | undefined | null> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.getUserId(callback);
    });
  }

  getSubscription(callback?: Action<boolean>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getSubscription",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.getSubscription(callback);
    });
  }

  setExternalUserId(
    externalUserId: string | undefined | null,
    authHash?: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setExternalUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.setExternalUserId(externalUserId, authHash);
    });
  }

  removeExternalUserId(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "removeExternalUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.removeExternalUserId();
    });
  }

  getExternalUserId(): Promise<string | undefined | null> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getExternalUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.getExternalUserId();
    });
  }

  provideUserConsent(consent: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "provideUserConsent",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.provideUserConsent(consent);
    });
  }

  sendOutcome(
    outcomeName: string,
    outcomeWeight?: number | undefined
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "sendOutcome",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      return OneSignalReact.sendOutcome(outcomeName, outcomeWeight);
    });
  }
}
