// Criando propriedades dentro de uma classe
class Product {
  // O método constructor é chamado automaticamente toda vez que um novo objeto da classe é criado
  constructor(name) {
    // Aqui estamos definindo uma propriedade chamada "name" no objeto que está sendo criado.
    // "this" se refere ao próprio objeto que está sendo construído.
    // Então: "this.name = name" significa:
    // → a propriedade "name" do objeto vai receber o valor passado como argumento para o constructor.
    this.name = name;
  }
}

// Aqui estamos criando uma nova instância (objeto) da classe Product.
// Usamos o "new" para:
// 1. Criar um novo objeto na memória.
// 2. Chamar o constructor da classe Product com o argumento "Teclado".
// 3. Atribuir a propriedade name com o valor "Teclado".
// 4. Retornar o objeto criado e armazenar ele na constante "product1".
const product1 = new Product("Teclado");

// Por que o "this" é importante dentro do constructor?
// Porque ele garante que a propriedade "name" seja criada dentro de cada objeto novo,
// e assim possamos acessar depois usando: product1.name
console.log(product1.name); // 👉 "Teclado"


// Criando outro objeto com base na mesma classe, mas com outro valor de nome
const product2 = new Product("Mouse");

// Aqui estamos exibindo o objeto completo no console, e ele vai ter a propriedade "name" com o valor "Mouse"
console.log(product2); // 👉 Product { name: 'Mouse' }
