/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGrid,
  IGridInterface,
} from "../../../../../@gridexprotocol/core/contracts/interfaces/IGrid";

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "boundary",
        type: "int24",
      },
    ],
    name: "boundaries0",
    outputs: [
      {
        internalType: "uint64",
        name: "bundle0Id",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "bundle1Id",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "makerAmountRemaining",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "boundary",
        type: "int24",
      },
    ],
    name: "boundaries1",
    outputs: [
      {
        internalType: "uint64",
        name: "bundle0Id",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "bundle1Id",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "makerAmountRemaining",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "wordPos",
        type: "int16",
      },
    ],
    name: "boundaryBitmaps0",
    outputs: [
      {
        internalType: "uint256",
        name: "word",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "wordPos",
        type: "int16",
      },
    ],
    name: "boundaryBitmaps1",
    outputs: [
      {
        internalType: "uint256",
        name: "word",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "bundleId",
        type: "uint64",
      },
    ],
    name: "bundles",
    outputs: [
      {
        internalType: "int24",
        name: "boundaryLower",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "zero",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "makerAmountTotal",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerAmountRemaining",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "takerAmountRemaining",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "takerFeeAmountRemaining",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount0Requested",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1Requested",
        type: "uint128",
      },
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint160",
            name: "priceX96",
            type: "uint160",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "int24",
                name: "boundaryLower",
                type: "int24",
              },
              {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
              },
            ],
            internalType:
              "struct IGridParameters.BoundaryLowerWithAmountParameters[]",
            name: "orders0",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "int24",
                name: "boundaryLower",
                type: "int24",
              },
              {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
              },
            ],
            internalType:
              "struct IGridParameters.BoundaryLowerWithAmountParameters[]",
            name: "orders1",
            type: "tuple[]",
          },
        ],
        internalType: "struct IGridParameters.InitializeParameters",
        name: "parameters",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [
      {
        internalType: "uint256[]",
        name: "orderIds0",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "orderIds1",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint64",
        name: "bundleId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "bool",
            name: "zero",
            type: "bool",
          },
          {
            internalType: "int24",
            name: "boundaryLower",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
        ],
        internalType: "struct IGridParameters.PlaceOrderParameters",
        name: "parameters",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "placeMakerOrder",
    outputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "bool",
            name: "zero",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "int24",
                name: "boundaryLower",
                type: "int24",
              },
              {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
              },
            ],
            internalType:
              "struct IGridParameters.BoundaryLowerWithAmountParameters[]",
            name: "orders",
            type: "tuple[]",
          },
        ],
        internalType: "struct IGridParameters.PlaceOrderInBatchParameters",
        name: "parameters",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "placeMakerOrderInBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "orderIds",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resolution",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "settleMakerOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "unwrapWETH9",
        type: "bool",
      },
    ],
    name: "settleMakerOrderAndCollect",
    outputs: [
      {
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "orderIds",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "unwrapWETH9",
        type: "bool",
      },
    ],
    name: "settleMakerOrderAndCollectInBatch",
    outputs: [
      {
        internalType: "uint128",
        name: "amount0Total",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1Total",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slot0",
    outputs: [
      {
        internalType: "uint160",
        name: "priceX96",
        type: "uint160",
      },
      {
        internalType: "int24",
        name: "boundary",
        type: "int24",
      },
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "unlocked",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
      {
        internalType: "uint160",
        name: "priceLimitX96",
        type: "uint160",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "takerFee",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "tokensOweds",
    outputs: [
      {
        internalType: "uint128",
        name: "token0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "token1",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IGrid__factory {
  static readonly abi = _abi;
  static createInterface(): IGridInterface {
    return new utils.Interface(_abi) as IGridInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IGrid {
    return new Contract(address, _abi, signerOrProvider) as IGrid;
  }
}
