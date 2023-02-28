const novaTarefa = document.querySelector('[data-form-button]');

const criarTarefa = (evento) => {

    evento.preventDefault();  
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
    
    const tarefa =  document.createElement('li');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    lista.appendChild(tarefa);
    input.value = " ";

}


novaTarefa.addEventListener('click', criarTarefa);