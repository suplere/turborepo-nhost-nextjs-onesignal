export interface IInitObject {
  appId: string;
  subdomainName?: string;
  requiresUserPrivacyConsent?: boolean;
  promptOptions?: object;
  welcomeNotification?: object;
  notifyButton?: object;
  persistNotification?: boolean;
  webhooks?: object;
  autoResubscribe?: boolean;
  autoRegister?: boolean;
  notificationClickHandlerMatch?: string;
  notificationClickHandlerAction?: string;
  serviceWorkerParam?: { scope: string };
  serviceWorkerPath?: string;
  serviceWorkerUpdaterPath?: string;
  path?: string;
  allowLocalhostAsSecureOrigin?: boolean;
  [key: string]: any;
}

export type PermissionChange = {
  to: NotificationPermission;
};

export type FunctionQueueElement = {
  name: keyof IOneSignal;
  args: IArguments;
  promiseResolver?: any;
};

export type Action<T> = (item: T) => void;
export interface AutoPromptOptions {
  force?: boolean;
  forceSlidedownOverNative?: boolean;
  slidedownPromptOptions?: IOneSignalAutoPromptOptions;
}
export interface RegisterOptions {
  modalPrompt?: boolean;
  httpPermissionRequest?: boolean;
  slidedown?: boolean;
  autoAccept?: boolean;
}

export interface TagsObject<T> {
  [key: string]: T;
}
export interface IOneSignalAutoPromptOptions {
  force?: boolean;
  forceSlidedownOverNative?: boolean;
  isInUpdateMode?: boolean;
  categoryOptions?: IOneSignalCategories;
}
export interface IOneSignalCategories {
  positiveUpdateButton: string;
  negativeUpdateButton: string;
  savingButtonText: string;
  errorButtonText: string;
  updateMessage: string;
  tags: IOneSignalTagCategory[];
}
export interface IOneSignalTagCategory {
  tag: string;
  label: string;
  checked?: boolean;
}

export interface IOneSignal {
  on(event: string, listener: (eventData?: any) => void): void;
  off(event: string, listener: (eventData?: any) => void): void;
  once(event: string, listener: (eventData?: any) => void): void;
  isPushNotificationsEnabled(callback?: Action<boolean>): Promise<boolean>;
  showHttpPrompt(options?: AutoPromptOptions): Promise<void>;
  registerForPushNotifications(options?: RegisterOptions): Promise<void>;
  setDefaultNotificationUrl(url: string): Promise<void>;
  setDefaultTitle(title: string): Promise<void>;
  getTags(callback?: Action<any>): Promise<void>;
  sendTag(
    key: string,
    value: any,
    callback?: Action<Object>
  ): Promise<Object | null>;
  sendTags(
    tags: TagsObject<any>,
    callback?: Action<Object>
  ): Promise<Object | null>;
  deleteTag(tag: string): Promise<Array<string>>;
  deleteTags(
    tags: Array<string>,
    callback?: Action<Array<string>>
  ): Promise<Array<string>>;
  addListenerForNotificationOpened(
    callback?: Action<Notification>
  ): Promise<void>;
  setSubscription(newSubscription: boolean): Promise<void>;
  showHttpPermissionRequest(options?: AutoPromptOptions): Promise<any>;
  showNativePrompt(): Promise<void>;
  showSlidedownPrompt(options?: AutoPromptOptions): Promise<void>;
  showCategorySlidedown(options?: AutoPromptOptions): Promise<void>;
  // showSmsSlidedown(options?: AutoPromptOptions): Promise<void>
  // showEmailSlidedown(options?: AutoPromptOptions): Promise<void>
  // showSmsAndEmailSlidedown(options?: AutoPromptOptions): Promise<void>
  getNotificationPermission(
    onComplete?: Action<NotificationPermission>
  ): Promise<NotificationPermission | null>;
  getUserId(
    callback?: Action<string | undefined | null>
  ): Promise<string | undefined | null>;
  getSubscription(callback?: Action<boolean>): Promise<boolean>;
  // setEmail(email: string, options?: SetEmailOptions): Promise<string | null>
  // setSMSNumber(
  //   smsNumber: string,
  //   options?: SetSMSOptions
  // ): Promise<string | null>
  // logoutEmail(): Promise<void>
  // logoutSMS(): Promise<void>
  setExternalUserId(
    externalUserId: string | undefined | null,
    authHash?: string
  ): Promise<void>;
  removeExternalUserId(): Promise<void>;
  getExternalUserId(): Promise<string | undefined | null>;
  provideUserConsent(consent: boolean): Promise<void>;
  // getEmailId(
  //   callback?: Action<string | undefined>
  // ): Promise<string | null | undefined>
  // getSMSId(
  //   callback?: Action<string | undefined>
  // ): Promise<string | null | undefined>
  sendOutcome(
    outcomeName: string,
    outcomeWeight?: number | undefined
  ): Promise<void>;
  [index: string]: Function;
}
