
const ul = document.querySelector('ul')
// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})


const button = document.querySelector('button')


button.addEventListener('click', () => {
const li = document.createElement('li')
li.textContent = 'Novo item'
// quando quiser adicionar mas ele vai ser adicionado como ultimo filho
ul.append(li)

// quando quiser adicionar mas ele vai ser o primeiro filho, toda vez que clicar
// ul.prepend(li)
})