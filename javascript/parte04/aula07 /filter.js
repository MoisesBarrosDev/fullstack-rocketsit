/*
O método filter() cria um novo array com todos os elementos que passaram na condição.
*/

const words = ['Javascript', 'HTML', 'CSS', 'Web']

// Filtrando palavras que tem mais que 3 letras.
const result = words.filter((word) => word.length > 3)
console.log(result)


const products = [
  { description: 'Teclado', price: 120, promotion: true },
  { description: 'Mouse', price: 290, promotion: true },
  { description: 'Monitor', price: 800, promotion: false }
]

// Exemplo de um filtro de produtos na promoção.
const promotion = products.filter((produto) => produto.promotion === true)
console.log(promotion)
