// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
	string public name;
	//after first test//
	string public symbol;
	uint256 public decimals = 18; ///this number stays///
	uint256 public totalSupply;  


	// Track balances
	mapping(address => uint256) public balanceOf;


	// Send tokens

	
	////along with above line, added msg.sender to state var's////////

	constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
		name = _name;
		symbol = _symbol;
		totalSupply = _totalSupply * (10**decimals);
		/////below line comes after late test 4 stuff///
		balanceOf[msg.sender] = totalSupply;
		
         ////when writing to the b.c., use [] with [msg.sender]////

	}
	
}