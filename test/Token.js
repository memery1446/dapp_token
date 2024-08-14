const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {

	it('has a name', async () => {
		//check name is correct//
		// fetch, read, verify///
		const Token = ethers.getContractFactory('Token') //fetch//
		let token = await Token.deploy() //deploy//
		const name = await token.name()  //read//
		expect(name).to.equal('My Token') //verify//
	})
})