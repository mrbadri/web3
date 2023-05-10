const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

const fromAddress = "0xd05b804FF3A513645ce1faB5909546C9E72e0eD8";
const toAddress = "0x3B7ca7e8e3fF62391fb9F6E1f4b60665E6ab7922";
const value = web3.utils.toWei("1", "ether");

web3.eth
  .sendTransaction({
    from: fromAddress,
    to: toAddress,
    value: value,
  })
  .then((receipt) => {
    console.log("Transaction receipt:", receipt);
  })
  .catch((error) => {
    console.error("Error sending transaction:", error);
  });
