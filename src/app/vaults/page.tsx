"use client";

import { Layout } from '../../components/layout/Layout';
import { defaultVaults } from '../../config/defaults';
import ClientVaultData from '@/components/modules/vaults/ClientVaultData';
import { Suspense } from 'react';

// Interface for vault data
interface VaultData {
  vaultAddress: string;
  name: string;
  description: string;
  apy: string;
  tvl: string;
  token: string;
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function VaultsPage() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">IkigaiVaults</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deposit your assets into our yield-optimizing vaults and let our strategies maximize your returns.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <div className="bg-dark-secondary rounded-lg border border-gray-800 p-4">
                <h3 className="text-lg font-bold mb-4 px-4">Vaults</h3>
                <nav>
                  <div className="mb-2">
                    <a 
                      href="/vaults"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors bg-berry/20 text-white border-l-2 border-berry"
                    >
                      <span>All Vaults</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a 
                      href="/vaults/stablecoins"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span>Stablecoin Vaults</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a 
                      href="/vaults/eth"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span>ETH Vaults</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a 
                      href="/vaults/bera"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span>BERA Vaults</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <Suspense fallback={
                <div className="animate-pulse space-y-4">
                  <div className="h-48 bg-gray-800 rounded-xl"></div>
                  <div className="h-48 bg-gray-800 rounded-xl"></div>
                </div>
              }>
                <ClientVaultData initialVaults={defaultVaults} />
              </Suspense>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-dark-secondary rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">How IkigaiVaults Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-berry/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-berry font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Deposit</h3>
                <p className="text-gray-400">
                  Deposit your tokens into a Ikigaivault to receive yield-bearing vault tokens.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-jelly/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-jelly font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Earn</h3>
                <p className="text-gray-400">
                  Our strategies automatically put your assets to work across DeFi to generate yield.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-kiwi/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-kiwi font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Withdraw</h3>
                <p className="text-gray-400">
                  Withdraw your tokens plus earned yield anytime with no lock-up periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 