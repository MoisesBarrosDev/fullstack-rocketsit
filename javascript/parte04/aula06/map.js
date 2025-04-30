/*
 O método map() chama a função callback recebida por parâmetro para cada elemento
 do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final,
 devolve o novo array. 
 */

const produtos = ['Teclado', 'Mouse', 'Monitor']

// Quando usar chaves {} no método map? quando quiser fazer manipulação do array,
// seja fazendo uma condição ou algum tipo de validação.

//  Percorrendo os itens do Array
produtos.map((produtos) => {
  console.log(produtos.toUpperCase())

})

// Essa sintaxe reduzida é quando quero apenas retornar o valor.

// Sintaxe reduzida.
produtos.map((produtos) => console.log(produtos.toLowerCase()))


// Utilizando o novo objeto retornado
const formatted = produtos.map((produto) => {
  return produto.toUpperCase()
})
console.log(formatted)

// Adicionando um novo array, e em cada posição é um objeto
const addTheObject = produtos.map((produto) => {
  return {
    id: Math.random(),
    description: produto,
    price: 150
  }
})

console.log(addTheObject)