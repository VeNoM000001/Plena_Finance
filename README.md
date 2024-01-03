# Plena Finance Task 1

You have to transfer the Testnet BNB available in the contract below to your BSC address.
Contract Address:0x439D8294CA6405e8f6E424299d84C43d7dFF19cC

```js
pragma solidity 0.8.0;

contract Test{
    function transferFunds(address _address, bytes calldata _payload) external {
        (bool status,) = _address.delegatecall(_payload);
        require(status, "Forwarded call failed.");
    }
}
```

## Tech Stack

- Solidity
- Javascript
- Ethers

## Install

Download the zipped directory of this project by clicking on the green button above or clone it to your machine using the following command

```git
git clone https://github.com/VeNoM000001/Plena_Finance_Task_1.git
```

After installing the project, go to the root directory of this project and hit the command below

```bash
npm i
```
