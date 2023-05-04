const Web3 = require("web3");
const URL = "https://mainnet.infura.io/v3/a9b1826d4e1441ae8c08d2fdebff62e0";
const address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

const web3 = new Web3(URL);

let balance = "0";

web3.eth.getBalance(address).then((res) => {
  balance = res;
  console.log(web3.utils.fromWei(balance, "ether"));
});

// web3.utils.fromWei(, "ether");

// console.log(web3(URL));
// web3.eth.getBalance(address, (error, balance) => {
//   console.log(balance);
// });
