const { expect } = require('chai');
const { ethers } = require('hardhat');

//this comes after test 4///////////////////////////////////
const tokens = (n) => {                                   //
	return ethers.utils.parseUnits(n.toString(), 'ether')///
////////////////////////////////////////////////////////////

}

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
		///line below comes after test 4///
		const value = tokens('1000000')

		///line below good through test 4, then above+ln5-6////
		///const value = 
		///ethers.utils.parseUnits('1000000', 'ether')
		///above from ethers library///
		expect(await token.totalSupply()).to.equal(value)
	})
})

