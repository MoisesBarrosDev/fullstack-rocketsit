/*
Exercício 01

- Utilizando function declaration, implemente uma função que recebe 2 números por parâmetro
  e retorna o resultado da multiplicação entre esses 2 números;
- Previna que esses parâmetros recebam undefined;
- Exiba o resultado no console, sem inserir um console.log() dentro da função.

*/

function multiply(num1, num2,) {
  if (num1 === undefined || num2 === undefined) {
    return 'Erro: ambos os números devem ser fornecidos!';
  }
  return num1 * num2
}

console.log(multiply(10, 5))

/*
Exercício 02

- Faça o mesmo exercício acima pede, mas desta vez, implemente uma **function expression** que retorne o resultado
  da **divisão** entre esses 2 números.

*/

const divisonExpression = function (num1, num2) {

  if (num1 === undefined || num2 === undefined) {
    return 'Erro: ambos os números devem ser fornecidos!';
  }

  return num1 / num2

}
console.log(divisonExpression(10, 5))

/*
Exercício 03

- Implemente uma função que apenas exibe no console o valor recebido por parâmetro.
- Previna que o parâmetro dessa função receba undefined;  
- Faça a string abaixo ser exibida 7x no console;
- A cada exibição substitua o "X" pela informação correta;
- Não repita (manualmente) a invocação da função ou do console.log().

"Esta é a "X" vez que essa string é exibida. "

*/

const log = function (value = 'Você deve passar um valor como argumento') {
  console.log(value)
}
// for (let i = 0; i < 7; i++) {
//   let counter = i + 1
// log(`Esta é a ${counter} vez que essa string é exibida. `)
// }


/*
Exercício 04

- Comente o código acima, de forma que a string não seja mais exibida no console;
- Implemente uma função que retorna um novo array com as strings do array "millennialWords" em letras maiúsculas;
- Exiba o novo array no console, sem inserir um console.log() dentro da função.
*/

const millennialwords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness']

const trasformToupperCase = function (array = []) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    const wordInUpperCase = array[i].toUpperCase()

    newArray.push(wordInUpperCase)
  }
  return newArray
}
const millennialWordsInUpperCase = trasformToupperCase(millennialwords)
console.log(millennialWordsInUpperCase)

/*
Exercício 05

- Implemente uma função que retorna se um número é positivo ou negativo;
- Use essa função para descobrir quantos números positivos  o array "randomNumbers" possui;
- Exiba a frase abaixo no console,inserindo as informações corretas.

"O array "randomNumbers" possui XX números , sendo XX positivos e XX negativos."
*/
const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
let positiveNumberCounter = 0
let negativeNumberCounter = 0
const isPositive = function (number = 0) {
  return number >= 1
}

for (let i = 0; i < randomNumbers.length; i++) {
  const isPositiveNumber = isPositive(randomNumbers[i])

  if (isPositiveNumber) {
    positiveNumberCounter++
  } else {
    negativeNumberCounter++
  }
}
console.log(`O array "randomNumbers" possui ${randomNumbers.length} números , sendo ${positiveNumberCounter} positivos e ${negativeNumberCounter} negativos.`)


/*
Exercício 06

- Descomente a invocação da função abaixo e implemente-a;
- Ela deve retornar um novo array com apenas os números ímpares do array passado por argumento;
- Exiba o novo array no console, sem inserir um console.log() dentro da função.
*/

const getOddNumbers = function (numbers = []) {
  let newArray = []

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const isOddNumber = numbers[i] % 2 !== 0

    if (isOddNumber) {
      newArray.push(number)
    }
  }

  return newArray
}

const OddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

console.log(OddNumbers)

/*
Exercício 07

- Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' },

]
let sentence = ''
for (let i = 0; i < functions.length; i++) {
  const string = `${functions[i]()} `
  sentence += string
}
console.log(sentence)

/*
Exercício 08

- Crie uma função que recebe um número e verifica se ele é par ou ímpar.
- A função deve retornar a string "Par" ou "Ímpar".
- Use essa função para contar quantos números no array "numbers" são pares.
- Exiba no console a frase abaixo, substituindo os valores corretos.

"O array 'numbers' possui XX números, sendo XX pares e XX ímpares."
*/

const numbers = [10, 15, 30, 43, 56, 67, 80, 95, 100, 111]

let evenCounter = 0
let oddCounter = 0


const testFunction = function (number = 0) {
  return number % 2 === 0 ? "Par" : "Ímpar"; // Verifica se o número é divisível por 2 sem resto
}
for (let i = 0; i < numbers.length; i++) {
  const result = testFunction(numbers[i])
  if (result === "Par") {
    evenCounter++
  } else {
    oddCounter++
  }
}

console.log(`O array 'numbers' possui ${numbers.length} números, sendo ${evenCounter} pares e ${oddCounter} ímpares.`)


// Implemente a função que verifica se o número é par ou ímpar

// Utilize a função para contar os números pares e ímpares no array 'numbers'

// Exiba a frase correta no console
// Exemplo de saída: "O array 'numbers' possui 10 números, sendo 5 pares e 5 ímpares."






/*
 
 
Exercício 09
 
- Implemente uma função que recebe uma string como parâmetro e retorna a mesma string invertida.
- A função deve ser chamada `reverseString`.
- Use essa função para inverter a string abaixo e exibi-la no console.
 
"Eu sou uma string que precisa ser invertida."
*/

