const nameProduct = document.querySelector('#name')
const priceProduct = document.querySelector('#price')
const form = document.querySelector('form')
const ul = document.querySelector('ul')

// Função que busca e mostra todos os produtos
const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:3333/products')
    const data = await response.json()

    ul.innerHTML = '' // Limpa a lista

    if (data.length === 0) {
      const empty = document.createElement('li')
      empty.textContent = 'Nenhum produto cadastrado.'
      ul.appendChild(empty)
      return
    }

    data.forEach((product) => {
      const li = document.createElement('li')
      li.textContent = `${product.name} - R$ ${product.price} `

      // Botão de deletar
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Remover'
      deleteButton.style.marginLeft = '10px'
      deleteButton.style.marginTop = '10px'

      deleteButton.addEventListener('click', async () => {
        const confirmDelete = confirm(`Deseja remover "${product.name}"?`)
        if (confirmDelete) {
          try {
            const deleteResponse = await fetch(`http://localhost:3333/products/${product.id}`, {
              method: 'DELETE',
            })

            if (deleteResponse.ok) {
              alert('Produto removido com sucesso!')
              fetchProducts()
            } else {
              alert('Erro ao remover o produto.')
            }
          } catch (err) {
            alert(`Erro: ${err}`)
          }
        }
      })

      // Botão de editar
      const editButton = document.createElement('button')
      editButton.textContent = 'Editar'
      editButton.style.marginLeft = '10px'
      editButton.style.marginTop = '10px'

      editButton.addEventListener('click', () => {
        // Substitui o conteúdo do <li> por inputs
        li.innerHTML = ''

        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.value = product.name

        const priceInput = document.createElement('input')
        priceInput.type = 'text'
        priceInput.value = product.price

        const saveButton = document.createElement('button')
        saveButton.textContent = 'Salvar'
        saveButton.style.marginLeft = '10px'

        saveButton.addEventListener('click', async () => {
          try {
            const updateResponse = await fetch(`http://localhost:3333/products/${product.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: nameInput.value,
                price: priceInput.value
              })
            })

            if (updateResponse.ok) {
              alert('Produto atualizado com sucesso!')
              fetchProducts()
            } else {
              alert('Erro ao atualizar produto.')
            }
          } catch (error) {
            alert(`Erro: ${error}`)
          }
        })

        li.appendChild(nameInput)
        li.appendChild(priceInput)
        li.appendChild(saveButton)
      })

      li.appendChild(editButton)
      li.appendChild(deleteButton)
      ul.appendChild(li)
    })
  } catch (error) {
    alert(`Erro ao carregar produtos: ${error}`)
  }
}

// Envia novo produto
form.addEventListener('submit', async (event) => {
  event.preventDefault()

  try {
    const response = await fetch('http://localhost:3333/products', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        name: nameProduct.value,
        price: priceProduct.value
      })
    })

    if (response.ok) {
      nameProduct.value = ''
      priceProduct.value = ''
      await fetchProducts()
      alert(`Item cadastrado com sucesso!`)
    }

  } catch (error) {
    alert(`O cadastro falhou! ${error}`)
  }
})

// Carrega ao iniciar
fetchProducts()
