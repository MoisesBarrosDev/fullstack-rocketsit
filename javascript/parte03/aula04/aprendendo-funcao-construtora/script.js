// Aqui estamos criando uma função construtora
function CreateProduct(name) {
  // Nesta linha abaixo, estamos criando um novo objeto (não vazio), 
  // mas é o objeto que será "povoado" com as propriedades.
  this.name = name;  // A propriedade 'name' recebe o parâmetro 'name' passado para a função

  // Aqui estamos adicionando a propriedade 'details', 
  // que é uma função anônima. Dentro dessa função, usamos 'this' 
  // para acessar a propriedade 'name' e exibir no console.
  this.details = function () {
    console.log(`Nome do produto é: ${this.name}`);
  };
}

// O que o 'new' faz? 
// O operador 'new' cria um novo objeto vazio e o vincula ao 'this' dentro da função construtora.
// Ou seja, 'new' cria um objeto novo, executa o código da função construtora e 
// retorna o objeto criado com as propriedades que a função construtora define.

// Aqui, chamamos a função 'CreateProduct' com 'new'.
// O 'new' cria um objeto vazio, executa a função e retorna esse objeto preenchido com as propriedades e métodos.
const product1 = new CreateProduct('Arroz');

// Chamamos o método 'details' que imprime o nome do produto no console.
product1.details();  // Exibe: Nome do produto é: Arroz
console.log(product1.name);  // Exibe: Arroz


// EXEMPLOS DE FUNÇÕES CONSTRUTORAS DISPONÍVEIS NO PRÓPRIO JAVASCRIPT:

// Aqui estamos usando a função construtora String do próprio JS.
// Ela cria um objeto do tipo String (e não uma string primitiva).
let myName = new String('Thiago');
console.log(typeof myName); // 👉 "object" (porque é um objeto String, não uma string primitiva)

// Aqui usamos uma string primitiva e aplicamos o método replace.
// Esse método é herdado do protótipo da função construtora String.
// Ele substitui o ponto "." por uma string vazia "", ou seja, remove o ponto.
let price = "40.6".replace(".", "");
console.log(price); // 👉 "406" (como string)

// Aqui usamos a função construtora Date do JavaScript para criar um objeto de data.
// Mesmo que a gente passe uma string como argumento, ela vira um objeto Date.
let date = new Date("2024-1-1");
console.log(typeof date); // 👉 "object" (porque é um objeto Date)
// aula 352