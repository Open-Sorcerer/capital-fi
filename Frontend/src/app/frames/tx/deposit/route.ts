import { TransactionTargetResponse, getFrameMessage } from "frames.js";
import { NextRequest, NextResponse } from "next/server";
import { Abi, encodeFunctionData, parseEther, parseUnits } from "viem";
import { contractAddresses, USDC } from "@/lib/constants";
import { contractABI } from "@/lib/CapitalFi";
import { base } from "viem/chains";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const { searchParams } = new URL(req.url);

  const referrer =
    searchParams.get("referrer") ??
    "0x3039e4a4a540F35ae03A09f3D5A122c49566f919";

  console.log("referrer", referrer);

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  const amt = parseUnits(frameMessage.inputText?.toString() ?? "1", 6);

  const calldata = encodeFunctionData({
    abi: contractABI,
    functionName: "userDeposit",
    args: [USDC.base, amt, referrer],
  });

  return NextResponse.json({
    chainId: `eip155:${base.id}`,
    method: "eth_sendTransaction",
    params: {
      abi: contractABI as Abi,
      to: contractAddresses.base as `0x${string}`,
      data: calldata,
      value: parseEther("0.0001").toString(),
    },
  });
}
