// Seleciona o elemento <article> no HTML
const article = document.querySelector('article')

// Converte os filhos do artigo em um array e adiciona uma classe "article-element" em cada um deles
// Isso é feito para aplicar uma estilização ou identificar esses elementos dentro do <article>
Array.from(article.children).forEach((element) => {
  // Adiciona a classe 'article-element' a cada elemento filho do <article>
  element.classList.add('article-element')
})

// Seleciona o primeiro <h2> dentro do documento (nesse caso, dentro de <article>)
const title = document.querySelector('h2')

// O parentElement retorna o elemento pai de um determinado elemento.
// Nesse caso, primeiro ele pega o elemento <h2>, depois seu pai <article>, e depois o pai de <article> (que seria o <body> ou outro elemento mais externo).
console.log(title.parentElement.parentElement)  // Exibe o pai do <article>, que seria o <body> no caso

// O parentElement retorna o elemento pai imediato de um elemento. No caso, o pai do <h2> é o <article>.
console.log(title.parentElement)  // Exibe o <article>, que é o pai do <h2>

// nextElementSibling retorna o próximo irmão (elemento) do <h2> no DOM.
// No caso, será o próximo elemento do mesmo nível hierárquico do <h2>, que é o próximo <p> após o <h2>.
console.log(title.nextElementSibling)  // Exibe o próximo irmão do <h2>, que é o primeiro <p> após o <h2>

// previousElementSibling retorna o irmão anterior do <h2> no DOM.
// Nesse caso, como não há elementos antes do <h2> no mesmo nível (após o <article>), será null.
console.log(title.previousElementSibling)  // Exibe null, pois o <h2> é o primeiro elemento filho de <article>
