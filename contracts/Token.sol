// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
	string public name = 'Dapp University';
	//after first test//
	string public symbol = 'DAPP';
	uint256 public decimals = 18;
	uint256 public totalSupply = 1000000 * (10**decimals);  

	///no ''s with int's in contract///yes '1000' in .js///
	
}