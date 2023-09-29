// if (1 > 5) {
// console.log("numero maior");
// } else if (1 === 1) {
//     console.log("numero igual")
// }
// else {
//     console.log("numero menor")
// }



//numero maior, menor ou zero

let numero = -3;
//numero = 3; ---> também funciona, pois variável pode ser mudada e constante não.

if (numero > 0) {
    console.log("numero maior que zero");
}
else if (numero === 0) {
    console.log("numero igual a zero");
}
else {
    console.log("numero menor que zero");
}



const novoNumero = 5;

if (novoNumero > 0) {
    console.log("numero maior que zero");
}
else if (novoNumero === 0) {
    console.log("numero igual a zero");
}
else {
    console.log("numero menor que zero");
}

/**
 * = -> equivalencia
 * == -> compara valores
 * === -> compara valor e tipo
 */

console.log ("1"=== 1); //--> vai dar falso

console.log ("1" == 1) // --> vai dar positivo, o que pode ser problematico. O prof recomenda, paara comparação, usar os ===.