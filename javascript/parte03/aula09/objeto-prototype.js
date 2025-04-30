// Criando um objeto prototype

// Criando um objeto comum com duas propriedades: city e country.
const adress = {
  city: 'São Paulo',
  country: 'Brazil',
}

// Aqui ele exibe o objeto 'adress' normalmente.
console.log(adress)

// Criando um array de strings com nomes de usuários.
const users = ['Rodrigo', 'João', 'Maria']

// Exibe o array no console.
console.log(users)

// Criando uma string comum.
const userName = 'Rodrigo Gonçalves'

// Aqui estamos acessando o "prototype" do objeto `userName`.
// Em JavaScript, até strings (que parecem primitivas) são tratadas como objetos temporariamente,
// permitindo que usemos métodos como .toUpperCase(), .includes(), etc.

// O `__proto__` mostra o objeto de onde `userName` herda esses métodos.
// Esse objeto é `String.prototype`.
console.log(userName.__proto__)
