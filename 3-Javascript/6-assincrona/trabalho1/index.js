let card = document.getElementById("card");
let botao = document.getElementById("btn-sorte");


async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
            
    const data = await response.json();
            
    return data.slip.advice;
    //console.log(data);
}

async function chamarAdvice(){
let sorte = await fetchAdvice();
card.innerHTML = `<p class="text-amber-700">"${sorte}"</p>`
}

botao.addEventListener("click", chamarAdvice);