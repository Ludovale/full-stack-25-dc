//ATRIBUTOS---------------------------------------------------------------------------------

/**
 * Metadados são atributos, como por exemplo o src="", pra dizer a source.

element.getAttribute(attributeName) -> retorna o valor do atributo;
element.setAttribute(attributeName, value) -> configura um novo valor pro atributo;
element.removeAttribute(attributeName); -> remove o atributo;

 */

const paragrafo = document.querySelector("p");
paragrafo.setAttribute("class", "new-class"); //classe e valor
paragrafo.removeAttribute("class");
console.log(paragrafo.getAttribute("class"));