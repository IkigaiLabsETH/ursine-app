"use client";

import { useEffect, useState } from 'react';
import { useReadContract } from "thirdweb/react";
import { VaultCard } from './VaultCard';
import { berachain } from '../../../app/client';

export interface VaultData {
  vaultAddress: string;
  name: string;
  description: string;
  apy: string;
  tvl: string;
  token: string;
}

export interface ClientVaultDataProps {
  initialVaults: VaultData[];
}

export default function ClientVaultData({ initialVaults }: ClientVaultDataProps) {
  // Get factory address from window.ENV to ensure client-side access
  const factoryAddress = typeof window !== 'undefined' 
    ? window?.ENV?.NEXT_PUBLIC_IKIGAI_VAULT_FACTORY_ADDRESS || ""
    : "";

  const [vaultsData, setVaultsData] = useState<VaultData[]>(initialVaults);
  const [error, setError] = useState<string | null>(null);

  const { data: vaultAddresses, isLoading } = useReadContract({
    contract: factoryAddress ? {
      abi: ["function getAllVaults() view returns (address[])"],
      address: factoryAddress as `0x${string}`,
      chain: berachain
    } : undefined,
    functionName: "getAllVaults",
    enabled: Boolean(factoryAddress)
  });

  useEffect(() => {
    const fetchVaultData = async () => {
      if (!vaultAddresses || !Array.isArray(vaultAddresses) || vaultAddresses.length === 0) {
        // If no vaults are deployed yet, use initial data
        setVaultsData(initialVaults);
        return;
      }

      try {
        // Here you would fetch data for each vault address using useReadContract
        // For now, we'll use the initial data
        setVaultsData(initialVaults);
      } catch (error) {
        console.error("Error fetching vault data:", error);
        setError("Failed to fetch vault data. Using fallback data.");
        setVaultsData(initialVaults);
      }
    };

    if (!isLoading) {
      fetchVaultData();
    }
  }, [vaultAddresses, isLoading, initialVaults]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-4">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {vaultsData.map((vault) => (
        <VaultCard
          key={vault.vaultAddress}
          vault={vault}
        />
      ))}
    </div>
  );
} 