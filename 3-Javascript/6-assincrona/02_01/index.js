const tableContent = document.getElementById("tableContent");
const url = "https://65949ae91493b011606aad62.mockapi.io/clientes";

async function fetchClients() {
  //esse RESPONSE é um pré-processo para acessar as informações
  const response = await fetch(url);
  //esse DATA é o que recolhe as informações do .json
  const data = await response.json();
  return data;
}

async function deleteClients(id) {
    const response = await fetch(`${url}/${id}`, { method: "DELETE" });
    const data = await response.json();
    await renderClientList();
}

async function renderClientList() {
    tableContent.innerHTML = "";
    const clients = await fetchClients();
    clients.map((client) => {
    return (tableContent.innerHTML += `
    <tr>
    <td class="body-cell">${client.name}</td>
    <td class="body-cell">${client.email}</td>
    <td class="body-cell">${client.telefone}</td>
    <td class="body-cell actions">
        <div class="actions-buttons">
        <button class="edit">Editar</button>
        <button class="delete" onclick="deleteClients(${client.id})">Excluir</button></td>
        </div>
</tr>
`);
  });
}

window.addEventListener("load", async () => {
await  renderClientList();
});
