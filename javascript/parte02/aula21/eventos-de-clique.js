// 1. Selecionando o botão na página
const button = document.querySelector('button'); // Aqui pegamos o primeiro botão encontrado no HTML

// 2. Adicionando um evento de "click" ao botão
// O evento 'click' será disparado sempre que o botão for clicado
button.addEventListener('click', () => {
  // A função de callback será chamada quando o botão for clicado
  console.log('Clicou no botão!'); // Exibe uma mensagem no console quando o botão for clicado
});

// 3. Selecionando todos os itens de lista <li> na página
const lis = document.querySelectorAll('li'); // Aqui pegamos todos os elementos <li> na página

// 4. Iterando sobre todos os itens <li> encontrados
lis.forEach((li) => {
  // Para cada item da lista, adicionamos um evento de "click"
  li.addEventListener('click', event => {
    // O parâmetro 'event' contém informações sobre o evento disparado
    const clickedElement = event.target; // 'event.target' nos dá o elemento que foi realmente clicado

    // 5. Modificando o estilo do elemento clicado
    // Quando um <li> for clicado, adicionamos um "text-decoration: line-through" no estilo, riscando o texto
    clickedElement.style.textDecoration = 'line-through'; // Isso altera o estilo do item clicado, colocando uma linha no meio do texto
  });
});
