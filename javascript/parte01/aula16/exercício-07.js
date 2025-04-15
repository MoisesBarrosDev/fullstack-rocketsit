/*
Exercício 01

- Inverta o valor dos booleans do console.log()  abaixo;
- O resultado exibido no console deve ser : false true.
*/

console.log(!true, !false)

/*
Exercício 02

- Abaixo do array "animals" , verifique  se o animal leão **não** existe no array.
  Se não existir, exiba no console a mensagem "Leão não existe no array animals.";
- Se existir, exiba no console a mensagem "Existe um leão no array animals".
*/

const animals = ['macaco', 'tucano', 'leão', 'elefante', 'pavão', 'hipopótamo']


if (!animals.includes('leão')) {
  console.log("Leão não existe no array animals.")
} else {
  console.log("Existe um leão no array animals.")
}

/*
Exercício 03

- Some os números do array abaixo;
- Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba
  a frase abaixo no console, substituindo  "RESULTADO DA SOMA" pelo valor 
  correto.

"A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_ DA _SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
let sum = 0
const limit = 400

for (let i = 0; i < randomNumbers.length; i++) {
  sum += randomNumbers[i]
  if (sum > limit) {
    console.log(`A soma ultrapassou ${limit}. Até aqui, o valor atual é ${sum}.`)
    break
  }
}

/*
Exercício 04

- Concatene as strings do array abaixo, formando uma frase;
- Se durante a concatenação a palavra "certeza" existir, ela não deve ser
  concatenada;
- Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
let somaString = ''

for (let i = 0; i < sentence.length; i++) {
  const word = sentence[i]
  if (word === 'certeza') {
    continue
  }
  somaString += `${word} `
}
console.log(somaString)

/*
Exercício 05

- Itere sobre o array "randomValues" apenas até a 4° string dele;
- Exiba a string  abaixo no console, mantendo a formatação correta de lista inserindo 
  as informações corretas:

  "
  3 informações sobre o array randomValues: 
    - As primeiras 4 strings são XX,XX XX e XX;
    - Até que as primeiras 4 strings fossem iteradas, xx booleans foram iterados;
    - O array foi iterado por xx vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11]

let stringAmount = 0
let fourPrimarayString = []
let booleanAmount = 0
let totalInterations = 0

for (let i = 0; i < randomValues.length; i++) {
  const item = randomValues[i]
  const typeOfItem = typeof item
  const isItemAString = typeOfItem === 'string'
  const isItemABoolean = typeOfItem === 'boolean'

  if (stringAmount === 4) {
    break
  }

  if (isItemAString) {
    fourPrimarayString.push(item)

    stringAmount++


  }

  if (isItemABoolean) {
    booleanAmount++
  }

  totalInterations++

}

const stringFormatada = fourPrimarayString.join(", ").replace(/,([^,]*)$/, " e$1")
console.log(`As ${stringAmount} primeiras strings são ${stringFormatada}; Até que as primeiras ${stringAmount} strings fossem iteradas, 
${booleanAmount} booleans foram iterados;  O array foi iterado por ${totalInterations} vezes.`)


/*
Exercício 06

- Descomente a constante abaixo e atribua a ela algum tipo de bebida.Exemplo: água,refrigerante ou suco; 
- Utilize um switch statement com cases para essas 3 possibilidades de bebida;
- Se o tipo da bebida é água, atribua uma variável a mensagem "Substância química cuja as moléculas são formadas por
  dois átomos de hidrogênio e um de oxigênio.";
- Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não fermentada,fabricada industrialmente,á base
  de água mineral e açúcar." deve ser armazenada;
- Se é suco,atribua a mensagem "Bebida produzida do líquido extraído de frutos.";  
- Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar "Bebida desconhecida.";
- Exiba a mensagem no console. Teste também as outras possibilidades de tipo de bebida além da que você escolheu.  
*/

const drinkType = 'leite'
let drinkMessage = null

switch (drinkType) {
  case 'água':
    drinkMessage = "Substância química cuja as moléculas são formadas por dois átomos de hidrogênio e um de oxigênio."
    break
  case 'refrigerante':
    drinkMessage = "Bebida não alcoólica e não fermentada,fabricada industrialmente,á base de água mineral e açúcar."
    break
  case 'suco':
    drinkMessage = "Bebida produzida do líquido extraído de frutos."
    break
  default:
    drinkMessage = "Bebida desconhecida."
}
console.log(drinkMessage)

/*
Exercício 07

- Reescreva o código comentado abaixo, utilizando um switch statement;
- Depois de escrever o switch , modifique o valor da declaração da const "a" para testar o switch que você escreveu.
*/

const number = 2

//  if (a === 0) {
//  console.log(`O valor de "a" é ${a}`)
//  } else if (a === 1) {
//  console.log(`O valor de "a" é ${a}`)
//  } else {
//  console.log('O valor de "a" é qualquer número , exceto 0 e 1')
//  }

let testNumber = null
const numberMessage = 'O valor de "number" é'

switch (number) {
  case 0:
    testNumber = `${numberMessage} ${number}`
    break
  case 1:
    testNumber = `${numberMessage} ${number}`
    break
  default:
    testNumber = `${numberMessage} qualquer número , exceto 0 e 1`
}
console.log(testNumber)