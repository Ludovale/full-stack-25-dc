/**
 * Adicionar uma class = elemente.classList.add("className");
 * Remover uma class = Element.classList.remove(className);
 * Remove ou adiciona uma class = Element.classList.toggle(className);
 * 
 * Audiciona um valor a uma propriedade CSS
 * Element.style.property = value;*
 * Ex: p.style.color = 'red';
 */


const container1 = document.getElementById("container-1"); //add a classe bg-red
const container2 = document.getElementById("container-2"); //add a classe bg-blue
const container3 = document.getElementById("container-3"); //add a classe bg-yellow
const container4 = document.getElementById("container-4"); // add o style backgroundColor

container1.classList.add("bg-red");
container2.classList.add("bg-blue");
container3.classList.add("bg-yellow");

container4.style.backgroundColor = 'black'; //adiciona um estilo como se fosse a modificaçãpo dp css in-line "style=" dentro da tag. Alem disso, tem uma prioridade maior do que a classe (CSS Inline > id > classe > tag);

// on off
container3.classList.toggle("bg-yellow")
