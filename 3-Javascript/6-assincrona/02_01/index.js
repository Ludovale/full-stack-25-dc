const tableContent = document.getElementById("tableContent");
const btnAdd = document.getElementById("addClient");
const url = "https://65949ae91493b011606aad62.mockapi.io/clientes";

const newClient = {
  name: "Teste mock",
  email: "Teste mock e-mail",
  telefone: "Teste mock telefone",
};

async function fetchClients() {
  //esse RESPONSE é um pré-processo para acessar as informações
  const response = await fetch(url);
  //esse DATA é o que recolhe as informações do .json
  const data = await response.json();
  return data;
}

async function fetchClient(id) {
  const response = await fetch(`${url}/${id}`); //pegar um unico id do api.
  const data = await response.json();
  console.log(data);
  return data;
}

async function createUser(client) {
  const response = await fetch(url, { 
    method: 'POST',
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(client),
  });
  console.log(response);
}

async function deleteClient(id) {
    const response = await fetch(`${url}/${id}`, { method: "DELETE" });
    const data = await response.json();
    await renderClientList();
}
function createRowTable(client) {
  const row = `
  <tr>
  <td class="body-cell">${client.name}</td>
  <td class="body-cell">${client.email}</td>
  <td class="body-cell">${client.telefone}</td>
  <td class="body-cell actions">
      <div class="actions-buttons">
      <button class="edit" onclick="fetchClient(${client.id})">Editar</button>
      <button class="delete" onclick="deleteClient(${client.id})">Excluir</button></td>
      </div>
</tr>
`;
return row;
}

async function renderClientList() {
    tableContent.innerHTML = "";
    const clients = await fetchClients();
    clients.map((client) => {
      const clientRow = (tableContent.innerHTML += createRowTable(client));
      return clientRow;
  });
}

window.addEventListener("load", async () => {
await  renderClientList();
});

btnAdd.addEventListener("click", () => createUser(newClient));