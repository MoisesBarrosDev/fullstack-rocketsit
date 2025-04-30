
/*
  Rest parameters (...) permite representar um número indefinido de argumentos 
  passados para uma função como um array.
*/

// Declara uma função chamada 'values' que utiliza o operador rest para capturar os argumentos
function values(...rest) {
  // A variável 'rest' é um array que contém todos os argumentos passados para a função
  // Exemplo: se chamarmos values(1, 2, 3), então rest = [1, 2, 3]

  // Mostra no console a quantidade de argumentos recebidos (o tamanho do array 'rest')
  console.log(rest.length) 
  // Saída: 5 (porque passamos 5 argumentos na chamada da função abaixo)

  // Exibe os elementos do array individualmente, usando o spread operator
  console.log(...rest)     
  // Saída: 1 2 3 4 5 (cada elemento separado por espaço)

  // Exibe o array completo como uma estrutura (mostrando que 'rest' é realmente um array)
  console.log(rest)        
  // Saída: [1, 2, 3, 4, 5]
}

// Chama a função 'values' passando múltiplos argumentos
values(1, 2, 3, 4, 5)
// Esses argumentos serão agrupados em um array chamado 'rest' dentro da função
