// Selecionando o primeiro elemento <p> da página usando querySelector.
// O método querySelector retorna o primeiro elemento que corresponde ao seletor passado, neste caso, o primeiro <p>.
const paragraph = document.querySelector('p')

// Exibindo no console as classes da tag <p> usando o classList.
// O classList retorna uma coleção de classes que o elemento possui no momento.
console.log(paragraph.classList)

// Adicionando a classe 'error' ao elemento <p>.
// A classe 'error' foi definida no CSS para exibir um estilo com cor vermelha e borda pontilhada.
paragraph.classList.add('error')

// Removendo a classe 'error' do elemento <p>.
// A classe 'error' será retirada, então o elemento <p> não terá mais o estilo associado a ela.
paragraph.classList.remove('error')

// Adicionando a classe 'success' ao elemento <p>.
// A classe 'success' é definida no CSS e dá ao elemento um estilo de texto verde e borda pontilhada.
paragraph.classList.add('success')

// Selecionando todos os elementos <p> da página usando querySelectorAll.
// O método querySelectorAll retorna todos os elementos que correspondem ao seletor, neste caso, todos os <p> da página.
const paragraphs = document.querySelectorAll('p')

// Iterando sobre todos os parágrafos e adicionando as classes baseadas no conteúdo do texto.
// Para cada parágrafo, se o texto contiver a palavra 'error', adicionamos a classe 'error'.
// Se o texto contiver a palavra 'success', adicionamos a classe 'success'.
paragraphs.forEach((paragraph) => {
  // Se o conteúdo do parágrafo contém a palavra 'error', adiciona a classe 'error'.
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error')
  } 

  // Se o conteúdo do parágrafo contém a palavra 'success', adiciona a classe 'success'.
  if (paragraph.textContent.includes('success')) {
    paragraph.classList.add('success')
  }
})

// Selecionando o título <h1> da página usando querySelector.
// Isso seleciona o elemento <h1> para manipulação.
const title = document.querySelector('h1')

// Usando classList.toggle() para alternar a classe 'test' no título <h1>.
// O método toggle adiciona a classe se ela não estiver presente e remove se ela estiver presente.
// No caso, estamos alternando a classe 'test' duas vezes, então ela será removida.
title.classList.toggle('test')
title.classList.toggle('test')


