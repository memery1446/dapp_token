async function main() {
  //fetch contract//
  const Token = await ethers.getContractFactory("Token")

  //deploy contract//
  const token = await Token.deploy('Dapp University', 'DAPP', '1000000')
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`) ///back tcks///

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
