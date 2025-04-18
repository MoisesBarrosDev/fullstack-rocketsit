// Adicionando métodos nas classes

// Aqui estamos criando uma classe chamada 'User'.
// Essa classe será usada como um molde para criar vários objetos do tipo "usuário".
class User {

  // O método constructor é chamado automaticamente toda vez que criamos um novo objeto com "new User()".
  // Ele serve para inicializar (definir) as propriedades desse objeto.
  constructor(name, email) {
    // 'this.name' cria uma propriedade chamada "name" no objeto que está sendo criado,
    // e atribui a ela o valor passado no parâmetro 'name'
    this.name = name;

    // Da mesma forma, 'this.email' cria a propriedade "email" e atribui o valor recebido no parâmetro
    this.email = email;
  }

  // Aqui criamos um MÉTODO da classe chamado 'sendEmail'.
  // Métodos são funções associadas aos objetos criados pela classe.
  // Esse método pode ser chamado em qualquer objeto criado com a classe User.
  sendEmail() {
    // Dentro do método, usamos 'this.name' e 'this.email' para acessar os dados do objeto atual
    // (ou seja, o objeto que chamou esse método).
    console.log(`
    Email enviado para ${this.name},
    no endereço eletrônico ${this.email}`);
  }
}


// Agora estamos criando um novo objeto do tipo User usando a palavra-chave 'new'.
// O 'new' faz o seguinte:
// 1. Cria um novo objeto vazio
// 2. Chama o constructor da classe User e passa os valores 'Moisés' e 'moisessilva3@hotmail.com'
// 3. O constructor define as propriedades name e email dentro do objeto
// 4. O objeto é retornado e armazenado na variável 'user'
const user = new User('Moisés', 'moisessilva3@hotmail.com');


// Aqui estamos chamando o método 'sendEmail' do objeto 'user'.
// Isso executa o console.log que está dentro do método e imprime a mensagem com os dados do usuário.
user.sendEmail();

/* Saída no console:
  Email enviado para Moisés,
  no endereço eletrônico moisessilva3@hotmail.com
*/
