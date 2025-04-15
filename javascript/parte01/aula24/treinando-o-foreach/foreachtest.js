/*
Exercício 1

- Utilize o forEach para iterar sobre o array "numbers" e exibir cada número no console.
*/

const numbers = [10, 20, 30, 40, 50];

// O que você espera que aconteça:
// 10
// 20
// 30
// 40
// 50

const newNumber = number => {
  console.log(number)
}
numbers.forEach(newNumber)

/*
Exercício 2

- Utilize o forEach para exibir tanto o índice quanto o valor de cada item no array "numbers".
  A mensagem no console deve ser: "Índice X, valor Y".
*/

const numberss = [10, 20, 30, 40, 50];

const numberNew = (number, index) => {
  console.log(`Índice ${index}, valor ${number}`)
}
// O que você espera que aconteça:
// Índice 0, valor 10
// Índice 1, valor 20
// Índice 2, valor 30
// Índice 3, valor 40
// Índice 4, valor 50
numberss.forEach(numberNew)

/*
Exercício 3


- Utilize o forEach para somar todos os números do array "numbers" e exibir o total.
*/

const numbes = [10, 20, 30, 40, 50];

// O que você espera que aconteça:
// O total deve ser 150
let total = 0
const newSum = number => {
  total += number
}
numbes.forEach(newSum)
console.log(total)

/*
Exercício 5

- Utilize o forEach para adicionar 1 a cada número do array "numbers" e armazenar o resultado em um novo array "incrementedNumbers".
*/

const num = [10, 20, 30, 40, 50];
let incrementedNumbers = []
  ;

const newValue = number => {
  incrementedNumbers.push(number + 1)
}
num.forEach(newValue)
console.log(incrementedNumbers)
// O que você espera que aconteça:
// O array "incrementedNumbers" deve conter: [11, 21, 31, 41, 51]

/*
Exercício 6

- Utilize o forEach para iterar sobre o array "numbers" e exibir no console apenas os números pares.
*/

const nums = [10, 15, 20, 25, 30, 35, 40];


const newNums = number => {
  if (number % 2 === 0) {
    console.log(number)
  }
}
nums.forEach(newNums)
// O que você espera que aconteça:
// 10
// 20
// 30
// 40

/*
Exercício 7

- Dado o array "fruits", utilize o forEach para criar uma lista de itens (li) com cada nome de fruta e inseri-los dentro de um elemento <ul> com o atributo data-js="ul".
*/

// const fruits = ['Maçã', 'Banana', 'Laranja', 'Morango'];

// // const ul = document.querySelector('[data-js="ul"]');
// let html = '';

// fruits.forEach(fruit => {
//   html += `<li>${fruit}</li>`;
// });

// ul.innerHTML = html;

// O que você espera que aconteça:
// A lista de frutas será exibida na página como uma lista de itens (<li>).




/*
Exercício 8

- Utilize o forEach para contar quantas vezes o número 3 aparece no array "numbers".
*/


const nu = [1, 3, 3, 5, 3, 7, 9];

let count = 0; // Variável para contar as ocorrências do número 3

// Função para contar o número 3
const countThrees = number => {
  if (number === 3) { // Verifica se o número é igual a 3
    count++; // Incrementa o contador
  }
};

nu.forEach(countThrees);

console.log(count); // Exibe a quantidade de vezes que o número 3 aparece


// O que você espera que aconteça:
// O número 3 aparece 3 vezes no array.

/*
Exercício 9

- Utilize o forEach para iterar sobre o array "values" e exibir apenas os números que são divisíveis por 5.
*/

const values = [10, 22, 35, 40, 50];
// O que você espera que aconteça:
// 10, 35, 40, 50

const divisionFive = number => {
  if (number % 5 === 0) {
    console.log(number)
  }
}
values.forEach(divisionFive)

/*
Exercício 10

- Dado o array "people", utilize o forEach para criar uma frase para cada nome, dizendo: "Eu sou X".
*/

const people = ['Lúcia', 'Gustavo', 'Renata', 'Pedro'];
// O que você espera que aconteça:
// Eu sou Lúcia
// Eu sou Gustavo
// Eu sou Renata
// Eu sou Pedro

const newFrase = string => {
  let frase = `Eu sou ${string}`
  console.log(frase)
}

people.forEach(newFrase)

/*
Exercício 11

- Utilize o forEach para multiplicar cada número do array "ages" por 2 e armazenar o resultado em um novo array chamado "doubledAges".
*/

const ages = [15, 22, 28, 35];
// O que você espera que aconteça:
// O array "doubledAges" deve conter: [30, 44, 56, 70]
const doubledAges = []

