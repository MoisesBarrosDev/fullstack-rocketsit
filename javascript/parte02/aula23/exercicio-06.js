/*
Exercício - 01

- Obtenha a ul do index.html e adicione em todos os elementos filhos dela, uma classe 'vídeo';
- Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('.videos')
const lis = Array.from(ul.children)

const insertVideoClass = li => {
  li.classList.add('video')
}

lis.forEach(insertVideoClass)
console.log(lis)

/*
Exercício - 02

- Usando a propiedade correta, descubra  quem é o pai do h2 e exiba-o no console;
*/


const h2 = document.querySelector('h2')

console.log(h2.parentElement)

/*
Exercício - 03

- Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.querySelector('h1')
console.log(h1.nextElementSibling)

/*
Exercício - 04

- Descruba quem é o irmão anterior da ul e exiba no console;
*/

console.log(ul.previousElementSibling)

/*
Exercício - 05

- Quando um clique acontecer em algumas das lis, faça com que a li clicada seja exibida no console.
*/

const showClickedLi = event => {
  console.log(event.target)
}

const addClickEvent = li => {
  li.addEventListener('click', showClickedLi)
}

lis.forEach(addClickEvent)

/*
Exercício - 06

- Quando o botão for clicado , adicione o nome dos vídeos abaixo dentro da ul;
- Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como Refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como Fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]


const button = document.querySelector('button')

let currentIndex = 0


const addVideoToList = (video) => {
  const { name, length } = video;
  const li = document.createElement('li');
  li.textContent = `${name} | ${length}`;
  ul.appendChild(li);
};

const addVideosToList = (videos) => {
  if (currentIndex < videos.length) {
    addVideoToList(videos[currentIndex]);
    currentIndex++;
  } else {
    alert('Todos os vídeos foram adicionados!');
  }
};

button.addEventListener('click', () => addVideosToList(videos))

/*
Exercício - 07

- Se um clique no h1 acontecer faça com que todos os elementos dentro do body sejam removidos.

*/


const body = document.body

const removeItems = () => {
  while (body.firstChild) {
    body.removeChild(body.firstChild)
  }
}

h1.addEventListener('click',  removeItems)
