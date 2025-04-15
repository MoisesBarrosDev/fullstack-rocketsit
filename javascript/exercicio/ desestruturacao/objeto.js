/* 
Exercício 01
Crie um objeto chamado livro com as propriedades titulo, autor e ano.
Use desestruturação para acessar essas propriedades e exibi-las no console.
 */

const livro = {
  title: '1984',
  author: 'George Orwell',
  year: 1949
}

const { title, author, year } = livro

console.log(`O nome do livro é : ${title}`)
console.log(`O autor desse livro se chama : ${author} `)
console.log(`Esse livro foi lançado em ${year}`)


/* 
Exercício 02
Crie um objeto chamado produto com as propriedades nome, preco, quantidade.
Use desestruturação para acessar apenas nome e preco.
*/

const produto = {
  name: 'Rice',
  price: 20.50,
  amount: 10
}

const { name, price } = produto

console.log(`Em nossos estoques so temos o produto ${name}, o preço dele é de ${price} R$`)

/* 
Exercício 03
Crie um objeto usuario com as propriedades nome e idade.
Use spread para copiar o objeto e adicionar uma nova propriedade cidade, e depois mostre o objeto final.
*/

const user = {
  name: 'Thiago',
  age: 30
}

const copy = { ...user, city: 'Rio de Janeiro' }
console.log(copy)

/* 
Exercício 04
Crie dois objetos: endereco com as propriedades rua e bairro, e detalhes com a propriedade cep.
Use spread para criar um novo objeto que combine esses dois objetos e mostre no console.
*/

const informationUser = {
  road: 'Rua Bela Vista',
  neighborhood: 'Barra da Tijuca'
}

const addInformationUser = { ...informationUser, ...{ cep: '31205-470' } }
console.log(addInformationUser)


/* 
Exercício 05
Crie um objeto aluno com as propriedades nome, idade, curso e nota.
Use rest para pegar todas as propriedades, exceto nome, e mostre no console.
*/

const aluno = {
  nome: 'Francisco',
  idade: 18,
  curso: 'Engenharia',
  nota: 10
};

const { nome, ...outrasPropriedades } = aluno;

console.log(outrasPropriedades);

