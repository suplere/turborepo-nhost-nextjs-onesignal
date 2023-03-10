import React, { PropsWithChildren } from 'react';

interface IInitObject {
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
    serviceWorkerParam?: {
        scope: string;
    };
    serviceWorkerPath?: string;
    serviceWorkerUpdaterPath?: string;
    path?: string;
    allowLocalhostAsSecureOrigin?: boolean;
    [key: string]: any;
}
type PermissionChange = {
    to: NotificationPermission;
};
type FunctionQueueElement = {
    name: keyof IOneSignal;
    args: IArguments;
    promiseResolver?: any;
};
type Action<T> = (item: T) => void;
interface AutoPromptOptions {
    force?: boolean;
    forceSlidedownOverNative?: boolean;
    slidedownPromptOptions?: IOneSignalAutoPromptOptions;
}
interface RegisterOptions {
    modalPrompt?: boolean;
    httpPermissionRequest?: boolean;
    slidedown?: boolean;
    autoAccept?: boolean;
}
interface TagsObject<T> {
    [key: string]: T;
}
interface IOneSignalAutoPromptOptions {
    force?: boolean;
    forceSlidedownOverNative?: boolean;
    isInUpdateMode?: boolean;
    categoryOptions?: IOneSignalCategories;
}
interface IOneSignalCategories {
    positiveUpdateButton: string;
    negativeUpdateButton: string;
    savingButtonText: string;
    errorButtonText: string;
    updateMessage: string;
    tags: IOneSignalTagCategory[];
}
interface IOneSignalTagCategory {
    tag: string;
    label: string;
    checked?: boolean;
}
interface IOneSignal {
    on(event: string, listener: (eventData?: any) => void): void;
    off(event: string, listener: (eventData?: any) => void): void;
    once(event: string, listener: (eventData?: any) => void): void;
    isPushNotificationsEnabled(callback?: Action<boolean>): Promise<boolean>;
    showHttpPrompt(options?: AutoPromptOptions): Promise<void>;
    registerForPushNotifications(options?: RegisterOptions): Promise<void>;
    setDefaultNotificationUrl(url: string): Promise<void>;
    setDefaultTitle(title: string): Promise<void>;
    getTags(callback?: Action<any>): Promise<void>;
    sendTag(key: string, value: any, callback?: Action<Object>): Promise<Object | null>;
    sendTags(tags: TagsObject<any>, callback?: Action<Object>): Promise<Object | null>;
    deleteTag(tag: string): Promise<Array<string>>;
    deleteTags(tags: Array<string>, callback?: Action<Array<string>>): Promise<Array<string>>;
    addListenerForNotificationOpened(callback?: Action<Notification>): Promise<void>;
    setSubscription(newSubscription: boolean): Promise<void>;
    showHttpPermissionRequest(options?: AutoPromptOptions): Promise<any>;
    showNativePrompt(): Promise<void>;
    showSlidedownPrompt(options?: AutoPromptOptions): Promise<void>;
    showCategorySlidedown(options?: AutoPromptOptions): Promise<void>;
    getNotificationPermission(onComplete?: Action<NotificationPermission>): Promise<NotificationPermission | null>;
    getUserId(callback?: Action<string | undefined | null>): Promise<string | undefined | null>;
    getSubscription(callback?: Action<boolean>): Promise<boolean>;
    setExternalUserId(externalUserId: string | undefined | null, authHash?: string): Promise<void>;
    removeExternalUserId(): Promise<void>;
    getExternalUserId(): Promise<string | undefined | null>;
    provideUserConsent(consent: boolean): Promise<void>;
    sendOutcome(outcomeName: string, outcomeWeight?: number | undefined): Promise<void>;
    [index: string]: Function;
}

declare class OneSignalClient {
    private static instance;
    _isOneSignalInitialized: boolean;
    _isOneSignalScriptFailed: boolean;
    _nextOneSignalFunctionQueue: Array<FunctionQueueElement>;
    _options: IInitObject;
    constructor(config: IInitObject);
    static getInstance(config: IInitObject): OneSignalClient;
    private handleOnLoad;
    private doesOneSignalExist;
    processQueuedOneSignalFunctions: () => void;
    init(): Promise<void>;
    on(event: string, listener: (eventData?: any) => void): void;
    off(event: string, listener: (eventData?: any) => void): void;
    once(event: string, listener: (eventData?: any) => void): void;
    isPushNotificationsEnabled(callback?: Action<boolean>): Promise<boolean>;
    showHttpPrompt(options?: AutoPromptOptions): Promise<void>;
    registerForPushNotifications(options?: RegisterOptions): Promise<void>;
    setDefaultNotificationUrl(url: string): Promise<void>;
    setDefaultTitle(title: string): Promise<void>;
    getTags(callback?: Action<any>): Promise<void>;
    sendTag(key: string, value: any, callback?: Action<Object>): Promise<Object | null>;
    sendTags(tags: TagsObject<any>, callback?: Action<Object>): Promise<Object | null>;
    deleteTag(tag: string): Promise<Array<string>>;
    deleteTags(tags: Array<string>, callback?: Action<Array<string>>): Promise<Array<string>>;
    addListenerForNotificationOpened(callback?: Action<Notification>): Promise<void>;
    setSubscription(newSubscription: boolean): Promise<void>;
    showHttpPermissionRequest(options?: AutoPromptOptions): Promise<any>;
    showNativePrompt(): Promise<void>;
    showSlidedownPrompt(options?: AutoPromptOptions): Promise<void>;
    showCategorySlidedown(options?: AutoPromptOptions): Promise<void>;
    getNotificationPermission(onComplete?: Action<NotificationPermission>): Promise<NotificationPermission>;
    getUserId(callback?: Action<string | undefined | null>): Promise<string | undefined | null>;
    getSubscription(callback?: Action<boolean>): Promise<boolean>;
    setExternalUserId(externalUserId: string | undefined | null, authHash?: string): Promise<void>;
    removeExternalUserId(): Promise<void>;
    getExternalUserId(): Promise<string | undefined | null>;
    provideUserConsent(consent: boolean): Promise<void>;
    sendOutcome(outcomeName: string, outcomeWeight?: number | undefined): Promise<void>;
}

type OneSignalProviderProps = {
    oneSignal: OneSignalClient;
};
type OneSignalContext = {
    oneSignal: OneSignalClient;
    isSubscribed: boolean;
    notificationPermission: NotificationPermission;
};
declare const OneSignalReactContext: React.Context<OneSignalContext>;
declare const OneSignalProvider: React.FC<PropsWithChildren<OneSignalProviderProps>>;
declare function useOneSignalContext(): OneSignalContext;

export { Action, AutoPromptOptions, FunctionQueueElement, IInitObject, IOneSignal, IOneSignalAutoPromptOptions, IOneSignalCategories, IOneSignalTagCategory, OneSignalClient, OneSignalProvider, OneSignalReactContext, PermissionChange, RegisterOptions, TagsObject, useOneSignalContext };
