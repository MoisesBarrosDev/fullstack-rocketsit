// EXERCICIO 1
const my3FavoriteTVShows = ['The Flash', 'Suits', 'Loki']
const sentence = ` Minhas 3 séries favoritas são: ${my3FavoriteTVShows.join(', ')}.`
  .replace(', L', ' e L')
console.log(sentence)


// EXERCICIO 2
const my3FavoritrFood = ['Churrasco', 'Salpicão', ' Pizza']
const resultFavoriteFood = `Minhas 3 comidas favoritas são: ${my3FavoritrFood.join(',')}`
  .replace(', P', ' e P')
console.log(resultFavoriteFood)


// EXERCICIO 3
const my3FavoriteSports = ['Futebol', 'Basquete ', ' Tenis de mesa']
const resultFavoriteSports = `Meus 3 favoritos Sports são:${my3FavoriteSports.join(',')}`
  .replace(' , ', ' e ')
console.log(resultFavoriteSports)



// EXERCICIO 4
const my3FavoriteMovies = ['Super-Man', 'Batman ', ' Os vingadores']
const resulteFavoriteMovies = `Meus 3 filmes favoritos são: ${my3FavoriteMovies.join(',')}`
  .replace(' , ', ' e ')
console.log(resulteFavoriteMovies)



// EXERCICIO 5
console.log(my3FavoriteTVShows.length === 3)



// EXERCICIO 6
const randomTVShow = 'Watchmen'
const isRandomTVShowIncluded = my3FavoriteTVShows.includes(randomTVShow)
console.log(isRandomTVShowIncluded)



// EXERCICIO 7
const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é: ${typeof isRandomTVShowIncluded}`
console.log(typeSentence)



// EXERCICIO 8
const numberToCheck = 39
console.log(`A string que a "typeSentence" armazena tem mais de ${numberToCheck} caracteres? ${String(typeSentence.length > numberToCheck).replace('t', 'T')}.`)



// EXERCICIO 9
const falsyValues = [0, "", false, '', ``, null, undefined, NaN]
console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o ${falsyValues[2]}.`)



// EXERCICIO 10
// ele vai dar true porque o null é considerado 0 no JavaScript
const crazyOperation = null + 1
const crazyConversion = Boolean(crazyOperation)
console.log(crazyConversion)





// EXERCICIO 11
const ages = [31, 82, 61, 11]
const agesSum = ages[0] + ages[2]
console.log(`A soma entre o ${ages[0]} e o ${ages[2]} item de "ages" é menor ou igual a 92. Essa informação é: ${agesSum <= 92}.`)



// EXERCICIO 12
const isNotAstring = typeof randomTVShow !== 'string'
console.log(isNotAstring)




// EXERCICIO 13
const evenNumbers = [0, 2, 4, 6, 8, 10]
console.log(evenNumbers.indexOf(8)!== - '')




// EXERCICIO 14
// Crie um array com 3 cores que você gosta e transforme-o em uma string formatada, 
// separando os itens por vírgulas e substituindo a última vírgula por " e ".
const cores = ['Azul','Rosa','Vermelho']
console.log(cores.join(', ').replace(', V', ' e V'))


// EXERCICIO 15
// Declare um array com 3 nomes de cidades que você já visitou. 
// Crie uma frase que liste essas cidades no formato:
// "Já visitei: Cidade1, Cidade2 e Cidade3."
const cidades = ['São Paulo','Rio Grande do norte', 'Rio de Janeiro']
const ultimaCidade = cidades.pop()
console.log(`Já visitei: ${cidades.join(', ')} e ${ultimaCidade}`)


// EXERCICIO 16
// Declare um array chamado "numbers" contendo os números 4, 8 e 15.
// Verifique se o número 8 está presente nesse array e exiba o resultado no console.
const numbers = [4,8,15]
console.log(numbers.indexOf(8) !== -1)
// 🔍 Por que usamos `-1` nessa operação?
// O método `indexOf(valor)` retorna a posição do valor dentro do array. 
// Se o valor estiver no array, ele retorna o índice (posição). 
// Se o valor não estiver no array, ele retorna `-1`.

// 🚨 No exercício, precisamos verificar se o número 8 está presente no array.
// Então usamos `numbers.indexOf(8) !== -1`. Isso retorna `true` se o 8 estiver no array e `false` caso contrário.

// 📌 Exemplo de quando o número NÃO está no array:
// Aqui estamos tentando encontrar o índice do número 23, que NÃO existe no array.
// Como ele não está presente, `indexOf(23)` retorna `-1`
console.log(numbers.indexOf(23))



