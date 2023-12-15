//CRUD
//Criar, ler, atualizar e deletar.
//https://dontpad.com/fs-25-metodos
//Tarefa em aula: for of ou in - acessar indexx - passar valor dentro - nome[i] para acessar o valor - colocar dentro do alert no li.

const btn = document.getElementById("addItem");
const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("userEmail");
const inputPhone = document.getElementById("userPhone");
const lista = document.getElementById("lista");
const inputEditName = document.getElementById("editName");
const inputEditEmail = document.getElementById("editEmail");
const inputEditPhone = document.getElementById("editPhone");
const btnEdit = document.getElementById("btnEdit");
const inputFilter = document.getElementById("filter");
const btnFilter = document.getElementById("btnFilter");
const selectSort = document.getElementById("sort");

const nomes = [];
let actualId = "";

function handleDelete(id) {
  nomes.splice(id, 1);
  handleList(nomes);
}

function handleEdit(id) {
  inputEditName.value = nomes[id].name;
  inputEditEmail.value = nomes[id].email;
  inputEditPhone.value = nomes[id].phone;
  actualId = id;
}

function confirmEdit() {
  if (actualId !== "") {
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

function handleList(arr) {
  lista.innerHTML = "";
  arr.map(
    (nome, index) =>
      (lista.innerHTML += `
      <li class="list-item">
        ${nome.name} - ${nome.email} - ${nome.phone}
        <div class="btns-action">
          <button class="button-edit" onclick="handleEdit(${index})">
            Editar
          </button>
          <button class="button-delete" onclick="handleDelete(${index})">
            Deletar
          </button>
        </div>
      </li>`)
  );
}

function handleCreateUser() {
  nomes.push({
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
  });
  inputName.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
}

function handleNewUser() {
  handleCreateUser();
  handleList(nomes);
}

function handleFilterNames() {
  const filteredNames = nomes.filter((value) => {
    const name = value.name.toLowerCase();
    const filteredWord = inputFilter.value.toLowerCase();
    return name.includes(filteredWord);
  });
  return filteredNames;
}

function handleListFilterNames() {
  handleList(handleFilterNames());
}

function handleSortByName(type) {
  const sortedList = nomes.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB && type === "asc") {
      return -1;
    }

    if (nameA > nameB && type === "desc") {
      return -1;
    }

    return 0;
  });
  handleList(sortedList);
}

selectSort.addEventListener("change", (e) => {
  handleSortByName(e.target.value);
});

btn.addEventListener("click", handleNewUser);

btnFilter.addEventListener("click", handleListFilterNames);

btnEdit.addEventListener("click", confirmEdit);

//DONTPAD -> dontpad.com/fs-25-crud