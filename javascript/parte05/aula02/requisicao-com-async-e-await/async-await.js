// Utilizando o fetch com async e await

// Definimos uma função assíncrona chamada fetchProduct
const fetchProduct = async () => {
  try {
    // Dentro do try tentamos fazer a requisição

    // Faz uma requisição GET para o servidor
    const response = await fetch('http://localhost:3333/products')

    // Converte a resposta para JSON
    const data = await response.json()

    // Exibe os dados no console
    console.log(data)

  } catch (error) {
    // Se der qualquer erro (na requisição ou na conversão), ele será capturado aqui
    alert(`Ocorreu um erro: ${error}`)
  }
}

// Chamamos a função para executar a requisição
// fetchProduct()
// Função assíncrona para buscar um produto pelo seu ID
const fetchProductById = async (id) => {
  try {
    // Fazemos uma requisição GET para buscar um produto específico no servidor
    // Usamos crase (`) para interpolar a variável id dentro da URL
    const response = await fetch(`http://localhost:3333/products/${id}`)
    
    // Esperamos a resposta ser convertida para JSON para manipular os dados
    const data = await response.json()

    // Exibimos o produto específico no console
    console.log(data)

  } catch (error) {
    // Se houver qualquer erro durante a requisição ou o processamento da resposta
    // mostramos um alerta na tela para o usuário
    alert(`Ocorreu um erro: ${error}`)
  }
}

// Aqui a função poderia ser chamada passando um id específico (exemplo: '3')
// fetchProductById('3')

// ================================================

// Selecionamos os elementos do formulário no HTML para manipular seus valores
const productName = document.querySelector('#name') // Input do nome do produto
const productPrice = document.querySelector('#price') // Input do preço do produto
const form = document.querySelector('form') // O próprio formulário

// Adicionamos um ouvinte de evento para quando o formulário for enviado (submit)
form.addEventListener('submit', async (event) => {
  // event.preventDefault() impede que a página seja recarregada (comportamento padrão do formulário HTML)
  event.preventDefault()

  // Fazemos uma requisição POST para enviar um novo produto para a API
  await fetch('http://localhost:3333/products', {
    method: 'POST', // Método HTTP que indica que estamos enviando dados para o servidor
    headers: {
      "Content-Type": "application/json" // Cabeçalho que diz que o corpo da requisição está em formato JSON
    },
    body: JSON.stringify({ // Transformamos o objeto JavaScript em uma string JSON para enviar
      id: new Date().getTime().toString(), // Criamos um ID único baseado no timestamp atual
      name: productName.value, // Pegamos o valor do input de nome
      price: productPrice.value // Pegamos o valor do input de preço
    })
  })

  // Depois de cadastrar o novo produto, chamamos fetchProduct()
  // para atualizar a lista de produtos na tela (não mostrado aqui o código da fetchProduct())
  await fetchProduct()
})