const newArray = number => {
  let result = number * 2
  doubledAges.push(result)
}
ages.forEach(newArray)

console.log(doubledAges)

/*
Exercício 12

- Utilize o forEach para iterar sobre o array "fruits" e exibir no console todas as frutas em letras maiúsculas.
*/

const fruits = ['pera', 'uva', 'abacaxi', 'kiwi'];
// O que você espera que aconteça:
// PERA
// UVA
// ABACAXI
// KIWI
const fruitstoUpperCase = string => {
  console.log(string.toUpperCase())
}
fruits.forEach(fruitstoUpperCase)





/*
Exercício 13

- Crie um array com números e utilize o forEach para somar todos os números e mostrar no console a soma de todos.
*/

const numms = [2, 7, 15, 11];
// O que você espera que aconteça:
// O total será 35
let totall = 0
const soma = number => {
  totall += number
}
numms.forEach(soma)
console.log(totall)



/*
Exercício 14

- Dado o array "numbers", utilize o forEach para verificar e exibir no console apenas os números ímpares.
*/

const numbrs = [0, 3, 5, 8, 9, 12, 17];
// O que você espera que aconteça:
// 3, 5, 9, 17
const newNumbrs = number => {
  if (number % 2 !== 0) {
    console.log(number)
  }
}
numbrs.forEach(newNumbrs)

/*
Exercício 15

- Utilize o forEach para criar um novo array "capitalizedCities" contendo os nomes das cidades do array "cities" em letras maiúsculas.
*/

const cities = ['rio de janeiro', 'são paulo', 'belo horizonte', 'curitiba'];
// O que você espera que aconteça:
// O array "capitalizedCities" deve conter: ['RIO DE JANEIRO', 'SÃO PAULO', 'BELO HORIZONTE', 'CURITIBA']

const capitalizedCities = []

const newCapitalize = cities => {
  capitalizedCities.push(cities.toUpperCase())

}
cities.forEach(newCapitalize)
console.log(capitalizedCities)



/*
Exercício 16

- Utilize o forEach para criar uma lista de compras, onde a cada item do array "groceryList" será exibido no console junto com a frase: "Preciso comprar X".
*/

const groceryList = ['café', 'leite', 'açúcar', 'pão'];
// O que você espera que aconteça:
// Preciso comprar café
// Preciso comprar leite
// Preciso comprar açúcar
// Preciso comprar pão

const shoppingList = list => {
  let aListFrase = `Preciso comprar ${list}`
  console.log(aListFrase)
}
groceryList.forEach(shoppingList)


/*
Exercício 17

- Crie um array "employees" com os nomes dos empregados e utilize o forEach para exibir uma mensagem de boas-vindas para cada empregado.
*/

const employees = ['Lucas', 'Gabriela', 'Henrique', 'Fernanda'];
// O que você espera que aconteça:
// Bem-vindo Lucas!
// Bem-vinda Gabriela!
// Bem-vindo Henrique!
// Bem-vinda Fernanda!

const greetings = name => {
  let frase = name === 'Gabriela' || name === 'Fernanda'
    ? `Bem-vinda ${name}`
    : `Bem-vindo ${name}`
  console.log(frase)
}
employees.forEach(greetings)

/*
Exercício 18

- Utilize o forEach para multiplicar os números do array "scores" por 4 e exibir o resultado no console.
*/

const scores = [2, 5, 7, 9];
// O que você espera que aconteça:
// 8, 20, 28, 36


const resultMultipy = number => {
  console.log(number * 4)
}
scores.forEach(resultMultipy)

/*
Exercício 19

- Utilize o forEach para iterar sobre o array "colors" e exibir cada cor no console, mas antes de exibir, formate a cor para a primeira letra maiúscula.
*/

const colors = ['vermelho', 'azul', 'verde', 'amarelo'];

// O que você espera que aconteça:
// Vermelho
// Azul
// Verde
// Amarelo
let colorr = ''
const cores = color => {
  colorr = color[0].toUpperCase() + color.slice(1)
  console.log(colorr)
}

colors.forEach(cores)

/*
Exercício 20

- Dado o array "animals", utilize o forEach para criar um novo array "animalsLengths", onde cada item será o tamanho da string correspondente ao nome do animal.
*/

const animals = ['cachorro', 'gato', 'elefante', 'girafa'];

// O que você espera que aconteça:
// O array "animalsLengths" deve conter: [8, 4, 8, 6]
const animalsLengths = []

