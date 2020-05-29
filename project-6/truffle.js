const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "enable actress hunt brush gadget travel salad harvest hire sick iron staff";
module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/630f69a7cc46473c884b34f5fd269c7c`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};