//ARRAY

// const personagens1 = [
//     1,
//     2,
//     3,
//     4,
// ]

// //OBJETO
// const personagens2 = {
//     id: 1,
//     nome:'David',
//     idade: 28,
// }

// //ARRAY DE OBJETOS
// const personagens3 = [
//     {
//         id: 1,
//         nome:'David',
//         idade: 28,
//     },
//     {
//         id: 2,
//         nome:'David',
//         idade: 23,
//     },
//     {
//         id: 3,
//         nome:'David',
//         idade: 30,
//     }
// ]
// //push - adicionar elemento no final
// //unshift - adicionar elemento no inicio
// //pop - excluir o elemento final
// //shift - excluir o primeiro elemento

// //SWITCH
// let diaDaSemana = parseInt(prompt('digite um numero referente ao dia da semana')); //prompt só envia informacoes em string

// switch(diaDaSemana){
//     case 1:
//         alert('voce escolheu o domingo')
//         break;
//     case 2:
//         alert('voce escolheu a segunda-feira')
//         break;
//     case 3:
//         alert('voce escolheu a terça-feira')
//         break;
//     default:
//         alert('numero nao encontrado')
//         break;
// }

/**
 * Escreva um programa em js para simular uma fila de espera em um consultório.
 * o programa deve iniciar mostrando na tela um menu interativo contendo lista de ordem de chamada.
 * esperando em ordem mostrando sua posição ao lado só nome. 
 * (ex 1 marcus, 2 davi)
 * 
 * o menu também deve permitir escolher entre as opções de "novo paciente"
 * 
 * para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente);
 * "consultar o paciente" que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado e "sair".
 * o programa só deve ser encerrado quando a opção sair for acionada.
 * caso contrario ele volta pro menu.
 */

// const lista = document.getElementById("lista");
// const fila = ["a", "b", "c"];

// function imprimirLista() {
//     for (index in fila){
//         lista.innerHTML = `<li><p>${index}. ${fila[index]}</p></li>`;
//     }
// }

// imprimirLista();

let fila = [];
let opcao = "";
do{
    let pacientes = "";
    for(let i = 0; i <  fila.lenght; i++){
        pacientes += (i + 1) + "o - " + fila[i] + "\n"
    }

opcao = prompt(
    `Pacientes \n${pacientes} \n Escolha uma opção: \n1 - Novo Paciente \n2- Consultar Paciente \n3- Sair`
)

switch(opcao){
    case "1":
        const novoPaciente = prompt("Qual o nome do paciente")
        fila.push(novoPaciente)
        break
    case "2":
        const pacienteConsultado = fila.shift()
        if(!pacienteConsultado){
            alert("Não há pacientes na fila!")
        } else {
            alert(`${pacienteConsultado} foi removido da fila.`)
        }
        break
    case "3":
        alert("Encerrando .....")
        break
    default:
        alert("Opção invalida")
        break
    }

} while (opcao !== "3");
