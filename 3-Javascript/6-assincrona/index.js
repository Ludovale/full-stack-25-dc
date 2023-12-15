//codigos:
//200 - sucesso
//400 - erro User
//401 - autenticação
//403 - autorização(clearence) de usuario
//404 - page not found

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

//fetch, vai fazer uma busca (Get ->info do link) da informação (endpoint);
//aguardar ele retornar - .then
//no caso seria "e então, me retorne a resposta (res.json)"
//depois  (então - .the)  põe esse .json no console.log

async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
}

fetchProducts();