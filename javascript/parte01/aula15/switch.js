// Switch statement
const grade = 'F'

switch (grade) {
  case 'A':
    console.log('você tirou um A.')
    break
  case 'B':
    console.log('você tirou um B.')
    break
  case 'C':
    console.log('você tirou um C.')
    break
  case 'D':
    console.log('você tirou um D.')
    break
  case 'E':
    console.log('você tirou um E.')
    break
  default:
    console.log('nota inválida.')

}

// 📌 O QUE É O SWITCH?  
// O switch é uma estrutura condicional usada para comparar um valor com vários casos possíveis.  
// Ele é útil quando temos várias condições baseadas no mesmo valor, tornando o código mais organizado que múltiplos 'if else'.

// 📌 COMO FUNCIONA?  
// - O switch verifica o valor passado (exemplo: uma nota, um número ou uma string).  
// - Ele compara esse valor com os 'case' definidos.  
// - Se houver correspondência, o bloco de código correspondente será executado.  
// - O 'break' impede que os próximos casos sejam executados após uma correspondência.  
// - O 'default' age como um 'else', sendo executado quando nenhum 'case' for correspondente.

const cor = 'vermelho'

switch (cor) {
  case 'azul': // Se cor for "azul", este bloco será executado
    console.log('A cor escolhida foi azul.')
    break // Para a execução aqui, sem verificar os outros cases.

  case 'vermelho': // Se cor for "vermelho", este bloco será executado
    console.log('A cor escolhida foi vermelho.')
    break

  case 'verde': // Se cor for "verde", este bloco será executado
    console.log('A cor escolhida foi verde.')
    break

  default: 
    // O 'default' será executado se nenhum dos casos acima corresponder ao valor da variável.
    console.log('Cor não reconhecida.')
}

// 📌 IMPORTANTE: Se o 'break' for omitido, os casos seguintes continuarão sendo executados,
// mesmo que um caso anterior tenha sido correspondido. Isso é chamado de "fall-through".
