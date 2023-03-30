import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const fakeNftMarketplace = (await ethers.getContract("FakeNFTMarketplace"))
    .address;

  await deploy("CryptoDevsDAO", {
    from: deployer,
    log: true,
    args: [fakeNftMarketplace, process.env.NFT_ADDRESS],
  });
};
export default func;
