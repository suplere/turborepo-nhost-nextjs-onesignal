"use client";

import { useToast } from "@/providers/toast/hooks/useToast";
import { useSignOut } from "@nhost/nextjs";
import { Navbar, NavigationLink } from "ui";
import { useRouter } from "next/navigation";
import { FragmentType, useFragment } from "@/lib/gql";
import { UserSecureItemFragmentDoc } from "@/lib/gql/graphql";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "/team", current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];

type NavbarProps = {
  user?: FragmentType<typeof UserSecureItemFragmentDoc>;
};

export function NavbarBeta(props: NavbarProps) {
  const user = useFragment(UserSecureItemFragmentDoc, props.user);
  const { signOut } = useSignOut();
  const toast = useToast();
  const router = useRouter();

  const logout = async () => {
    // console.log("User logged out");
    await signOut();
    toast("success", "User was logged out.");
    router.refresh();
  };

  const userNavigation: NavigationLink[] = [
    { name: "Your Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Sign out", action: logout },
  ];

  const onLogin = () => {
    router.push("/login");
  };

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
      isAuthenticated={!!props.user}
      onLogin={onLogin}
    />
  );
}

export default NavbarBeta;
