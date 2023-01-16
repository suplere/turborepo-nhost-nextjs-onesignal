"use client";

import { useToast } from "@/providers/toast/hooks/useToast";
import { useAuthenticated, useSignOut, useUserData } from "@nhost/nextjs";
import { Navbar, NavigationLink } from "ui";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "/team", current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];

export function NavbarBeta() {
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

  const isAuthenticated = useAuthenticated();
  const user = useUserData();
  return (
    <Navbar
      navigation={navigation}
      userNavigation={userNavigation}
      user={
        user
          ? {
              avatarUrl: user.avatarUrl,
              email: user.email || "",
              name: user.displayName,
            }
          : null
      }
      isAuthenticated={isAuthenticated}
      onLogin={onLogin}
    />
  );
}

export default NavbarBeta;
