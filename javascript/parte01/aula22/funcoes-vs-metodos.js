const userName = 'Moisés'  // Variável contendo um nome

/* 
📌 DIFERENÇA ENTRE FUNÇÃO E MÉTODO:

   ✅ Função:
   - Uma função é um bloco de código independente que pode ser chamado em qualquer lugar do programa.
   - Ela não precisa estar dentro de um objeto para ser usada.
   - Exemplo abaixo: a função sayHi() retorna uma saudação.
*/
const sayHi = () => 'Oi'  

// Chamando a função diretamente pelo nome
const greet = sayHi()  
console.log(greet) // "Oi"

/*
   ✅ Método:
   - Um método é uma função que pertence a um objeto.
   - Ele é chamado através do objeto usando a notação de ponto (.).
   - No exemplo abaixo, toUpperCase() é um método da string name.
*/
const nameInUpperCase = userName.toUpperCase()  
console.log(nameInUpperCase) // "MOISÉS"

/*
📌 RESUMO RÁPIDO:
- Função: É independente e pode ser chamada diretamente. Exemplo: sayHi().
- Método: Está associado a um objeto e é chamado por ele. Exemplo: name.toUpperCase().
*/

// | Característica | Função                 | Método                     |
// |--------------|----------------------|----------------------|
// | Independente? | ✅ Sim                | ❌ Não               |
// | Precisa de um objeto? | ❌ Não         | ✅ Sim               |
// | Como chamar? | sayHi()               | name.toUpperCase()   |
// | Exemplo comum | function soma(a, b) { return a + b } | "texto".toLowerCase() |
