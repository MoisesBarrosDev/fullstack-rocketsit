/*
Dica:

- Alguns exercícios utilizarão,métodos, propiedades e funcionalidades vistos no começo do curso.
  Se for nescessário, reveja partes das aulas anteriores para relembrar.

*/

/*
Exercício 01

- Converta a função abaixo em uma arrow function utilize-a para exibir um valor no console.
*/


// function convertToString(value) {
//   return String(value)
// }

const convertToString = (value) => String(value)

const resultConvert = convertToString(40)
console.log(typeof resultConvert)

/*
Exercício 02

- Crie uma função que retorne a quantidade de caracteres que uma string recebida por parâmetro possui.
*/

const namee = 'Moises yonatha da silvera costa de melo'

const quantidade = (string) => string.length
console.log(quantidade(namee))

/*
Exercício 03

- Crie uma função que retorne todos os caracteres de uma string em letras minúsculas;
- Utilize a função para exibir a string abaixo no console.

"CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/

const fraseLowerCase = (lowerCase) => lowerCase.toLowerCase()
console.log(fraseLowerCase("CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO."))

/*
Exercício 04

- Crie uma função que retorne 2 parâmetros: um caractere e uma string;
- Ao ser invocada, a função deve retornar o index do caractere na string.
*/

const getIndex = (character, string) => string.indexOf(character)
console.log(getIndex('2', '1432'))

/*
Exercício 05

- Crie uma função que, ao ser invocada, retorna um boolean indicando se o item passado por argumento existe no array
  (também passado por argumento).
*/

const isBoolean = (item, array) => array.includes(item)
console.log(isBoolean(true, [7, 3, 1]))

/*
Exercício 06

- Crie uma função que retorna a concatenação de 2 arrays, passados como argumentos em sua invocação;
*/

const concatArrays = (array1, array2) => array1.concat(array2).join(' ')
console.log(concatArrays(['Ola Pessoal,'], ['Sejam Bem-Vindos.']))

/*
Exercício 07

- Crie uma função que retorna o array passado como argumento em sua invocação, mas com o último item removido.
*/

const removeItemArray = fristArray => {
  fristArray.pop()
  return fristArray
}
console.log(removeItemArray(['Banana', 'Maça', 'Pera', 'Melancia']))

/*
Exercício 08

- Crie uma função que retorna se o valor passado como argumento em sua invocação é null.
*/

const returnValue = value => value === null
console.log(returnValue(null))

/*
Exercício 09

- Crie uma função que apenas invoca uma função de callback recebida por parâmetro;
- Crie outra função que apenas exibe seu nome no console;
- Invoque a função que recebe um callback por parâmetro, passando como argumento a função
  que exibe seu nome no console e veja se o nome realmente foi exibido.
*/

const myFunc = callback => {
  callback()
}

const userName = () => {
  console.log('Moises Barros')
}
myFunc(userName)

/*
Exercício 10

- Crie uma função que invoca uma função de callback recebida por parâmetro.
  A invocação da função recebida por parâmetro deve receber um valor como argumento;
- Crie uma função que retorna o triplo de um número recebido por parâmetro;
- Faça com que a invocação da função descrita no 1° item deste exercício (10) resulte no triplo de 33.
*/

const invokeCallback = (value, callback) => {
  return callback(value)
}
const triple = number => number * 3
console.log(invokeCallback(30, triple))

/*
Exercício 11

- Crie uma função chamada `executeCallback` que recebe dois parâmetros: um valor e uma função de callback.
- A função `executeCallback` deve invocar a função de callback com o valor recebido como argumento, mas dessa vez, a função de callback deve retornar o valor ao quadrado.
- Ao invocar a função `executeCallback` com o valor `5` e a função de callback `square`, que retorna o quadrado do número, o resultado final deve ser `25`.
*/

const executeCallback = (value, callback) => {
  return callback(value)
}
const operationAoQuadrado = number => number ** 2

console.log(executeCallback(5, operationAoQuadrado))

/*
Exercício 12

- Crie uma função chamada `applyDiscount` que recebe dois parâmetros: um valor (preço de um produto) e uma função de callback.
- A função `applyDiscount` deve invocar a função de callback, passando o preço como argumento, mas a função de callback deve aplicar um desconto de 10% no valor.
- Ao invocar a função `applyDiscount` com o valor `200` e a função de callback `applyTenPercentDiscount`, o resultado final deve ser o valor com o desconto aplicado, ou seja, `180`.
*/

const applyDiscount = (preço, callback) => {
  return callback(preço)
}

const applyTenPercentDiscount = value => value * 0.9
console.log(applyDiscount(200, applyTenPercentDiscount))

/*
Exercício 13

- Crie uma função chamada `modifyString` que recebe dois parâmetros: uma string e uma função de callback.
- A função `modifyString` deve invocar a função de callback passando a string como argumento, mas a função de callback deve retornar a string convertida para maiúsculas.
- Ao invocar a função `modifyString` com a string `"hello"` e a função de callback `toUpperCaseCallback`, o resultado final deve ser a string `"HELLO"`.
*/
const modifyString = (string, callback) => {
  return callback(string)
}

