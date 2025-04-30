/*
Spred (Espelhar) permite que um objeto iterável, como uma expressão de  array ou
uma string seja expandido para ser usado onde zero ou mais argumentos.
*/

// Criando um array de números
const numbers = [1, 2, 3, 4]

// Exibindo o array completo (como um único valor)
console.log(numbers) // saída: [1, 2, 3, 4]

// Usando o operador spread (...)
// Ele "espalha" os elementos do array, imprimindo cada item individualmente
console.log(...numbers) // saída: 1 2 3 4

// Criando um array de objetos, com informações de pessoas
const data = [
  {
    name: 'Thiago',
    email: 'thiagogoves99@gmail.com',
    avatar: 'r.png'
  },
  {
    name: 'João',
    email: 'joaogomes9@gmail.com',
    avatar: 't.png'
  }
]

// Exibindo o array completo (dois objetos dentro de um array)
console.log(data)
/*
Saída:
[
  { name: 'Thiago', email: 'thiagogoves99@gmail.com', avatar: 'r.png' },
  { name: 'João', email: 'joaogomes9@gmail.com', avatar: 't.png' }
]
*/

// Usando o spread para "espalhar" os objetos dentro do array
// Aqui, cada objeto é tratado separadamente (como dois objetos distintos)
console.log(...data)
/*
Saída:
{ name: 'Thiago', email: 'thiagogoves99@gmail.com', avatar: 'r.png' }
{ name: 'João', email: 'joaogomes9@gmail.com', avatar: 't.png' }
*/

// --------------------------------------------------------
// SE EU QUISER OBTER SOMENTE UM ÚNICO OBJETO COM O SPREAD
// Exemplo: unir todos os dados em um só objeto (pode sobrescrever propriedades iguais)

// Spread dentro de objetos → une objetos em um só
const products = [
  {
    name: 'Arroz',
    price: 150,
    estoque: 10
  },
  {
    name: 'Feijão',
    price: 100,
    estoque: 20
  }
]

const obj1 = {...products[0]}
console.log(obj1) 

// OBS: Quando há propriedades com o mesmo nome, o último sobrescreve o anterior
