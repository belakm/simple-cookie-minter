import { Config, useWalletClient } from "wagmi";
import { writeContract, simulateContract } from "wagmi/actions";
import type { IClaimFromJarFormInput } from "@/components/ClaimFromJarForm";

import { CookieJarCore } from "../abis";
import { wagmiConfig } from "@/config/wagmi";
export const useReachInJar = () => {
  const walletClient = useWalletClient();

  const reachInCookieJar = async (claimData: IClaimFromJarFormInput) => {
    if (!walletClient) {
      throw new Error("Not connected to wallet");
    }
    console.log("claim data jar address:", claimData.cookieJarAddress);

    const { request } = await simulateContract(wagmiConfig, {
      address: claimData.cookieJarAddress,
      abi: CookieJarCore,
      functionName: "reachInJar",
      args: [claimData.cookieMonster, claimData.reason],
    });

    return await writeContract(wagmiConfig, request);
  };

  return {
    reachInCookieJar,
  };
};
