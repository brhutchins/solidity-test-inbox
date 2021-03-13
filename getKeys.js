const path = require('path');
const fs = require('fs');

// It would be better to do this with a json file, but this will do for now
function loadKey(keyName) {
    var keyPath = path.resolve(__dirname, 'keys', keyName);
    return fs.readFileSync(keyPath, 'utf8').trim();
}

const mnemonic = loadKey('mnemonic');
const infuraRinkeby = loadKey('infura-rinkeby');

exports.mnemonic = mnemonic;
exports.infuraRinkeby = infuraRinkeby;
