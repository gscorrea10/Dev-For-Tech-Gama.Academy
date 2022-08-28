const input = require("readline-sync");
// 1. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano
// (não é necessário considerar o mês em que ela nasceu).

/*var input = prompt("Insira seu ano de nascimento: ");
var data = new Date();
var anoAtual = data.getFullYear();
var idade = anoAtual - input;
if (idade >= 16) {
  alert("Você pode votar esse ano!");
} else {
  alert("Você não pode votar esse ano");
}*/

/*2. Faça um programa onde o usuário irá escolhe se que Converte graus Celsius para Fahrenheit ou Fahrenheit para Celsius.
console.log("Digite o número correspondente à uma das opções abaixo:");
console.log("1 - Converter graus Celsius para Fahrenheit");
console.log("2 - Converter Fahrenheit para Celsius");
var escolha = prompt();
var celsius, fahrenheit;

switch (escolha) {
  case "1":
    celsius = prompt("Insira a temperatura em graus Celsius");
    fahrenheit = (celsius * 9) / 5 + 32;
    console.log("Em Fahrenheit o valor é: " + fahrenheit);
    break;
  case "2":
    fahrenheit = prompt("Insira a temperatura em Fahrenheit");
    celsius = (fahrenheit - 32) * (5 / 9);
    console.log("Em Celsius o valor é: " + celsius);
    break;
  default:
    console.log("Não entendi sua resposta");
    break;
}*/

/*  4. Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não pode ultrapassar 30% do salário.
Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. 
Assuma que nenhum dos valores informados será zero ou negativo.*/

/*const input = require("readline-sync");

const salario = input.question("Informe o seu salário:\n");
const emprestimo = input.question("Informe o valor do empréstimo:\n");
const nPrestaçoes = input.question("Informe o número de prestações:\n");

let perceSalario = 0.3 * salario;
let valorParcela = emprestimo / nPrestaçoes;

if (valorParcela <= perceSalario) {
  console.log("você pode fazer o emprestimo " + valorParcela);
} else {
  console.log("voce n pode");
}

/* 5. Faça um programa que calcule e imprima o valor em reais de cada kw, o valor em reais a ser pago o novo valor a ser pago por essa 
residência com um desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade de kw gasto por residência. */

const salaMin = input.question("Informe o valor do salario min: \n");
const kw = input.question("Informe o consumo em kw da casa: \n");
const relacao = salaMin / 700; // 1/7 do sala min
const valorfinal = kw * relacao * 0.9;
console.log(valorfinal);
