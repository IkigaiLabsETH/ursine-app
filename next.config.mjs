/** @type {import('next').NextConfig} */
const nextConfig = {
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  // Enable static exports
  output: 'export',
  // Disable image optimization since we're doing static export
  images: {
    unoptimized: true,
  },
  // Disable server components since we're doing static export
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
