const { ethers } = require("ethers");
const { config } = require("dotenv");
const contractABI = require("../contractABI/abi.json");

config();

const privateKey = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;
const recipientAddress = process.env.RECIPIENT_ADDRESS;
const quicknodeUrl = process.env.QUICKNODE_API_URL;

async function transferFunds() {
  const provider = new ethers.providers.JsonRpcProvider(quicknodeUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  //   {
  //     constant: false,
  //     inputs: [
  //       {
  //         name: "_address",
  //         type: "address",
  //       },
  //       {
  //         name: "_payload",
  //         type: "bytes",
  //       },
  //     ],
  //     name: "transferFunds",
  //     outputs: [],
  //     payable: false,
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  // ];

  const contract = new ethers.Contract(contractAddress, [contractABI], wallet);

  try {
    const payload = contract.interface.encodeFunctionData("transferFunds", [
      recipientAddress,
    ]);
    const tx = await contract.transferFunds(recipientAddress, {
      gasLimit: 21433,
    });
    await tx.wait();
    console.log("Transaction hash:", tx.hash);
  } catch (error) {
    console.error("Error:", error);
  }
}

transferFunds();
