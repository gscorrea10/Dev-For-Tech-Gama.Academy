// FizzBuzz
// Divisivel por 3 => 'Fizz';
// Divisivel por 5 => 'Buzz';
// Divisivel por 3 e 5 => 'FizzBuzz';
// Se não for um número => 'Não é um número';
// Se não for divisivel nem por 3 e nem por 5 => Entrada;
const input = require("readline-sync");

const value = input.question("Informe um valor:");
const finalValue = value;

if (finalValue % 3 === 0 && finalValue % 5 === 0) {
  console.log("FizzBuzz");
} else if (finalValue % 3 === 0) {
  console.log("Fizz");
} else if (finalValue % 5 === 0) {
  console.log("Buzz");
} else if (typeof finalValue !== Number) {
  console.log("Not a number");
} else {
  console.log(value);
}
