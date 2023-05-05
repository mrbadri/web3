const Web3 = require("web3");
const ABI = require("./contracts/tether/ABI.json");

const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const address = "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503";

const getURL = {
  infura: "https://mainnet.infura.io/v3/a9b1826d4e1441ae8c08d2fdebff62e0",
  local: "http://127.0.0.1:7545",
};

const web3 = new Web3(getURL.infura);
const contract = new web3.eth.Contract(ABI, contractAddress);

console.log(contract.methods);

// contract.methods.name().call().then(console.log);

// contract.methods.symbol().call().then(console.log);

// contract.methods.totalSupply().call().then(console.log);

// contract.methods.MAX_UINT().call().then(console.log);

contract.methods.balances(address).call().then(console.log);
