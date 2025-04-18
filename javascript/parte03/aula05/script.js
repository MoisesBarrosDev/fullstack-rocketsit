const creditCard = "123456789"

const lastDigits = creditCard.slice(-4)

// O método padStart "preenche" o começo da string com o caractere "X"
// até que ela tenha o mesmo tamanho do número original.
// Resultado: "XXXXX6789" – ou seja, os dígitos anteriores são ocultados
const maskedNumber = lastDigits.padStart(creditCard.length, "X")

console.log(maskedNumber)


const number = 123
/*
Ele preenche a string até atingir o número de caracteres desejado (tamanho).
O preenchimento é feito no final da string, usando o caractere que você passar (no caso, "#").
Se a string já tiver o tamanho ou mais, nada muda.
*/
console.log(number.padEnd(10,"#"))