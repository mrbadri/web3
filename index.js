const Web3 = require("web3");
const URL = "https://mainnet.infura.io/v3/a9b1826d4e1441ae8c08d2fdebff62e0";
const ganacheURL = "http://127.0.0.1:7545";
const builtInURL = Web3.givenProvider || "ws://localhost:8545";

const address = "0xdC0f4EB5Cbb62ae7927bD3EA0f8BFc31fAb9094B";

const web3 = new Web3(ganacheURL);

const getBalance = (address) => {
  web3.eth.getBalance(address).then((res) => {
    console.log(web3.utils.fromWei(res, "ether"));
  });
};

const newAccount = web3.eth.accounts.create();

console.log(newAccount);

getBalance(address);