const toUpperCaseCallback = test => test.toUpperCase()

console.log(modifyString('hello', toUpperCaseCallback))

/*
Exercício 14

- Utilizando um forEach, baseado no array "numbers", a cada iteração,exiba a mensagem abaixo no console,
  substituindo os "X" pelas informações corretas;

  "O X° item do array [X,X,X] é X."
*/

const numbers = [1, 2, 3]

const showNumbersInfo = (item, index, array) => {
  const itemPosition = index + 1
  const items = array.join(', ')

  console.log(`O ${itemPosition}° item do array [${items}] é ${item}.`)
}
numbers.forEach(showNumbersInfo)

/*
Exercício 15

- Converta o for loop abaixo em um forEach;
- Após a conversão, verifique se a cópia do array lettersCopy realmente foi criada.  
*/

const letters = ['v', 'e', 'p']
let lettersCopy = []

// for (let i = 0; i < letters.length; i++) {
//   lettersCopy.push(letters[i])
// }
letters.forEach((item) => {
  lettersCopy.push(item)
})
console.log(lettersCopy)

/*
Exercício 16

- Inclua o markup abaixo em seu index.html
- Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do array "review";
- Ao gerar o template, verifique no browser se os parágrafos foram incluídos dentro da section vazia do markup abaixo.

<article>
    <header>
      <h1>Sobre "Jurassic Park"</h1>
    </header>
    <section data-js="section"></section>
  </article>
*/

const section = document.querySelector('[data-js="section"]')

const review = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco para decidir se compraria, mas depois que li as primeiras páginas, fui completamente absorvido pela história. O livro tem uma profundidade incrível, e as cenas que eram apenas visuais no filme se tornaram muito mais emocionantes e complexas na versão escrita. Cada capítulo me deixou mais ansioso pelo próximo, e eu me senti como se estivesse vivendo a aventura ao lado dos personagens.',

  'O que mais me impressionou foi como o autor conseguiu expandir o mundo do filme, trazendo detalhes e camadas que eu nunca imaginei serem possíveis. Algumas subtramas que estavam apenas implícitas no filme ganharam vida própria e se tornaram fundamentais para a narrativa. Cada personagem, que no filme parecia secundário, foi aprofundado de forma tão rica que comecei a enxergá-los sob uma nova perspectiva, criando uma conexão mais forte com a história e seus conflitos.',

  'A escrita do autor é impecável e envolvente, com uma capacidade única de criar tensão e emoção. Há momentos no livro que me fizeram rir, outros que me fizeram chorar, e todos eles me deixaram totalmente imerso na trama. O modo como ele descreve os ambientes e os sentimentos dos personagens realmente me transportou para aquele mundo, e mesmo quando o livro terminou, a sensação de estar lá ainda ficou comigo por dias, o que é um sinal claro de uma história realmente bem contada.',

  'A adaptação para o cinema é, sem dúvida, uma das melhores que já vi, mas o livro oferece uma experiência muito mais completa e gratificante. Ele explora mais a fundo as motivações dos personagens e o contexto do universo em que eles vivem, o que no filme é mostrado apenas de forma superficial. Eu recomendo fortemente a leitura para todos que gostaram do filme, pois a história se expande de uma maneira que você nunca imaginaria só assistindo. Com certeza, se você é fã do filme, vai se apaixonar ainda mais pelo livro.'
];

let paragraphs = ''

const createParagraphs = paragraph => {
  paragraphs += `<p>${paragraph}</p>`
}

review.forEach(createParagraphs)

section.innerHTML = paragraphs

/*
Exercício 17

- Dado o array "cities", utilize o forEach para criar uma frase para cada cidade do array no formato:
  "A cidade X está localizada no estado Y."
  Onde X é o nome da cidade e Y é o nome do estado.
*/

const cities = [
  { city: "São Paulo", state: "SP" },
  { city: "Rio de Janeiro", state: "RJ" },
  { city: "Belo Horizonte", state: "MG" },
  { city: "Salvador", state: "BA" }
]

let texts = ''

const createText = ({ city, state }) => {
  texts += `A cidade ${city} está localizada no estado ${state}.\n`
  console.log(`A cidade ${city} está localizada no estado ${state}.`)
}
cities.forEach(createText)




const getLikesMessage = (names = []) => {

  const fristName = names[0]
  const secondName = names[1]
  const thirdName = names[2]
  const totalNamesMinusTwo = names.length - 2
  switch (names.length) {
    case 0:
      return 'Ninguém curtiu isso.'
    case 1:
      return `${fristName} curtiu isso.`
    case 2:
      return `${fristName} e ${secondName} curtiu isso.`
    case 3:
      return `${fristName},${secondName} e ${thirdName} curtiram isso.`
    default:
      return `${fristName}, ${secondName} e ${totalNamesMinusTwo} curtiram isso.`
  }


}
console.log(getLikesMessage(['Moises','Francisco','Joaquim','Amanda']))
