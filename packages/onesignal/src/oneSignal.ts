import {
  Action,
  AutoPromptOptions,
  IOneSignal,
  RegisterOptions,
  TagsObject,
} from "./types/type";

function on(event: string, listener: (eventData?: any) => void): void {
  window["OneSignal"].push(() => {
    window["OneSignal"].on(event, listener);
  });
}

function off(event: string, listener: (eventData?: any) => void): void {
  window["OneSignal"].push(() => {
    window["OneSignal"].off(event, listener);
  });
}

function once(event: string, listener: (eventData?: any) => void): void {
  window["OneSignal"].push(() => {
    window["OneSignal"].once(event, listener);
  });
}

function isPushNotificationsEnabled(
  callback?: Action<boolean>
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .isPushNotificationsEnabled(callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function showHttpPrompt(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .showHttpPrompt(options)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function registerForPushNotifications(
  options?: RegisterOptions
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .registerForPushNotifications(options)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function setDefaultNotificationUrl(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .setDefaultNotificationUrl(url)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function setDefaultTitle(title: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .setDefaultTitle(title)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getTags(callback?: Action<any>): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .getTags(callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function sendTag(
  key: string,
  value: any,
  callback?: Action<Object>
): Promise<Object | null> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .sendTag(key, value, callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function sendTags(
  tags: TagsObject<any>,
  callback?: Action<Object>
): Promise<Object | null> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .sendTags(tags, callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function deleteTag(tag: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .deleteTag(tag)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function deleteTags(
  tags: Array<string>,
  callback?: Action<Array<string>>
): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .deleteTags(tags, callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function addListenerForNotificationOpened(
  callback?: Action<Notification>
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .addListenerForNotificationOpened(callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function setSubscription(newSubscription: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .setSubscription(newSubscription)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function showHttpPermissionRequest(options?: AutoPromptOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .showHttpPermissionRequest(options)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function showNativePrompt(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .showNativePrompt()
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function showSlidedownPrompt(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .showSlidedownPrompt(options)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function showCategorySlidedown(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .showCategorySlidedown(options)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getNotificationPermission(
  onComplete?: Action<NotificationPermission>
): Promise<NotificationPermission> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .getNotificationPermission(onComplete)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getUserId(
  callback?: Action<string | undefined | null>
): Promise<string | undefined | null> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .getUserId(callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getSubscription(callback?: Action<boolean>): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .getSubscription(callback)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function setExternalUserId(
  externalUserId: string | undefined | null,
  authHash?: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .setExternalUserId(externalUserId, authHash)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function removeExternalUserId(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .removeExternalUserId()
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getExternalUserId(): Promise<string | undefined | null> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .getExternalUserId()
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function provideUserConsent(consent: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .provideUserConsent(consent)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function sendOutcome(
  outcomeName: string,
  outcomeWeight?: number | undefined
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"]
          .sendOutcome(outcomeName, outcomeWeight)
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}

export const OneSignalReact: IOneSignal = {
  on,
  off,
  once,
  isPushNotificationsEnabled,
  showHttpPrompt,
  registerForPushNotifications,
  setDefaultNotificationUrl,
  setDefaultTitle,
  getTags,
  sendTag,
  sendTags,
  deleteTag,
  deleteTags,
  addListenerForNotificationOpened,
  setSubscription,
  showHttpPermissionRequest,
  showNativePrompt,
  showSlidedownPrompt,
  showCategorySlidedown,
  getNotificationPermission,
  getUserId,
  getSubscription,
  setExternalUserId,
  removeExternalUserId,
  getExternalUserId,
  provideUserConsent,
  sendOutcome,
};
