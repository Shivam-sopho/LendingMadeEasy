const lendingRequests = artifacts.require("./lendingRequests.sol");

module.exports = function(deployer) {
  deployer.deploy(lendingRequests);
};
