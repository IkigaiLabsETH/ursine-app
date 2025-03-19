"use client";

import { createThirdwebClient, defineChain } from "thirdweb";

// Get the client ID from environment variables
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId) {
  console.warn("No thirdweb client ID provided. Please add your client ID to .env.local");
}

// Define Berachain
export const berachain = defineChain({
  id: 80_094,
  name: "Berachain",
  rpc: process.env.NEXT_PUBLIC_BERACHAIN_RPC || "https://rpc.berachain.com",
  nativeCurrency: {
    decimals: 18,
    name: "BERA",
    symbol: "BERA",
  },
  blockExplorers: [
    { name: "Explorer", url: "https://explorer.berachain.com" },
  ],
});

// Create and export the thirdweb client
export const client = createThirdwebClient({
  clientId: clientId || "placeholder",
});
