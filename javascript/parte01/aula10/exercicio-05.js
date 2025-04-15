/* 
Exercício 01
- Ultilizado um while loop, exiba no console todos os números entre 0 e 5,
  inclusive esses dois.
- O RESULTADO DEVE SER:
  0
  1
  2
  3
  4
  5

*/

// let i = 0

// while (i <= 5) {
// console.log(i)
// i++
// }



/*
02 - Comente a declaração da let e o loop acima e:

- Utilizando o for loop, faça o mesmo que foi pedido no exercicio 01.


*/

// for (let i = 0; i <= 5; i++) {
//   console.log(i)
// }



/*
03 - Comente o loop acima e:

- Escreva um loop(for ou while) que exiba a frase abaixo no console;
- Substitua o "X" pela informação correta;
- "X"deve começar em 1 na primeira exibição da frase e em 10 na última;
- Exiba a frase 10x no console.

"Esta é a x vez que esta frase é exibida no console."


*/

// for (let i = 1; i <= 10; i++) {
//   console.log(`Esta é a ${i} vez que esta frase é exibida no console.`)
// }




/*
04 - Comente o loop acima e:

- Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à ela um array vazio;
- Adicione no array que a "upperCaseCities" armazena as cidades do array cities com todas as 
  letras maiúsculas, utilizando o for loop.
- Para ver se deu certo, exiba o upperCaseCities no console.
*/

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = []

for (let i = 0; i < cities.length; i++) {
  upperCaseCities.push(cities[i].toUpperCase())
}
// console.log(upperCaseCities)



/*
05 - Comente o console.log acima e:

- Após a const names, utilize um for loop para gerar um template HTML;
- Exiba no console o template HTML que você gerou;
- O template deve ser exibido apenas uma vez no console e o resultado deve ser:
   <li>João Gilo</li> <li>Chicó</li> <li>Rosinha</li>
*/

const names = ['João Grilo', 'Chicó', 'Rosinha']
for (let i = 0; i < names.length; i++) {
  const HTMLTEMPLATE = `<li>${names[i]}</li>`
  // console.log(HTMLTEMPLATE)
}



/*
06 - Comente o console.log acima e:

- Após a const numbers, utilize um for loop para somar todos os números do array;
- Exiba no console um boolean indicando se o total dessa soma é 337;
- O console deve exibir true.
*/

const numbers = ['91', '5', '30', '97', '83', '31']
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i])

}
// console.log(sum === 337)




/*
07 - Comente o console.log acima e:

  Este exercício é um pouco mais complexo que os anteriores. não se preocupe
  Muito caso você não acerte ele.Apenas tente resolvê-lo com o conhecimento
  adquirido até aqui.

- O JavaScript permite você criar arrays dentro de um outro array.Isso é chamado
  de aninhamento de arrays, ou nested arrays em inglês. Por isso, o array "arrays"
  abaixo é uma sintaxe válida. Cada array dentro do array "arrays" é um item;
- Abaixo do array "arrays", utilizando o for loop, some todos os números destes arrays.
- Após o for, exiba no console o resultado, que deve ser 218.

Dica: você pode colocar um loop dentro do outro, ou seja , aninhá-los. =)
*/

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4]
]
let arraysSum = 0
for (let i = 0; i < arrays.length; i++) {
  for (let j = 0; j < arrays[i].length; j++) {
    arraysSum += arrays[i][j]
  }
}
// console.log(arraysSum)



/*
08 - Comente o console.log acima e:

- Crie um array chamado "numbers2" com os seguintes valores: [10, 20, 30, 40, 50]
- Utilizando um loop "for", multiplique cada número do array por 2 e armazene os 
  resultados em um novo array chamado "doubledNumbers".
- Exiba "doubledNumbers" no console para verificar se os valores foram dobrados.
*/

const numbers2 = [10, 20, 30, 40, 50]
let doubledNumbers = []
for (let i = 0; i < numbers2.length; i++) {
  doubledNumbers.push(numbers2[i] * 2)
}
// console.log(doubledNumbers)




/*
09 - Comente o console.log acima e:

- Crie uma const "randomNumbers" contendo os seguintes números: [3, 7, 2, 8, 5, 9]
- Utilize um loop "while" para encontrar o maior número dentro do array e armazená-lo 
  na let "biggestNumber".
- Exiba no console o valor de "biggestNumber". Ele deve ser 9.
*/

const randomNumbers = [3, 7, 2, 8, 5, 9]
let biggestNumber = randomNumbers[0]
let i = 0
while (i < randomNumbers.length) {
  if (randomNumbers[i] > biggestNumber) {
    biggestNumber = randomNumbers[i]
  }
  i++
}
// console.log(biggestNumber)



/*
10 - Comente o console.log acima e:

- Crie um array chamado "mixedValues" contendo valores de diferentes tipos:
  [10, "JavaScript", true, 42, "HTML", false, "CSS"]
- Usando um loop "for", crie dois arrays: 
  - "onlyNumbers" (armazenando apenas os números)
  - "onlyStrings" (armazenando apenas as strings)
- Exiba os dois arrays no console para verificar o resultado.
*/

const mixedValues = [10, "JavaScript", true, 42, "HTML", false, "CSS"]
const onlyNumbers = []
const onlyStrings = []
for (let i = 0; i < mixedValues.length; i++) {
  if (typeof mixedValues[i] === "number") {
    onlyNumbers.push(mixedValues[i])
  } else if (typeof mixedValues[i] === "string") {
    onlyStrings.push(mixedValues[i])
  }
}
// console.log(onlyNumbers,onlyStrings)




/*
11 - Comente o console.log acima e:

- Crie uma let "counter" inicializada em 10.
- Utilizando um loop "while", diminua "counter" em 1 a cada iteração, 
  até que o valor seja 0.
- Para cada iteração, exiba "Contagem regressiva: X" no console, onde "X" é o valor de "counter".
- O console deve exibir:
  Contagem regressiva: 10
  Contagem regressiva: 9
  Contagem regressiva: 8
  ...
  Contagem regressiva: 1
*/

let counter = 10
while (counter > 0) {
  // console.log(`Contagem regressiva: ${counter}`)
  counter--
}



/*
12 - Comente o console.log acima e:

- Crie um array chamado "words" com as palavras: ["banana", "maçã", "abacaxi", "laranja", "uva"]
- Usando um loop "for", inverta as letras de cada palavra e armazene o resultado em um novo array "reversedWords".
- Exiba "reversedWords" no console.

  Exemplo de saída esperada:
  ["ananab", "ãçam", "ixacabA", "ajnaral", "avu"]
*/
// 1️⃣ split("") → Transforma a string em um array de caracteres.
// 2️⃣ reverse() → Inverte a ordem dos caracteres.
// 3️⃣ join("") → Junta os caracteres de volta em uma string.
const words = ["banana", "maçã", "abacaxi", "laranja", "uva"]
const reversedWords = []
for (let i = 0; i < words.length; i++) {
  reversedWords.push(words[i].split("").reverse().join(""))
}
console.log(reversedWords)



/*
13 - Comente o console.log acima e:

- Crie um array chamado "grades" com as seguintes notas: [78, 90, 85, 95, 88]
- Utilizando um loop "for", calcule a média das notas e armazene o resultado na let "average".
- Exiba no console se a média é maior ou igual a 80 (true ou false).
*/

const grades = [78, 90, 85, 95, 88]
let total = 0
for (let i = 0; i < grades.length; i++){
total+=grades[i]
}
let average = total / grades.length
console.log(average>=80)