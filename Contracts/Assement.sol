
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BarbieToken is ERC20, Ownable {
    constructor() ERC20("BarbieToken", "BRB") {
        // Initial mint of 1000 tokens to the contract owner
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    // Function to mint 1000 tokens, callable only by the contract owner
    function mintTokens() public onlyOwner {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    // Function to get the balance of the connected MetaMask account
    function getBalance(address account) public view returns (uint256) {
        return balanceOf(account);
    }
}
