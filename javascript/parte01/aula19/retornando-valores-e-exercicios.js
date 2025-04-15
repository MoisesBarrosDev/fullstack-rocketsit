// Definindo uma função chamada 'double' que recebe um parâmetro 'number'
const double = function (number) {
  // A linha abaixo foi comentada. Ela calcularia o valor multiplicado por 2 e armazenaria em uma variável 'doubleResult'.
  // const doubleResult = number * 2
  
  // Retorna diretamente o valor de 'number' multiplicado por 2.
  return number * 2
}

// Chamando a função 'double' com o argumento 3.
// O valor 3 será passado como 'number' para a função e o resultado será 6 (3 * 2).
const result = double(3)

// Definindo uma função chamada 'showResult' que recebe um parâmetro 'value'.
// Essa função retorna uma string formatada que inclui o valor passado como parâmetro.
const showResult = function(value) {
  // A linha abaixo retorna uma string que inclui o valor 'value' passado para a função,
  // usando uma template literal para incorporar esse valor na string.
  return ` O resultado é: ${value}`
}

// A função 'showResult' é chamada com o argumento 'result', que é 6 (o valor retornado por 'double(3)').
// A função 'showResult' então retorna a string "O resultado é: 6".
console.log(showResult(result)) 
// O 'console.log' imprime a string no console, ou seja, a saída será:
// " O resultado é: 6"
