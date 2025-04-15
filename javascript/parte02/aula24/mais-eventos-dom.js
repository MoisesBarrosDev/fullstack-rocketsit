// aqui estamos fazendo uma query no dom, e pegando a tag <p> pela classe dela.
const paragraph = document.querySelector('.copy-me')

//  Nesse codigo abaixo estamos usando a tag <p> que pegamos no DOM e estamos adicionando um evento nele, que se chama:
// 'copy' oque ele faz? ele juntamente com a função de callback, toda vez que alguém copiar o texto vai retornar no 
//  console : Texto copiado!
paragraph.addEventListener('copy', () => {
  console.log('Texto copiado!')
})

//  aqui estamos pegando a tag <div>, pela classe dela que se chama 'box'.
const div = document.querySelector('.box')

// No código abaixo, estamos usando a tag <div> que pegamos no DOM e adicionando um evento nela.
// O evento é 'mousemove'. Toda vez que o mouse se mover dentro da caixa, 
// a função de callback irá pegar as posições X e Y de acordo com o movimento do mouse dentro da caixa.
div.addEventListener('mousemove', (event) => {
  div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`

})

// Esse código está ouvindo o evento 'wheel', que é disparado quando a roda do mouse é girada.
// A função de callback recebe o evento e, neste caso, estamos registrando a posição da página
// (em termos de X e Y) toda vez que o evento 'wheel' ocorre.
document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY)
})