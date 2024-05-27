import type { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    sources: "./src/contracts",
  },
};

export default config;
