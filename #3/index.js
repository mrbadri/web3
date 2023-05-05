const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/a9b1826d4e1441ae8c08d2fdebff62e0"
);

const newAccount = web3.eth.accounts.create();
console.log(newAccount);

const account1 = "0x8B415221F430fEDa25fB297F42839de4A1e766ed";
const privateKey1 =
  "0x52cd2d679086deef35d12e75d4bdd88a54f262cf64ef70f33f2f854cf99e0c9e";

const account2 = "0xA2b0dc0F2474f793c2Adec60b3dA88DCaEB1d844";
const privateKey2 =
  "0xe5daddbe2f48c71d0eb85083e2fd3419caeab0a6f5e4ebfaec6110258a016201";

web3.eth.getBalance(account1).then((res) => console.log("1:", res));
web3.eth.getBalance(account2).then((res) => console.log("2:", res));


// Not yet compelted!