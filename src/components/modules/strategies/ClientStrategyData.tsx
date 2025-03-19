"use client";

import { useEffect, useState } from 'react';
import { useReadContract } from "thirdweb/react";
import { StrategyCard } from './StrategyCard';

interface StrategyData {
  name: string;
  description: string;
  apy: string;
  risk: "Low" | "Medium" | "High";
  protocols: string[];
  vault: string;
}

interface ClientStrategyDataProps {
  initialStrategies: StrategyData[];
}

export function ClientStrategyData({ initialStrategies }: ClientStrategyDataProps) {
  const [strategies, setStrategies] = useState<StrategyData[]>(initialStrategies);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use optional chaining for environment variable access
  const strategyFactoryAddress = typeof window !== 'undefined' 
    ? window?.ENV?.NEXT_PUBLIC_IKIGAI_STRATEGY_FACTORY_ADDRESS || ""
    : "";

  // Read strategy addresses from factory with proper typing
  const { data: strategyAddresses, isLoading: isLoadingStrategies, error: contractError } = useReadContract({
    contract: strategyFactoryAddress || undefined,
    method: "getAllStrategies",
    params: []
  } as any); // Type assertion needed for thirdweb contract call

  useEffect(() => {
    // Reset error state
    setError(null);

    const fetchStrategyData = async () => {
      if (!strategyAddresses || !Array.isArray(strategyAddresses) || strategyAddresses.length === 0) {
        // If no strategies are deployed yet, use initial data
        setStrategies(initialStrategies);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        // For now, use initial data
        // In a real implementation, we would fetch data for each strategy
        setStrategies(initialStrategies);
      } catch (error) {
        console.error("Error fetching strategy data:", error);
        setError("Failed to fetch strategy data. Using fallback data.");
        // Fallback to initial data
        setStrategies(initialStrategies);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isLoadingStrategies) {
      fetchStrategyData();
    }
  }, [strategyAddresses, isLoadingStrategies, initialStrategies]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-berry"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {strategies.map((strategy, index) => (
        <StrategyCard
          key={index}
          name={strategy.name}
          description={strategy.description}
          apy={strategy.apy}
          risk={strategy.risk}
          protocols={strategy.protocols}
          vault={strategy.vault}
        />
      ))}
    </div>
  );
} 