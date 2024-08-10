const hardhat = require("hardhat");

async function deploy() {
  const contractName = "Wallets";
  try {
    const deployedContract = await hardhat.viem.deployContract(contractName);
    console.log("Contract is deployed at: ", deployedContract.address);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

deploy();