const sentenceToReverse = "Eu sou uma string que precisa ser invertida."

function stringReverse(str) {
  return str.split('').reverse().join('')

}
const reverseSentece = stringReverse(sentenceToReverse)
console.log(reverseSentece)

// Implemente a função 'reverseString'

// Exiba a string invertida no console


/*
Exercício 10

- Implemente uma função chamada `sumPositiveNumbers` que recebe um array de números.
- A função deve retornar a soma de todos os números positivos do array.
- Utilize a função para somar os números positivos do array "numbersArray" e exiba o resultado no console.

"Somatório dos números positivos: XX"
*/

const numbersArray = [-10, 20, 30, -5, 12, -7, 19, 0, -4]
let positiveNumberSum = 0
function sumPositiveNumbers(arr) {

  for (let i = 0; i < arr.length; i++) {
    let operation = arr[i] > 0

    if (operation) {
      positiveNumberSum += arr[i]

    }
  }
  return positiveNumberSum
}


sumPositiveNumbers(numbersArray);

console.log(`Somatório dos números positivos: ${positiveNumberSum}`);

// Implemente a função 'sumPositiveNumbers'

// Exiba o resultado da soma no console


/*
Exercício 11

- Crie uma função chamada `countWords` que recebe uma frase como parâmetro.
- A função deve retornar o número de palavras que a frase possui.
- Utilize essa função para contar o número de palavras na frase abaixo e exiba o resultado no console.

"A vida é feita de escolhas e desafios."
*/

const phrase = "A vida é feita de escolhas e desafios."
function countWords(test) {
  const words = test.split(" ")


  return words.length
}

console.log(countWords(phrase))

// Implemente a função 'countWords'

// Exiba o número de palavras na frase no console


/*
Exercício 12

- Crie uma função chamada `filterNumbers` que recebe um array de números e um número como parâmetro.
- A função deve retornar um novo array contendo apenas os números maiores ou iguais ao número passado como parâmetro.
- Utilize essa função para filtrar os números maiores ou iguais a 10 no array abaixo.

[5, 10, 15, 3, 7, 22, 8, 13]
*/

const numbersToFilter = [5, 10, 15, 3, 7, 22, 8, 13]
function filterNumbers(num, test) {
  const newArray = []

  for (let i = 0; i < num.length; i++) {
    if (num[i] >= test) {
      newArray.push(num[i])
    }
  }
  return newArray

}
console.log(filterNumbers(numbersToFilter, 10))


// Implemente a função 'filterNumbers'

// Exiba o novo array no console


/*
Exercício 13

- Implemente uma função chamada `isPalindrome` que verifica se uma string é um palíndromo.
- A função deve retornar `true` se a string for um palíndromo e `false` caso contrário.
- Use a função `isPalindrome` para verificar se a string abaixo é um palíndromo e exiba o resultado no console.

"arara"
*/

const word = "arara";  // Atribuindo a palavra "arara" à constante 'word'

function isPalindrome(str) {  // Declarando a função 'isPalindrome' que recebe um parâmetro 'str' (string a ser verificada)
  
  // Remover espaços e converter para minúsculas
  // A função 'replace' substitui todos os espaços em branco na string por nada (''), ou seja, remove os espaços
  // O 'toLowerCase()' converte todos os caracteres para minúsculas para garantir que a comparação seja insensível a maiúsculas e minúsculas.
  const normalizedStr = str.replace(/\s/g, '').toLowerCase();  

  // Inverter a string
  // 'split('')' divide a string 'normalizedStr' em um array de caracteres individuais
  // 'reverse()' inverte a ordem do array
  // 'join('')' junta os elementos do array de volta em uma string, formando a string invertida
  const reversedStr = normalizedStr.split('').reverse().join('');
  
  // Comparar se a string normalizada é igual à string invertida
  // Retorna 'true' se forem iguais, caso contrário retorna 'false'
  return normalizedStr === reversedStr;  
}

// Chama a função 'isPalindrome' passando a string 'word' e exibe o resultado no console
console.log(isPalindrome(word));  // Exibe 'true' ou 'false' no console dependendo da comparação





// Implemente a função 'isPalindrome'

// Exiba 'true' ou 'false' no console com base no resultado da verificação


/*
Exercício 14

- Implemente uma função chamada `findLongestWord` que recebe um array de strings como parâmetro.
- A função deve retornar a palavra mais longa do array.
- Use essa função para encontrar a palavra mais longa no array "wordsArray" abaixo.

["cachorro", "gato", "elefante", "hipopotamo", "pato"]
*/

const wordsArray = ["cachorro", "gato", "elefante", "hipopotamo", "pato"]

// Implemente a função 'findLongestWord'

// Exiba a palavra mais longa no console


/*
Exercício 15

- Implemente uma função chamada `removeDuplicates` que recebe um array de números como parâmetro.
- A função deve retornar um novo array sem números duplicados.
- Use essa função para remover duplicatas do array abaixo e exiba o novo array no console.

[1, 2, 3, 1, 4, 2, 5, 3, 6]
*/

const numbersWithDuplicates = [1, 2, 3, 1, 4, 2, 5, 3, 6]

// Implemente a função 'removeDuplicates'

// Exiba o novo array sem duplicatas no console

