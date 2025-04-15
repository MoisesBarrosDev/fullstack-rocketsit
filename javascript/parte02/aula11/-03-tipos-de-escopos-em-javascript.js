// 1. **Escopo de Função**
// Variáveis declaradas dentro de uma função são acessíveis apenas dentro dessa função

function myFunc() {
  let cat = 'zeca'  // Variável com escopo de função
  let age = 3       // Variável com escopo de função
  var color = 'cinza'  // Variável com escopo de função (mas com 'var', o escopo é de função, não de bloco)
  console.log(age)  // Pode acessar age aqui dentro da função
}

function myFunc2() {
  let age = 5      // Variável com escopo de função
  var color = 'branco'  // Também com escopo de função
  console.log(age)  // Pode acessar age aqui dentro da função
}

myFunc()
myFunc2()


// 2. **Escopo de Bloco**
// Variáveis declaradas com 'let' ou 'const' dentro de um bloco (if, for, etc.) 
// são acessíveis apenas dentro desse bloco

if (true) {
  let dragon = 'Balerion'  // Variável com escopo de bloco
  console.log(dragon)       // Pode acessar dragon aqui dentro do bloco
}

// console.log(dragon)  // Erro! 'dragon' não está definido fora do bloco


// 3. **Escopo Léxico**
// Funções podem acessar variáveis do seu contexto externo (escopo onde foram definidas)

const external = () => {
  const book = 'Sapiens'  // Variável do escopo da função external
  const internal = () => {
    // const book = 'mosquito'  // Comentado para destacar que 'book' é acessado da função externa
    const extraInternal = () => {
      // const book = 'frango'  // Comentado para destacar que 'book' é acessado da função externa
      console.log(book.toUpperCase())  // A função acessa 'book' da função externa
    }
    extraInternal()
  }
  internal()
}
external()