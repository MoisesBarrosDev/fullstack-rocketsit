// Criando um array usando o construtor 'new Array'
const newArray = new Array()
// Aqui estamos criando um array vazio (sem nenhum elemento)

// Criando um array com 4 posições vazias
const available = new Array(4)
// Isso cria um array com *espaço* para 4 elementos, mas todos ainda estão 'undefined' (vazios)

// Verificando o tamanho do array
console.log(available.length) // Resultado: 4


// O método unshift adiciona um item no início do array
const frutas = ["banana", "maçã"]
frutas.unshift("uva") // ['uva', 'banana', 'maçã']
console.log(frutas)

// O método shift remove um item no início do array
frutas.shift() // remove 'uva'
console.log(frutas) // ['banana', 'maçã']

// O método push adiciona um item no final do array
frutas.push("abacaxi") // ['banana', 'maçã', 'abacaxi']
console.log(frutas)

// O método pop remove um item no final do array
frutas.pop() // remove 'abacaxi'
console.log(frutas) // ['banana', 'maçã']

// O método splice serve para adicionar, remover ou substituir elementos em qualquer posição do array
// Sintaxe: array.splice(início, quantidadeParaRemover, item1, item2, ...)

const numeros = [1, 2, 3, 4, 5]

// Removendo 2 elementos a partir da posição 1
numeros.splice(1, 2) // remove [2, 3]
console.log(numeros) // [1, 4, 5]

// Adicionando elementos a partir da posição 1 (sem remover nada)
numeros.splice(1, 0, 10, 20) // insere 10 e 20 na posição 1
console.log(numeros) // [1, 10, 20, 4, 5]

// Substituindo elementos: remove 2 a partir da posição 2, e adiciona 99, 100
numeros.splice(2, 2, 99, 100) // remove [20, 4] e adiciona [99, 100]
console.log(numeros) // [1, 10, 99, 100, 5]
