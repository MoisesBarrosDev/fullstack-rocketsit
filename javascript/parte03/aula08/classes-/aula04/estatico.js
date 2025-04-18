// O que é um método estático?

// Aqui estamos criando uma classe chamada 'User'
class User {

  // Este é um MÉTODO ESTÁTICO.
  // A palavra-chave 'static' faz com que esse método pertença diretamente à classe 'User',
  // e não aos objetos (instâncias) criados com essa classe.
  // Ou seja, você chama esse método usando: User.showMessage()
  static showMessage(message) {
    console.log(message);
  }
}


// ❌ Isso aqui NÃO funciona:
// const user = new User()
// user.showMessage()  // ERRO: user.showMessage is not a function
//
// Isso dá erro porque showMessage() é um método ESTÁTICO —
// ele NÃO existe dentro dos objetos criados pela classe,
// ele existe apenas na **própria classe User**.


// ✅ Forma correta de usar um método estático:
User.showMessage("Essa é uma mensagem!");
// Isso funciona porque estamos chamando o método diretamente da CLASSE, e não de um objeto.
// Saída no console: Essa é uma mensagem!
