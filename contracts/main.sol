// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract RealEstateOwnership is ERC721("Real Estate NFT", "REO") {
// Identify Owner of the contract
    address owner;

    constructor() {
        owner = msg.sender;
        _mint(owner, 990302001800400812006);

    }

// Create a function to mint tokens with a standard ID syntax
// Token ID should include bathrooms, beds, square feet (area), zip code, year built. 
// Potential to add city, state, country, and others however this would be difficut with only integers

    function createRealEstateToken(uint _beds, uint _bath, uint _sqft, uint _zip, uint _yearBuilt) public {
        // Syntax should go as follows, two 9s for padding (Exactly similar houses for example), Beds (2), Bathrooms (2),
        // Sqft (6), zip (5), year built (4). 21 digits, 000000000000000000000
        // Example: 3 beds, 2 baths, 1800 sqft, 40081 zip, built in 2006 would equate to:
        // 990302001800400812006
        _mint(msg.sender, _beds);

    }

}
