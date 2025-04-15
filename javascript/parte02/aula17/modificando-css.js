// Estamos selecionando o primeiro elemento <h1> da página usando querySelector.
// A variável 'title' vai armazenar esse elemento para que possamos manipulá-lo depois.
const title = document.querySelector('h1')

// Usando o console.log() para verificar o objeto 'style' associado ao elemento <h1>.
// O 'style' é um objeto que contém todas as propriedades de estilo CSS que foram definidas diretamente (inline) no elemento.
console.log(title.style)

// Verificando a propriedade 'color' do elemento <h1>.
// Isso nos mostra o valor atual da cor que está atribuída ao <h1>, que originalmente é azul.
// Importante: Como estamos lidando com estilos **inline**, isso só retorna as propriedades diretamente definidas no HTML ou via JavaScript.
console.log(title.style.color)

// Definindo uma nova margem (margin) para o elemento <h1>.
// Como não havia um valor definido anteriormente, podemos adicionar essa propriedade diretamente.
// O valor '50px' é atribuído à margem do <h1>, criando um espaço de 50 pixels em torno do elemento.
title.style.margin = '50px'

// Alterando a cor do texto do <h1> de azul para verde.
// O estilo de cor que originalmente estava definido como 'blue' é substituído por 'green'.
// A propriedade 'color' é diretamente manipulada dentro do objeto 'style' do elemento.
title.style.color = 'green'

// Definindo o tamanho da fonte do <h1> para '3rem'.
// Aqui, estamos modificando o estilo inline da fonte para um valor maior. 'rem' é uma unidade relativa que depende do tamanho da fonte raiz (geralmente 16px).
title.style.fontSize = '3rem'

// Removendo a margem que foi definida anteriormente.
// Ao atribuir uma string vazia ('') ao estilo de margem, o valor da propriedade 'margin' é apagado, e a margem volta ao valor padrão (sem espaço).
title.style.margin = ''

