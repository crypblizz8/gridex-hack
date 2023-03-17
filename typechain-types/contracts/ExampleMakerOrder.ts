/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ExampleMakerOrderInterface extends utils.Interface {
  functions: {
    "RESOLUTION()": FunctionFragment;
    "USDC()": FunctionFragment;
    "WETH9()": FunctionFragment;
    "makerOrderManager()": FunctionFragment;
    "placeMakerOrderForUSDC(uint128)": FunctionFragment;
    "placeMakerOrderForWETH9(uint128)": FunctionFragment;
    "settleAndCollect(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "RESOLUTION"
      | "USDC"
      | "WETH9"
      | "makerOrderManager"
      | "placeMakerOrderForUSDC"
      | "placeMakerOrderForWETH9"
      | "settleAndCollect"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "RESOLUTION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "makerOrderManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "placeMakerOrderForUSDC",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "placeMakerOrderForWETH9",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "settleAndCollect",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "RESOLUTION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makerOrderManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "placeMakerOrderForUSDC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "placeMakerOrderForWETH9",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleAndCollect",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ExampleMakerOrder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExampleMakerOrderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    RESOLUTION(overrides?: CallOverrides): Promise<[number]>;

    USDC(overrides?: CallOverrides): Promise<[string]>;

    WETH9(overrides?: CallOverrides): Promise<[string]>;

    makerOrderManager(overrides?: CallOverrides): Promise<[string]>;

    placeMakerOrderForUSDC(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    placeMakerOrderForWETH9(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settleAndCollect(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  RESOLUTION(overrides?: CallOverrides): Promise<number>;

  USDC(overrides?: CallOverrides): Promise<string>;

  WETH9(overrides?: CallOverrides): Promise<string>;

  makerOrderManager(overrides?: CallOverrides): Promise<string>;

  placeMakerOrderForUSDC(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  placeMakerOrderForWETH9(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settleAndCollect(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    RESOLUTION(overrides?: CallOverrides): Promise<number>;

    USDC(overrides?: CallOverrides): Promise<string>;

    WETH9(overrides?: CallOverrides): Promise<string>;

    makerOrderManager(overrides?: CallOverrides): Promise<string>;

    placeMakerOrderForUSDC(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    placeMakerOrderForWETH9(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    settleAndCollect(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    RESOLUTION(overrides?: CallOverrides): Promise<BigNumber>;

    USDC(overrides?: CallOverrides): Promise<BigNumber>;

    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    makerOrderManager(overrides?: CallOverrides): Promise<BigNumber>;

    placeMakerOrderForUSDC(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    placeMakerOrderForWETH9(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settleAndCollect(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    RESOLUTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    makerOrderManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    placeMakerOrderForUSDC(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    placeMakerOrderForWETH9(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settleAndCollect(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}