"use client";

export const dynamic = 'force-dynamic';

import { Layout } from '../../components/layout/Layout';
import { defaultVaults } from '../../config/defaults';
import { ClientVaultData } from '../../components/modules/vaults/ClientVaultData';

// Interface for vault data
interface VaultData {
  vaultAddress: string;
  name: string;
  description: string;
  apy: string;
  tvl: string;
  token: string;
}

export default function BeraPage() {
  // Filter vaults to only show BERA vaults
  const beraVaults = defaultVaults.filter(vault => vault.name.includes('BERA'));

  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">BERA Vaults</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maximize your BERA yields with our specialized vaults and strategies.
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
                      className="flex items-center px-4 py-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
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
                      className="flex items-center px-4 py-2 rounded-lg transition-colors bg-berry/20 text-white border-l-2 border-berry"
                    >
                      <span>BERA Vaults</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <ClientVaultData initialVaults={beraVaults} />
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-dark-secondary rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Why Stake BERA?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-berry/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-berry font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Earn Yield</h3>
                <p className="text-gray-400">
                  Earn competitive yields on your BERA through our optimized staking strategies.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-jelly/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-jelly font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Support Network</h3>
                <p className="text-gray-400">
                  Help secure the Berachain network while earning rewards.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-kiwi/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-kiwi font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Liquid Staking</h3>
                <p className="text-gray-400">
                  Maintain liquidity with our liquid staking solutions while earning staking rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 