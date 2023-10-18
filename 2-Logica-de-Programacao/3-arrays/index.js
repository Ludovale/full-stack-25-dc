/*

//index ->posiçãp do array, começa com 0.

//index ->    0    1    2
const arrTeste = ["a", "b", "c"];
//quant ->    1    2    3   ------ total, mas são é o indice(index) de cada elemento do array.


//o index pode ir até 100 elementos -> até o index 99.

//ultimo elemento -> pode-se usar arr[-1];



function mostrarItens(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i); //é apenas o index -> o numero de cada posição.
        console.log(`index: ${i}, array: ${arr[i]}`); //é o que está DENTRO de cada ponto indexado.
    }
}

mostrarItens(arrTeste);

*/

/* 

QUESTÃO 1 ----------------------------------

const numeros = [1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++) {
console.log(numeros[i]);
}

let numero = 0

for (let i = 0; i < numeros.length; i++) {
numero++
console.log(numero);
}

*/

/* 

QUESTÃO 2 ----------------------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function divisiveisPor3() {
    
    for (i=0; i < numeros.length; i++) {
        if (numeros[i] % 3 == 0) {
            console.log(numeros[i]);
        }
    }
}

divisiveisPor3();

*/

/* 

QUESTÃO 3 ----------------------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pares() {
    
    for (i=0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            console.log(numeros[i]);
        }
    }
}

pares();

*/

/*
QUESTÃO 4 ----------------------------------

const palavra = ["p", "a", "s", "t", "a"];
function vogais() {

    for (i=0; i < palavra.length; i++) {
    
        if(palavra[i] == "a" || palavra[i] == "e" ||  palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u"){
            console.log(palavra[i]);
        }
    }
}

vogais();

*/

/*
QUESTÃO 4 RESPOSTA ALTERNATIVA -----------------------------

const palavra = "pasta";
const vogais = ["a", "e", "i", "o", "u"];


for (i = 0; i < palavra.length; i++) {
  for (ii = 0; ii < vogais.length; ii++) {
    if (palavra[i] === vogais[ii]) {
      console.log(palavra[i]);
    }
  }
}

*/