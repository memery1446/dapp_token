const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {
	let token

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token')
		token = await Token.deploy()
	})

	it('has correct name', async () => {
		//check name is correct//
		// fetch, read, verify///now in beforeEach///
		////FIRST///const name = await token.name()  //read//
		/////expect(name).to.equal('Dapp University') //verify//
///this plus two })'s ends the first test, first time, then below/////
		//adj after second test///longer///

		expect(await token.name()).to.equal('Dapp University') //lng vsn//
})
	it('has correct symbol', async () => {
		//fetch//
		
		// read //
		////FIRST////const symbol = await token.symbol()
		// verify //
		//////expect(symbol).to.equal('DAPP')

		////end of second text first time, then below adj..////

		expect(await token.symbol()).to.equal('DAPP') //longer vers.//

	})
	it('has correct decimals', async () => {
		expect(await token.decimals()).to.equal('18')
	})
	it('has a total supply', async () => {
		const value = ethers.utils.parseUnits('1000000', 'ether')
		expect(await token.totalSupply()).to.equal(value)
	})
})

