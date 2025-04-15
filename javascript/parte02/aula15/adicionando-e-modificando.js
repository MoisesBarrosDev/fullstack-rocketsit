// Adicionando e modificando conteúdo em uma página

// Selecionando o primeiro parágrafo na página (elemento <p>) usando querySelector
const paragraph = document.querySelector('p')  // Aqui estamos selecionando o primeiro elemento <p> da página

// Modificando o conteúdo do parágrafo selecionado com innerText
// O innerText altera ou recupera o texto visível dentro de um elemento HTML.
// Ao utilizar o innerText, podemos manipular apenas o texto dentro de uma tag HTML (sem afetar o conteúdo HTML, como tags).

// Este código substituiria o texto do parágrafo por 'Texto inserido'
paragraph.innerText = 'Texto inserido'  // Aqui estamos definindo o conteúdo do parágrafo como 'Texto inserido'

// Este código adicionaria 'Texto inserido' ao final do conteúdo já presente no parágrafo, sem substituir o conteúdo original
paragraph.innerText += ' Texto inserido'  // Usamos '+=' para adicionar o texto ao final do que já estava dentro da tag <p>

// Vamos explorar agora a seleção de múltiplos parágrafos utilizando querySelectorAll
// querySelectorAll retorna uma lista de todos os elementos que correspondem ao seletor fornecido.
const paragraphs = document.querySelectorAll('p')  // Aqui estamos selecionando todos os parágrafos <p> presentes no HTML

// Utilizando forEach para percorrer todos os parágrafos e modificar seu conteúdo
// A função forEach nos permite iterar sobre cada item de um array ou NodeList (como a retornada por querySelectorAll)
paragraphs.forEach((text, index) => {  // 'text' é o parágrafo atual, e 'index' é o índice daquele parágrafo na NodeList
  // Adicionando um texto extra ao conteúdo de cada parágrafo
  // O '+=' permite concatenar (adicionar) o novo texto ao final do texto atual do parágrafo
  text.innerText += ` Novo texto ${index + 1}`  // Aqui estamos adicionando um texto dinâmico que inclui o índice de cada parágrafo
})

// Agora vamos manipular uma <div> com a classe 'content'
const div = document.querySelector('.content')  // Selecionamos a primeira <div> com a classe 'content'

// A propriedade innerHTML é usada para acessar ou modificar o conteúdo HTML de um elemento.
// Ao contrário de innerText, que lida apenas com o texto visível, o innerHTML lida com o conteúdo HTML real dentro do elemento.
// Isso inclui tags HTML, como <h1>, <p>, etc.


// Aqui, estamos substituindo todo o conteúdo HTML dentro da div pela tag <h2> com o texto 'Novo h2'
div.innerHTML = '<h2>Novo h2</h2>'  // Isso substitui tudo dentro da div (caso já tenha algo lá) por um novo <h2>

// Este código adicionaria um novo <h2> ao final do conteúdo HTML já existente dentro da div.
// Isso acontece porque estamos utilizando a operação '+=' que concatena mais conteúdo ao que já está lá.
div.innerHTML += '<h2>Novo h2</h2>'  // Adiciona outro <h2> dentro da div

// Agora, vamos criar um array de pessoas
const people = ['Jonatan', 'Thiago', 'Francisca', 'Amanda']  // Aqui temos um array com alguns nomes

// Usamos forEach para percorrer o array e adicionar cada nome dentro de um <p> na div
people.forEach((person) => {  
  // Aqui, estamos adicionando um novo parágrafo para cada nome dentro da div
  // A cada iteração, será adicionado um novo parágrafo <p> com o nome da pessoa
  div.innerHTML += `<p>${person}</p>`  // O '+=' concatena o nome da pessoa dentro de um novo parágrafo <p>
})


/*
  Diferença entre innerText e innerHTML:

  1. **innerText**:
     - O `innerText` é usado para **acessar ou modificar o texto visível** dentro de um elemento.
     - Ele lida **somente com o texto**. Ou seja, se um elemento contiver HTML, o innerText não o considera.
     - **Exemplo**: Se um parágrafo contiver texto "Texto <strong>importante</strong>", o `innerText` irá retornar "Texto importante", sem as tags HTML.
     - **Importante**: `innerText` **não** interpreta o conteúdo HTML como tags, ele simplesmente lida com o **texto visível** no elemento.

  2. **innerHTML**:
     - O `innerHTML` é usado para **acessar ou modificar o conteúdo HTML** de um elemento.
     - Ele lida **com todo o conteúdo HTML**, incluindo tags e texto.
     - **Exemplo**: Se um parágrafo contiver texto "Texto <strong>importante</strong>", o `innerHTML` irá retornar "Texto <strong>importante</strong>", ou seja, ele **preserva as tags HTML** dentro do conteúdo.
     - **Importante**: `innerHTML` é muito útil quando você quer adicionar ou alterar **tags HTML** dentro de um elemento.

  Resumo:
  - **`innerText`** altera ou obtém apenas o **texto visível** de um elemento, sem interferir nas tags HTML.
  - **`innerHTML`** altera ou obtém o **conteúdo HTML completo**, incluindo tags HTML e texto.

*/
