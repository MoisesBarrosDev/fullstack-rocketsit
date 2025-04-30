/*
O método find() retorna o valor do primeiro elemento do array que satisfazer a condição.
Caso contratio, undefined é retornado.
*/

const values = [5, 12, 8, 130, 44]
//  Retorna o primeiro elemento que o calor é maior que 10.
const found = values.find((value) => value > 10)
console.log(found)

// Exemplo com objetos
const fruits = [
  { name: 'apple', quantity: 23 },
  { name: 'Banana', quantity: 25 },
  { name: 'orange', quantity: 52 },

]
//  Retorna undefined pois não existe dentro do array de objetos nenhuma propiedade name com o watermelon.
const result = fruits.find((fruit) => fruit.name === 'watermelon')
console.log(result)
