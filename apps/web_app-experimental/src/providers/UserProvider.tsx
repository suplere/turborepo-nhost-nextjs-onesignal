"use client";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { User, useUserData } from "@nhost/nextjs";
import { UserMetadata } from "@/types";
import { oneSignal } from "@/services/onesignal";

type Props = {
  children: ReactNode;
};

type UserContextType = {
  user: User | null;
};

const userContextDefaultValues: UserContextType = {
  user: null,
};

const UserContext = React.createContext<UserContextType>(
  userContextDefaultValues
);

export function UserProvider({ children }: Props) {
  const user = useUserData();
  useEffect(() => {
    // console.log("USER Provider", user);
    if (user) {
      const metadata = user.metadata as UserMetadata;
      if (metadata.idHash) {
        oneSignal.setExternalUserId(user.id, metadata.idHash);
      }
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
