let contagem = 0;

function buscarPersonagens(){

fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then(res => res.json())
    .then(dados => {
        dados.map(cada => {
        productData.innerHTML += 

        `
        <tr>
            <td>${contagem += 1}</td>
            <td>${cada.name}</td>
            <td><img src="${cada.img}"/></td>
            <td>${cada.level}</td>
            <td>
            <button type="button" class="btn btn-warning">Editar</button>
            <button type="button" class="btn btn-danger">Excluir</button>  
            </td>
        </tr>
        `
        })
    })
}

buscarPersonagens()

// Requisição de HTTP: Protocolo de hypertexto; -> CRUD

// GET - trazer dados
// POST - inserir dados
// PUT/PATCH - atualizar
// DELETE - deletar

//exmplo digimon api -> so permite o get