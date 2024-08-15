const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {                                   
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
	let token, accounts, deployer, receiver

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token')
		token = await Token.deploy('Dapp University', 'DAPP', '1000000')
	
		accounts = await ethers.getSigners()
		deployer = accounts[0]
		///receiver added for test 6/////
		receiver = accounts[1]

	})

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
		expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
	})

describe('Sending Tokens', () => {
		let amount///let amount added for test 6///

	it('transfers token balances', async () => {
		//log balance before transfer//
		console.log('deployer balance pre-transfer', await token.balanceOf(deployer.address))
		console.log('receiver balance pre-transfer', await token.balanceOf(receiver.address))

		//transfer token//
		amount = tokens(100)
		let transaction = await token.connect(deployer).transfer(receiver.address, amount)
		let result = transaction.wait()
		//ensure they're transferred//   ///

		///log bal after transfer
		console.log('deployer balance post-transfer', await token.balanceOf(deployer.address))
		console.log('receiver balance post-transfer', await token.balanceOf(receiver.address))

			///ensure tokens were transfered (balance changed)///

		/////the above concludes test 6 ////four thingy's below})////
	})
})

})




})