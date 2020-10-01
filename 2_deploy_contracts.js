var electioncontract = artifacts.require("./electioncontract.sol");

module.exports = function(deployer) {
  deployer.deploy(electioncontract);
};
