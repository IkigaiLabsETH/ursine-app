"use client";

import { ThirdwebProvider as TWProvider } from "thirdweb/react";

interface ThirdwebProviderProps {
  children: React.ReactNode;
}

export function ThirdwebProvider({ children }: ThirdwebProviderProps) {
  return (
    <TWProvider>
      {children}
    </TWProvider>
  );
} 