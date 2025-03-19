"use client";

import React from "react";
import { ThirdwebProvider } from "thirdweb/react";
import { berachain } from "./client";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      connectionManager={{
        defineChains: () => [berachain],
      }}
    >
      {children}
    </ThirdwebProvider>
  );
} 