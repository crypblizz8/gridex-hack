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
  PayableOverrides,
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
} from "../../common";

export declare namespace ISwapRouter {
  export type ExactInputParametersStruct = {
    path: PromiseOrValue<BytesLike>;
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
    amountIn: PromiseOrValue<BigNumberish>;
    amountOutMinimum: PromiseOrValue<BigNumberish>;
  };

  export type ExactInputParametersStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    path: string;
    recipient: string;
    deadline: BigNumber;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
  };

  export type ExactInputSingleParametersStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    resolution: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
    amountIn: PromiseOrValue<BigNumberish>;
    amountOutMinimum: PromiseOrValue<BigNumberish>;
    priceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type ExactInputSingleParametersStructOutput = [
    string,
    string,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    resolution: number;
    recipient: string;
    deadline: BigNumber;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
    priceLimitX96: BigNumber;
  };

  export type ExactOutputParametersStruct = {
    path: PromiseOrValue<BytesLike>;
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
    amountOut: PromiseOrValue<BigNumberish>;
    amountInMaximum: PromiseOrValue<BigNumberish>;
  };

  export type ExactOutputParametersStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    path: string;
    recipient: string;
    deadline: BigNumber;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
  };

  export type ExactOutputSingleParametersStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    resolution: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
    amountOut: PromiseOrValue<BigNumberish>;
    amountInMaximum: PromiseOrValue<BigNumberish>;
    priceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type ExactOutputSingleParametersStructOutput = [
    string,
    string,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    resolution: number;
    recipient: string;
    deadline: BigNumber;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
    priceLimitX96: BigNumber;
  };
}

export interface ISwapRouterInterface extends utils.Interface {
  functions: {
    "exactInput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
    "exactInputSingle((address,address,int24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
    "exactOutput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
    "exactOutputSingle((address,address,int24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exactInput"
      | "exactInputSingle"
      | "exactOutput"
      | "exactOutputSingle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exactInput",
    values: [ISwapRouter.ExactInputParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [ISwapRouter.ExactInputSingleParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [ISwapRouter.ExactOutputParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [ISwapRouter.ExactOutputSingleParametersStruct]
  ): string;

  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwapRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapRouterInterface;

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
    exactInput(
      parameters: ISwapRouter.ExactInputParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exactInputSingle(
      parameters: ISwapRouter.ExactInputSingleParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exactOutput(
      parameters: ISwapRouter.ExactOutputParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exactOutputSingle(
      parameters: ISwapRouter.ExactOutputSingleParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  exactInput(
    parameters: ISwapRouter.ExactInputParametersStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exactInputSingle(
    parameters: ISwapRouter.ExactInputSingleParametersStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exactOutput(
    parameters: ISwapRouter.ExactOutputParametersStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exactOutputSingle(
    parameters: ISwapRouter.ExactOutputSingleParametersStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exactInput(
      parameters: ISwapRouter.ExactInputParametersStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInputSingle(
      parameters: ISwapRouter.ExactInputSingleParametersStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutput(
      parameters: ISwapRouter.ExactOutputParametersStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutputSingle(
      parameters: ISwapRouter.ExactOutputSingleParametersStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    exactInput(
      parameters: ISwapRouter.ExactInputParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exactInputSingle(
      parameters: ISwapRouter.ExactInputSingleParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exactOutput(
      parameters: ISwapRouter.ExactOutputParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exactOutputSingle(
      parameters: ISwapRouter.ExactOutputSingleParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exactInput(
      parameters: ISwapRouter.ExactInputParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exactInputSingle(
      parameters: ISwapRouter.ExactInputSingleParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exactOutput(
      parameters: ISwapRouter.ExactOutputParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exactOutputSingle(
      parameters: ISwapRouter.ExactOutputSingleParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
