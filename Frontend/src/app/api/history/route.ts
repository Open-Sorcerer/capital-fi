import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { contractAddresses } from "@/lib/constants";
import { base } from "viem/chains";

let isMoralisInitialized = false;

export const POST = async (req: Request) => {
  const { address, chainId } = await req.json();

  if (!address) {
    return new Response("Address is required", {
      status: 400,
    });
  }

  if (!isMoralisInitialized) {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
    isMoralisInitialized = true;
  }

  const contractAddressBase = contractAddresses.base;
  const chain = chainId === base.id ? EvmChain.BASE : EvmChain.OPTIMISM;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address: contractAddressBase,
    chain,
  });

  const transactions = response.toJSON().result;

  const tokenTransfers = await Promise.all(
    transactions.map(async (tx: any) => {
      const transfers = await Moralis.EvmApi.token.getWalletTokenTransfers({
        address: contractAddressBase,
        chain,
      });

      const filteredTransfers = transfers
        .toJSON()
        .result.filter(
          (transfer: any) =>
            transfer.transaction_hash === tx.hash &&
            transfer.from_address.toLowerCase() === address.toLowerCase()
        );

      return filteredTransfers.map((transfer: any) => ({
        txHash: tx.hash,
        timestamp: tx.block_timestamp,
        tokenType: transfer.token_name,
        amount: transfer.value,
        sender: transfer.from_address,
        receiver: transfer.to_address,
        network: "Base",
      }));
    })
  );

  const flatTokenTransfers = tokenTransfers.flat();

  console.log(flatTokenTransfers);

  return new Response(JSON.stringify(flatTokenTransfers), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
