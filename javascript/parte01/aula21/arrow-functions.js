// Função Tradicional (Function Declaration) 
// A função tradicional é definida com a palavra-chave 'function' seguida do nome da função, parâmetros e corpo.
  
// const double = function (number) {   // Definição da função tradicional (antes da mudança para arrow function)
//   return number * 2; // A função retorna o número multiplicado por 2
// }

// Aqui é como a função seria chamada (o código seria o mesmo na função tradicional):
// const result = double(3);  // Chama a função e passa o número 3 como argumento
// console.log(`O resultado é: ${result}`);  // Exibe o resultado da função no console

// -- Diferença entre a função tradicional e a arrow function --
// A principal diferença entre uma função tradicional e uma função arrow é a forma como são escritas e comportam-se (em termos de 'this' e escopo).
// No caso do seu código, temos a versão arrow function para comparar.

// Função Arrow Function (Função de seta, forma mais concisa de escrever funções em JS) 
// Uma arrow function é mais concisa e elimina a necessidade de usar a palavra-chave 'function'.
// A sintaxe da arrow function é: (parametros) => corpo da função.

// Essa é a definição da função usando a arrow function. A função recebe 'number' e retorna 'number * 2'
const double = number => number * 2; // A seta (=>) é o que define que estamos usando uma arrow function

// Explicando a sintaxe da Arrow Function:
// 1. A função não tem nome (não precisa escrever 'function nomeDaFuncao')
// 2. A arrow function pode ter uma lista de parâmetros entre parênteses (neste caso 'number') ou nenhum parâmetro (caso não haja nenhum argumento passado).
// 3. O corpo da função vem após a seta (=>). Se a função tiver apenas uma linha de código para retornar um valor, podemos omitir as chaves e a palavra-chave 'return'.
// 4. O retorno é implícito (não é necessário usar 'return' dentro de funções com uma única expressão, como no caso acima). 
// 5. A expressão 'number * 2' é automaticamente retornada, sem a necessidade de usar 'return'.

// No código abaixo, estamos utilizando a arrow function 'double' que foi criada acima e chamando-a com o argumento '3'.
// O resultado da função será o número 6 (porque 3 * 2 = 6).

const result = double(3);  // Chama a função 'double' passando o valor 3 como argumento, que retorna 6.
console.log(`O resultado é: ${result}`);  // Exibe no console o texto: "O resultado é: 6"

// A diferença que a arrow function tem sobre a função tradicional é que ela é mais concisa e muitas vezes mais legível,
// especialmente quando precisamos passar uma função simples como argumento ou retornar um valor imediato.
// Também, funções arrow não tem seu próprio 'this', elas herdam o 'this' do contexto em que foram definidas. Isso pode ser vantajoso ou problemático dependendo do seu uso.

