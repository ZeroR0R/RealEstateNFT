var RealEstateNFT = artifacts.require("./RealEstateOwnership.sol");

module.exports = function(deployer) {
    // Demo is the contract's name
    deployer.deploy(RealEstateNFT);
};