//  adicionando métodos
// funções criadas fora de um objeto são funções.
// funções criadas dentro de um objeto são métodos.
let user2 = {
  name: 'Thiago',
  age: 40,
  email: 'thiagosilva@gmail.com',
  city: 'Rio de Janeiro',
  blogPosts: ['Jogando futebol', 'O maior clube do mundo'],
  // aqui abaixo é um método, já que uma função dentro do objeto é chamado de método.
  login: function () {
    console.log('Usuário logado')
  },
  logout: function () {
    console.log('Usuário deslogado')
  }
}
// temos que chamar o objeto da mesma forma que um método.
user2.login()
user2.logout()