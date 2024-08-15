// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
	string public name;
	string public symbol;
	uint256 public decimals = 18; 
	uint256 public totalSupply;  

	/// Track balances///
	mapping(address => uint256) public balanceOf;

	///below after test 9, for allowance approval///
	mapping(address => mapping(address => uint256)) public allowance;
	///after above, added function approve below///

	event Transfer(
		address indexed from, 
		address indexed to, 
		uint256 value 
	);
////below after first test 10/////
	event Approval(
		address indexed owner,
		address indexed spender,
		uint256 value
	);
	
	constructor(
		string memory _name, 
		string memory _symbol, 
		uint256 _totalSupply
	){

		name = _name;
		symbol = _symbol;
		totalSupply = _totalSupply * (10**decimals);
		balanceOf[msg.sender] = totalSupply;
	}

	function transfer(
		address _to, 
		uint256 _value) 
		public returns (bool success)
	{
	
		require(balanceOf[msg.sender] >= _value);

		///line below came after first test 9///
		require(_to != address(0));   //////////

	
		balanceOf[msg.sender] = balanceOf[msg.sender] - _value;
		
		balanceOf[_to] = balanceOf[_to] + _value;

	
		emit Transfer(msg.sender, _to, _value);
		return true; 
	}
	
	function approve(
	address _spender,
	uint256 _value
	) 
	public returns(bool success) 
	{
		///line below addded after test 11///
		require(_spender != address(0));
		////////////////////////////////

		allowance[msg.sender][_spender] = _value;
		                 ///nested mapping///

		///one line below comes after test 10//return true// ///already there////
		emit Approval(msg.sender, _spender, _value);

		return true;
	}
}
