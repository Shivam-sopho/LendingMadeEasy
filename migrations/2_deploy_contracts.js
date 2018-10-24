const lendingRequest = artifacts.require("./lendingRequest.sol");

module.exports = function(deployer) {
  deployer.deploy(lendingRequest);
};
