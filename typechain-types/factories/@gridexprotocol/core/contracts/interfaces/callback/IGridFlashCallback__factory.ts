/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGridFlashCallback,
  IGridFlashCallbackInterface,
} from "../../../../../../@gridexprotocol/core/contracts/interfaces/callback/IGridFlashCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "gridexFlashCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IGridFlashCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IGridFlashCallbackInterface {
    return new utils.Interface(_abi) as IGridFlashCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGridFlashCallback {
    return new Contract(address, _abi, signerOrProvider) as IGridFlashCallback;
  }
}
