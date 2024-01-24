import { fizzBuzz, is_palindrome } from "./services";
import { question, showMenu } from "./utils";
import colors from "colors";

async function app() {
  let isRestart: boolean = true;
  let count: string;
  let word: string;

  while (isRestart) {
    showMenu();

    const option = await question(colors.rainbow("Choose Application : "));

    switch (option) {
      case "1":
        word = await question(colors.white.bold("Input Word (abba) : "));
        is_palindrome(word);
        break;
      case "2":
        count = await question(colors.white.bold("Input Count (1-100) : "));
        fizzBuzz(+count);
        break;
      case "3":
        process.exit(0);
      default:
        console.log(colors.bgRed("App doesn't exists"));
        break;
    }
  }
}

export default app;
