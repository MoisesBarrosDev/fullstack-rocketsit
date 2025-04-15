const frase = 'Grandes poderes trazem grandes responsabilidades.'
console.log(frase)


const tom = 'Tom'
const fristTom = 'Hanks'
const secondTom = 'Cruise'
const myFavoriteTom = `${tom}  ${fristTom} `
console.log(myFavoriteTom)



const programmingLanguage = 'JavaScript'
const js = programmingLanguage[0] + programmingLanguage[4]
console.log(js)


const mozilla = 'Mozilla Developer Network'
console.log(`${mozilla[0]}${mozilla[8]}${mozilla[18]}`)


console.log(programmingLanguage.length)


// Declaramos uma variável chamada 'randomWord' e atribuímos inicialmente o valor 'Araponga'
let randomWord = 'Araponga'
// Agora, mudamos o valor da variável 'randomWord' para a string 'ovo'
randomWord = 'ovo'
//   indice = 012 
// O método 'length' retorna o tamanho da string, ou seja, quantos caracteres ela tem.
// Em 'ovo', o comprimento é 3, porque a string tem 3 letras.

// Usamos 'randomWord.length - 1' para acessar o índice do último caractere.
// O índice do último caractere é calculado como o tamanho da string menos 1:
// - Aqui: 'randomWord.length' é 3, então 'randomWord.length - 1' é 2.
// - Isso significa que estamos acessando o caractere no índice 2 da string 'ovo'.

// Acessamos o caractere no índice 2 (o último) usando 'randomWord[randomWord.length - 1]'.
console.log(randomWord[randomWord.length - 1])






const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA'
console.log(summerMessage.toLowerCase())


const winterMessage = 'o inverno está chegando'
console.log(winterMessage.toUpperCase())

console.log(winterMessage.indexOf('v'))

console.log(winterMessage.lastIndexOf('n'))


const harryPotterAuthor = 'J.K. Rowling'
console.log(harryPotterAuthor.slice(0,4))


const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
const realBestMovie = bestMovie.replace('La la land' , 'Moonlight')
console.log(realBestMovie)



const reminder = 10 % 3   
console.log(reminder)



let episodes = 6 
episodes++
console.log(episodes)

episodes--
console.log(episodes)

episodes +=4
console.log(episodes)


const allEpisodes = 'O n° de episódios é:'
console.log(`${allEpisodes} ${episodes}`)


const bookMessage = '\'O conto da Aia\' é um dos livros mais vendidos da década'
console.log(bookMessage)


const name = 'walter white'
let newName =  name[0].toUpperCase() + name.slice(1,6) + ' ' + name[7].toUpperCase() + name.slice(8)
console.log(newName)

newName = `${name[0].toUpperCase()}${name.slice(1,6)} ${name[7].toUpperCase()}${name.slice(8)}`
console.log(newName)


// EXERCICIO 1
const nome = 'Thiago'
const sobrenome = 'Silva'
console.log(`my frist name is ${nome}, and last name is ${sobrenome} `)


// EXERCICIO 2
const text = "Aprender JavaScript é divertido!"
const resulText = text[0] + text[text.length-1] + text[10] + text[15] + text[20]
console.log(resulText)


// EXERCICIO 3
const digite = 'Eu amo o Clube de Regatas do Flamengo.'
const resposta = ` Tem o total de : ${digite.length} caracteres. ${digite.toUpperCase()} ${digite.toLowerCase()}`
console.log(resposta)


// EXERCICIO 4
const aPratica = "A prática leva à perfeição."
const praticResposta = aPratica[1] + aPratica[aPratica.length-1]
console.log(praticResposta)


// EXERCICIO 5
const poderosochef = "O poderoso chefão"
const poderosoresul = poderosochef.slice(2)
console.log(poderosoresul)


// EXERCICIO 6
const  heroes = "O Batman é o melhor herói."
const superman = heroes.replace('Batman' , 'Superman')
console.log(superman)


// EXERCICIO 7
const totalMaçãs = 23 % 4
console.log(totalMaçãs)


// EXERCICIO 8
let quantidade = 10
quantidade+= 5
quantidade--
quantidade--
quantidade*= 3
console.log(quantidade)


// EXERCICIO 9
const formatarName = "ana de armas"
const newFormat = `${formatarName[0].toUpperCase()}${formatarName.slice(1,3)} ${formatarName[4].toUpperCase()}${formatarName.slice(5,7)} ${formatarName[7].toUpperCase()}${formatarName.slice(8)}`
console.log(newFormat)


// EXERCICIO 10
const combineMétodos='O gato Roeu a Roupa do Rei de Roma la na Grécia'
const metodosResultado = `${combineMétodos.slice(0,10)}, ${combineMétodos.toUpperCase()} ${combineMétodos.replace(/ /g , '-')}`
console.log(metodosResultado)  


// EXERCICIO 11
const frasee = "A prática leva à perfeição!"
const resulFrase = frasee[frasee.length -1] + frasee[10] + frasee[15]
console.log(resulFrase)


// EXERCICIO 12
const texto = "javascript é divertido"
const formatado = `${texto[0].toUpperCase()}${texto.slice(1)}`
console.log(formatado)


// EXERCICIO 13
const methodDinamico = "Aprender é crescer"
const methodformat = `O comprimento da string é:${methodDinamico.length},O primeiro caractere é :${methodDinamico[0]}, O último caractere é: ${methodDinamico[methodDinamico.length -1]}, ${methodDinamico.toUpperCase()}, ${methodDinamico.toLocaleLowerCase()}`
console.log(methodformat)


// EXERCICIO 14
const filme = "O grande herói está aqui."
const filmeResultado = `${filme.replace('herói', 'vilão')} ${filme.slice(2,14)}`
console.log(filmeResultado)


// EXERCICIO 15
const nomeCompleto = "maria clara souza"
const nomeResult = `${nomeCompleto[0].toUpperCase()}${nomeCompleto.slice(1,5)} ${nomeCompleto[6].toUpperCase()}${nomeCompleto.slice(7,11)} ${nomeCompleto[12].toUpperCase()}${nomeCompleto.slice(13)}`
console.log(nomeResult)