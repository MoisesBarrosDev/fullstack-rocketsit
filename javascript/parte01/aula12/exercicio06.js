/*
Exercício 01

- Abaixo do array "fruits",verfique se "abacaxi" existe no array.Se existir,exiba no console a
  mensagem "A string "abacaxi" existe no array fruits.";
- Se "abacaxi" não existir, verifique se "pera" no array. Se existir, exiba no console  a mensagem
  A string "pera" existe no array fruits."
- Se nenhuma das duas frutas existirem no array, exiba no console a mensagem 
  "Nem pera nem abacaxi existem no array "fruits".".
*/

const fruits = ['morango', 'abacaxi', 'banana', 'pera', 'mamão']

if (fruits.includes('abacaxi')) {
  console.log('A string "abacaxi" existe no array fruits.')
} else if (fruits.includes('pera')) {
  console.log("A string 'pera' existe no array fruits.")
} else {
  console.log("Nem pera nem abacaxi existem no array 'fruits'.")
}


/*
Exercício 02

- Armazene em uma constante apenas a hora atual na qual você está fazendo este exercício.
- À partir das 6, exiba "Bom dia!" no console
- À partir das 12, exiba "Boa tarde!" no console
- À partir das 18, exiba "Boa noite!" no console

obs.:tanto a expresão do lado esquerdo quanto a do lado direito do operador lógico
     precisam ter a constante específicada. exemplo: hour > && hour < y.
*/

const hour = 14
const isMorning = hour >= 6 && hour <= 11
const isAfternoon = hour >= 12 && hour <= 17

if (isMorning) {
  console.log("Bom dia!")
} else if (isAfternoon) {
  console.log("Boa tarde!")
} else {
  console.log("Boa noite!")
}


/*
Exercício 03

- Armazene  sua idade em uma constante;
- Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou 
  se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é armazenada
  em uma variável;
- Se a idade acima não atende às condições acima , a variavel deve armazenar a mensagem "A entrada é R$ 30,00.";
- Exiba a mensagem no console;
- Agora, teste diferentes idades para  se certificar que a condição do 'if' também está funcionando.
*/

const myAge = 22
let priceMessage = null
const isChild = myAge <= 7
const isOlder = myAge >= 65

if (isChild || isOlder) {
  priceMessage = "Para você, a entrada é grátis!"
} else {
  priceMessage = "A entrada é R$ 30,00."
}
console.log(priceMessage)


/*
Exercício 04

- Utilize um for loop para gerar um novo array com apenas os números entre 11 e 90
  presentes no array "numbers" (incluindo 11 e 90)
- Exiba o novo array no console;
- O resultado deve ser: [34,46,90,25,11,89,76].
*/

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]
const newNumbers = []

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i]
  const isInRange = number >= 11 && number <= 90

  if (isInRange) {
    newNumbers.push(number)
  }
}
console.log(newNumbers)


/*
Exercício 05

- O array "crazyArray" (abaixo) possui 3 tipos de dados : numbers,booleans e string;
- Considerando este array, substitua os "X" da frase abaixo pelas informações corretas;
- Gere essas informações à partir de um for loop;
- Exiba a frase no console.

"O crazyArray tem X booleans, X números e X strings."
*/

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]

let numberAmount = 0
let booleanAmount = 0
let stringAmount = 0

for (let i = 0; i < crazyArray.length; i++) {
  const typeofItem = typeof crazyArray[i]
  const isItemANumber = typeofItem === 'number'
  const isItemABoolen = typeofItem === 'boolean'

  if (isItemANumber) {
    numberAmount++
  } else if (isItemABoolen) {
    booleanAmount++
  } else {
    stringAmount++
  }
}
console.log(`O crazyArray tem ${booleanAmount} booleans, ${numberAmount} números e ${stringAmount} strings.`)


/*
Exercício 06

- Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos
  arrays: um array com apenas os números ímpares do "randomNumbers" e um outro
  array com apenas os números pares;
- Após isso,utilizando os dois arrays que você criou,exiba a frase abaixo
  no console, substituindo  "XX, XX e XX" pelos números corretos. Os números 
  da frase não devem ser inseridos com a notação  "item [index]" e os "e" antes
  do último número ímpar e do último número par devem constar na frase;

- Dica: para saber se um número é par, o restante da divisão dele por 2 deve ser 0.

"Números ímpares : XX, XX e XX. Números pares: xx, xx e xx."
*/

const randomNumbers = [73, 4, 67, 10, 31, 58]
const imparNumbers = []
const parNumbers = []

for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i]
  const isImpar = number % 2 !== 0
  if (isImpar) {
    imparNumbers.push(number)
  } else {
    parNumbers.push(number)
  }
}

// A expressão regular /,([^,]*)$/ funciona da seguinte forma:

// '/' e '/' são os delimitadores que indicam o início e o fim da expressão regular

/,([^,]*)$/ // Esta é a expressão regular inteira

// A primeira parte: ',' (vírgula)
// Isso vai procurar uma vírgula (',') na string. A vírgula é o item que queremos "alterar".

