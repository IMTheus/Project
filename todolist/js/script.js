const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta =  document.querySelector('.list-tasks')


let minhaListaDeItens = []




function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}


function mostrarTarefas() {
    let novaLi = ''

    // ['comprar pão,' 'aprender']

    minhaListaDeItens.forEach((item, index) => {
         novaLi = novaLi + `
         
         <li class="task ${item.concluida && "done"}">

         <img src="img/checked.png" alt="tarefa-feita" onclick="concluirTarefa(${index})">
         <p>${item.tarefa}</p>

     <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick ="deletarItem(${index})"></li>
     `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

};


function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()


};

function deletarItem(index){
    minhaListaDeItens.splice(index, 1)

    mostrarTarefas()

};

function recarregarItens(){
    const tarefasLocalStorage = localStorage.getItem('lista')

    if(tarefasLocalStorage){
        minhaListaDeItens = JSON.parse (tarefasLocalStorage)

    }

   
    mostrarTarefas()
}


recarregarItens()
button.addEventListener('click', adicionarNovaTarefa
);