const input = require("readline-sync");
let value = input.question("Informe um valor:");

function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    value += str[i];
  }
  console.log(value);
}

let result = reverseString(value);
