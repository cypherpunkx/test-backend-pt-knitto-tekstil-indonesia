import { FizzBuzzOption, Option } from "../types";
import colors from "colors";

function is_palindrome(input: string): void {
  const reversedWord: string = input.split("").reverse().join("").toString();
  const cleanWord: string = input.trim();
  const result: string =
    cleanWord === reversedWord
      ? colors.bgGreen.bold("This Is A Palindrome")
      : colors.bgRed.black.bold("Not Palindrome");

  console.log(result);
}

function fizzBuzz(count: number): void {
  let result: Option[] = [];

  for (let index = 1; index < count + 1; index++) {
    const isFizzBuzz: boolean = index % 3 === 0 && index % 5 === 0;
    const isFizz: boolean = index % 3 === 0;
    const isBuzz: boolean = index % 5 === 0;

    if (isFizzBuzz) {
      result.push(FizzBuzzOption.FIZZ_BUZZ);
    } else if (isFizz) {
      result.push(FizzBuzzOption.FIZZ);
    } else if (isBuzz) {
      result.push(FizzBuzzOption.BUZZ);
    } else {
      result.push(index);
    }
  }

  console.log(colors.random(result.join("\n")));
}

export { is_palindrome, fizzBuzz };
