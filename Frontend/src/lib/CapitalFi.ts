export const contractABI = [
    {
      "type": "constructor",
      "inputs": [
        { "name": "_owner", "type": "address", "internalType": "address" },
        { "name": "_ccipRouter", "type": "address", "internalType": "address" },
        { "name": "_link", "type": "address", "internalType": "address" },
        {
          "name": "_addressProvider",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "WithdrawLink",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" },
        { "name": "spender", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        { "name": "spender", "type": "address", "internalType": "address" },
        { "name": "value", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        { "name": "account", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "bridgeAndSupplyToDefi",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" },
        {
          "name": "_destinationToken",
          "type": "address",
          "internalType": "address"
        },
        { "name": "_receiver", "type": "address", "internalType": "address" },
        {
          "name": "_gasFeeAmount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_destinationChainSelector",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "outputs": [
        { "name": "messageId", "type": "bytes32", "internalType": "bytes32" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "getContractErc20Balance",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getLinkAddress",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getOwnerAddr",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRouterAddress",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTokenAmountMessage",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" },
        { "name": "_amount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct Client.EVMTokenAmount[]",
          "components": [
            { "name": "token", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "getTotalPool",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getUserErc20Balance",
      "inputs": [
        { "name": "_user", "type": "address", "internalType": "address" },
        { "name": "_token", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getUserShares",
      "inputs": [
        { "name": "_user", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isWhitelisted",
      "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setOwner",
      "inputs": [
        { "name": "_owner", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setWhitelist",
      "inputs": [
        { "name": "_whitelist", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supplyToDefi",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalProtocolValue",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "value", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        { "name": "from", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "value", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateProtocolValue",
      "inputs": [
        { "name": "_newPoolSize", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "userDeposit",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" },
        { "name": "_amount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "_affiliateAddr",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "userWithdraw",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" },
        { "name": "_aToken", "type": "address", "internalType": "address" },
        { "name": "_shares", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawBridgeAndSupply",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" },
        {
          "name": "_destinationToken",
          "type": "address",
          "internalType": "address"
        },
        { "name": "_receiver", "type": "address", "internalType": "address" },
        {
          "name": "_gasFeeAmount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_destinationChainSelector",
          "type": "uint64",
          "internalType": "uint64"
        },
        { "name": "_aToken", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawFromDefi",
      "inputs": [
        { "name": "_token", "type": "address", "internalType": "address" },
        { "name": "_aTokenAddr", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LendMessageSent",
      "inputs": [
        {
          "name": "messageId",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        },
        {
          "name": "token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "destinationChainSelector",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "gasFeeAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetOwner",
      "inputs": [
        {
          "name": "oldOwner",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "NewOwner",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SuppliedToDefi",
      "inputs": [
        {
          "name": "Token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "TotalTokenBalance",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdatedProtocolValue",
      "inputs": [
        {
          "name": "TotalProtocolValue",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "WithdrawBridgeAndSupplied",
      "inputs": [
        {
          "name": "Token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "Receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "GasFeesAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "DestinationChainSelector",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "WithdrawedFromDefi",
      "inputs": [
        {
          "name": "Token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "totalAtokenBalance",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "CapitalFi__AddressCantBeZero", "inputs": [] },
    { "type": "error", "name": "CapitalFi__AmountCantBeZero", "inputs": [] },
    { "type": "error", "name": "CapitalFi__FailedToReceived", "inputs": [] },
    { "type": "error", "name": "CapitalFi__FailedToSendEther", "inputs": [] },
    { "type": "error", "name": "CapitalFi__LiquidityIssue", "inputs": [] },
    {
      "type": "error",
      "name": "CapitalFi__NotEnoughLinkBalance",
      "inputs": [
        {
          "name": "currentBalance",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "calculatedFees",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    { "type": "error", "name": "CapitalFi__NotEnoughShares", "inputs": [] },
    {
      "type": "error",
      "name": "CapitalFi__OnlyOwnerCanCall",
      "inputs": [
        { "name": "caller", "type": "address", "internalType": "address" },
        { "name": "owner", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "CapitalFi__OnlyWhitelistedAddr",
      "inputs": [
        { "name": "caller", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InsufficientAllowance",
      "inputs": [
        { "name": "spender", "type": "address", "internalType": "address" },
        { "name": "allowance", "type": "uint256", "internalType": "uint256" },
        { "name": "needed", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InsufficientBalance",
      "inputs": [
        { "name": "sender", "type": "address", "internalType": "address" },
        { "name": "balance", "type": "uint256", "internalType": "uint256" },
        { "name": "needed", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidApprover",
      "inputs": [
        { "name": "approver", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidReceiver",
      "inputs": [
        { "name": "receiver", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSender",
      "inputs": [
        { "name": "sender", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSpender",
      "inputs": [
        { "name": "spender", "type": "address", "internalType": "address" }
      ]
    }
  ]
