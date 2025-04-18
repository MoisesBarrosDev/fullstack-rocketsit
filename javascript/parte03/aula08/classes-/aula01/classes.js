// Criando uma classe com um método construtor
class Person {
  // O método constructor é executado automaticamente sempre que criamos um novo objeto da classe
  constructor(name) {
    // Aqui estamos apenas exibindo uma mensagem no console com o nome passado como argumento
    console.log("Olá", name);
  }
}

// Aqui estamos criando um novo objeto da classe Person
// O "new" faz 3 coisas:
// 1. Cria um novo objeto vazio
// 2. Chama o método constructor da classe, passando "Moises" como argumento
// 3. Retorna esse objeto criado (mesmo que aqui a gente não esteja usando ele depois)
const person = new Person("Moises"); // 👉 Vai exibir no console: "Olá Moises"
