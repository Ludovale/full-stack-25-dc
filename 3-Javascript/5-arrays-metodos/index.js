//---------------------------------FOR EACH
//APRESENTA ELEMENTOS NA SEGUINTE ORDEM: ---FUNÇÃO SEMELHANTE AO FOR/FOR IN/ FOR OF --> REALIZA UM LOOPING NOS ELEMENTOS DO ARRAY.

const frutas = ["Maçã", "Banana"];

frutas.forEach((fruta, index, array) => console.log(fruta, index, array))
//ordem apresentada pelo for each -> valor, index, array. SÃO PARAMETROS PADRÕES.

frutas.push ("Uva");

frutas.forEach((fruta, index) => console.log(fruta, index))

//---------------------------------POP

frutas.pop(); //REMOVE o ULTIMO elemento do array.
//console.log(frutas);

//---------------------------------UNSHIFT
//ELEMENTO É COLOCADO NO INICIO

frutas.unshift("Laranja");
//console.log(frutas);

//---------------------------------SHIFT
//REMOVE O PRIMEIRO ELEMENTO

frutas.shift();
//console.log(frutas);

