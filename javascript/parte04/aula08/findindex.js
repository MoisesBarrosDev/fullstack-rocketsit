/*
O método findIndex() retorna o índice no array do primeiro elemento que satisfazer a condição.
Caso contrário, retorna -1, indicando que  nenhum elemento passou no teste.
*/
// INDEX        0  1  2  3
const values = [4, 6, 8, 12]
// No caso aqui abaixo vai retornar 3, pois o primeiro index que satisfaz esse método é o index 3.
const result = values.findIndex((value) => value > 10)
console.log(result)
console.log(values[result])

// Exemplo de quando não encontra.
console.log(values.findIndex((value) => value > 12))
// Ele vai retornar -1 pois não existe número nesse array maior que 12