const lengthAnimals = lengthh => {
  animalsLengths.push(lengthh.length)
}
animals.forEach(lengthAnimals)
console.log(animalsLengths)

/*
Exercício 21

- Utilize o forEach para verificar se algum número no array "numbers" é maior do que 10 e exiba uma mensagem no console informando qual número é maior do que 10.
*/

const valores = [5, 12, 8, 17, 2];

// O que você espera que aconteça:
// 12 é maior que 10
// 17 é maior que 10
const ten = 10
const numbersMaiorQueDez = valuey => {
  if (valuey > ten) {
    console.log(`${valuey} é maior que ${ten}`)
  } else {
    console.log(`${valuey} é menor que ${ten}`)
  }
}

valores.forEach(numbersMaiorQueDez)

/*
Exercício 22

- Utilize o forEach para iterar sobre o array "scores" e exibir a média de todas as notas, que deve ser a soma das notas dividida pelo número de elementos do array.
*/

const scor = [10, 8, 9, 7, 6];

let acumulador = 0
const lengthScor = scor.length
const mediaNumbers = number => {
  acumulador += number
  let media = acumulador / lengthScor
  console.log(media)
}
// O que você espera que aconteça:
// A média será 8

scor.forEach(mediaNumbers)

/*
Exercício 23

- Utilize o forEach para filtrar os números negativos no array "numbers" e exibir no console apenas os números negativos.
*/

const numbersPositiveAndNegative = [10, -2, 4, -6, 8, -3];

// O que você espera que aconteça:
// -2
// -6
// -3
let value = 0
const filterNumberNegative = number => {
  if (number < value) {
    console.log(number)
  }
}
numbersPositiveAndNegative.forEach(filterNumberNegative)

/*
Exercício 24

- Crie um array "employees" e utilize o forEach para exibir uma mensagem de boas-vindas para cada empregado. Porém, adicione uma condição para exibir "Bem-vindo" para homens e "Bem-vinda" para mulheres, baseado em um outro array que contém os gêneros de cada empregado.
*/

const employes = ['Lucas', 'Gabriela', 'Henrique', 'Fernanda'];
const genders = ['M', 'F', 'M', 'F'];

const allEmployes = [
  {
    name: 'Lucas',
    gender: 'M'
  },
  {
    name: 'Gabriela',
    gender: 'F'
  },
  {
    name: 'Henrique',
    gender: 'M'
  },
  {
    name: 'Fernanda',
    gender: 'f'
  },
]

// O que você espera que aconteça:
// Bem-vindo Lucas!
// Bem-vinda Gabriela!
// Bem-vindo Henrique!
// Bem-vinda Fernanda!
const saudacaoMasculina = 'Bem vindo!'
const saudacaoFeminina = 'Bem vinda!'
const greeting = (name, index) => {
  let gender = genders[index];
  if (gender === 'M') {
    console.log(`${saudacaoMasculina} ${name}`)
  } else if (gender === 'F') {
    console.log(`${saudacaoFeminina} ${name}`)
  }
}
employes.forEach(greeting)

allEmployes.map((employe) => {
  if (employe.gender === 'M') {
    console.log(`TESTE ${saudacaoMasculina} ${employe.name}`)
    return
  }

  console.log(`TESTE ${saudacaoFeminina} ${employe.name}`)
})

allEmployes.forEach((employe) => {
  if (employe.gender === 'M') {
    console.log(`${saudacaoMasculina} ${employe.name}`)

    return
  }

  console.log(`${saudacaoFeminina} ${employe.name}`)
})



/*
Exercício 25

- Utilize o forEach para iterar sobre o array "numbers" e exibir no console apenas os números que não são divisíveis por 3.
*/

const numeros = [10, 15, 22, 33, 40, 42];

// O que você espera que aconteça:
// 10
// 22
// 40

const numbersNaoDivisiveis = number => {
  if (number % 3 === 1) {
    console.log(number)
  }
}
numeros.forEach(numbersNaoDivisiveis)

/*
Exercício 26

- Utilize o forEach para contar quantas vezes o número 7 aparece no array "numbers" e exiba essa quantidade no console.
*/

const smallsNumbers = [1, 3, 7, 5, 7, 9, 7];

// O que você espera que aconteça:
// O número 7 aparece 3 vezes
let acumuleitor = 0
const numberSeven = number => {
  if (number === 7) {
    acumuleitor++
  }
}
smallsNumbers.forEach(numberSeven)
console.log(`O número 7 aparece ${acumuleitor} vezes`)

/*
Exercício 27

- Dado o array "names", utilize o forEach para criar uma lista HTML (como uma lista não ordenada) contendo os nomes e adicione um "id" único para cada item da lista.
*/

