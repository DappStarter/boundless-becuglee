require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile proof grace brick flush success'; 
let testAccounts = [
"0x34710995839ccf1be1106aa8ee8c2bab3479114047a0c4bd74dd233f29b85647",
"0xe2d0da4228a1a70febff0284785564b6ed4bb17d7f0a5f80efa9802694f1ade6",
"0xae5ff2046e2560d4ab37ee985808b2c5a7bca4ccf35095a49ff6b499cdfc5b88",
"0x7146d48d633d36a43e64d00bcdb0d559f652857996200f28ce8a2fe31f59ceb3",
"0x40ac41deb351ca536c62c3aaf450571a0133d7675cd24f4454a29e372bca6021",
"0x23b240a0d2ae87787571be34201d2de002eecd381e8903a22bcb98f0c47c84d1",
"0xdd1798cb63808f7e08cec1c18139a5fe953e98ee735ce738e10582656c91078f",
"0x6cc9e661ede0b46dec55791ced32285ab0718398415ad25edfcfd927a552084c",
"0xe6295a17ff66bc334aa2d70871ed0a32589d9bc582ce8e02dc8a27a413842a8f",
"0x1909076afb462f045d93eda4d818156557c460a87dab9428846636c20a245c72"
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
