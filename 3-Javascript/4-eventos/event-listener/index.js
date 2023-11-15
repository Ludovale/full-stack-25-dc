//DIFERENÇA ENTRE ARRAY E ARRAY-LIKE OBJECT:
//A diferença entre o array e o array-like object é que ele é parecido com o array em sua dinamica, mas nâo tem suas propriedades (.push, etc). Ou seja, você só consegue ter uma visâo geral do objeto em si.

const btnOpen = document.getElementById("btn-add");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("close-modal");
const inputName = document.getElementById("name");
const container = document.getElementById("container");

// btnClose.addEventListener("click", () => {
//     modal.style.display = "none"; //O style define as propriedades de estilo, semelhante ao css. A propriedade display "esconde" o elemento, no caso o btnClose.
// })


// btnOpen.addEventListener("click", () => {
//     modal.style.display = "flex"; 
// })

inputName.addEventListener("input", (e) => { //ao se tratar desse paramentro, o que estará já preestabelecido pelo js e html é o que está dentro do input, botão, tecla de teclado etc. é a informação trazida pelo evento.
    console.log(e.target.value) //o target é a ponte que leva ao valor, ele indica o valor para a função. ele atua diretamente, dai o nome target.
    container.innerText = e.target.value;
})

function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("show");

}


function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("show");

}


btnOpen.addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);

//    ---------------------------------------toggle

    //funcition handleModal() {
    //    modal.classList.toggle("hidden");
    //    }
    //em compensaçao, em casos onde o toggle pode fazer um botao abrir e fechar (ao contrario) pode ser ruim para o codigo uma vez que o usuario clique, então as vezes é melhor usar da outra forma maior.