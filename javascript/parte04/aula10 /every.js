/*
O método every() testa se todos os elementos do array passam na condição
e retorna um valor Boolean.
*/

// Exemplo de array de idades.
const ages = [15, 30, 39, 29]

// Verificando se todas as idades são maiores ou igual a 18.
// vai retornar false, pois o número 15, não é maior ou igual a 18, so seria true se todos os itens atendesse a condição.
const result = ages.every((age) => age >= 18)
console.log(result)