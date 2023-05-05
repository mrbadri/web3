const Web3 = require("web3");

const getURL = {
  infura: "https://mainnet.infura.io/v3/a9b1826d4e1441ae8c08d2fdebff62e0",
  local: "http://127.0.0.1:7545",
};

// https://etherscan.io/accounts
const address = "0xdC0f4EB5Cbb62ae7927bD3EA0f8BFc31fAb9094B";

const web3 = new Web3(getURL.infura);

web3.eth.getBalance(address).then((res) => {
  console.log(web3.utils.fromWei(res, "ether"));
});

const newAccount = web3.eth.accounts.create();
console.log(newAccount);
