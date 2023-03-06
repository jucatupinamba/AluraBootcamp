(() => {
    
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
    lista.appendChild(tarefa);
    input.value = " ";

}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => {
    const botaoConclui = document.createElement(`button`);

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa);

        return botaoConclui;
    
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done')
}})  
()  //para executar a função