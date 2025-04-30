/*
destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.
*/
/*
  Destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos 
  e atribuí-los diretamente a variáveis, tornando o código mais limpo e legível.
*/

// Declaração de um objeto chamado 'product' com duas propriedades: 'descripition' e 'price'
const product = {
  descripition: 'Teclado', // A propriedade 'descripition' tem o valor 'Teclado'
  price: 150               // A propriedade 'price' tem o valor numérico 150
}

// Aqui usamos a desestruturação para extrair as propriedades do objeto diretamente para variáveis
const { descripition, price } = product
// Isso equivale a:
// const descripition = product.descripition
// const price = product.price

// Exibe a descrição do produto no console
console.log(`Descrição: ${descripition}`) // Saída: Descrição: Teclado

// Exibe o preço do produto no console
console.log(`preço: ${price}`)            // Saída: preço: 150

// Declara uma função chamada 'newProduct' que usa desestruturação diretamente nos parâmetros
function newProduct({ descripition, price }) {
  // Imprime um título no console
  console.log('### NOVO PRODUTO ###')

  // Exibe a descrição do novo produto
  console.log(`Descrição: ${descripition}`)

  // Exibe o preço do novo produto
  console.log(`preço: ${price}`)
}

// Chama a função 'newProduct', passando diretamente um objeto com as propriedades esperadas
newProduct({ descripition: 'Mouse', price: 70 })
// Saída:
// ### NOVO PRODUTO ###
// Descrição: Mouse
// preço: 70
