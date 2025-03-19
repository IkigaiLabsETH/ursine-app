"use client";

import { Layout } from '@/components/layout/Layout';

export default function StrategiesPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">IkigaiStrategies</h1>
        <div className="bg-dark-secondary rounded-xl border border-gray-800 p-8 max-w-2xl w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-berry">Coming Soon</h2>
          <p className="text-gray-400 text-lg">
            Our automated yield optimization strategies are currently under development. Stay tuned for innovative DeFi strategies that will help maximize your returns.
          </p>
        </div>
      </div>
    </Layout>
  );
} 