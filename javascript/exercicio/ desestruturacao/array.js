/*
Exercício 01
Crie um array chamado cores com 3 cores diferentes.
Use desestruturação para salvar cada cor em uma variável separada e mostre elas no console.
*/

const colors = ['red', 'green', 'yellow']

const [red, green, yellow] = colors

console.log(red)
console.log(green)
console.log(yellow)

/*
Exercício 02
Crie um array chamado numeros com os valores [10, 20, 30, 40].
Use desestruturação para pegar o primeiro e o último número e mostre-os no console.
*/

const value = [10, 20, 30, 40]

const [first, , , last] = value

console.log(first, last)

/* 
Exercício 03
Crie dois arrays: frutas1 com os itens ["maçã", "banana"] e frutas2 com os itens ["laranja", "uva"].
Use o spread para criar um novo array todasFrutas com todos os itens.
*/

const fruits1 = ["maçã", "banana"]
const fruits2 = ["laranja", "uva"]

const allFruits = [...fruits1, ...fruits2]
console.log(allFruits)


/*
 Exercício 04
Crie um array com 3 números. Depois, 
crie uma cópia desse array usando spread e adicione o número 100 ao final da cópia. Exiba o novo array no console.
*/

const number = [10, 30, 40]
const copy = [...number, 100]
console.log(copy)

/*
 Exercício 05
  Crie uma função chamada somarTudo que aceita múltiplos números usando o rest (...numeros).
  A função deve retornar a soma de todos os números passados como argumento.
*/

function somarTudo(...numeros) {
  return numeros.reduce((acc, numero) => acc + numero, 0)
}

console.log(somarTudo(10, 20, 30, 50))

/*
 Exercício 06
Crie uma função chamada multiplicarTudo que recebe múltiplos números com o rest e retorna o produto de todos eles.
*/


function multiplicarTudo(...numeros) {
  return numeros.reduce((acc, numero) => acc * numero, 1)
}
console.log(multiplicarTudo(20, 20, 100, 50))