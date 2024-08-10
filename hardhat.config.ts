import type { HardhatUserConfig } from "hardhat/config";
require("@nomicfoundation/hardhat-viem")
require('hardhat-abi-exporter')
require("dotenv").config();

interface HardhatUserConfigWithAbiExporter extends HardhatUserConfig {
  abiExporter: {
    path: string
    runOnCompile: boolean
    clear: boolean
    flat: boolean
  }
}

const config: HardhatUserConfigWithAbiExporter = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.NETWORK_URL,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  paths: {
    sources: "./src/contracts"
  },
  abiExporter:  {
    path: './src/contracts/abis',
    runOnCompile: true,
    clear: true,
    flat: true
  }
};

export default config;
