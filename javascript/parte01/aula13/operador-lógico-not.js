// O operador lógico NOT (!) inverte o valor booleano de uma expressão ou variável.

// Se um valor for true, o operador NOT (!) o torna false.
// Se um valor for false, o operador NOT (!) o torna true.

console.log(!true)  // false -> NOT de true é false
console.log(!false) // true -> NOT de false é true

// Exemplo com uma variável booleana:
let isUserLoggedin = false

// O operador NOT (!) inverte o valor de isUserLoggedin
if (!isUserLoggedin) {
  console.log('Você precisa fazer login para continuar.')
}

// Como isUserLoggedin é false, a expressão !isUserLoggedin se torna true,
// fazendo com que o bloco de código dentro do if seja executado.

// O operador NOT também pode ser usado em valores não booleanos:
// Valores falsy (0, "", null, undefined, NaN) são convertidos para false, e então invertidos para true.
console.log(!0)        // true -> 0 é um valor falsy, então !0 retorna true
console.log(!'')       // true -> string vazia é falsy, então !'' retorna true
console.log(!null)     // true -> null é falsy, então !null retorna true
console.log(!undefined) // true -> undefined é falsy, então !undefined retorna true
console.log(!NaN)      // true -> NaN é falsy, então !NaN retorna true

// Valores truthy (qualquer valor diferente dos falsy) são convertidos para true, e então invertidos para false.
console.log(!'Hello')  // false -> Strings não vazias são truthy, então !'Hello' retorna false
console.log(!42)       // false -> Números diferentes de 0 são truthy, então !42 retorna false
console.log(![])       // false -> Arrays são truthy, então ![] retorna false
console.log(!{})       // false -> Objetos são truthy, então !{} retorna false
