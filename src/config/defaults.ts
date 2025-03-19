// Default vault data for static rendering and fallback
export const defaultVaults = [
  {
    vaultAddress: "0x1234567890123456789012345678901234567890",
    name: "USDC Vault",
    description: "Optimize yield on your USDC with our automated strategies.",
    apy: "8.2%",
    tvl: "$4.2M",
    token: "0x1234567890123456789012345678901234567891",
  },
  {
    vaultAddress: "0x1234567890123456789012345678901234567892",
    name: "ETH Vault",
    description: "Earn yield on your ETH while maintaining liquidity.",
    apy: "5.7%",
    tvl: "$12.8M",
    token: "0x1234567890123456789012345678901234567893",
  },
  {
    vaultAddress: "0x1234567890123456789012345678901234567894",
    name: "BERA Vault",
    description: "Maximize returns on your BERA with our optimized strategies.",
    apy: "11.3%",
    tvl: "$2.1M",
    token: "0x1234567890123456789012345678901234567895",
  },
  {
    vaultAddress: "0x1234567890123456789012345678901234567896",
    name: "YFI Vault",
    description: "Stake YFI to earn protocol fees and governance rights.",
    apy: "9.5%",
    tvl: "$3.7M",
    token: "0x1234567890123456789012345678901234567897",
  },
];

// Default strategy data for static rendering and fallback
export const defaultStrategies = [
  {
    name: "USDC Lending Optimizer",
    description: "Automatically allocates USDC across lending protocols to maximize yield.",
    apy: "8.2%",
    risk: "Low" as const,
    protocols: ["Aave", "Compound", "Euler"],
    vault: "USDC Vault",
  },
  {
    name: "ETH-BERA LP Compounder",
    description: "Compounds rewards from ETH-BERA liquidity provision on DEXes.",
    apy: "12.5%",
    risk: "Medium" as const,
    protocols: ["Uniswap", "Balancer", "Curve"],
    vault: "ETH Vault",
  },
  {
    name: "BERA Staking Maximizer",
    description: "Optimizes BERA staking rewards across multiple validators.",
    apy: "11.3%",
    risk: "Low" as const,
    protocols: ["Lido", "Rocket Pool", "Frax"],
    vault: "BERA Vault",
  },
  {
    name: "YFI Delta Neutral",
    description: "Delta neutral strategy using YFI to generate yield while hedging price exposure.",
    apy: "15.7%",
    risk: "High" as const,
    protocols: ["GMX", "Perpetual Protocol", "dYdX"],
    vault: "YFI Vault",
  },
]; 