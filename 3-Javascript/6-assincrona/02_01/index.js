async function fetchClients() {
    //esse RESPONSE é um pré-processo para acessar as informações
    const response = await fetch(
        "https://65949ae91493b011606aad62.mockapi.io/clientes"
    ); 
    //esse DATA é o que recolhe as informações do .json
    const data = await response.json();
    console.log(data);
}

fetchClients();