// forEach e callbacks

// Definindo a função `myFunc`, que aceita um parâmetro `callback`.
// A função `myFunc` é uma função de ordem superior, pois ela recebe uma função como argumento.
// Funções de ordem superior são um conceito fundamental em JavaScript, permitindo que funções sejam passadas como parâmetros.
const myFunc = callback => {

  // Dentro de `myFunc`, uma constante chamada `value` é declarada e inicializada com o valor 100.
  // `value` é uma variável local dentro de `myFunc`, ou seja, seu escopo está restrito a essa função.
  // A variável `value` não pode ser acessada fora da função `myFunc`.
  const value = 100;

  // Aqui, a função `callback` é chamada e o valor da variável `value` (que é 100) é passado como argumento para a função `callback`.
  // Em outras palavras, `callback(value)` invoca a função `callback`, enviando 100 como entrada para ela.
  // Isso exemplifica o conceito de passagem de parâmetros, onde o valor de `value` é compartilhado com a função callback.
  callback(value);
}

// A função `myFunc` é chamada aqui com um argumento que é uma função anônima (função sem nome).
// A função anônima tem um parâmetro chamado `number`, que receberá o valor passado por `myFunc` (neste caso, 100).
// Dentro dessa função anônima, `number` será impresso no console, utilizando o `console.log(number)`.
myFunc(number => {
  // O valor de `number` será 100, porque foi isso que foi passado para o callback.
  // A função `console.log(number)` então imprime o valor de `number` no console.
  // O valor 100 será exibido no console, já que `value` foi passado como argumento para o `callback`.
  console.log(number);
});

// Detalhes adicionais sobre o código:

// 1. **Funções de Ordem Superior:**
// - `myFunc` é uma função de ordem superior porque ela recebe uma função (callback) como argumento.
// - Esse conceito é amplamente utilizado em JavaScript, especialmente em programação assíncrona ou ao trabalhar com eventos.


// 2. **Escopo de Variáveis:**
// - A variável `value` é definida dentro de `myFunc`, então o escopo de `value` é restrito à função `myFunc`.
// - `value` não é acessível fora de `myFunc`. O valor 100 é passado para o parâmetro `number` da função `callback`.
// - O parâmetro `number` é uma variável local à função anônima, ou seja, ela só existe dentro da função que é passada para `myFunc`.

//
// 3. **Arrow Functions (Funções de Flecha):**
// - A função anônima passada como argumento para `myFunc` usa a sintaxe de arrow function, que é uma forma concisa de escrever funções em JavaScript.
// - A sintaxe é `number => { ... }`, onde `number` é o parâmetro da função, e `{ ... }` define o corpo da função.
// - Uma vantagem das arrow functions é que elas não têm o seu próprio `this`, o que pode ser útil em determinadas situações, mas neste caso não há impacto direto.

//
// 4. **Execução Assíncrona (não presente diretamente, mas relevante):**
// - Embora o código não tenha comportamento assíncrono, callbacks são muito utilizados em JavaScript para manipulação de operações assíncronas, como requisições a APIs, timers, e eventos.
// - Em um cenário assíncrono, o callback seria chamado assim que a operação fosse concluída, e não imediatamente.

//
// 5. **Funções Anônimas:**
// - A função que você passa como argumento para `myFunc` é uma função anônima, ou seja, não tem um nome definido.
// - Funções anônimas são frequentemente usadas quando você precisa de uma função temporária para realizar uma tarefa simples, como imprimir algo no console.

//
// 6. **Funções como Primeiras Classes em JavaScript:**
// - Em JavaScript, funções são **primeiras classes** (first-class functions), o que significa que podem ser passadas como parâmetros, atribuídas a variáveis e até retornadas por outras funções.
// - Isso é o que torna possível passar a função `callback` como argumento para `myFunc`, e chamar o `callback` dentro de `myFunc`.

//
// 7. **Resultado Final:**
// - Quando o código é executado, a função `myFunc` chama o `callback`, passando o valor 100.
// - O `callback` então executa `console.log(number)`, e o valor 100 é impresso no console.




// Definimos um array chamado `socialNetworks` que contém uma lista de redes sociais.
// O array armazena 4 strings: 'youtube', 'twitter', 'instagram' e 'facebook'.
// Arrays são estruturas de dados que podem armazenar múltiplos valores em uma única variável.
// Os valores dentro de um array são chamados de "itens" ou "elementos".
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

// Aqui definimos uma função chamada `logArrayInfo`, que recebe três parâmetros:
// 1. `index` - Será o índice do item no array (onde o item está localizado no array).
// 2. `midia` - Será o próprio valor do item no array, ou seja, o nome da rede social (exemplo: 'youtube', 'twitter', etc.).
// 3. `array` - O próprio array que está sendo iterado, neste caso, `socialNetworks`.
// A função `logArrayInfo` simplesmente imprime esses três valores no console.
const logArrayInfo = (index, midia, array) => {
  // Imprimimos no console os valores de `index`, `midia` e `array`:
  // - `index` representa a posição do item no array (um número inteiro),
  // - `midia` é o valor do item, ou seja, o nome da rede social (uma string),
  // - `array` é o array completo `socialNetworks`.
  console.log(index, midia, array);
}

// O método `forEach` é chamado no array `socialNetworks`.
// O `forEach` percorre todos os itens do array e executa uma função para cada item.
// O `forEach` recebe uma função como argumento, que será chamada para cada item do array.
// No caso, estamos passando a função `logArrayInfo` como argumento para o `forEach`.
// Quando o `forEach` executa a função para cada item, ele passa três parâmetros:
// 1. O índice do item no array (`index`),
// 2. O valor do item no array (`midia`),
// 3. O próprio array (`array`).
socialNetworks.forEach(logArrayInfo);



function oi(test) {
  console.log("hello world")
  test()
}

function bye() {
  console.log("TCHAU")

}

oi(bye)


// utilizando callbacks

const ul = document.querySelector('[data-js="ul"]')

const socialNetworksS = ['youtube', 'twitter', 'instagram', 'facebook']

let htmlTemplate = ''

socialNetworksS.forEach(socialNetwork => {
  htmlTemplate += `<li style="color:deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = htmlTemplate