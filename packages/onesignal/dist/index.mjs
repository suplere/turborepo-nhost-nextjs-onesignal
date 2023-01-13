var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/oneSignal.ts
function on(event, listener) {
  window["OneSignal"].push(() => {
    window["OneSignal"].on(event, listener);
  });
}
function off(event, listener) {
  window["OneSignal"].push(() => {
    window["OneSignal"].off(event, listener);
  });
}
function once(event, listener) {
  window["OneSignal"].push(() => {
    window["OneSignal"].once(event, listener);
  });
}
function isPushNotificationsEnabled(callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].isPushNotificationsEnabled(callback).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function showHttpPrompt(options) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].showHttpPrompt(options).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function registerForPushNotifications(options) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].registerForPushNotifications(options).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function setDefaultNotificationUrl(url) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].setDefaultNotificationUrl(url).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function setDefaultTitle(title) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].setDefaultTitle(title).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getTags(callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].getTags(callback).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function sendTag(key, value, callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].sendTag(key, value, callback).then((value2) => resolve(value2)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function sendTags(tags, callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].sendTags(tags, callback).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function deleteTag(tag) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].deleteTag(tag).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function deleteTags(tags, callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].deleteTags(tags, callback).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function addListenerForNotificationOpened(callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].addListenerForNotificationOpened(callback).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function setSubscription(newSubscription) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].setSubscription(newSubscription).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function showHttpPermissionRequest(options) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].showHttpPermissionRequest(options).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function showNativePrompt() {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].showNativePrompt().then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function showSlidedownPrompt(options) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].showSlidedownPrompt(options).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function showCategorySlidedown(options) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].showCategorySlidedown(options).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getNotificationPermission(onComplete) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].getNotificationPermission(onComplete).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getUserId(callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].getUserId(callback).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSubscription(callback) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].getSubscription(callback).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function setExternalUserId(externalUserId, authHash) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].setExternalUserId(externalUserId, authHash).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function removeExternalUserId() {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].removeExternalUserId().then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getExternalUserId() {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].getExternalUserId().then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function provideUserConsent(consent) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].provideUserConsent(consent).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
function sendOutcome(outcomeName, outcomeWeight) {
  return new Promise((resolve, reject) => {
    try {
      window["OneSignal"].push(() => {
        window["OneSignal"].sendOutcome(outcomeName, outcomeWeight).then((value) => resolve(value)).catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
var OneSignalReact = {
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
  sendOutcome
};

// src/client.ts
var doesOneSignalExist = () => {
  if (window["OneSignal"]) {
    return true;
  }
  return false;
};
var OneSignalClient = class {
  constructor(config) {
    this.processQueuedOneSignalFunctions = () => {
      this._nextOneSignalFunctionQueue.forEach((element) => {
        const { name, args, promiseResolver } = element;
        if (!!promiseResolver) {
          OneSignalReact[name](...args).then((result) => {
            promiseResolver(result);
          });
        } else {
          OneSignalReact[name](...args);
        }
      });
    };
    this._isOneSignalInitialized = false;
    this._isOneSignalScriptFailed = false;
    this._nextOneSignalFunctionQueue = [];
    if (!config.appId) {
      throw new Error("You need to provide your OneSignal appId.");
    }
    this._options = config;
  }
  static getInstance(config) {
    if (!OneSignalClient.instance) {
      OneSignalClient.instance = new OneSignalClient(config);
    }
    return OneSignalClient.instance;
  }
  handleOnLoad(resolve, options) {
    this._isOneSignalInitialized = true;
    window["OneSignal"] = window["OneSignal"] || [];
    window["OneSignal"].push(() => {
      window["OneSignal"].init(options);
    });
    window["OneSignal"].push(() => {
      this.processQueuedOneSignalFunctions();
      resolve();
    });
  }
  doesOneSignalExist() {
    if (window["OneSignal"]) {
      return true;
    }
    return false;
  }
  init() {
    return new Promise((resolve) => {
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
  on(event, listener) {
    if (!doesOneSignalExist()) {
      this._nextOneSignalFunctionQueue.push({
        name: "on",
        args: arguments
      });
      return;
    }
    OneSignalReact.on(event, listener);
  }
  off(event, listener) {
    if (!doesOneSignalExist()) {
      this._nextOneSignalFunctionQueue.push({
        name: "off",
        args: arguments
      });
      return;
    }
    OneSignalReact.off(event, listener);
  }
  once(event, listener) {
    if (!doesOneSignalExist()) {
      this._nextOneSignalFunctionQueue.push({
        name: "once",
        args: arguments
      });
      return;
    }
    OneSignalReact.once(event, listener);
  }
  isPushNotificationsEnabled(callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "isPushNotificationsEnabled",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.isPushNotificationsEnabled(callback);
    });
  }
  showHttpPrompt(options) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showHttpPrompt",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.showHttpPrompt(options);
    });
  }
  registerForPushNotifications(options) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "registerForPushNotifications",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.registerForPushNotifications(options);
    });
  }
  setDefaultNotificationUrl(url) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setDefaultNotificationUrl",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.setDefaultNotificationUrl(url);
    });
  }
  setDefaultTitle(title) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setDefaultTitle",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.setDefaultTitle(title);
    });
  }
  getTags(callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getTags",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.getTags(callback);
    });
  }
  sendTag(key, value, callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "sendTag",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.sendTag(key, value, callback);
    });
  }
  sendTags(tags, callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "sendTags",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.sendTags(tags, callback);
    });
  }
  deleteTag(tag) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve([]);
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "deleteTag",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.deleteTag(tag);
    });
  }
  deleteTags(tags, callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve([]);
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "deleteTags",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.deleteTags(tags, callback);
    });
  }
  addListenerForNotificationOpened(callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "addListenerForNotificationOpened",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.addListenerForNotificationOpened(callback);
    });
  }
  setSubscription(newSubscription) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setSubscription",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.setSubscription(newSubscription);
    });
  }
  showHttpPermissionRequest(options) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showHttpPermissionRequest",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.showHttpPermissionRequest(options);
    });
  }
  showNativePrompt() {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showNativePrompt",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.showNativePrompt();
    });
  }
  showSlidedownPrompt(options) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showSlidedownPrompt",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.showSlidedownPrompt(options);
    });
  }
  showCategorySlidedown(options) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "showCategorySlidedown",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.showCategorySlidedown(options);
    });
  }
  getNotificationPermission(onComplete) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getNotificationPermission",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.getNotificationPermission(onComplete);
    });
  }
  getUserId(callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve(null);
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getUserId",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.getUserId(callback);
    });
  }
  getSubscription(callback) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getSubscription",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.getSubscription(callback);
    });
  }
  setExternalUserId(externalUserId, authHash) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "setExternalUserId",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.setExternalUserId(externalUserId, authHash);
    });
  }
  removeExternalUserId() {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "removeExternalUserId",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.removeExternalUserId();
    });
  }
  getExternalUserId() {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        reject();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "getExternalUserId",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.getExternalUserId();
    });
  }
  provideUserConsent(consent) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "provideUserConsent",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.provideUserConsent(consent);
    });
  }
  sendOutcome(outcomeName, outcomeWeight) {
    return new Promise((resolve, reject) => {
      if (this._isOneSignalScriptFailed) {
        resolve();
        return;
      }
      if (!doesOneSignalExist()) {
        this._nextOneSignalFunctionQueue.push({
          name: "sendOutcome",
          args: arguments,
          promiseResolver: resolve
        });
        return;
      }
      return OneSignalReact.sendOutcome(outcomeName, outcomeWeight);
    });
  }
};

