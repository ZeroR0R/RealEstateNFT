// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract RealEstateOwnership is ERC721("Real Estate NFT", "REO") {
// Identify Owner of the contract
    address owner;

    constructor() {
        owner = msg.sender;
        _mint(owner, 0);

    }

// Create a function to mint tokens with a standard ID syntax
// Token ID should include bathrooms, beds, square feet (area), zip code, year built. 
// Potential to add city, state, country, and others however this would be difficut with only integers

    function createRealEstateToken(uint _beds, uint _bath, uint _sqft, uint _zip, uint _yearBuilt) public {

        _mint(msg.sender, _sqft);

    }

}
