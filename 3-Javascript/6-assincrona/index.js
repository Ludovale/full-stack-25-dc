//codigos:
//200 - sucesso
//400 - erro User
//401 - autenticação
//403 - autorização(clearence) de usuario
//404 - page not found

fetch('https://6580c8963dfdd1b11c421705.mockapi.io/clientes')
            .then(res=>res.json())
            .then(json=>console.log(json))

//fetch, vai fazer uma busca (Get ->info do link) da informação (endpoint);
//aguardar ele retornar - .then
//no caso seria "e então, me retorne a resposta (res.json)"
//depois  (então - .the)  põe esse .json no console.log

const tableContent = document.getElementById("tableContent");

async function fetchClients() {
    const response = await fetch('https://6580c8963dfdd1b11c421705.mockapi.io/clientes');

    const data = await response.json();

    return data;
//    console.log(data);
}

async function deleteClient(id){
    const response = await fetch(
        `https://6580c8963dfdd1b11c421705.mockapi.io/clientes/${id}` , {
            method: "DELETE", 
        }
    );
    await handleClientsList();
}

function mountList(arr) {
    tableContent.innerHTML = "";
    arr.map((valor) => { //// o valor quer dizer cada objeto

    return (tableContent.innerHTML += `
        <tr>
        <td>${valor.name} - ${valor.lastName}</td>  <td>${valor.email}</td> 

        <td>
        <div>
        <button>
          Editar
        </button>
        <button onclick = "deleteClient(${valor.id})">
          Deletar
        </button>
      </div>
      </td>
        </tr>
        `)
        
    });
}

async function handleClientsList(){
    const clients = await fetchClients();
    if (clients.length > 0){
        mountList(clients); //chama a função citada anterior do mountList
    }
}
handleClientsList();