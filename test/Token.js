const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {
	

	it('has correct name', async () => {
		//check name is correct//
		// fetch, read, verify///
		const Token = await ethers.getContractFactory('Token') //fetch//
		let token = await Token.deploy() //deploy//
		const name = await token.name()  //read//
		expect(name).to.equal('Dapp University') //verify//
///this plus two })'s ends the first test/////
})
	it('has correct symbol', async () => {
		//fetch//
		const Token = await ethers.getContractFactory('Token')
		let token = await Token.deploy()
		// read //
		const symbol = await token.symbol
		// verify //
		expect(symbol).to.equal('DAPP')
	})
		

	})
