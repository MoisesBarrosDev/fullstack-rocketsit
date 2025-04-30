// Selecionamos o formulário e o input de nome
const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')

// Adicionamos o evento de submit no formulário
form.addEventListener('submit', async (event) => {
  event.preventDefault() // Impede o recarregamento da página

  // Criamos o objeto com o nome preenchido
  const newUser = {
    name: nameInput.value
  }

  try {
    // Enviamos para a API usando fetch
    const response = await fetch('http://localhost:3333/users', {
      method: 'POST', // Método POST porque queremos enviar
      headers: {
        'Content-Type': 'application/json' // Dizemos que estamos mandando um JSON
      },
      body: JSON.stringify(newUser) // Transformamos o objeto em JSON
    })

    // Só pra confirmar no console se deu tudo certo
    const data = await response.json()
    console.log('Usuário cadastrado:', data)

    // Limpamos o campo do formulário
    nameInput.value = ''
    alert('Usuário cadastrado com sucesso!')

  } catch (error) {
    alert('Erro ao cadastrar: ' + error)
  }
})
