"use client";
import { MetaMaskSDK } from "@metamask/sdk";
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

export default function Home() {
  const MMSK = new MetaMaskSDK({
    dappMetadata: {
      name: "Create Web3 App",
      url: window.location.href,
    },
  });
  const ethereum = MMSK.getProvider();
  if (!ethereum) return;

  const client = createWalletClient({
    chain: mainnet,
    transport: custom(ethereum),
  });

  const handleConnect = async () => {
    console.log(ethereum);
    await ethereum.request({ method: "eth_requestAccounts", params: [] });
    const [address] = await client.getAddresses();
    if (address) {
      const signature = await client.signMessage({
        account: address,
        message: "hello world",
      });
      console.log("Signature:", signature);
    }
  };

  return (
    <main>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center gap-8 justify-center">
        <h1 className="text-6xl font-bold text-center">Create Web3 App</h1>
        <button
          onClick={handleConnect}
          className="bg-gray-300 hover:bg-gray-400 rounded-lg p-3 duration-150"
        >
          Connect Wallet
        </button>
        <div className="bg-gray-300 lg:w-1/3 rounded-xl border-black border-2 h-[60vh] w-1/2"></div>
      </div>
    </main>
  );
}
