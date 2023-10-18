// // if (1 > 5) {
// // console.log("numero maior");
// // } else if (1 === 1) {
// //     console.log("numero igual")
// // }
// // else {
// //     console.log("numero menor")
// // }



// //numero maior, menor ou zero

// let numero = -3;
// //numero = 3; ---> também funciona, pois variável pode ser mudada e constante não.

// if (numero > 0) {
//     console.log("numero maior que zero");
// }
// else if (numero === 0) {
//     console.log("numero igual a zero");
// }
// else {
//     console.log("numero menor que zero");
// }



// const novoNumero = 5;

// if (novoNumero > 0) {
//     console.log("numero maior que zero");
// }
// else if (novoNumero === 0) {
//     console.log("numero igual a zero");
// }
// else {
//     console.log("numero menor que zero");
// }

// /**
//  * = -> equivalencia
//  * == -> compara valores
//  * === -> compara valor e tipo
//  */

// console.log ("1"=== 1); //--> vai dar falso

// console.log ("1" == 1) // --> vai dar positivo, o que pode ser problematico. O prof recomenda, paara comparação, usar os ===.

// //operador ternário
// const resultado = true; // resultado = 1

// resultado < 0 // -12  < 0 --> verdadeiro
// resultado ?  console.log("verdadeiro: " resultado) : console.log ("falso: " resultado);

// if (resultado) {
//     console.log(resultado);
// }
// else {
//     console.log(resultado);
// }


// ----------------------- O NUMERO É PAR OU IMPAR??

// let x = prompt("qual o número?")


// if (x % 2 === 0) {
//     console.log ("par");
// }
// else {
//     console.log ("impar");
// }

//---------------------- IDADE PARA DIRIGIR

// let idade = prompt("qual a idade?")

// if ( idade >= 18) {
//     console.log ("Pode dirigir"); 
// }
// else {
//     console.log ("NÃO pode dirigir");   
// }


//--------------------------- SALARIO E TEMPO DE SERVIÇO

// let salario = prompt("qual o salario?");

// let tempoDeServico = prompt("qual o tempo de serviço?");

//  if (tempoDeServico <= 2) {
//      console.log (salario); 
//  }
//  else if (tempoDeServico > 2 && tempoDeServico < 5) {
//     console.log (`Salario: ${salario*1.05}´);
// }
//  else if (tempoDeServico > 5 && tempoDeServico < 10) {
//      console.log (salario*1.10);
//  }
//  else if (tempoDeServico > 10) {
//      console.log (salario*1.15);
//  }


// if (tempoServico < 2) {
//     console.log(`Salário: ${salario}`);
//   } else if (tempoServico < 5) {
//     console.log(`Salário: ${salario * 1.05}`);
//   } else if (tempoServico < 10) {
//     console.log(`Salário: ${salario * 1.1} ${tempoServico}`);
//   } else {
//     console.log(`Salário: ${salario * 1.15} ${tempoServico}`);
//   }


//  ----------------------- TEMPERATURA
//Conversão de Temperatura:
//Escreva um programa que permita ao usuário converter uma temperatura de Celsius para Fahrenheit ou de Fahrenheit para Celsius, com base na escolha do usuário

//  const temp = 89.6;
//  const type = "fahrenheit";
 
//  if (type === "celcius") {
//    console.log(temp * 1.8 + 32);
//  } else if (type === "fahrenheit") {
//    console.log((temp - 32) * 0.5555555 );
//  }
 