"use server";

import { contractAddresses, USDC } from "@/lib/constants";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base, optimism } from "viem/chains";
import { contractABI } from "@/lib/CapitalFi";
import { getAPY } from "@/helpers";

export const supplyAmountToDefiBase = async () => {
  const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

  const client = createWalletClient({
    account,
    chain: base,
    transport: http(),
  });

  const tx = await client.writeContract({
    address: contractAddresses.base as `0x${string}`,
    abi: contractABI,
    functionName: "supplyToDefi",
    args: [USDC.base],
  });
};

export const supplyAmountToDefiOp = async () => {
  const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

  const client = createWalletClient({
    account,
    chain: optimism,
    transport: http(),
  });

  const tx = await client.writeContract({
    address: contractAddresses.op as `0x${string}`,
    abi: contractABI,
    functionName: "supplyToDefi",
    args: [USDC.op],
  });

};

export const getAPYonBase = async () => {
  const getReservesResponse = await fetch(
    `https://gateway.thegraph.com/api/${process.env.GRAPH_API_KEY}/subgraphs/id/GQFbb95cE6d8mV989mL5figjaGaKCQB3xqYrr1bRyXqF`,
    {
      method: "POST",
      body: JSON.stringify({
        query:
          "{\n  reserves {\n    name\n    underlyingAsset\n    liquidityRate\n  }\n}",
      }),
      cache: "no-cache",
    }
  );

  const { data } = await getReservesResponse.json();

  console.log(data);

  const usdc = data?.reserves.find(
    (reserve: any) =>
      reserve.underlyingAsset === "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
  );

  if (!usdc) {
    return new Response("USDC not found", {
      status: 404,
    });
  }

  const apy = getAPY(usdc.liquidityRate);
  return apy.toFixed(3);
};

export const getAPYonOP = async () => {
  const getReservesResponse = await fetch(
    `https://gateway.thegraph.com/api/${process.env.GRAPH_API_KEY}/subgraphs/id/DSfLz8oQBUeU5atALgUFQKMTSYV9mZAVYp4noLSXAfvb`,
    {
      method: "POST",
      body: JSON.stringify({
        query:
          "{\n  reserves {\n    name\n    underlyingAsset\n    liquidityRate\n  }\n}",
      }),
      cache: "no-cache",
    }
  );

  const { data } = await getReservesResponse.json();

  console.log("data", data);

  const usdc = data?.reserves.find((reserve: any) => {
    return (
      reserve.underlyingAsset === "0x0b2c639c533813f4aa9d7837caf62653d097ff85"
    );
  });

  if (!usdc) {
    return new Response("USDC not found", {
      status: 404,
    });
  }

  const apy = getAPY(usdc.liquidityRate);
  return apy.toFixed(3);
};
