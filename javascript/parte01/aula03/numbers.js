// inteiros e decimais
const radius = 10
const pi = 3.14

//  operadores aritméticos
const reminder = 5 % 2
console.log(reminder)

const area = pi * radius ** 2
console.log(area)

// ordem de operações
// 1* - parênteses
// 2* - expoentes ou raízes
// 3* - multiplicação e divisão
// 4* - adição e subtração

const crazyOperation = 5 * ( 10 - 3 ) ** 2
console.log(crazyOperation)




// operadores de incremento e decremento
let postLikes = 10
// postLikes++ incrementa 1
// postLikes-- decrementa 1
console.log(postLikes)


//  operadores addtion,subtraction, multiplication e division assignment

// postLikes += 10
// postLikes -= 5
// postLikes *= 10
postLikes /= 2
console.log(postLikes)

// NaN - not a number
console.log(8/'oi')

// concatenação de string com número
const likesMessage = 'O post tem '+  postLikes  + ' likes.'
console.log(likesMessage)