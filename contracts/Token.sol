// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
	string public name;
	//after first test//
	string public symbol;
	uint256 public decimals = 18; 
	uint256 public totalSupply;  

	// Track balances
	mapping(address => uint256) public balanceOf;

	/// Send tokens///
	event Transfer(
	address indexed _from, 
	address indexed _to, 
	uint256 _value ///note this one not indexed//
);////above is tied to emit event below////


	constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
		name = _name;
		symbol = _symbol;
		totalSupply = _totalSupply * (10**decimals);
		
		balanceOf[msg.sender] = totalSupply;

	}

	function transfer(address _to, uint256 _value) public returns (bool success) {

		//deduct tokens from spender//
		balanceOf[msg.sender] = balanceOf[msg.sender] - _value;
		//credit receiver//
		balanceOf[_to] = balanceOf[_to] + _value;

		//emit event//
		emit Transfer(msg.sender, _to, _value);
		return true; ////recall the bool///
	}
	
}
