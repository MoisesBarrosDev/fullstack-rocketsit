/*
Exercício - 01

- Faça com que o texto do h1 do index.html seja exibido com todas as letras maiúsculas.

*/

const paragraph = document.querySelector('h1')

paragraph.textContent = paragraph.textContent.toUpperCase()

/*
Exercício - 02

- Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
- Cada número deve estar dentro de uma <li> com a classe "number"

*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55]

const ul = document.querySelector('ul')

const insertNumberIntoUl = (number) => {
  ul.innerHTML += `<li class = "number" >${number}</li>`
}
numbers.forEach(insertNumberIntoUl)

/*
Exercício - 03

- Modifique as cores dos números dentro da ul da seguinte forma:
- Se o número é par, ele deve ser exibido na cor "lightblue";
- Se o número é ímpar, exiba-o na cor "pink".
*/


const lis = document.querySelectorAll('.number')

const insertColor = (li) => {
  const isEven = Number(li.textContent) % 2 === 0
  if (isEven) {
    li.style.color = 'lightblue'
    return
  }

  li.style.color = 'pink'

}

lis.forEach(insertColor)

/*
Exercício - 04

- Adicione a classe "body-background" no corpo do index.html

P.s: a classe "body-background" já está declarada no style.css
*/


// const body = document.querySelector('body')
const body = document.body


body.classList.add('body-background')

/*
Exercício - 05

- Adicione o link
https://developer.mozilla.org/en-US/
*/

const href = document.querySelector('a')

href.setAttribute('href', 'https://developer.mozilla.org/en-US/')

href.innerText = 'MDN'

/*
Exercício - 06

- Exiba o novo valor do atributo href do link no console.
*/

console.log(href.getAttribute('href'))

/*
Exercício - 07

- Exiba, no console, um objeto com todas as propiedades CSS que podem ser manipuladas via JS no h1.
*/

console.log(paragraph.style)

/*
Exercício - 08

- Remova a classe "body-background", do elemento body.
*/

body.classList.remove('body-background')

/*
Exercício - 09

- Se o link da página possuir uma classe "link", remova-a;
- Não utilize o método remove() para fazer isso.
*/


href.classList.toggle('link')
href.classList.toggle('link')
