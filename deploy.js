const path = require('path');
const fs = require('fs');
const mnemonicPath = path.resolve(__dirname, 'keys', 'mnemonic');
const mnemonic = fs.readFileSync(mnemonicPath, 'utf8');

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(

);
