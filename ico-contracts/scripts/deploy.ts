// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } from "../constants/index";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const cryptoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );
  const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
    CRYPTO_DEVS_NFT_CONTRACT_ADDRESS
  );

  await deployedCryptoDevsTokenContract.deployed();

  console.log(
    "Crypto Devs Token deployed to:",
    deployedCryptoDevsTokenContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
