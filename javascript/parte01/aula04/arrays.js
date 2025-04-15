//  Arrays
// Arrays são estruturas de dados que permitem armazenar diferentes tipos de valores em uma única variável.
let heroes = ['Batman', 'Catwoman', 'Iron Man']
console.log(heroes)

// Para acessar um elemento específico do array, usamos o índice correspondente.
console.log(heroes[1]) // Acessa o segundo elemento do array, 'Catwoman'.

// Para substituir um valor existente em um array, basta atribuir um novo valor ao índice desejado.
heroes[2] = 'Spider-Man'
console.log(heroes)

const ages = [31, 25, 39, 40, 25]
console.log(ages[3]) // Acessa o quarto elemento do array, que é 40.

// Arrays podem conter diferentes tipos de dados, como strings e números. Contudo, é recomendado armazenar dados relacionados entre si.
const randomArray = ['Parker', 'Diana', 19, 18] // Exemplos de strings e números juntos.
console.log(randomArray)

// Métodos de arrays
// O método "length" retorna o número de elementos em um array.
console.log(heroes.length) // Assim como funciona para strings, também funciona para arrays.

// O método "join()" cria uma string concatenando todos os elementos do array, separados por um delimitador (opcional).
const joinHeroes = heroes.join() // Sem um argumento, os elementos são separados por vírgulas.
console.log(joinHeroes)

// Podemos passar um argumento para o método "join()" para alterar o separador.
const joinHero = heroes.join('|') // Neste exemplo, os elementos são separados pelo símbolo '|'.
console.log(joinHero)

// O método "indexOf()" retorna o índice da primeira ocorrência de um valor especificado no array.
const indexOf25 = ages.indexOf(25) // Retorna o índice da primeira ocorrência de 25 no array "ages".
console.log(indexOf25)

// O método "concat()" combina dois ou mais arrays, retornando um novo array. Ele não modifica os arrays originais.
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
console.log(moreHeroes)

// O método "push()" adiciona elementos ao final do array e retorna o novo comprimento do array. Esse método modifica o array original.
const pushToHeroes = heroes.push('Cyclops', 'Hulk') // Adiciona dois novos heróis ao final do array "heroes".
console.log(heroes)

// O método "pop()" remove o último elemento de um array e o retorna. Ele também modifica o array original.
const popHeroes = heroes.pop() // Remove o último herói ("Hulk") do array "heroes".
console.log(popHeroes)



