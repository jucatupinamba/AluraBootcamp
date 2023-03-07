    import BotaoConclui from "./componentes/concluiTarefa";
    import BotaoDeleta from "./componentes/deletarTarefa";

    const criarTarefa = (evento) => {

    evento.preventDefault();  
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
    
    const tarefa =  document.createElement('li');  //criar elemento
    tarefa.classList.add('task');  //add CSS
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());   
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";

}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa)
