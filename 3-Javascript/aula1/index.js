/**
* document.createElement -> criar um elemento no documento;
* node.appendChild -> adicionar elemento como ultimo no do pai;
* node.insertBefore -> inserir um elemento antes de outro elemento;
* node.removeChild -> remover um filho do elemento;
* document.getElementById -> Busca o elemento com o Id especificado;
* node.innerText -> escrever texto no elemento selecionado;
* getElementsByClassName -> escolher por classe;
* document.getElementsByTagName -> escolher tudo que tiver a tag;
*/


const paragrafo1 = document.createElement("p");
const paragrafo2 = document.createElement("p");
const container = document.getElementById("container");
paragrafo1.innerText = "Texto criado pelo Javascript";
paragrafo2.innerText = "Texto criado pelo Javascript 2";

//document.body.appendChild(p);

container.appendChild(paragrafo2);
//container.insertBefore(paragrafo1, paragrafo2);
container.insertBefore(paragrafo1, container.firstChild); //Estratégia de adicionar elemento na primeira posição. firstChild no caso seria o paragráfo2, que é o primeiro filho presente no container.
container.removeChild(paragrafo2);

/**
 * - Criar uma div, um h1, um hr e um p pelo js.
 * incluir essa div no body;
 * Colocar o texto "hello world" no h1;
 * incluir h1 na div criada;
 * incluir hr na div criada;
 * incluir p na div criada;
 * colocar seu nome no elelemento p;
 * remover h1 da div.
 */

/* RESPOSTA

const divisoria = document.createElement("div");
const titulo = document.createElement("h1");
const linha = document.createElement("hr");
const paragrafo = document.createElement("p");

document.body.appendChild(divisoria);
divisoria.appendChild(titulo);
divisoria.appendChild(linha);
divisoria.appendChild(paragrafo);

titulo.innerText = "Hello World";

paragrafo.innerText = "Luciana";

divisoria.removeChild (titulo);
divisoria.innerHTML = '<p>Texto no "innerHtml"</p>'

console.log(divisoria.children);

*/

container.getElementsByClassName ("paragrafo");
const paragrafos = container.getElementsByTagName ("p");

console.log(paragrafos);










