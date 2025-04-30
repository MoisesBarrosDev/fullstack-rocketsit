/*
O método reduce é utilizado para reduzir um array a um único valor.

Parâmetros:
- Array original (values)
- Acumulador (accumulator)
- Valor da iteração (currentValue)
- Valor Inicial (0)
- Index (index da iteração atual - opicional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((acc, currentValue, index) => {
/*
  console.log('ACUMULAODOR:', acc)
  console.log('CURRENT VALUE:', currentValue)
  console.log('INDEX:', index)

  console.log('SOMA :', acc + currentValue)
  console.log('###################')
*/
  return acc + currentValue
}, 0)

console.log(`RESULTADO DA SOMA FINAL : ${sum} `)
