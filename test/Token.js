const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {                                   
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
	let token, accounts, deployer

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token')
		token = await Token.deploy('Dapp University', 'DAPP', '1000000')
	
	////lines below comes with test 5 deployer totalbal/////
		accounts = await ethers.getSigners()//add///////////
		deployer = accounts[0]///these to 'let' under descr//
	})//////////////////////////////////////////////////////

describe('Deployment', () => {
	const name = 'Dapp University'
	const symbol = 'DAPP'
	const decimals = '18'
	const totalSupply = tokens('1000000')

	it('has correct name', async () => {
		expect(await token.name()).to.equal(name)
	})

	it('has correct symbol', async () => {
		expect(await token.symbol()).to.equal(symbol) 
	})

	it('has correct decimals', async () => {
		expect(await token.decimals()).to.equal(decimals) 
	})

	it('has correct total supply', async () => {
		expect(await token.totalSupply()).to.equal(totalSupply)
	})

	it('assigns total supply to deployer', async () => {
		
		///cconsole.log(deployer.address)////doing this to see who dep is///
		expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
		///here, node//..ethers.getSigners() in beforeEach///

	})
})




})