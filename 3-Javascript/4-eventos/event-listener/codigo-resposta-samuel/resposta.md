html

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eventos</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <button id="btn-add">Adicionar</button>
    <div id="modal" class="hidden">
      <div class="modal-content">
        <span id="close-modal">X</span>
        <p class="content-title">Modal</p>
        <div class="form">
          <input id="inputName" type="text" placeholder="Preencha seu nome" />
          <input
            id="inputLastname"
            type="text"
            placeholder="Preencha seu sobrenome"
          />
          <button id="btn-send">Enviar</button>
        </div>
      </div>
    </div>
    <!-- <input id="name" name="name" type="text" /> -->
    <!-- <p id="container"></p> -->
    <p id="nameContainer"></p>
    <p id="lastnameContainer"></p>
    <script src="./index.js"></script>
  </body>
</html>



css 

#modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  width: 180px;
  height: 200px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  position: relative;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#close-modal {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.hidden {
  display: none !important;
}



js

const btnOpen = document.getElementById("btn-add");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("close-modal");
// const inputName = document.getElementById("name");
// const container = document.getElementById("container");

// inputName.addEventListener("change", (e) => {
//   container.innerText = e.target.value;
// });

function closeModal() {
  modal.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
}

btnClose.addEventListener("click", closeModal);

btnOpen.addEventListener("click", openModal);

/**
 * Dentro do modal colocar dois inputs e um botão de enviar
 *
 * Nome
 * Sobrenome
 * Botão de enviar - depois de enviar, fechar o modal
 *
 * Duas tags <p></p> no HTML
 * Um P recebe o nome e o outro sobrenome
 * SÓ APARECE DEPOIS DE CLICAR NO BOTÃO DE ENVIAR
 *
 * https://dontpad.com/fs-25-eventos
 */

const btnSend = document.getElementById("btn-send");
const inputName = document.getElementById("inputName");
const nameContainer = document.getElementById("nameContainer");
const inputLastname = document.getElementById("inputLastname");
const lastnameContainer = document.getElementById("lastnameContainer");

function saveUser() {
  nameContainer.innerText = inputName.value;
  lastnameContainer.innerText = inputLastname.value;
}

function clearInputs() {
  inputName.value = "";
  inputLastname.value = "";
}

btnSend.addEventListener("click", () => {
  saveUser();
  closeModal();
  clearInputs();
});
