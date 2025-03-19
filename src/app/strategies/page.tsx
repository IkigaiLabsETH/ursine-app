"use client";

import { Layout } from '@/components/layout/Layout';
import { defaultStrategies } from '@/config/defaults';
import { ClientStrategyData } from '@/components/modules/strategies/ClientStrategyData';
import { Suspense } from 'react';

// Interface for strategy data
interface StrategyData {
  name: string;
  description: string;
  apy: string;
  risk: "Low" | "Medium" | "High";
  protocols: string[];
  vault: string;
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function StrategiesPage() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">IkigaiStrategies</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our automated strategies work around the clock to maximize your yield across DeFi protocols.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <div className="bg-dark-secondary rounded-lg border border-gray-800 p-4">
                <h3 className="text-lg font-bold mb-4 px-4">Strategies</h3>
                <nav>
                  <div className="mb-2">
                    <a 
                      href="/strategies"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors bg-berry/20 text-white border-l-2 border-berry"
                    >
                      <span>All Strategies</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a 
                      href="/strategies/lending"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span>Lending Strategies</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a 
                      href="/strategies/lp"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span>LP Strategies</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a 
                      href="/strategies/staking"
                      className="flex items-center px-4 py-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span>Staking Strategies</span>
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
                <ClientStrategyData initialStrategies={defaultStrategies} />
              </Suspense>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-dark-secondary rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">How IkigaiStrategies Work</h2>
            <p className="text-gray-400 mb-6">
              Ikigaistrategies are smart contracts that automate yield farming across DeFi protocols. Our strategies are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-berry/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-berry" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Automated</h3>
                  <p className="text-gray-400">
                    Strategies automatically rebalance and compound rewards to maximize yield.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-jelly/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jelly" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Secure</h3>
                  <p className="text-gray-400">
                    All strategies undergo rigorous security audits and risk assessment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-kiwi/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kiwi" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Optimized</h3>
                  <p className="text-gray-400">
                    Strategies are continuously optimized to adapt to changing market conditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-lemon/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lemon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Community-Driven</h3>
                  <p className="text-gray-400">
                    Strategies are proposed, reviewed, and approved by the Ikigaicommunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 