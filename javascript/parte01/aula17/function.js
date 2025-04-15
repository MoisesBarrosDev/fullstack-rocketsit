//  Function declaration
// A declaração de função é uma forma de definir funções em JavaScript.
// Elas são **hoisted**, ou seja, podem ser chamadas antes de sua definição no código,
// porque o JavaScript "sobe" a definição da função para o topo durante a execução.

function sayHi() {
  console.log('oi')
}

//  Function expression
// A expressão de função define uma função dentro de uma expressão. Isso significa que a função 
// é atribuída a uma variável ou constante e **não** é "hoisted". Ou seja, ela só pode ser chamada 
// depois de sua definição, ou seja, após a linha onde a função é atribuída.
// As funções anônimas (sem nome) são mais comumente usadas em expressões de função.
const showFood = function () {
  console.log('pizza')
}

//  Chamadas de função
// Aqui estamos chamando a função showFood várias vezes. 
// Como showFood é uma função expressão, ela precisa ser definida antes de ser chamada.
showFood()
showFood()
showFood()
showFood()

// Aqui estamos chamando a função sayHi, que é uma função declarada.
// Como sayHi é uma função declarada, ela pode ser chamada antes de ser definida no código.
sayHi()  
sayHi()
sayHi()
sayHi()
sayHi()


// Diferenças principais:
// 1. **Hoisting**: Funções declaradas são "hoisted", ou seja, podem ser chamadas antes de sua definição no código.
//  Funções expressas não são "hoisted", e precisam ser definidas antes de serem chamadas.
// 2. **Sintaxe**: A função declarada tem uma sintaxe simples, começando com a palavra-chave `function`, enquanto a função expressa é geralmente atribuída a uma variável ou constante.
// 3. **Flexibilidade**: Funções expressas podem ser usadas em expressões e passar como parâmetros, enquanto as funções declaradas não podem ser usadas dessa forma.
// 4. **Escopo**: Ambas podem ter escopo global ou de função, dependendo de onde são declaradas.