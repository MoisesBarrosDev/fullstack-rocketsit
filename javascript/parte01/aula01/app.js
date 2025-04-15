// CamelCase: Estilo de escrita onde palavras são unidas sem espaços,
// e a primeira letra de cada palavra (exceto a primeira) é maiúscula.
// Exemplos:
// minhaVariavel
// calculaValorTotal

// Regras para nomear variáveis (let ou const) em JavaScript:

// 1. Pode usar letras, números, $ e _:
// Exemplos válidos:
let nome;
let idade_Usuario;
let $dolar;

// 2. Não pode começar com números:
// Errado:
// let 1nome;

// Correto:
let nome1;

// 3. Não pode usar palavras reservadas do JavaScript:
// Errado:
// let let;
// const const;
// let if;

// 4. Diferencia maiúsculas de minúsculas:
// minhaVariavel e minhavariavel são nomes diferentes.

// 5. Boas práticas:
// - Use nomes descritivos, como `quantidadeProdutos` em vez de `qp`.
// - Prefira camelCase para variáveis e funções.
// - Use const para valores que não mudam e let para valores mutáveis.


let age = 24
let currentYear = 2019

console.log(age, currentYear)

age = 32
console.log(age)


const points = 100
console.log(points)

var score = 75
console.log(score)