// EXERCICIO 17
// Crie um array chamado "randomNumbers" com 3 números aleatórios.
// Some o primeiro e o último número do array e exiba o resultado formatado em uma frase.
// , ,: é usado para ignorar valores do array.
// Você pode colocar um nome para qualquer posição do array que você quiser acessar, e a desestruturação vai atribuir os valores a essas variáveis.
// Se quiser ignorar mais elementos, basta adicionar mais vírgulas para pular posições.
const randomNumbers = [9,8,4]
const [frist, ,last] = randomNumbers
console.log(`a soma entre o primeiro numero que é: ${frist}, e o ultimo número que é: ${last}, é igual a: ${frist + last}`)



// EXERCICIO 18
// Declare uma variável booleana chamada "isWeekend" e atribua true ou false.
// Crie uma frase dinâmica informando o tipo de dado que a variável armazena.
const isWeekend = true
console.log(`A variável "isWeekend" é do tipo booleano? ${isWeekend}. O tipo dela é : ${typeof isWeekend}.`)



// EXERCICIO 19
// Declare uma string chamada "randomWord" com qualquer palavra de sua escolha.
// Verifique se o tipo de dado de "randomWord" é diferente de "string" e exiba o resultado.
let frase = 'Eu amo Futebol.'
console.log(typeof frase !== 'string' )



// EXERCICIO 20
// Declare um array "booleanValues" contendo true, false e true.
// Exiba no console a quantidade de itens desse array.
const booleanValues =  [true,false,true]
console.log(booleanValues.length)



// EXERCICIO 21
// Declare uma string chamada "longSentence" e atribua uma frase longa a ela.
// Verifique se a string contém mais de 50 caracteres e exiba o resultado formatado.
const  longSentence = 'Thiago matou o dono do buteco'
console.log(longSentence.length > 50)




// EXERCICIO 22
// Crie um array chamado "falsyTest" contendo apenas valores falsy do JavaScript.
// Exiba uma frase informando quantos valores falsy há no array e mencionando um deles.
const falsyTest = [0,false,undefined,NaN,null,'']
console.log(`Há ${falsyTest.length} valores falsy. Um deles é: ${falsyTest[2]}`)



// EXERCICIO 23
// Some o número 5 com o valor null e atribua o resultado a uma variável.
// Converta esse resultado para booleano e exiba no console.
const soma = Boolean(5 + null)
console.log(soma, typeof soma)




// EXERCICIO 24
// Crie um array chamado "prices" contendo 3 valores numéricos.
// Some o primeiro e o segundo valor e verifique se o resultado é maior ou igual a 100.
const prices =[70,20,30]
console.log(prices[0]+prices[2] >= 100) 



// EXERCICIO 25
// Declare um array com 5 nomes de animais.
// Verifique se "Gato" está presente nesse array e exiba o resultado.
const animals = ['Cachorro','Gato','Cavalo','Papagaio','Macaco']
console.log(animals.includes('Gato'))





// EXERCICIO 26
// Declare um array chamado "evenNumbers" contendo números pares de 2 a 10.
// Verifique se o número 6 está presente no array e exiba o resultado no console.
const evennNumbers = [2,4,6,8,10]
console.log(evennNumbers.includes(6))




// EXERCICIO 27
// Declare um array com três nomes de filmes que você gosta.
// Use o método join() para transformá-lo em uma string e exiba no console.
const movies = ['Aqua-man','Era Uma Vez','Bob o Louco']
console.log(movies.join(' e '))






// EXERCICIO 28
// Declare um array chamado "daysOfWeek" contendo os dias da semana.
// Exiba no console a quantidade de itens desse array.
const daysOfWeek = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado']
console.log(daysOfWeek.length)




// EXERCICIO 29
// Declare um array chamado "favoriteNumbers" contendo três números.
// Exiba a soma do primeiro e do terceiro número, formatada dentro de uma frase.
const favoriteNumbers = [5,8,3]
console.log(`A soma entre o primeiro e o terceiro número é: ${favoriteNumbers[0] + favoriteNumbers[2]}`)



// EXERCICIO 30
// Declare um array chamado "randomValues" contendo diferentes tipos de dados (string, número, boolean).
// Exiba uma frase informando quantos itens há no array.
const randomValues = ['Teclado', 9,true]
console.log(randomValues.length)




// EXERCICIO 31
// Declare uma string chamada "phrase" contendo uma frase curta.
// Verifique se o comprimento da string é menor que 20 caracteres e exiba o resultado.
const phrase = 'O futebol é uma das melhores coisas da vida.'
console.log(phrase.length < 20)





// EXERCICIO 32
// Declare um array chamado "oddNumbers" contendo números ímpares de 1 a 9.
// Verifique se o número 7 está presente no array e exiba o resultado.
const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers.includes(7))




// EXERCICIO 33
// Declare um array chamado "techs" contendo três linguagens de programação que você gosta.
// Exiba a string formatada listando essas tecnologias.
const techs = ['JavaScript','Phyton','TypeScript']
console.log(techs.join(' , '))