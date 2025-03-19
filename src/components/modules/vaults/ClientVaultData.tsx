"use client";

import { useEffect, useState } from 'react';
import { useReadContract } from "thirdweb/react";
import { VaultCard } from './VaultCard';

interface VaultData {
  vaultAddress: string;
  name: string;
  description: string;
  apy: string;
  tvl: string;
  token: string;
}

interface ClientVaultDataProps {
  initialVaults: VaultData[];
}

export function ClientVaultData({ initialVaults }: ClientVaultDataProps) {
  const [vaults, setVaults] = useState<VaultData[]>(initialVaults);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use optional chaining for environment variable access
  const factoryAddress = typeof window !== 'undefined' 
    ? window?.ENV?.NEXT_PUBLIC_IKIGAI_VAULT_FACTORY_ADDRESS || ""
    : "";

  // Read vault addresses from factory with proper typing
  const { data: vaultAddresses, isLoading: isLoadingVaults, error: contractError } = useReadContract({
    contract: factoryAddress || undefined,
    method: "getAllVaults",
    params: []
  } as any); // Type assertion needed for thirdweb contract call

  useEffect(() => {
    // Reset error state
    setError(null);

    const fetchVaultData = async () => {
      if (!vaultAddresses || !Array.isArray(vaultAddresses) || vaultAddresses.length === 0) {
        // If no vaults are deployed yet, use initial data
        setVaults(initialVaults);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        // For now, use initial data
        // In a real implementation, we would fetch data for each vault
        setVaults(initialVaults);
      } catch (error) {
        console.error("Error fetching vault data:", error);
        setError("Failed to fetch vault data. Using fallback data.");
        // Fallback to initial data
        setVaults(initialVaults);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isLoadingVaults) {
      fetchVaultData();
    }
  }, [vaultAddresses, isLoadingVaults, initialVaults]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-berry"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {vaults.map((vault) => (
        <VaultCard
          key={vault.vaultAddress}
          vaultAddress={vault.vaultAddress}
          name={vault.name}
          description={vault.description}
          apy={vault.apy}
          tvl={vault.tvl}
          token={vault.token}
        />
      ))}
    </div>
  );
} 