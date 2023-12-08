const numeros = [2, 3, 54, 6, 19];

//map -> retorna um novo array

console.log(numeros);

const novosNumeros = numeros.map((numero) => {
    return numero *2;
});
console.log(novosNumeros);
//o map necessita que voce retorne alguma coisa, como usar o RETURN

//foreach -> modifica o array original, sem conseguir atribuir ele a uma variavel por não ter informacao nova (dando undefined);

const novosNumeros2 = numeros.forEach((numero) => {
    return numero *2;
});
console.log(novosNumeros2);


//DIFERENÇA ENTRE OS DOIS: for each modifica o array ORIGINAL, enquanto o map copia os numeros em um novo array, trabalhando em CIMA DA COPIA.

//no CRUD (aula 23 e 28), foi adicionado um exemplo do map substituindo o for in.


//////FILTER -> looping dentro do numero que vai validando se ele está dentro do valor requerido, retornando um NOVO ARRAY com os VALORES FILTRADOS
//semelhante a um for com um if dentro.
//retorna um NOVO array com os valores filtrados.

const numerosFiltrados = numeros.filter((numero) => numero > 5);
console.log(numerosFiltrados); //>> retorna 54, 6,  19.

//FIND -> retorna 1 resultado e é o PRIMEIRO que vai satisfazer as condições requeridas nele.

const numeroMaiorQueCinco = numeros.find((numero) => numero > 5);
const indexQuatro = numeros.find((numero, index) => index === 4); //o primeiro eh o numero do array (parametro), o segundo o indice e o terceiro um objeto(array) de numeros
console.log(numeroMaiorQueCinco); //>> retorna apenas o 54
console.log(indexQuatro); //>> checa se tem alguem no 4 lugar do index

//REDUCE ->
//Reduzir um array. 
//Um exemplo é que em um array de numeros ele pode somar eles e devolver a soma.
//recebe dois parametros: primeiro é a FUNÇÃO DE CALLBACK e segundo é o VALOR INICIAL.

const somaNumeros = numeros.reduce((prev, current) => {
return prev + current;
}, 0);
//nesse caso, o reduce seria um loop que faria primeiro 0 +2, depois 2 + 3, etc. sempre atualizando o valor anterior (previous).
//originalmente ele retorna só um valor, mas ele pode retornar um array se o valor iniciar for um array e se adicionar um push dentro da formula do reduce.
console.log(somaNumeros);