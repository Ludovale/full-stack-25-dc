//CRUD
//Criar, ler, atualizar e deletar.
//https://dontpad.com/fs-25-metodos
//Tarefa em aula: for of ou in - acessar indexx - passar valor dentro - nome[i] para acessar o valor - colocar dentro do alert no li.

const nomes = [];
let actualId = "";
const botao = document.getElementById("addItem");
const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("userEmail");
const inputPhone = document.getElementById("userPhone");
const lista = document.getElementById("lista");
const inputEditName = document.getElementById("editName");
const inputEditEmail = document.getElementById("editEmail");
const inputEditPhone = document.getElementById("editPhone");
const btnEdit = document.getElementById("btnEdit");
const inputFilter = document.getElementById("filter");
const btnSearch = document.getElementById("search");


function handleDelete(id) {
    nomes.splice(id, 1);
    handleList(nomes);
}

function handleEdit(id) {
    inputEditName.value = nomes[id].name;
    inputEditEmail.value = nomes[id].email;
    inputEditPhone.value = nomes[id].phone;
    actualId = id; //salvou o id de forma global dentro da variável
}

function confirmEdit() {
    if (actualId !== "") { //sempre o numero de convidados for maior que 0 (ou seja, tenha mais de 1) e que o valor do id não for nulo (definido na propria funçao) ;
        nomes[actualId].name = inputEditName.value;
        nomes[actualId].email = inputEditEmail.value;
        nomes[actualId].phone = inputEditPhone.value;
        handleList(nomes);
        actualId = "";
        inputEditName.value = "";
        inputEditEmail.value = "";
        inputEditPhone.value = "";
    }
}

function handleList(array) {
    lista.innerHTML = "";
    // for (const index in nomes) {
    //     lista.innerHTML += `<li 
    //     class="list-item">
    //      ${nomes[index].name}, ${nomes[index].email}, ${nomes[index].phone}
    //     <div class="btns-action">
    //     <button class="button-edit" onclick="handleEdit(${index})">Editar</button>
    //     <button class="button-delete" onclick="handleDelete(${index})">Deletar</button>
    //     </div> </li>`; //UM item da lista é adicionado, mais os DOIS botoes de EDITAR e DELETAR;
    // }
    array.map((nome, index) => (
        lista.innerHTML += `<li 
    class="list-item">
    ${nome.name} - ${nome.email} - ${nome.phone}
    <div class="btns-action">
        <button class="button-edit" onclick="handleEdit(${index})">
            Editar
        </button>
        <button class="button-delete" onclick="handleDelete(${index})">
            Deletar
        </button>
    </div> </li>`
    ));

    console.log(nomes);
}

function handleCreateUser() {
    nomes.push({
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
    });
    console.log(nomes);
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
}

function handleFilterNames() {
    // FILTRAR OS NOMES USANDO OS FILTERS:
    // const filteredNames = nomes.filter((value) => {
    //     const name = value.name.toLowerCase();
    //     const filteredWord = inputFilter.value.toLowerCase();
    //     return name.includes(filteredWord); //o value é cada elemento do array que vai ser filtrado.
    // });

    const filteredNames = nomes.filter((nome) => {
        const name = nome.name.toLowerCase();
        const filteredWord = inputFilter.value.toLowerCase();
        return name === filteredWord;
        
    })
    return filteredNames;
}

function HandleListFilteredNames(){
    handleList(handleFilterNames());
}


////////////////////////////////////////////////event listeners:

botao.addEventListener("click", () => {
    handleCreateUser();
    handleList(nomes);
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
    //})
    //-----------------------------------------------------------------------
})

btnSearch.addEventListener("click", HandleListFilteredNames); //evento para buscar o usuario usando o FILTER.

btnEdit.addEventListener("click", confirmEdit);