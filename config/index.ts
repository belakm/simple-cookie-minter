import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  arbitrum,
  sepolia,
  optimism,
  base,
  gnosis,
} from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [mainnet, arbitrum, optimism, base, gnosis, sepolia];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  //   transports: {
  //     [mainnet.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_RPC_URL}`),
  //     [sepolia.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_RPC_URL}`),
  //     [optimism.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_OPTIMISM_RPC_URL}`),
  //     [arbitrum.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_RPC_URL}`),
  //     [base.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_BASE_RPC_URL}`),
  //     [gnosis.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_GNOSIS_RPC_URL}`),
  //   },
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

// import { cookieStorage, createStorage, createConfig, http } from "wagmi";
// import { arbitrum, base, mainnet, optimism, sepolia } from "wagmi/chains";
// import { injected } from "wagmi/connectors";

// // Get projectId from https://cloud.walletconnect.com
// export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

// if (!projectId) throw new Error("Project ID is not defined");

// const metadata = {
// 	name: "CookieJar",
// 	description: "A Web3 Slush Fund for trusted groups",
// 	url: "https://cookiejar.wtf", // origin must match your domain & subdomain
// 	icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

// // Create wagmiConfig
// const chains = [mainnet, sepolia] as const;
// export const config = defaultWagmiConfig({
// 	chains,
// 	projectId,
// 	metadata,
// 	ssr: true,
// 	storage: createStorage({
// 		storage: cookieStorage,
// 	}),
// 	transports: {
// 		[mainnet.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_RPC_URL}`),
// 		[sepolia.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_RPC_URL}`),
// 		[optimism.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_OPTIMISM_RPC_URL}`),
// 		[arbitrum.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_RPC_URL}`),
// 		[base.id]: http(`${process.env.NEXT_PUBLIC_ALCHEMY_BASE_RPC_URL}`),
// 	},
// });
