//---------------------------------FOR EACH
//APRESENTA ELEMENTOS NA SEGUINTE ORDEM: ---FUNÇÃO SEMELHANTE AO FOR/FOR IN/ FOR OF --> REALIZA UM LOOPING NOS ELEMENTOS DO ARRAY.

//const frutas = ["Maçã", "Banana"];

//.forEach((fruta, index, array) => console.log(fruta, index, array))
//ordem apresentada pelo for each -> valor, index, array. SÃO PARAMETROS PADRÕES.

//frutas.push ("Uva");

//frutas.forEach((fruta, index) => console.log(fruta, index))

//---------------------------------POP
//----------------------
//frutas.pop(); //REMOVE o ULTIMO elemento do array.
//console.log(frutas);

//---------------------------------UNSHIFT
//ELEMENTO É COLOCADO NO INICIO
//----------------------
//frutas.unshift("Laranja");
//console.log(frutas);

//---------------------------------SHIFT
//REMOVE O PRIMEIRO ELEMENTO
//----------------------
//frutas.shift();
//console.log(frutas);

/**
 * ao clicar nesse botao, adicionar um valor ao array
 * ex. valor final é 3, adicionar o numero 4 ao final do array.
 * */
//----------------------------------------------
// const numeros = [1, 2, 3];
// const botao = document.getElementById("addItem");



// botao.addEventListener("click",() => {
// numeros.push(numeros[numeros.length - 1] + 1);
// console.log(numeros);
// })

//-----------------------------------------------

/**
 * crie um array vazia para uma lista de convidados
 * sempre que o nome é adicionado no input, ele vai pro array.
 * */

const convidados = [];
const botao = document.getElementById("addItem");
const inputName = document.getElementById("userName");

 
function adicionarNome(name) {
    const divisoria = document.getElementById("lista");
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = (`<li> ${name} </li>`);
    divisoria.appendChild(paragrafo);
}

botao.addEventListener("click",() => {
convidados.push(inputName.value);
adicionarNome(inputName.value);
console.log(convidados);
inputName.value = "";
 })



//----------------------------VERSÃO PROF
//const convidados = [];
//const botao = document.getElementById("addItem");
//const inputName = document.getElementById("userName");
//const lista = document.getElementById("lista");

/*
botao.addEventListener("click", () => {
    convidados.push(inputName.value);
    console.log(convidados);
    inputName.value = "";
    lista.innerHTML = "";


for (const nome of convidados) {
    lista.innerHTML += `<li> ${nome} </li>`;
}
console.log(convidados);
})

*/

//-----------------------------------------

/**
 * Escolher 5 metodos do mdn docs de array
 * criar um repositorio;
 * explicar cada um dos 5, dar exemplos;
 * para que serve, exemplos.
 * É PRA DIA 30 MAGNUM
 */