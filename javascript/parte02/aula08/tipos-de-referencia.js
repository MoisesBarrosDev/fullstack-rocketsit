/*
Tipos Primitivos e Tipos de Referência

1. Tipos Primitivos:
- São tipos de dados simples, que não podem ser alterados diretamente. 
- Quando você cria uma variável com um tipo primitivo, o valor é armazenado diretamente na memória e tem um tamanho fixo.

Exemplos de tipos primitivos:
- String: "João", "Olá Mundo"
- Number: 10, 3.14
- Boolean: true, false
- Null: null
- Undefined: undefined
- Symbol (para identificadores únicos)

Como eles funcionam na memória (Stack):
- Os valores dos tipos primitivos são armazenados diretamente na **Stack** (pilha de memória).
- Cada variável contém o valor diretamente, e esse valor não pode ser alterado, apenas substituído por outro valor.
*/

let name = "João"; // String (primitivo)
let age = 31; // Number (primitivo)
let isActive = true; // Boolean (primitivo)

/*
2. Tipos de Referência:
- São tipos de dados que fazem referência a um objeto ou estrutura de dados mais complexa.
- Em vez de armazenar o valor diretamente, eles armazenam uma referência para onde o valor está na memória.

Exemplos de tipos de referência:
- Objetos: {name: "João", age: 31}
- Arrays: [1, 2, 3]
- Funções: function() { return "Hello" }

Como eles funcionam na memória (Heap):
- Os tipos de referência são armazenados na **Heap** (área de memória maior).
- O que é armazenado na **Stack** é a **referência** (o endereço na memória) onde o objeto está armazenado.
- O valor real do objeto ou array está na **Heap**, e a variável na **Stack** contém apenas a referência para esse valor.

Exemplo de tipo de referência:
*/
let user = { name: "João", age: 31 }; // Objeto (referência)
let numbers = [1, 2, 3]; // Array (referência)

/*
Diferença entre Stack e Heap:
1. **Stack (Pilha de Memória):**
   - Armazena dados de forma simples e rápida.
   - Usada para tipos primitivos (como string, número, booleano) e variáveis locais.
   - A memória é liberada automaticamente quando a função termina de ser executada.
   - Acesso direto aos valores. Cada variável ocupa um espaço fixo.

2. **Heap (Área de Memória):**
   - Armazena objetos e arrays, ou seja, tipos de referência.
   - Quando você cria um objeto, ele é armazenado na **Heap**, e a variável na **Stack** guarda apenas a referência para aquele objeto.
   - A memória na **Heap** não é liberada automaticamente (precisa ser gerenciada pelo garbage collector, ou coletor de lixo).
   - Acesso indireto (via referência).

Exemplo de comportamento diferente entre tipos primitivos e tipos de referência:

- **Tipos Primitivos:**
  Quando você atribui o valor de uma variável a outra, **os valores são copiados**, e as duas variáveis se tornam independentes. Mudanças em uma não afetam a outra.
*/

let x = 10;
let y = x; // Aqui, y recebe uma cópia de x
x = 20;
console.log(x); // 20
console.log(y); // 10

/*
- **Tipos de Referência:**
  Quando você atribui o valor de uma variável (que contém uma referência) a outra, **ambas as variáveis apontam para o mesmo objeto na memória**. Isso significa que se você modificar o objeto via uma das variáveis, a outra também verá a modificação.

*/

let user1 = { name: "João" };
let user2 = user1; // user2 referencia o mesmo objeto que user1
user1.name = "Carlos"; // Modifica o nome no objeto
console.log(user1.name); // "Carlos"
console.log(user2.name); // "Carlos", pois user2 referencia o mesmo objeto

/*
Resumo:
- **Tipos Primitivos**: São simples, armazenados diretamente na Stack, e cópias são independentes.
- **Tipos de Referência**: São mais complexos, armazenados na Heap, e as variáveis guardam apenas referências ao valor real, o que significa que modificações em um afetam os outros.
*/

// valores primitivos
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)


// valores de referência
let userOne = { name : 'Roger', age: 31}
let userTwo = userOne

console.log(userOne,userTwo)

userOne.age = 50
console.log(userOne,userTwo)

