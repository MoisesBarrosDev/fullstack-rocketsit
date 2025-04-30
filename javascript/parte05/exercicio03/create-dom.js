// Fazendo um query no DOM (pegando elementos do HTML pelo seletor)
const form = document.querySelector('form')                     // Seleciona o formulário
const tarefa = document.querySelector('#tarefa')                // Input de nome da tarefa
const description = document.querySelector('#description')      // Textarea de descrição da tarefa
const tpStatus = document.querySelector('#status')              // Select com o status da tarefa
const button = document.querySelector('button')                 // Botão de submit
const ul = document.querySelector('ul')                         // Lista onde tarefas serão exibidas

// Função para buscar tarefas já cadastradas e renderizá-las
const buscarProdutos = async () => {
  try {
    const busqueTarefa = await fetch('http://localhost:3333/tasks')  // Requisição GET para buscar tarefas
    const respostaDoBuscarTarefa = await busqueTarefa.json()         // Converte a resposta para JSON

    ul.innerHTML = '' // Limpa a lista antes de renderizar novamente

    if (respostaDoBuscarTarefa.length == 0) {
      // Se não houver tarefas, mostra uma mensagem
      const createLi = document.createElement('li')
      createLi.textContent = 'Nenhum Produto cadastrado!'
      ul.append(createLi)
      return
    }

    // Percorre cada tarefa retornada
    respostaDoBuscarTarefa.forEach(myTasks => {
      const li = document.createElement('li') // Cria um novo <li>

      // Define o texto da tarefa com ou sem descrição
      if (myTasks.description.length == 0) {
        li.textContent = `${myTasks.tarefa}, ${myTasks.tpStatus}.`
      } else {
        li.textContent = `${myTasks.tarefa}, ${myTasks.description}, ${myTasks.tpStatus}.`
      }

      // Botão de deletar
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Apagar'
      deleteButton.style.marginLeft = '10px'
      deleteButton.style.marginTop = '10px'

      deleteButton.addEventListener('click', async () => {
        const confirmDelete = confirm(`Tem certeza que deseja deletar ${myTasks.tarefa} ?`)
        if (confirmDelete) {
          try {
            // Requisição DELETE para remover a tarefa
            const resposta = await fetch(`http://localhost:3333/tasks/${myTasks.id}`, {
              method: 'DELETE',
            })

            if (resposta.ok) {
              alert('Produto removido com sucesso!')
              buscarProdutos() // Atualiza a lista
            } else {
              alert('Erro ao remover produto!')
            }
          } catch (error) {
            alert(`Error: ${error}`)
          }
        }
      })

      // Botão de editar
      const editButton = document.createElement('button')
      editButton.textContent = 'Editar conteúdo'
      editButton.style.marginLeft = '10px'
      editButton.style.marginRight = '10px'
      editButton.style.marginTop = '10px'

      editButton.addEventListener('click', () => {
        li.textContent = '' // Limpa o conteúdo do <li> para inserir os inputs

        // Input para editar tarefa
        const tarefaInput = document.createElement('input')
        tarefaInput.type = 'text'
        tarefaInput.value = myTasks.tarefa
        tarefaInput.style.marginRight = '10px'

        // Input para editar descrição
        const descriptionInput = document.createElement('input')
        descriptionInput.type = 'text'
        descriptionInput.value = myTasks.description
        descriptionInput.style.marginRight = '10px'

        // Input para editar status
        const statusInput = document.createElement('input')
        statusInput.type = 'text'
        statusInput.value = myTasks.tpStatus

        // Botão para salvar alterações
        const saveButton = document.createElement('button')
        saveButton.textContent = 'Salvar'
        saveButton.style.marginLeft = '10px'
        saveButton.style.marginRight = '10px'
        saveButton.style.marginTop = '10px'

        saveButton.addEventListener('click', async () => {
          try {
            // Requisição PUT para atualizar a tarefa
            const resposta = await fetch(`http://localhost:3333/tasks/${myTasks.id}`, {
              method: 'PUT',
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify({
                tarefa: tarefaInput.value,
                description: descriptionInput.value,
                tpStatus: statusInput.value
              })
            })
            if (resposta.ok) {
              alert('Tarefa atualizada com sucesso!')
              buscarProdutos() // Atualiza a lista
            } else {
              alert('Erro ao atualizar Tarefa.')
            }
          } catch (error) {
            alert(`Erro: ${error}`)
          }
        })

        // Adiciona os elementos no <li>
        li.appendChild(tarefaInput)
        li.appendChild(descriptionInput)
        li.appendChild(statusInput)
        li.appendChild(saveButton)
        li.appendChild(deleteButton)
        li.appendChild(editButton)
      })

      // Adiciona os botões ao <li> original
      li.appendChild(deleteButton)
      li.appendChild(editButton)
      ul.appendChild(li) // Adiciona o <li> na lista <ul>
    })
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
  }
}

// Evento de envio do formulário
form.addEventListener('submit', async (event) => {
  event.preventDefault() // Impede o recarregamento da página

  // Cria objeto com dados do formulário
  const novaTarefa = {
    tarefa: tarefa.value,
    description: description.value,
    tpStatus: tpStatus.value
  }

  // Verifica se o status está válido
  if (novaTarefa.tpStatus === 'selecione') {
    alert('Selecione um status válido!')
    return
  }

  try {
    // Requisição POST para criar nova tarefa
    const resposta = await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaTarefa)
    })

    if (resposta.ok) {
      alert('Tarefa cadastrada com sucesso!')
      form.reset()       // Limpa os campos do formulário
      buscarProdutos()   // Atualiza a lista
    } else {
      alert('Erro ao cadastrar tarefa!')
    }
  } catch (error) {
    alert(`Erro: ${error}`)
  }
})

// Chama a função ao carregar a página para exibir as tarefas
buscarProdutos()
