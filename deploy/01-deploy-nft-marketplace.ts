import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = await hre.deployments;

  await deploy("FakeNFTMarketplace", {
    from: deployer,
    log: true,
  });
};
export default func;
