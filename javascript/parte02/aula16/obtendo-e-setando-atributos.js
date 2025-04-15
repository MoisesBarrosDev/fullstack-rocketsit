// Obtendo e Setando Atributos

// Obtendo e Setando Atributos

// Aqui estamos selecionando o primeiro elemento <a> da página usando querySelector.
// Isso nos dá acesso ao link da página para manipulação.
const link = document.querySelector('a')

// Utilizando o método getAttribute() para pegar o valor do atributo 'href' da tag <a>.
// O método getAttribute('href') retorna o valor do atributo 'href', que é o link (URL) presente na tag <a>.
console.log(link.getAttribute('href'))

// Usando o setAttribute() para substituir o valor do atributo 'href' da tag <a>.
// O método setAttribute('href', novoValor) altera o valor do atributo para o novo link fornecido.
// Aqui, estamos mudando o link de MDN para ChatGPT.
link.setAttribute('href','https://chatgpt.com/')

// Alterando o texto visível dentro da tag <a> utilizando innerText.
// innerText modifica o conteúdo textual da tag <a>. Antes o texto era 'MDN', agora será 'chatgpt'.
link.innerText = 'chatgpt'

// Selecionando o parágrafo <p> que possui a classe 'error'.
const paragraph = document.querySelector('.error')

// Usando getAttribute() para obter o valor do atributo 'class' da tag <p>.
// O valor retornado é o nome da classe que está sendo utilizada no parágrafo, que neste caso é "error".
console.log(paragraph.getAttribute('class'))

// Modificando o atributo 'class' usando setAttribute().
// O setAttribute('class', 'novaClasse') altera a classe do parágrafo de "error" para "success".
paragraph.setAttribute('class','success')

// Como não existe o atributo 'style' na tag <p>, usamos setAttribute() para adicionar um novo atributo 'style'.
// Definimos o estilo para que o texto do parágrafo fique na cor verde. O valor do atributo 'style' é uma string com a regra CSS.
paragraph.setAttribute('style','color: green;')

