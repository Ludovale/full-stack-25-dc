// function somar() {
//   const resultado = 5 + 10;
//   return resultado;
// }

// function somarSemReturn() {
//   const resultado = 20 + 10;
//   return resultado;
// }

// function somarComParams(num1, num2) {
//   const resultado = num1 + num2;
//   console.log(nome);
//   return resultado;
// }

// console.log(somarComParams(1, 10));

// function multi(n1, n2) {
//   const multiplicacao = n1 * n2;
//   return multiplicacao;
// }

// function div(n1, n2) {
//   const divisao = n1 / n2;
//   return divisao;
// }

// function soma(n1, n2) {
//   const resultado = n1 + n2;
//   return resultado;
// }

// function calculate(num1, num2) {
//   const multiplicacao = multi(num1, num2);
//   const divisao = div(multiplicacao, 2);
//   const somar = soma(divisao, 100);
//   return somar;
// }

// function maiorQueZero(num) {
//   var message = "teste";
//   if (num > 0) {
//     message = `${num} é maior que zero`;
//   } else if (num < 0) {
//     message = `${num} é menor que zero`;
//   } else {
//     message = `${num} é igual a zero`;
//   }
//   return message;
// }

// maiorQueZero(0);



// function imcResultado (peso, altura) {

// const imc = peso / (altura * altura);

// if (imc < 18.5) { 
//     console.log("Magreza");
// }
// else if (18.5 <= imc && imc <= 24.9) {
//     console.log("Normal");
// } 
// else if (25 <= imc && imc <= 29.9) {
//     console.log("Sobrepeso");
// } 
// else if (30 <= imc && imc <= 34.9) {
//     console.log("Obesidade grau I");
// }
// else if (35 <= imc && imc <= 39.9) {
//     console.log("Obesidade grau II");
// }
// else {
//     console.log("Obesidade grau III");
// }

// }

// imcResultado(83,1.72);


function conversao (tipo, temp) {
if (tipo === "Fahrenheit"){
    let resultado = (temp * 1.8) + 32;
    console.log (`${resultado} em fahrenheit`);
}
else if ( tipo === "Celcius"){
    let resultado = (temp - 32) / 1.8;
    console.log (`${resultado} em celcius`);
}

}

conversao ("Celcius", 80);