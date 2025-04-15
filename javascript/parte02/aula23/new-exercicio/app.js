/*
Exercício - 01
- Obtenha a <ul> do index.html e adicione em todos os elementos filhos dela (os <li>), uma classe 'vídeo';
- Exiba no console os elementos filhos da <ul> com a classe já inserida.
*/

const ul = document.querySelector('ul')
const lis = Array.from(ul.children)

const addClass = li => {
  li.classList.add('video')
}

lis.forEach(addClass)


/*
Exercício - 02
- Adicione um novo título <h3> antes do título <h1> com o texto "Título Adicional".
- Exiba no console o novo HTML da página após essa modificação.
*/


const h1 = document.querySelector('h1')
const h3 = document.createElement('h3')
h3.textContent = 'Título Adicional'

h1.parentNode.insertBefore(h3, h1)

/*
Exercício - 03
- Alterar o texto do botão para "Carregar mais vídeos" quando ele for clicado.
- Exiba o novo texto no console.
*/

const button = document.querySelector('button')
button.addEventListener('click', () => {
  button.textContent = "Carregar mais vídeos"
  console.log(button.textContent)
})


/*
Exercício - 04
- Adicione um novo item à lista de vídeos, mas dessa vez, o novo vídeo não será um objeto, será uma string (ex: 'Novo Vídeo | 00:03:00').
- Crie esse item como um <li> e adicione à lista.
- Exiba o novo item no console após ser adicionado.
*/

const newVideos = [
  'Novo Vídeo | 00:03:00',
  'Outro Vídeo | 00:04:00',
  'Vídeo Extra | 00:02:30'
];
let currentIndex = 0

const addNewVideo = () => {
  const li = document.createElement('li')
  if (currentIndex < newVideos.length) {
    li.textContent = newVideos[currentIndex ]
    console.log(`Novo vídeo adicionado: ${newVideos[currentIndex]}`)
    ul.appendChild(li)
    currentIndex++
  } else {
    alert('Todos os itens foram Adicionados!')
  }
}

button.addEventListener('click',addNewVideo)

