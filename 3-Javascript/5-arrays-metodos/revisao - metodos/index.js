const numeros = [15, 24, 32, 52, 14, 190];
const nomes = ["biscoito","brownie","poly"];
// map

let valorInicial = 0;
numeros.map((numero) => (valorInicial = valorInicial + numero));
console.log(valorInicial);

//reduce
const resposta = numeros.reduce((prev,cur) => prev + cur, 0);

console.log(resposta);

//sort

//MENOR PARA O MAIOR

//com numeros:

numeros.sort((a, b) => a - b); //do menor para o maior //o "a" é entre um numero e todos os outros (que são o "b")
//positivo, o numero a fica pra tras
//imaginar uma "competicao" entre os numeros para ver qual é o menor.

//com strings:
nomes.sort((a, b) => { 
    const palavra1 = a.toLowerCase();
    const palavra2 = b.toLowerCase();

if (a > b) {
    return -1;
} else if (b < a) {
    return 1;
} else {
    return 0;
}
})
//toSorted --> cria um novo Array;
console.log (nomes);

numeros.sort((a, b) => b - a); //funciona ao contrario do outro // nesse caso o maior é jogado pra cima
console.log(numeros)

fs-25-metodos