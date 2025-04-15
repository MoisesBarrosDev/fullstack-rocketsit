/*
Operador lógico que retorna o seu operando do lado direito quando seu operador
do lado esquerdo é null ou undefined. Caso contrario, ele retorna o seu operando
do lado esquerdo.

*/


let content = undefined

console.log(content ?? "conteudo padrão")


const user = {
  name: 'Thiago',
  picture: 'Thiago.png'
}
console.log(user.picture ?? "default.png")