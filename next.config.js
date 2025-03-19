/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip type checking and linting during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable static optimization for pages that need client-side data
  staticPageGenerationTimeout: 180,
  
  // This specifically helps with third-party libraries and ESM compatibility
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig; 