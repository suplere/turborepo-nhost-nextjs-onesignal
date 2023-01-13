import { DetailedHTMLProps, HTMLProps, ReactElement } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

declare const Button: () => JSX.Element;

interface AuthLayoutProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    logo?: string;
    mainText: string;
    secondaryText?: string;
    secondaryLink?: string;
}
declare function AuthLayout({ children, title, logo, mainText, secondaryText, secondaryLink, }: AuthLayoutProps): JSX.Element;

type LoginFormData = {
    email: string;
    password: string;
};
type LoginFormProps = {
    onSubmit: (data: LoginFormData) => void;
};
declare function LoginForm({ onSubmit }: LoginFormProps): JSX.Element;

type ForgotPasswordFormData = {
    email: string;
};
type ForgotPasswordFormProps = {
    onSubmit: (data: ForgotPasswordFormData) => void;
};
declare function ForgotPasswordForm({ onSubmit }: ForgotPasswordFormProps): JSX.Element;

type RegisterFormData = {
    email: string;
    password: string;
    confirm: string;
    firstname: string;
    lastname: string;
    mobile: string;
};
type RegisterFormProps = {
    onSubmit: (data: RegisterFormData) => void;
};
declare function RegisterForm({ onSubmit }: RegisterFormProps): JSX.Element;

type ProfileFormData = {
    avatarUrl: string;
    firstname: string;
    lastname: string;
    mobile: string;
};
type ProfileFormProps = {
    initialData?: ProfileFormData;
    onSubmit: (data: ProfileFormData) => void;
    avatarHandle?: {
        removeFunction?: () => void | Promise<void>;
        uploadFunction?: (f: File) => string | Promise<string>;
    };
};
declare const ProfileForm: ({ initialData, onSubmit, avatarHandle, }: ProfileFormProps) => JSX.Element;

type ChangePasswordFormData = {
    password: string;
    confirm: string;
};
type ChangePasswordFormProps = {
    onSubmit: (data: ChangePasswordFormData) => void;
};
declare const ChangePasswordForm: ({ onSubmit }: ChangePasswordFormProps) => JSX.Element;

declare const DragAndDropImageEdit: () => JSX.Element;

type ImageAvatarEditProps = {
    label?: string;
    value: string;
    defaultValue?: string;
    removeButtonTitle?: string;
    changeButtonTitle?: string;
    onChange: (e: string) => void;
    removeFunction?: () => void | Promise<void>;
    uploadFunction?: (f: File) => string | Promise<string>;
};
declare function ImageAvatarEditNhost({ label, value, defaultValue, removeButtonTitle, changeButtonTitle, onChange, removeFunction, uploadFunction, }: ImageAvatarEditProps): JSX.Element;

type NavigationLink = {
    name: string;
    href?: string;
    condition?: () => boolean;
    action?: () => void;
    current?: boolean;
};
type UserProps = {
    name: string;
    email: string;
    avatarUrl: string;
};
type NavbarProps = {
    navigation: NavigationLink[];
    userNavigation: NavigationLink[];
    user: UserProps | null;
    isAuthenticated: boolean;
    onLogin?: () => void;
};
declare function Navbar({ navigation, userNavigation, user, isAuthenticated, onLogin, }: NavbarProps): JSX.Element;

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactElement;
};
interface MyAppProps extends AppProps {
    Component: NextPageWithLayout;
}

declare function classNames(...classes: string[]): string;

export { AuthLayout, Button, ChangePasswordForm, ChangePasswordFormData, DragAndDropImageEdit, ForgotPasswordForm, ForgotPasswordFormData, ImageAvatarEditNhost, LoginForm, LoginFormData, MyAppProps, Navbar, NavigationLink, NextPageWithLayout, ProfileForm, ProfileFormData, RegisterForm, RegisterFormData, UserProps, classNames };
