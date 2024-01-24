import readline from "readline/promises";
import colors from "colors";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function question(label: string) {
  return await rl.question(label);
}

function showMenu() {
  console.log(colors.bgCyan.bold("====== APP ======"));
  console.log(colors.green("1. Palindrome"));
  console.log(colors.green("2. FizzBuzz"));
  console.log(colors.white("3. Exit Application"));
}

export { question, showMenu };
