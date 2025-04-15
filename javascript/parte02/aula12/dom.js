// O DOM (Document Object Model) é uma representação em árvore da estrutura de um documento HTML.
// Ele permite que você acesse, altere, adicione ou remova elementos e conteúdos de uma página web usando JavaScript.

// O DOM representa o documento como uma hierarquia de nós (elementos HTML, atributos, textos, etc.).

// Exemplo simples de interação com o DOM:

// 1. Acessando um elemento HTML pelo seu ID
// A função `getElementById` é um método que retorna um elemento com um ID específico do HTML.
let title = document.getElementById('main-title');  // Acessa o elemento com o ID 'main-title'
console.log(title);  // Exibe o elemento no console (isso será o objeto do elemento)

// 2. Alterando o conteúdo de um elemento HTML
// Você pode alterar o conteúdo de texto ou HTML de um elemento usando o `innerHTML` ou `textContent`.
title.textContent = 'Novo Título';  // Modifica o texto do elemento com o ID 'main-title'

// 3. Criando e adicionando novos elementos ao DOM
let newElement = document.createElement('p');  // Cria um novo elemento <p>
newElement.textContent = 'Este é um novo parágrafo!';  // Adiciona texto ao novo parágrafo
document.body.appendChild(newElement);  // Adiciona o novo parágrafo ao final do corpo da página

// 4. Removendo um elemento do DOM
// Podemos remover um elemento do DOM com `removeChild`.
let elementToRemove = document.getElementById('old-element');  // Supondo que há um elemento com id 'old-element'
document.body.removeChild(elementToRemove);  // Remove esse elemento do corpo da página

// 5. Adicionando um evento a um elemento
// Podemos adicionar eventos (como clicks, mouseovers, etc.) aos elementos HTML no DOM.
let button = document.getElementById('click-button');  // Acessa um botão com id 'click-button'
button.addEventListener('click', () => {
  alert('O botão foi clicado!');
});  // Exibe um alerta quando o botão é clicado

// O DOM nos permite interagir com a página de forma dinâmica:
// - Acessar elementos (como através de `getElementById`, `getElementsByClassName`, `querySelector` etc.)
// - Modificar o conteúdo e estilo de elementos
// - Criar, adicionar ou remover elementos da página
// - Adicionar eventos de interação (como cliques, teclas pressionadas, etc.)

// O DOM é uma ferramenta essencial para criar páginas web dinâmicas, interativas e responsivas.
