// if
// O "if" é uma estrutura condicional usada para verificar se uma determinada condição é verdadeira.
// Se a condição do "if" for verdadeira, o bloco de código dentro do "if" será executado.

// O "else if" é uma estrutura condicional usada quando você tem várias condições a serem verificadas.
// Ele só é verificado se a condição do "if" anterior for falsa.
// Caso a condição do "else if" seja verdadeira, o bloco de código dentro dele será executado.
// Você pode ter múltiplos "else if" em uma sequência.

// O "else" é o bloco de código que será executado quando nenhuma das condições anteriores ("if" e "else if") for verdadeira.
// O "else" é opcional, mas pode ser útil para lidar com casos em que nenhuma condição seja atendida.

// if: Verifica a primeira condição. Se for verdadeira, executa o código associado.
// else if: Usado após um if (ou outro else if). Se a condição anterior for falsa, ele verifica sua própria condição. Pode haver vários else if seguidos.
// else: Executado se nenhuma das condições anteriores (nenhum if ou else if) for verdadeira. Ele é o "caminho padrão" para quando todas as outras condições falham.


const age = 19

if (age > 18) {
  console.log('Você tem mais de 18 anos.')
}


const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']

if (simpsons.length >= 3) {
  console.log('o array tem bastante personagens.')
}





// OPERADORES LÓGICOS

// "OU" ( || ) -> Retorna verdadeiro se pelo menos uma das condições for verdadeira.
// Exemplo: Se uma das condições for atendida, o bloco de código será executado.

// "E" ( && ) -> Retorna verdadeiro apenas se TODAS as condições forem verdadeiras.
// Exemplo: O código só será executado se todas as condições forem atendidas.
const password = 'oi01324522993'
// O operador lógico "OU" (||) avalia cada condição da esquerda para a direita. Se encontrar uma condição verdadeira, ele retorna true imediatamente e ignora as demais verificações.
//
// /[A-Z]/.test(password) é uma expressão regular que verifica se há pelo menos uma letra maiúscula na constante password.
// - [A-Z] → Representa qualquer letra maiúscula de A a Z.
// - .test(password) → Testa a string password e retorna true se houver pelo menos uma letra maiúscula, caso contrário, retorna false.
if (password.length >= 12 && password.includes('1') && /[A-Z]/.test(password)) {
  console.log('Senha muito forte =)')
} else if (password.length >= 8 && password.includes('1') && /[A-Z]/.test(password)) {
  console.log('Senha forte')
} else {
  console.log('A senha deve ter pelo menos 8 caracteres e conter ao menos uma letra maiúscula.')
}