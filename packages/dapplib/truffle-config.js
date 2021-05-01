require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rebel noble huge half civil army gentle'; 
let testAccounts = [
"0x06c86f2b7ed96a61f401d9675f016d35f155aa89b970a63f3ca26d4dd33488f7",
"0x337d8e2985d90031c6538c706a35c42eb3c2888f388bedca0ffc240208872b03",
"0xd04c3e23594f78350eecd0fd527d4b182a5a84ea810a99b1858d312ec1a11795",
"0x9c287461f4ef33fe637e0962fd79cdd6f395b4682c25ddeac06ea70db6daeae6",
"0x53a16cf2536bc3dfbfc21330e298d2403b989822c3e7ed555c04cb66cc7ff9f1",
"0xae3b5820864c902937d8f6a80b807cafe1edbd10f39f891e254c443739928b8c",
"0xd376235da66d210d96c290ffc77c8c3ce809106cb4c52444561ed46ca285f975",
"0x5aa3200e2c2e24b344709e8a2a5d0d174103c1881a494b0d7bcc9b92a6d14fb3",
"0x0d60ec229dc9c42c477564e6762ed97d6b0b683e09f895ee1ea38e1f33d8e13d",
"0x6fe235c8e4fde1f459cfb5ae1c8b036327ea9366d31406543b3700298a682ed1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
