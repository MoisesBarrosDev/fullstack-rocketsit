// Criando um objeto literal chamado 'user' com várias propriedades e valores
let user = {
  // 'name' é a chave, e 'João' é o valor associado a essa chave
  name: 'João', // 'name' é o nome do usuário, e o valor associado é 'João'
  
  // 'age' é a chave, e 31 é o valor associado a essa chave
  age: 31, // 'age' representa a idade do usuário, e o valor inicial é 31
  
  // 'email' é a chave, e 'Joãoalmeida@gmail.com' é o valor associado a essa chave
  email: 'Joãoalmeida@gmail.com', // 'email' é o e-mail do usuário, e o valor inicial é 'Joãoalmeida@gmail.com'
  
  // 'city' é a chave, e 'São Paulo' é o valor associado a essa chave
  city: 'São Paulo', // 'city' é a cidade onde o usuário mora, e o valor associado é 'São Paulo'
  
  // 'blogPosts' é a chave, e o valor associado é uma lista (array) com os posts do blog do usuário
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'] 
  // 'blogPosts' é um array contendo os títulos dos posts do blog do usuário, que são 'Empadão de frango' e '4 receitas de purê de batata'
}

// Acessando a propriedade 'name' diretamente com ponto (.)
console.log(user.name) // Aqui, 'user.name' acessa o valor da chave 'name' do objeto 'user', que é 'João'

// Alterando o valor da propriedade 'age' para 50
user.age = 50 // Estamos mudando o valor de 'age' de 31 para 50
console.log(user.age) // Agora a propriedade 'age' tem o valor 50, então vai imprimir '50'

// Acessando a propriedade 'age' usando colchetes [] (de forma alternativa ao ponto)
console.log(user['age']) // 'user['age']' também acessa o valor da chave 'age' do objeto user (que agora é 50)

// Mudando o nome do usuário de 'João' para 'Thiago' utilizando colchetes []
user['name'] = 'Thiago' // Alteramos o valor da chave 'name' para 'Thiago'
console.log(user['name']) // Agora o valor da chave 'name' é 'Thiago', então vai imprimir 'Thiago'

// Usando uma variável para acessar uma chave do objeto de forma dinâmica
const key = 'email' // Criamos uma variável 'key' que armazena o nome da chave 'email'
console.log(user[key]) // Usamos 'user[key]' para acessar o valor da chave armazenada na variável 'key', que é 'email'. Isso retorna 'Joãoalmeida@gmail.com'

// Exibindo o tipo de dado da variável 'user' (no caso, um objeto)
console.log(typeof user) // O tipo de 'user' é 'object', então isso vai imprimir 'object'

// Explicação sobre a sintaxe do objeto
// Quando criamos um objeto em JavaScript, usamos **chaves** {} para definir o objeto.
// Dentro dessas chaves, temos um conjunto de **propriedades**, cada uma com uma **chave** (nome) e um **valor**.
// A sintaxe para cada propriedade dentro do objeto é a seguinte:
// **chave: valor** onde 'chave' é o nome da propriedade e 'valor' é o dado que essa propriedade vai armazenar.

// A chave e o valor são separados por dois pontos (`:`).
// Por exemplo:
//   name: 'João' significa que a chave é 'name' e o valor associado a essa chave é 'João'.
// A vírgula (`,`) é usada para separar cada **propriedade** dentro do objeto, mas a **última propriedade** não precisa de vírgula após ela.

// A sintaxe de acesso a propriedades pode ser feita de duas formas:
// 1. **Acesso com ponto (`.`)**: Usamos o ponto para acessar uma propriedade diretamente. Exemplo: `user.name` acessa o valor da propriedade 'name'.
// 2. **Acesso com colchetes (`[]`)**: Usamos colchetes quando precisamos de mais flexibilidade, como usar uma variável ou acessar propriedades com nomes mais complexos. Exemplo: `user['name']` acessa a propriedade 'name' da mesma forma que `user.name`.

