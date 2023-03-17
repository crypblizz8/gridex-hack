/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../../../../common";

export interface BoundaryMathInterface extends utils.Interface {
  functions: {
    "MAX_BOUNDARY()": FunctionFragment;
    "MIN_BOUNDARY()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "MAX_BOUNDARY" | "MIN_BOUNDARY"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_BOUNDARY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BOUNDARY",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_BOUNDARY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BOUNDARY",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BoundaryMath extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BoundaryMathInterface;

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
    MAX_BOUNDARY(overrides?: CallOverrides): Promise<[number]>;

    MIN_BOUNDARY(overrides?: CallOverrides): Promise<[number]>;
  };

  MAX_BOUNDARY(overrides?: CallOverrides): Promise<number>;

  MIN_BOUNDARY(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    MAX_BOUNDARY(overrides?: CallOverrides): Promise<number>;

    MIN_BOUNDARY(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    MAX_BOUNDARY(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BOUNDARY(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_BOUNDARY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_BOUNDARY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
