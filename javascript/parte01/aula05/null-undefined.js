// O undefined acontece porque, todas as vezes que você não atribui um valor a uma variável, o JavaScript automaticamente atribui "undefined" a ela.
let emptiness
console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`) 

// Quando usar o null: utilize "null" para indicar intencionalmente que uma variável não possui um valor.
// Exemplo: ao executar uma operação matemática envolvendo "null", ele é automaticamente interpretado como o número 0.
let test = null
console.log(test, test + 3, `o valor é ${test}`) 

// Por que usar "null"? Em aplicações reais, é comum utilizar "null" para indicar que uma variável, que anteriormente tinha um valor, foi redefinida intencionalmente para um estado "sem valor".
// Exemplo: imagine uma aplicação internacional com um formulário onde usuários do Reino Unido selecionam um título como Mister, Miss, Sr.
// Esse valor é armazenado em uma variável. Se o usuário decidir limpar o formulário usando um botão de reset, a variável deve receber o valor "null" para indicar que o título foi removido.


