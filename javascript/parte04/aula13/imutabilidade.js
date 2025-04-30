/*
Aplicando a imutabilidade
*/


const address1 = {
  street: 'Av. Brasil',
  number: 20
}

// Isso não é uma cópia. É uma referência.
const address2 = address1
address2.number = 30

console.log(address1, address2)

// Aqui estamos criando um novo objeto utilizando as propiedades e valores de address1.(Opição 1)
const address3 = { ...address1 }
address3.number = 50
console.log(address3)

// Aqui estamos criando um novo objeto utilizando as propiedades e valores de address1.(Opição 2)
const address4 = { ...address1, number: 40 }
console.log(address4)

// Exemplo de referência de Array
const list1 = ['Apple', 'Banana']
const list2 = list1
// Perceba que está adicionando nos 2 arrays, pois os 2 estão olhando pro mesmo lugar na memoria.
list2.push('Watermelon')

console.log(list1, list2)

// Aqui estamos criando um novo array utilizando as frutas que já tem dentro de list1 , e adicionando mais uma. Porém é um novo array.
const list3 = [...list1, 'Morango']
console.log(list3)

