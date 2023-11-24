//CRUD
//Criar, ler, atualizar e deletar.
//https://dontpad.com/fs-25-metodos
//Tarefa em aula: for of ou in - acessar indexx - passar valor dentro - nome[i] para acessar o valor - colocar dentro do alert no li.

const convidados = [];
let actualId = "";
const botao = document.getElementById("addItem");
const inputName = document.getElementById("userName");
const lista = document.getElementById("lista");
const inputEdit = document.getElementById("editName");
const btnEdit = document.getElementById("btnEdit");


function handleDelete(id) {
    alert(id);
}

function handleEdit(id) {
    inputEdit.value = convidados[id];
    actualId = id;
}

function confirmEdit() {
convidados[actualId] = inputEdit.value;
handleList();
}

function handleList() {
    lista.innerHTML = "";
    for (const index in convidados) {
        lista.innerHTML += `<li 
        class="list-item">
         ${convidados[index]}
        <div class="btns-action">
        <button class="button-edit" onclick="handleEdit(${index})">Editar</button>
        <button class="button-delete" onclick="handleDelete(${index})">Deletar</button>
        </div> </li>`;
    }
    console.log(convidados);
    }

function handleCreateUser() {
    convidados.push(inputName.value);
    console.log(convidados);
    inputName.value = "";
}

botao.addEventListener("click", () => {
    handleCreateUser()
    handleList()

btnEdit.addEventListener("click", confirmEdit);

//FOR OF - RECEBE VALOR - NO CASO, O NOME

/*
for (const nome of convidados) {
    lista.innerHTML += `<li onclick="alert('${nome}')"> ${nome} </li>`;
}
 console.log(convidados);
*/

//FOR IN - RECEBE INDEX - A POSIÇÃO

/*
for (const index in convidados) {
    lista.innerHTML += `<li onclick="alert('${index}')"> ${convidados[index]} </li>`;
}
console.log(convidados);
})
*/
})
//----------------------------------------------------------------------------------------------------
