

/*
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (const index in numeros) {
    if (numeros[index] % 3 === 0) {
        console.log(numeros[index]);
    }
}

const palavra = 'maracuja';

for (const i in palavra) {
    console.log(palavra[i]);
} */

/*◘
const listaDePalavras = ['biscoito', 'brownie', 'cachorros'];
const vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;


for (const index in listaDePalavras) {
    for (const index2 in listaDePalavras[index]){
        for (const index3 in vogais) {
            if (listaDePalavras[index][index2] === vogais[index3]) {
                contador++;
                console.log (`a palavra ${listaDePalavras[index]} possui a vogal ${listaDePalavras[index][index2]}`)
            }
        }
    }
}

console.log (contador); */

//Exercicio 2 - Objetos

const pessoa2 = {
    nome: "Luciana",
    cidade: "Fortaleza",
    profissao:  "tentando algo",
}


    console.log (`me chamo ${pessoa2.nome}, moro em ${pessoa2.cidade} e estou ${pessoa2.profissao}`)


//------------------//

/*

//FOR OF - REPETIÇÃO
const numeros =  [10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101];

for (const numero of numeros) {
        // For OF - 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 --> RETORNA VALOR
    console.log(numero);
}

// FOR IN - REPETIÇÃO

for (const numero in numeros) {
        // For IN -  0, 1, 2,  3, 4, 5, 6, 7, 8, 9, 10 --> RETORNA INDEX
        // é um for que roda o numero de vezes do index. No caso, seria 10 vezes repetindo.
    console.log(numero);
}

*/

//------------------//

/*

//1- imprima os multiplos de 3 de 1 a 20

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (const numeros of array) {
    if (numeros % 3 === 0) {
        console.log(numeros);
    }
}
*/

/*

//2- imprima as letras de uma String

let palavra = "biscoito";

for (const letras of palavra) {
    console.log(letras);
}
*/

/*

//3-conte quantas vogais ha em uma lista de palavras

const listaDePalavras = ['biscoito', 'brownie', 'cachorros'];
const vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for (const palavras of listaDePalavras) {
    for (const letras of palavras) {
        for (const cadaVogal of vogais) {
            if (letras === cadaVogal) {
                console.log(letras);
                contador++;
            }
        }
    }
}
console.log(contador);

*/


/*
//3.5-conte quantas vogais ha em uma palavra;

const palavra = "brownie"
const vogais2 = ['a', 'e', 'i', 'o', 'u'];
let contador2 = 0;

    for (const letras of palavra) {
        for (const cadaVogal of vogais) {
            if (letras === cadaVogal) {
                console.log(letras);
                contador2++;
            }
        }
    }

    console.log(contador2);
*/


//RESPOSTA ALTERNATIVA

/*
for (const letra of palavra) {
    if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
     ) {
        console.log(letra);
        contador2++;
    }
}

console.log(contador2);
*/


/*
// 4- imprima os numeros pares de 1 a 10.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (const numeros of array) {
    if (numeros % 2 === 0) {
        console.log(numeros);
    }
}

*/

//5- Soma dos valores de um array

const numeros =  [10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101];

function sumArr(array) {
    let soma = 0;
    for (const value of array){ //a cada valor de uma array adicione mais à soma
        soma = soma + value;
    }
    console.log(soma);
}


sumArr(numeros);

const clientes = [
    {
        nome: "luciana",
        conta: 450,
    }, 
    {
        nome: "magnum",
        conta: 320,
    }, 
]

//SOMAR AS CONTAS