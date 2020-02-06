const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  const account = "0x662eb278299d1f2069a52d09f308a599a99afd39"
  web3.eth.personal.unlockAccount(account, "e2S4faYbUPm4yr1w")
  deployer.deploy(Migrations);
};
