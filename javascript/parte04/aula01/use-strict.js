/*
O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exeções
no Javascript.
*/

"use strict" // Ativa o modo estrito do JavaScript, que ajuda a evitar erros silenciosos, impede certas práticas inseguras e torna o código mais previsível.

// Declara uma função chamada showMessage
function showMessage() {
  let personName = "Moises silva" // Declara uma variável local com o nome da pessoa
  console.log('Olá', personName)  // Exibe no console a mensagem "Olá Moises silva"
}

// Chama a função showMessage
showMessage()

// Declara uma classe chamada Student
class Student {
  // Define um getter chamado Point (nota), que sempre retorna o valor 7
  get Point() {
    return 7
  }
}

// Cria uma instância da classe Student
let student = new Student()

// Tenta atribuir um novo valor à propriedade Point (comentado para evitar erro)
// Com "use strict", isso lançaria um erro porque não é possível atribuir valor a um getter (somente leitura)
// student.Point = 10

// Exibe o valor da propriedade Point no console, que será 7
console.log(student.Point)

// Tenta deletar uma propriedade do objeto global window (comentado para evitar erro)
// window.document é uma propriedade não deletável. Com "use strict", tentar deletar isso lança um TypeError.
// delete window.document

// Tenta declarar uma função com parâmetros duplicados (o que é inválido)
// Com "use strict", isso lança um SyntaxError porque nomes de parâmetros não podem se repetir.

// function sum(a+a + c) {
//   return a + a + c
// }
