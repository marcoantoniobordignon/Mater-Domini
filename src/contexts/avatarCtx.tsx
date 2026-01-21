"use client"

import { createContext, useContext, useState } from "react";

type AvatarContextType = {
    avatar: string;
    setAvatar: (avatar: string) => void;
};

export const AvatarContext = createContext<AvatarContextType | null>(null);

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
  const [avatar, setAvatar] = useState("");
  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
}

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar deve ser usado dentro de um AvatarProvider");
  }
  return context;
};