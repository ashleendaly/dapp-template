import type { HardhatUserConfig } from "hardhat/config";
import 'hardhat-abi-exporter'

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
  paths: {
    sources: "./src/contracts",
  },
  abiExporter:  {
    path: './src/contracts/abis',
    runOnCompile: true,
    clear: true,
    flat: true
  }
};

export default config;
