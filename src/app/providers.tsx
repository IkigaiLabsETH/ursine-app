"use client";

import React from "react";
import { ThirdwebProvider } from "thirdweb/react";
import { berachain } from "./client";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // @ts-ignore - Temporary ignore while thirdweb v5 types stabilize
    <ThirdwebProvider
      config={{
        chains: [berachain],
      }}
    >
      {children}
    </ThirdwebProvider>
  );
} 