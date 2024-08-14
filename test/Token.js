///late in test 4, build constructor///
///then describe deployment after test 4 at4/////


const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {                                   
	return ethers.utils.parseUnits(n.toString(), 'ether')

}

describe('Token', () => {
	let token

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token')
		token = await Token.deploy('Dapp University', 'DAPP', '1000000')
		          ///the values above come from building constructor//
		/////up thru test 4, skip down to it has correct name////
	})
////////////////////
describe('Deployment', () => {
/////the this container added after test 4 and constructor//
	const name = 'Dapp University'
	const symbol = 'DAPP'
	const decimals = '18'
	const totalSupply = tokens('1000000')

	it('has correct name', async () => {
		//expect(await token.name()).to.equal('Dapp University')// 
		///above until const under desc.'depl'
		expect(await token.name()).to.equal(name)
	})
	it('has correct symbol', async () => {
		//expect(await token.symbol()).to.equal('DAPP')//
		////read note above////
		expect(await token.symbol()).to.equal(symbol) 

	})
	it('has correct decimals', async () => {
		expect(await token.decimals()).to.equal(decimals) //note above//
	})

	it('has correct total supply', async () => {
		expect(await token.totalSupply()).to.equal(totalSupply)//note above//
	})
})


})

