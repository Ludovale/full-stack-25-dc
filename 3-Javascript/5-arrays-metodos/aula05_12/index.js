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
const valorInicial = 0;
const soma = numeros.reduce((prev, current) => {
    return prev + current;
}, valorInicial);
//é importante ter o return, pois ele envia a informação da resposta pro proximo looping
console.log(soma);

const vendas = [
    {preco: 1000,
    lja: 'loja 01'}
, {preco: 2000,
    lja: 'loja 02'},

    {preco: 3000,
    lja: 'loja 03'}
]

const somaVendas = vendas.reduce((prev, current) => {
    console.log (prev + current.preco); //vai dar: 1000, 3000 e 6000
    return prev + current.preco;
}, 0);

//diferença entre map e reduce -> reduce vai reduzir o array (criando um novo) em um valor só.
console.log(somaVendas); //vai dar 6000;


/////////////////////////SORT
//-> ORDENAÇÃO DO ARRAY, MODIFICA O ORIGINAL!!

const numerosOrdenados = numeros.sort();

console.log(numerosOrdenados);

//2, 3, 54, 6, 19, 10, 14
function compararDoisNumeros(num1, num2) {
    if(num1>num2){ //vai comparando os numeros, como 2 e 3.
    //    return num1 - num2; -> forma crescente, se quiser o contrario é só trocar os numeros.
        return -1;  //NUMERO DOIS É MENOR, LOGO ELE VAI PRA FRENTE. Permanece o primeiro no local em que ele está e compara com o proximo;
    }
    else if(num1<num2){
        return 1;  //joga o primeiro pra tras 
    }
    else {
        return 0;
    }
} //o retorno aqui é só um numero dado para manter a ordem no momento em que o sort for associar, ele não importa além disso.

function compararDoisNumerosReduzida(num1, num2) {
    if(num1>num2){ //vai comparando os numeros, como 2 e 3.
return num1 - num2; //-> forma crescente, se quiser o contrario é só trocar os numeros.
}};


const numerosOrdenados2 = numeros.sort(compararDoisNumeros);
const numerosOrdenados3 = numeros.sort(compararDoisNumerosReduzida);

console.log(numerosOrdenados2); // [54, 19, 6, 3, 2] -> ordem decrescente
console.log(numerosOrdenados3); // [54, 19, 6, 3, 2] -> ordem decrescente

//em um objeto:
const pessoas = [
    {
        nome: "fulano",
        idade: 49
    },
    {
        nome: "fulano 2",
        idade: 12
    },
    {
        nome: "fulano3",
        idade: 59
    },
    {
        nome: "fulano3",
        idade: 3
    },
];

function compararDoisNumerosDescrita(num1, num2, ordem) {
    if (ordem === "asc") {
        return num1 - num2;
    } else if (ordem === "desc"){
        return num2 - num1;
    };
}

const pessoasOrdenadas = pessoas.sort(value1, value2) {
    compararDoisNumerosDescrita(value1.idade, value2.idade, "desc")}
//TOSORTED
//->SEMELHANTE AO SORT MAS CRIA UM NOVO ARRAY.