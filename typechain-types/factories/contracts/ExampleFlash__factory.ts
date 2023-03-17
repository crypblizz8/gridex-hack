/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ExampleFlash,
  ExampleFlashInterface,
} from "../../contracts/ExampleFlash";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "int24",
            name: "resolution",
            type: "int24",
          },
          {
            internalType: "bool",
            name: "isToken0Borrowed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "tokenPath",
            type: "address[]",
          },
          {
            internalType: "int24[]",
            name: "resolutions",
            type: "int24[]",
          },
        ],
        internalType: "struct ExampleFlash.FlashParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "arbitrage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516112b63803806112b683398101604081905261002f9161005e565b6001600160a01b039182166080521660a052610098565b6001600160a01b038116811461005b57600080fd5b50565b6000806040838503121561007157600080fd5b825161007c81610046565b602084015190925061008d81610046565b809150509250929050565b60805160a0516111e66100d06000396000818160d301526106de01526000818160730152818161015f015261040e01526111e66000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637b17fb30146100465780637ecfb9ba1461005b578063c31c9c071461006e575b600080fd5b61005961005436600461098f565b6100be565b005b610059610069366004610c3d565b61061b565b6100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60006100cc82840184610d1c565b90506100fc7f00000000000000000000000000000000000000000000000000000000000000008260400151610803565b6000816060015160008151811061011557610115610e3c565b602090810291909101015182516040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152602482019290925291925082169063095ea7b390604401602060405180830381600087803b1580156101b657600080fd5b505af11580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610e6b565b506000826060015160008151811061020857610208610e3c565b602002602001015160405160200161024b919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052905060015b8360600151518110156103a85781600185608001516001846102a09190610eb7565b815181106102b0576102b0610e3c565b6020026020010151866060015184815181106102ce576102ce610e3c565b60200260200101516040516020016103489392919060f89390931b7fff0000000000000000000000000000000000000000000000000000000000000016835260e89190911b600183015260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016600482015260180190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526103849291602001610efe565b604051602081830303815290604052915080806103a090610f2d565b91505061027e565b506040805160a0810182528281523060208201524281830152845160608201528451608082015290517fc04b8d5900000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163c04b8d599161044191600401610fb0565b602060405180830381600087803b15801561045b57600080fd5b505af115801561046f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104939190611016565b84516040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481019190915290915073ffffffffffffffffffffffffffffffffffffffff84169063a9059cbb90604401602060405180830381600087803b15801561050757600080fd5b505af115801561051b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053f9190610e6b565b506020840151845173ffffffffffffffffffffffffffffffffffffffff85169163a9059cbb9161056f9085610eb7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381600087803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106129190610e6b565b50505050505050565b806020015173ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161061065b57600080fd5b60018160a001515161066d9190610eb7565b8160c00151511461067d57600080fd5b60006040518060600160405280836000015173ffffffffffffffffffffffffffffffffffffffff168152602001836020015173ffffffffffffffffffffffffffffffffffffffff168152602001836040015160020b815250905060006107037f000000000000000000000000000000000000000000000000000000000000000083610893565b90508073ffffffffffffffffffffffffffffffffffffffff1663490e6cbc308560600151610732576000610738565b85608001515b866060015161074b57866080015161074e565b60005b6040518060a00160405280896080015181526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018960a0015181526020018960c001518152506040516020016107a791906110b3565b6040516020818303038152906040526040518563ffffffff1660e01b81526004016107d5949392919061116b565b600060405180830381600087803b1580156107ef57600080fd5b505af1158015610612573d6000803e3d6000fd5b3361080e8383610893565b73ffffffffffffffffffffffffffffffffffffffff161461088f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f43565f4943000000000000000000000000000000000000000000000000000000604482015260640160405180910390fd5b5050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff16106108d557600080fd5b8151602080840151604080860151815173ffffffffffffffffffffffffffffffffffffffff95861694810194909452939091169082015260029190910b606082015261095e90608001604051602081830303815290604052805190602001207f884a6891a166f885bf6f0a3b330a25e41d1761a5aa091110a229d9a0e34b2c3660001b85610965565b9392505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b600080602083850312156109a257600080fd5b823567ffffffffffffffff808211156109ba57600080fd5b818501915085601f8301126109ce57600080fd5b8135818111156109dd57600080fd5b8660208285010111156109ef57600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610a5357610a53610a01565b60405290565b60405160a0810167ffffffffffffffff81118282101715610a5357610a53610a01565b6040516060810167ffffffffffffffff81118282101715610a5357610a53610a01565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610ae657610ae6610a01565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b1257600080fd5b919050565b8035600281900b8114610b1257600080fd5b8015158114610b3757600080fd5b50565b8035610b1281610b29565b600067ffffffffffffffff821115610b5f57610b5f610a01565b5060051b60200190565b600082601f830112610b7a57600080fd5b81356020610b8f610b8a83610b45565b610a9f565b82815260059290921b84018101918181019086841115610bae57600080fd5b8286015b84811015610bd057610bc381610aee565b8352918301918301610bb2565b509695505050505050565b600082601f830112610bec57600080fd5b81356020610bfc610b8a83610b45565b82815260059290921b84018101918181019086841115610c1b57600080fd5b8286015b84811015610bd057610c3081610b17565b8352918301918301610c1f565b600060208284031215610c4f57600080fd5b813567ffffffffffffffff80821115610c6757600080fd5b9083019060e08286031215610c7b57600080fd5b610c83610a30565b610c8c83610aee565b8152610c9a60208401610aee565b6020820152610cab60408401610b17565b6040820152610cbc60608401610b3a565b60608201526080830135608082015260a083013582811115610cdd57600080fd5b610ce987828601610b69565b60a08301525060c083013582811115610d0157600080fd5b610d0d87828601610bdb565b60c08301525095945050505050565b600060208284031215610d2e57600080fd5b813567ffffffffffffffff80821115610d4657600080fd5b9083019081850360e0811215610d5b57600080fd5b610d63610a59565b83358152610d7360208501610aee565b602082015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc083011215610da857600080fd5b610db0610a7c565b9150610dbe60408501610aee565b8252610dcc60608501610aee565b6020830152610ddd60808501610b17565b604083015281604082015260a0840135915082821115610dfc57600080fd5b610e0887838601610b69565b606082015260c0840135915082821115610e2157600080fd5b610e2d87838601610bdb565b60808201529695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610e7d57600080fd5b815161095e81610b29565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015610ec957610ec9610e88565b500390565b60005b83811015610ee9578181015183820152602001610ed1565b83811115610ef8576000848401525b50505050565b60008351610f10818460208801610ece565b835190830190610f24818360208801610ece565b01949350505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610f5f57610f5f610e88565b5060010190565b60008151808452610f7e816020860160208601610ece565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000825160a06020840152610fcc60c0840182610f66565b905073ffffffffffffffffffffffffffffffffffffffff60208501511660408401526040840151606084015260608401516080840152608084015160a08401528091505092915050565b60006020828403121561102857600080fd5b5051919050565b600081518084526020808501945080840160005b8381101561107557815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611043565b509495945050505050565b600081518084526020808501945080840160005b8381101561107557815160020b87529582019590820190600101611094565b60208152815160208201526000602083015173ffffffffffffffffffffffffffffffffffffffff80821660408501526040850151915080825116606085015280602083015116608085015250604081015160020b60a084015250606083015160e060c084015261112761010084018261102f565b905060808401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160e08501526111628282611080565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff851681528360208201528260408201526080606082015260006111a66080830184610f66565b969550505050505056fea2646970667358221220e3dfc139710d19dfe9f936eb18c54a3e91dae4fd2ce5a3b9fa1cf6d0b56980d664736f6c63430008090033";

type ExampleFlashConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleFlashConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleFlash__factory extends ContractFactory {
  constructor(...args: ExampleFlashConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _swapRouter: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExampleFlash> {
    return super.deploy(
      _swapRouter,
      _factory,
      overrides || {}
    ) as Promise<ExampleFlash>;
  }
  override getDeployTransaction(
    _swapRouter: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_swapRouter, _factory, overrides || {});
  }
  override attach(address: string): ExampleFlash {
    return super.attach(address) as ExampleFlash;
  }
  override connect(signer: Signer): ExampleFlash__factory {
    return super.connect(signer) as ExampleFlash__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleFlashInterface {
    return new utils.Interface(_abi) as ExampleFlashInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleFlash {
    return new Contract(address, _abi, signerOrProvider) as ExampleFlash;
  }
}
