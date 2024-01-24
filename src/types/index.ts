export enum FizzBuzzOption {
  FIZZ_BUZZ = "FizzBuzz",
  FIZZ = "Fizz",
  BUZZ = "Buzz",
}

export type Option =
  | FizzBuzzOption.FIZZ_BUZZ
  | FizzBuzzOption.FIZZ
  | FizzBuzzOption.BUZZ
  | number;
