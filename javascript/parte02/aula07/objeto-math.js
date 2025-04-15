// O objeto Math é um objeto embutido em JavaScript que fornece várias funções matemáticas.

console.log(Math) // Exibe o objeto Math com todas as suas funções.
console.log(Math.PI) // Retorna o valor de PI (aproximadamente 3.14159).
console.log(Math.E) // Retorna o valor de 'e', a constante de Euler (aproximadamente 2.718).

const area = 7.7

// O método round() arredonda um número para o inteiro mais próximo.
// Se a parte decimal for abaixo de 0.5, arredonda para baixo, se for 0.5 ou mais, arredonda para cima.
console.log(Math.round(area)) // Resultado esperado: 8

// O método floor() arredonda sempre para baixo, para o inteiro menor ou igual.
console.log(Math.floor(area)) // Resultado esperado: 7

// O método ceil() arredonda sempre para cima, para o inteiro maior ou igual.
console.log(Math.ceil(area)) // Resultado esperado: 8

// O método trunc() remove a parte decimal do número, truncando para o inteiro mais próximo sem arredondar.
console.log(Math.trunc(area)) // Resultado esperado: 7

// Números aleatórios
// ATENÇÃO: SEMPRE USE "Math" COM A PRIMEIRA LETRA MAIÚSCULA, POIS O JAVASCRIPT DIFERENCIA MAIÚSCULAS DE MINÚSCULAS E "math" EM MINÚSCULAS NÃO EXISTE.
// O MÉTODO Math.random() GERA UM NÚMERO ALEATÓRIO DECIMAL ENTRE 0 (INCLUSIVO) E 1 (EXCLUSIVO).
const randomNumber = Math.random()

console.log(randomNumber)
// Aqui, estamos pegando o número gerado por Math.random(), multiplicando por 100 e arredondando para o número inteiro mais próximo.
// Isso gera um número aleatório entre 0 e 100, já que o Math.round() arredonda para o inteiro mais próximo.
console.log(Math.round(randomNumber * 100))
