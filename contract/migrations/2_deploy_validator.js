const OwnedSet = artifacts.require("OwnedSet");

module.exports = function(deployer) {
  const account = "0x662eb278299d1f2069a52d09f308a599a99afd39"
  web3.eth.personal.unlockAccount(account, "e2S4faYbUPm4yr1w")
  //0x2f69015da5ab33375b75b29f56e118da4e42501a
  deployer.deploy(OwnedSet, ['0x662eb278299d1f2069a52d09f308a599a99afd39', '0x59f6566306843fb7d18f782733e19223ca5f07ab','0xade4279d444bb1183e733dcc1adffa06b53d72d2']);
};
