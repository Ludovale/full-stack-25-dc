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

const numerosFiltrados = numeros.filter((numero) => numero > 5);
console.log(numerosFiltrados);

