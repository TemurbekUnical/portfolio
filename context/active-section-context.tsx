"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = ReturnType<typeof useActiveSection>;

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return {
    setActiveSection,
    setTimeOfLastClick,
    timeOfLastClick,
    activeSection,
  };
};
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const context = useActiveSection();
  return (
    <ActiveSectionContext.Provider value={context}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
