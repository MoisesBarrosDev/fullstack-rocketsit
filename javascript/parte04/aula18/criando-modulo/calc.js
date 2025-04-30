// Função de soma
function sum(a, b) {
  return a + b
}

// Função de multiplicação
function multiply(a, b) {
  return a * b
}

// Exportação nomeada (named export) — permite exportar várias funções individualmente.
// Cada função pode ser importada com seu próprio nome.
export { sum, multiply }

// Exportação padrão (default export) — só pode haver uma por módulo.
// Aqui estamos exportando uma função de subtração como exportação principal.
export default function subtracao(a, b) {
  return a - b
}

// Podemos mudar o nome das exportações usando 'as', útil para evitar conflitos ou dar nomes mais descritivos.
function sum1(a, b) {
  return a + b
}

function multiply2(a, b) {
  return a * b
}

// Exportamos essas funções com nomes diferentes dos originais.
export { sum1 as sumTwoNumbers, multiply2 as multiplyTwoNumbers }
////////////////////////////////////////////////////////////////////////////

// Também é possível exportar classes.
// Aqui exportamos uma classe que possui métodos de soma e multiplicação.
export class Calcc {
  sum(a, b) {
    return a + b
  }

  multiply(a, b) {
    return a * b
  }
}