// A segunda parte: '([^,]*)'
// '([' e '])' são delimitadores para um "conjunto de caracteres". O '[]' indica quais caracteres estamos interessados.
// '^' dentro dos colchetes significa **negação**. Ou seja, estamos dizendo "não quero vírgulas aqui".
// Então, '[^,]' vai procurar qualquer caractere **exceto vírgula**. Isso é o que queremos capturar após a vírgula.
// '*' significa "zero ou mais" desse caractere que não seja vírgula.
// Ou seja, '([^,]*)' significa "capture qualquer coisa até o final, **exceto vírgulas**".

// O símbolo '$' significa "fim da string". Ele garante que vamos encontrar a **última vírgula** na string.
// Sem isso, ele poderia pegar qualquer vírgula no meio da string, mas estamos interessados apenas na última.

// Resumo: essa expressão regular busca pela **última vírgula** em uma lista e captura tudo após ela (até o fim da string),
// mas se assegura de que o que vem depois da vírgula não seja outra vírgula.


const imparesFormatados = imparNumbers.join(", ").replace(/,([^,]*)$/, " e$1")
const paresFormatados = parNumbers.join(", ").replace(/,([^,]*)$/, " e$1")
console.log(`Números ímpares: ${imparesFormatados}. Números pares: ${paresFormatados}.`)


/*
Exercício 07

- Crie um array chamado "names" contendo alguns nomes de pessoas.
- Verifique se o nome "João" existe no array. 
- Se existir, exiba a mensagem "O nome 'João' existe no array."
- Se não existir, verifique se o nome "Maria" está no array. 
- Se "Maria" existir, exiba "O nome 'Maria' existe no array."
- Caso nenhum dos dois nomes exista, exiba a mensagem "Nenhum dos nomes foi encontrado."
*/

const names = ['Moises', 'Jessica', 'João', 'Francisca']

if (names.includes('João')) {
  console.log("O nome 'João' existe no array.")
} else if (names.includes('Maria')) {
  console.log("O nome 'Maria' existe no array.")
} else {
  console.log("Nenhum dos nomes foi encontrado.")
}



/*
Exercício 08

- Crie uma constante chamada "temperature" e armazene a temperatura atual (em graus Celsius).
- Se a temperatura for inferior a 20, exiba a mensagem "Está frio!".
- Se a temperatura for superior ou igual a 20, exiba "Está quente!".
*/

const temperature = 39
if (temperature < 20) {
  console.log("Está frio!")
} else {
  console.log("Está quente!")
} 


/*
Exercício 09

- Crie uma variável chamada "number" e armazene um número.
- Verifique se o número é múltiplo de 3 ou de 5.
- Se for múltiplo de 3, exiba "Múltiplo de 3".
- Se for múltiplo de 5, exiba "Múltiplo de 5".
- Se não for múltiplo de 3 nem de 5, exiba "Não é múltiplo de 3 nem de 5".
*/

const number = 10
if (number % 3 === 0) {
  console.log("Múltiplo de 3")
} else if (number % 5 === 0) {
  console.log("Múltiplo de 5")
} else {
  console.log("Não é múltiplo de 3 nem de 5")
}



/*
Exercício 10

- Crie um array de números chamado "values" e armazene alguns números inteiros.
- Utilize um for loop para criar um novo array chamado "valuesGreaterThan10" contendo apenas os números maiores que 10.
- Exiba o novo array no console.
*/

const values = [10, 20, 30, 40, 50]
const valuesGreaterThan10 = []
for (let i = 0; i < values.length; i++) {
  if (values[i] > 10) {
    valuesGreaterThan10.push(values[i])
  }
}
console.log(valuesGreaterThan10)



/*
Exercício 11

- Crie um array chamado "ages" com várias idades.
- Utilize um for loop para criar um novo array com apenas as idades maiores que 18.
- Exiba o novo array no console.
*/

const ages = [14, 15, 17, 10, 9, 4, 20, 43, 22, 70, 50]
const adults = []
for (let i = 0; i < ages.length; i++) {
  if (ages[i] > 18) {
    adults.push(ages[i])
  }
}
console.log(adults)


/*
Exercício 12

- Crie um array chamado "numbers" contendo alguns números inteiros.
- Utilize um for loop para calcular a soma de todos os números do array.
- Exiba o resultado da soma no console.
*/

const numberss = [70, 40, 30, 20, 10]
let soma = 0
for (let i = 0; i < numberss.length; i++) {
  soma += numberss[i]
}
console.log(soma)


/*
Exercício 13

- Crie um array chamado "mixedArray" que contém diferentes tipos de dados: números, strings e booleanos.
- Utilize um for loop para contar quantos números existem no array.
- Exiba a quantidade de números no console.
*/

const mixedArray = [true, 20, 'oi', undefined, 'Jessica', 'Thiago', 30, true, 50]
let totalNumbers = 0
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === 'number') {
    totalNumbers++
  }
}
console.log(`Existem ${totalNumbers} elementos do tipo number no array.`)
