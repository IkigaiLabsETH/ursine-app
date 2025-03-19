"use client";

import { useState } from "react";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { type VaultData } from "./ClientVaultData";
import { berachain, client } from "../../../app/client";

interface VaultCardProps {
  vault: VaultData;
}

export function VaultCard({ vault }: VaultCardProps) {
  const [amount, setAmount] = useState("");
  const [isDepositing, setIsDepositing] = useState(false);
  const { mutate: sendTx } = useSendTransaction();
  const account = useActiveAccount();

  const handleDeposit = async () => {
    if (!account || !amount) {
      console.error("Please connect your wallet and enter an amount");
      return;
    }

    try {
      setIsDepositing(true);
      const amountBigInt = BigInt(Math.floor(parseFloat(amount) * 10**18));
      
      // Get token contract
      const tokenContract = getContract({
        address: vault.token as `0x${string}`,
        chain: berachain,
        client,
      });

      // Get vault contract
      const vaultContract = getContract({
        address: vault.vaultAddress as `0x${string}`,
        chain: berachain,
        client,
      });

      // First approve tokens for deposit
      const approvalTx = await prepareContractCall({
        __contract: tokenContract,
        method: "function approve(address spender, uint256 amount) returns (bool)",
        params: [vault.vaultAddress, amountBigInt],
      });
      await sendTx(approvalTx);

      // Then deposit tokens
      const depositTx = await prepareContractCall({
        __contract: vaultContract,
        method: "function deposit(uint256 amount) returns (bool)",
        params: [amountBigInt],
      });
      await sendTx(depositTx);

      setAmount("");
      console.log("Deposit successful");
    } catch (err) {
      console.error("Transaction failed", err);
    } finally {
      setIsDepositing(false);
    }
  };

  return (
    <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{vault.name}</h2>
        <div className="bg-berry/20 text-berry px-3 py-1 rounded-full text-sm font-medium">
          {vault.apy} APY
        </div>
      </div>
      
      <p className="text-gray-400 mb-4">{vault.description}</p>
      
      <div className="flex justify-between text-sm text-gray-400 mb-6">
        <span>TVL: {vault.tvl}</span>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Amount to Deposit
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-berry"
        />
      </div>
      
      <button
        onClick={handleDeposit}
        disabled={isDepositing || !amount || !account}
        className="w-full py-3 bg-gradient-to-r from-berry to-berry-dark text-white font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDepositing ? "Processing..." : "Approve & Deposit"}
      </button>
    </div>
  );
} 