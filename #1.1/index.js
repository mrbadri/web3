const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); 

const privateKey = '0xd068f7095d361bae8bb821fb09bcf0be4fc2a788e6fe96c2867066ab7f122566'; 
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const toAddress = '0x3B7ca7e8e3fF62391fb9F6E1f4b60665E6ab7922'; 
const value = web3.utils.toWei('1', 'ether'); 

web3.eth.sendTransaction({
  from: account.address,
  to: toAddress,
  value: value
})
.then((receipt) => {
  console.log('Transaction receipt:', receipt);
})
.catch((error) => {
  console.error('Error sending transaction:', error);
});
