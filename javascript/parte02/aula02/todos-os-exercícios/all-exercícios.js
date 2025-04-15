// Exemplo de como o array de livros pode ser criado
const livros = [
  { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', anoDePublicacao: 1937 },
  { titulo: '1984', autor: 'George Orwell', anoDePublicacao: 1949 },
  { titulo: 'A Game of Thrones', autor: 'George R.R. Martin', anoDePublicacao: 1996 },
];

// Use o map para extrair somente os títulos
const extracaoTitulos = livros.map((livro) => livro.titulo)
console.log(extracaoTitulos)

// Exemplo de array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use o filter para retornar apenas os números pares
const numberPares = numeros.filter((numero) => numero % 2 === 0)
console.log(numberPares)

// Exemplo de array de números
const numros = [1, 2, 3, 4, 5];

// Use o reduce para somar todos os números
const totalNumerosArray = numros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log(totalNumerosArray)

// Exemplo de array de pessoas
const pessoas = [
  { nome: 'Lucas', idade: 25 },
  { nome: 'Ana', idade: 30 },
  { nome: 'Carlos', idade: 22 }
];

// Use o map para criar um novo array com as mensagens
const novoArrayMensagem = pessoas.map((pessoa) => `${pessoa.nome} tem ${pessoa.idade}.`)
console.log(novoArrayMensagem)

// Exemplo de array de produtos
const produtos = [
  { nome: 'Smartphone', preco: 1500, categoria: 'Eletrônicos' },
  { nome: 'Camisa', preco: 100, categoria: 'Roupas' },
  { nome: 'Notebook', preco: 3500, categoria: 'Eletrônicos' },
  { nome: 'Tênis', preco: 200, categoria: 'Roupas' },
];

// Use o filter para retornar apenas os produtos da categoria "Eletrônicos"
const produtosEletronicos = produtos.filter((produto) => produto.categoria !== 'Roupas')
console.log(produtosEletronicos)

// Exemplo de array de compras
const compras = [
  { item: 'Arroz', preco: 20 },
  { item: 'Feijão', preco: 15 },
  { item: 'Macarrão', preco: 10 },
  { item: 'Carne', preco: 50 },
];

// Use o reduce para somar o preço total
const precoTotalDasCompras = compras.reduce((acumulador, numero) => acumulador + numero.preco, 0)
console.log(precoTotalDasCompras)

// Função multiplicarPorDois
const multiplicarPorDois = (num) => num * 2;

// Array de números
const num = [1, 2, 3, 4, 5];

// Use map para multiplicar todos os números por 2
const multiplicacaoAllNumbers = num.map((numero) => numero * 2)
console.log(multiplicacaoAllNumbers)

// Função obterIdade
const obterIdade = (pessoa) => {
  const hoje = new Date();
  const nascimento = new Date(pessoa.dataNascimento);
  const idade = hoje.getFullYear() - nascimento.getFullYear();
  return idade;
};

// Exemplo de array de pessoas
const pesoas = [
  { nome: 'Lucas', dataNascimento: '1995-04-15' },
  { nome: 'Ana', dataNascimento: '1990-11-20' },
  { nome: 'Carlos', dataNascimento: '2000-03-25' }
];


// Use map para calcular a idade de cada pessoa
const dataNascimento = pesoas.map((pessoa) => {
  return { nome: pessoa.nome, idade: obterIdade(pessoa) + ' anos.' }
})
console.log(dataNascimento)

// Exemplo de array de vendas
const vendas = [
  { produto: 'Smartphone', quantidade: 2, precoUnitario: 1500 },
  { produto: 'Notebook', quantidade: 1, precoUnitario: 3500 },
  { produto: 'Cadeira', quantidade: 3, precoUnitario: 200 },
];

// Use reduce para calcular o total das vendas
const valorTotalDasVendas = vendas.reduce((acumulador, venda) => acumulador +(venda.quantidade * venda.precoUnitario),0)
console.log(valorTotalDasVendas)