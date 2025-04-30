/*
destructuring assignment (desestruturação) permite extrair dados de arrays em variáveis distintas
*/

const data = ['Thiago Gonçalves', 'thiagosilva88@gmail.com']

// Desestruturando array
const [username, email] = data

console.log(`Cliente : ${username} está satisfeito.  Email: ${email}`)


// Desestruturar somente o primeiro.
const fruits = ['Maça', 'Abacaxi', 'Pera', 'Melancia']

const [fruta1, , fruta2,] = fruits
console.log(fruta1)