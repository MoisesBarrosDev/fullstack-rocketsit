/*
O método some() testa se ao menos um dos elementos do array
passa na condição e retorna um valor true ou false.
*/

// Exemplo de array de idades
const ages = [15, 30, 39, 29]

// Se um item atender a condição ele retorna verdadeiro, se nenhum item atender a condição ele retorna false.
const result = ages.some((age) => age < 18)
console.log(result)