// src/provider.tsx
import Script from "next/script";
import { createContext, useContext, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var OneSignalReactContext = createContext({
  oneSignal: {},
  isSubscribed: false,
  notificationPermission: "default"
});
var OneSignalProvider = (_a) => {
  var _b = _a, { oneSignal } = _b, props = __objRest(_b, ["oneSignal"]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState("default");
  const oneSignalOnLoad = () => {
    oneSignal.init().then(() => {
      oneSignal.on("subscriptionChange", function(isSubscribed2) {
        setIsSubscribed(isSubscribed2);
      });
      oneSignal.on(
        "notificationPermissionChange",
        function(e) {
          setNotificationPermission(e.to);
        }
      );
      oneSignal.isPushNotificationsEnabled((state) => setIsSubscribed(state));
      oneSignal.getNotificationPermission(
        (state) => setNotificationPermission(state)
      );
    });
  };
  const oneSignalOnError = () => {
    throw new Error("Error loading OneSignal script.");
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(Script, {
        src: "https://cdn.onesignal.com/sdks/OneSignalSDK.js",
        async: true,
        onLoad: oneSignalOnLoad,
        onError: oneSignalOnError
      }),
      /* @__PURE__ */ jsx(OneSignalReactContext.Provider, {
        value: { oneSignal, isSubscribed, notificationPermission },
        children: props.children
      })
    ]
  });
};
function useOneSignalContext() {
  return useContext(OneSignalReactContext);
}
export {
  OneSignalClient,
  OneSignalProvider,
  OneSignalReactContext,
  useOneSignalContext
};
