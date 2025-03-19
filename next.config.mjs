/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  // Disable image optimization since we're doing static export
  images: {
    unoptimized: true,
  },
  // Configure webpack for thirdweb and other dependencies
  webpack: (config) => {
    // Handle thirdweb and other dependencies
    config.externals.push("pino-pretty", "lokijs", "encoding");
    
    // Resolve module aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      // Add any required aliases here
    };

    // Handle specific node modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url'),
      zlib: require.resolve('browserify-zlib'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      assert: require.resolve('assert'),
      os: require.resolve('os-browserify'),
      path: require.resolve('path-browserify'),
      'process/browser': require.resolve('process/browser'),
    };

    return config;
  },
  // Transpile specific modules
  transpilePackages: [
    'thirdweb'
  ],
  // Disable server-side rendering for static export
  unstable_runtimeJS: false,
  // Disable static optimization for pages that use client components
  experimental: {
    isrMemoryCacheSize: 0,
    serverActions: false,
  },
};

export default nextConfig;
