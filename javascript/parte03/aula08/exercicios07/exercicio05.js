//  Exercício 5: Sistema de Usuários

//  Descrição:
// Crie um pequeno sistema de usuários com uma superclasse Usuario e duas subclasses especializadas: Admin e Visitante.

//  Regras:
// Superclasse: Usuario
// Atributos:

// nome

// email

// Método:

// exibirInfo() → imprime:
// "Usuário: [nome], Email: [email]"

// Classe base (superclasse) chamada "Usuarios".
// Representa um usuário genérico do sistema.
class Usuarios {
  // O constructor recebe um objeto com propriedades nome e email.
  constructor({ nome, email }) {
    this.nome = nome            // Define a propriedade "nome" do objeto.
    this.email = email          // Define a propriedade "email" do objeto.
  }

  // Método que exibe informações básicas do usuário.
  exibirInfo() {
    console.log(`Usuário: ${this.nome}, Email: ${this.email}`)
  }
}


// Subclasse "Admin" que herda de "Usuarios".
// Representa um tipo de usuário com permissões administrativas.
class Admin extends Usuarios {
  // O constructor recebe nome e email, e usa super() para inicializar a superclasse.
  constructor({ nome, email }) {
    super({ nome, email }) // Chama o constructor da classe pai (Usuarios), passando os dados recebidos.

    // Define um array fixo com permissões específicas para administradores.
    this.permissoes = ['Adicionar', 'Excluir', 'Cadastrar.']
  }

  // Sobrescreve o método exibirInfo da superclasse.
  // Aqui, além do nome e email, mostra as permissões específicas do admin.
  exibirInfo() {
    console.log(
      `O Usuário ${this.nome} no email: ${this.email}, tem as seguintes permissões: ${this.permissoes.join(', ')}`
    )
  }
}


// Subclasse "Visitante" que também herda de "Usuarios".
// Representa um usuário com acesso limitado ao sistema.
class Visitante extends Usuarios {
  // O constructor também chama o super() para inicializar a classe base.
  constructor({ nome, email }) {
    super({ nome, email })

    // Define permissões básicas e limitadas para um visitante.
    this.permissoes = ['Adicionar.'] // Apenas uma permissão de exemplo.
  }

  // Sobrescreve exibirInfo para incluir as permissões do visitante.
  exibirInfo() {
    console.log(
      `O Usuário ${this.nome} no email: ${this.email}, tem as seguintes permissões: ${this.permissoes.join(', ')}`
    )
  }
}


// Criação de uma instância da classe Admin.
// Passamos nome e email. As permissões são atribuídas automaticamente no constructor.
const admin = new Admin({
  nome: 'Francisco',
  email: 'Franciscosilva99@gmail.com'
})

// Criação de uma instância da classe Visitante.
const visitande = new Visitante({
  nome: 'Lucas',
  email: 'Lucasmenezes13@gmail.com'
})

// Chamada do método exibirInfo para ambos os objetos.
// Vai mostrar as informações completas com base na classe de cada um.
admin.exibirInfo()
visitande.exibirInfo()