const names = ['Carlos', 'Ana', 'Juliana', 'Pedro'];

// const textTest = document.querySelector('[ id="test"]')

let textt = ''
names.map((name, index) => {
  textt += `<li id="item${index}">${name}</li>`
})
// textTest.innerHTML = textt


// O que você espera que aconteça:
// O HTML gerado deve ser uma lista não ordenada com os itens:
// <ul>
//   <li id="item1">Carlos</li>
//   <li id="item2">Ana</li>
//   <li id="item3">Juliana</li>
//   <li id="item4">Pedro</li>
// </ul>



// Exercício 1: Usando map()

// 1. Transformar uma lista de números em uma lista de quadrados:
// Dada uma lista de números, use map() para criar um novo array com o quadrado de cada número.
const numeros1 = [2, 4, 6, 8, 10];
// Resultado esperado: [4, 16, 36, 64, 100]

const numbersAoQuadrado = numeros1.map((number) => number * 2)
console.log(numbersAoQuadrado)

// 2. Converter uma lista de nomes em uma lista de saudações:
// Dada uma lista de nomes, use map() para criar um novo array onde cada nome é precedido por "Olá, ".
const nomes1 = ["Ana", "Carlos", "Julia"];
// Resultado esperado: ["Olá, Ana", "Olá, Carlos", "Olá, Julia"]
let hello = 'Olá '

const saudacao = nomes1.map((name) => hello + name)
console.log(saudacao)

// Exercício 2: Usando filter()

// 1. Filtrar números negativos de um array:
// Dado um array de números, use filter() para criar um novo array com apenas os números positivos.
const numeros2 = [-5, 10, -3, 7, -2, 6];
// Resultado esperado: [10, 7, 6]
const numbersPositives = numeros2.filter(number => number > 0)
console.log(numbersPositives)

// 2. Filtrar produtos caros:
// Dado um array de objetos representando produtos com nome e preço, use filter() para criar um novo array com os produtos que têm preço superior a 50.
const produtos1 = [
  { nome: "Camiseta", preco: 40 },
  { nome: "Tênis", preco: 100 },
  { nome: "Boné", preco: 30 },
  { nome: "Jaqueta", preco: 120 }
];
// Resultado esperado: [{ nome: "Tênis", preco: 100 }, { nome: "Jaqueta", preco: 120 }]
const produtosCaros = produtos1.filter(produto => produto.preco > 50)
console.log(produtosCaros)
// Exercício 3: Usando reduce()

// 1. Somar os elementos de um array:
// Dado um array de números, use reduce() para calcular a soma de todos os elementos.
const numeros3 = [1, 2, 3, 4, 5];
// Resultado esperado: 15
const somaOfAllNumbers = numeros3.reduce((acumulador, num) => acumulador + num, 0)
console.log(somaOfAllNumbers)

// 2. Concatenar uma lista de strings:
// Dado um array de palavras, use reduce() para concatenar todas as palavras em uma única string, separada por espaços.
const palavras1 = ["Olá", "mundo", "de", "JavaScript"];
// Resultado esperado: "Olá mundo de JavaScript"
let space = ' '
const concat = palavras1.reduce((acumulador, string) => acumulador + space + string)
console.log(concat)


// Exercício 4: Desafio Combinado (Map + Filter + Reduce)

// 1. Exibir a soma dos preços dos produtos que têm preço superior a 50:
// Dado o mesmo array de produtos que você usou no exercício anterior, use uma combinação de filter(), map() e reduce() para calcular a soma dos preços dos produtos que têm preço superior a 50.
const produtos2 = [
  { nome: "Camiseta", preco: 40 },
  { nome: "Tênis", preco: 100 },
  { nome: "Boné", preco: 30 },
  { nome: "Jaqueta", preco: 120 }
];
// Resultado esperado: 220 (100 + 120)
const valueProdutsCaros = produtos2.filter((value) => value.preco > 50)
const reduceArray = valueProdutsCaros.reduce((acumulador, valor) => acumulador + valor.preco, 0)
console.log(reduceArray)


// 2. Transformar uma lista de números negativos em positivos e depois somar os positivos:
// Dado um array de números (com números negativos e positivos), use map() para transformar os números negativos em positivos, e então use reduce() para somar todos os números.
const numeros4 = [-10, 20, -30, 40, -50];
// Resultado esperado: 150 (10 + 20 + 30 + 40 + 50)
const resultNumberPositive = numeros4.map((number) => Math.abs(number))
const sma = resultNumberPositive.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sma)