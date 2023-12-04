// TAREFA 5 METODOS DE ARRAY

//---------------------------------------------

/**
* 1 METODO - SORT()

* O sort() é usado como uma forma de reorganizar os elementos do array, uma vez que o método os põe em ordem de acordo com o UTF-16, ou seja, sempre os considerando como strings e depois levando em conta os numeros de 0 à 9 e as letras de A à Z separadamente.
*/

const arraySort = ['5', '45', 'Baleia', 'Girafa'];
arraySort.sort();
console.log(arraySort); //RESULTADO: [ "45", "5", "Baleia", "Girafa" ]


//---------------------------------------------

/**
* 2 METODO - CONCAT()

* O concat() pode unir dois ou mais arrays diferentes em um só. É importante frisar que ele não apaga os posteriores, apenas cria um novo.
*/

const eletronicos = ['Notebook', 'Celular', 'Gabinete'];
const perifericos = ['Teclado', 'Mouse', 'Fone'];
const equipamentos = eletronicos.concat(perifericos);
console.log(equipamentos); //RESULTADO: [ "Notebook", "Celular", "Gabinete", "Teclado", "Mouse", "Fone" ]


//---------------------------------------------

/**
* 3 METODO - JOIN()

Diferente do concat(), o join() consegue unir um array inteiro em um elemento só, retornando apenas uma string com todos eles juntos.   Épossivel também especificar o tipo de separador desejado para as palavras, como virgulas e traços. Se o array tiver apenas um item, essa separação não sera necessaria.
*/

const almoco = ['Arroz', 'Feijão', 'Mistura'];
console.log(almoco.join()); //adiciona virgula. RESULTADO: Arroz,Feijão,Mistura
console.log(almoco.join('')); //não adiciona nada. RESULTADO: ArrozFeijãoMistura
console.log(almoco.join('-')); //adiciona traço. RESULTADO: Arroz-Feijão-Mistura
console.log(almoco.join('_')); //adiciona "_". RESULTADO: Arroz_Feijão_Mistura



//---------------------------------------------

/**
* 4 METODO - MAP()

* com o map é possivel criar uma função dentro do próprio método que consiga rodar em cada elemento do array, criando um array novo a partir desse, agora com os resultados devidamente implementados.
*/

const arrayDeNumeros = [8, 50, 76, 175];
const resultado = arrayDeNumeros.map((x) => x + 10 * 5);
console.log(resultado); //RESULTADO: [ 58, 100, 126, 225 ]

//---------------------------------------------

/**
* 5 METODO - EVERY()

* O every() funciona como uma certificação booleana de valor, verificando se o array consegue passar por determinada ação previamente requerida. O valor retornado pode ser verdadeiro ou falso.
*/

const numeroPositivo = (valor) => valor > 0; //função que define os parametros
const numeros = [45, 67, 101, -80, 1, 26];
console.log(numeros.every(numeroPositivo)); //RESULTADO: false.

