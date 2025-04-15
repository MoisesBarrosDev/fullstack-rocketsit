// Usando querySelector para selecionar um único elemento

// Seleciona o primeiro <p> encontrado na página
const paragraph = document.querySelector('p');

// Seleciona o primeiro elemento com a classe 'error'
const paragraphError = document.querySelector('.error');

// Seleciona o primeiro <div> com a classe 'error'
const errorDiv = document.querySelector('div.error');

// Seleciona o <h1> dentro do <body> (especificando o caminho exato)
const h1 = document.querySelector('body > h1');

// Exibe os elementos selecionados no console
console.log(paragraph, paragraphError, errorDiv, h1);

// Usando querySelectorAll para selecionar múltiplos elementos

// Seleciona todos os elementos <p> da página
const paragraphs = document.querySelectorAll('p');

// Para cada <p> encontrado, executa a função e exibe cada um no console
paragraphs.forEach((paragraph) => {
  console.log(paragraph);
});

// Seleciona todos os elementos com a classe 'error'
const erros = document.querySelectorAll('.error');

// Exibe todos os elementos com a classe 'error' no console
console.log(erros);
