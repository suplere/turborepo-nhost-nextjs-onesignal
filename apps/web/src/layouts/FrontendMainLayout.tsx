import { useAuthenticated, useSignOut, useUserData } from "@nhost/nextjs";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLProps, useEffect } from "react";
import { Navbar, NavigationLink, UserProps } from "ui";
import { useToast } from "../providers/toast/hooks/useToast";

export interface FrontendLayoutProps
  extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  mainContainerProps?: DetailedHTMLProps<
    HTMLProps<HTMLDivElement>,
    HTMLDivElement
  >;
}

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "/team", current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];

function FrontendMainLayout({
  title,
  mainContainerProps,
  children,
}: FrontendLayoutProps) {
  const { signOut } = useSignOut();
  const toast = useToast();
  const router = useRouter();

  const logout = async () => {
    // console.log("User logged out");
    await signOut();
    toast("success", "User was logged out.");
    router.push("/");
  };

  const userNavigation: NavigationLink[] = [
    { name: "Your Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Sign out", action: logout },
  ];

  const onLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    // document.body.classList.add("bg-zinc-900");
  });
  const isAuthenticated = useAuthenticated();
  const user = useUserData();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <div className="bg-zinc-900 min-h-screen">
        <Navbar
          navigation={navigation}
          isAuthenticated={isAuthenticated}
          user={
            user
              ? {
                  avatarUrl: user.avatarUrl,
                  email: user.email || "",
                  name: user.displayName,
                }
              : null
          }
          onLogin={onLogin}
          userNavigation={userNavigation}
        />
        {children}
      </div>
    </>
  );
}

export default FrontendMainLayout;
