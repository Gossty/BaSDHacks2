const main = async () => {
  const ERC20Factory = await hre.ethers.getContractFactory("ERC20Factory");
  const factoryContract = await ERC20Factory.deploy();
  await factoryContract.deployed();
  console.log("Factory Contract deployed to:", factoryContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
