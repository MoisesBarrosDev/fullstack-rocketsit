/*
Exercício - 01

- Faça com que o texto do h1 do index.html seja exibido com todas as letras minúsculas.
- Utilize o método adequado para alterar o texto no JavaScript.
*/

const title = document.querySelector('h1')
title.textContent = title.textContent.toLowerCase()

/*
Exercício - 02

- Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
- Cada número deve estar dentro de uma <li> com a classe "number" e com texto alinhado à direita.
- Não se esqueça de iterar sobre o array e adicionar as li's corretamente.
*/

const numbers = [12, 34, 56, 78, 90, 100, 200, 400];

const ul = document.querySelector('ul')
numbers.forEach((number) => {
  ul.innerHTML += `<li>${number}</li>`
})

/*
Exercício - 03

- Modifique as cores dos números dentro da ul da seguinte forma:
- Se o número for maior que 50, ele deve ser exibido na cor "green";
- Se o número for menor ou igual a 50, exiba-o na cor "orange".
- Aplique a mudança de cor diretamente no estilo da tag <li>.
*/

const lis = document.querySelectorAll('li')

const addColor = number => {
  const maiorQueCinquenta = Number(number.textContent) > 50
  if (maiorQueCinquenta) {
   number.style.color = 'green'
   return
  }

  number.style.color = 'orange'
}

lis.forEach(addColor)
/*
Exercício - 04

- Adicione a classe "body-background" no corpo do index.html, mas somente se o texto dentro do <h1> for "Texto para exercício".
- Utilize a manipulação de classes para isso.
*/

const body = document.body
body.classList.add('body-background')

/*
Exercício - 05

- Adicione o link https://www.w3schools.com/ à tag <a> no HTML.
- O texto do link também deve ser alterado para "W3Schools".
*/

const link = document.querySelector('a')

link.setAttribute('href','https://www.w3schools.com/')
link.textContent = "W3Schools"

/*
Exercício - 06

- Exiba o novo valor do atributo href da tag <a> no console após realizar a alteração.
- Utilize o método adequado para obter o valor do atributo.
*/

console.log(link.getAttribute('href'))

/*
Exercício - 07

- Exiba, no console, um objeto com todas as propiedades CSS que podem ser manipuladas via JS no body.
- Utilize o método adequado para acessar as propriedades CSS manipuláveis.
*/

console.log(body.style)

/*
Exercício - 08

- Remova a classe "body-background" do elemento body.
- Utilize o método adequado para isso sem afetar outros elementos ou a estrutura da página.
*/

body.classList.remove('body-background')

/*
Exercício - 09

- Se o link da página possuir uma classe "link", remova-a;
- Não utilize o método remove() para fazer isso, mas sim outro método de manipulação de classes.
*/


link.classList.toggle('link')

