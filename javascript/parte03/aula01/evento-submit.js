const form = document.querySelector('.signup-form')
// const UsernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  // UMA DAS FORMAS DE SE OBTER O QUE TEM DENTRO DO INPUT, QUANDO CLICA NO BOTÃO ENVIAR.
  // console.log(UsernameInput.value); // Aqui, 'UsernameInput' é o input selecionado com id 'username'.

  // OUTRA FORMA DE SE OBTER O QUE TEM DENTRO DO INPUT, QUANDO CLICA NO BOTÃO ENVIAR.
  // console.log(form.username.value); // Aqui, você acessa o valor do input 'username' diretamente no formulário.

  // ESSA É UMA DAS FORMAS MAIS COMUNS E ELEGANTES, POIS É CONSTANTEMENTE USADA NO REACT.JS  
  console.log(event.target.username.value); // Aqui, 'event.target' é o formulário, e 'username' é o nome do input.

})


// Definindo uma variável com o valor da string que vamos testar
const username = 'moises'  /*'@88moises77!'*/

// Definindo a expressão regular (regex) que queremos usar
// Essa regex verifica se a string tem pelo menos 6 caracteres e se todos são letras minúsculas (de a a z)
const pattern = /^[a-z]{6,}$/

// O código abaixo foi comentado, mas é uma forma de verificar se a string "username"
// corresponde ao padrão definido pela regex. O método `test` retorna true ou false.
 // const isAMatch = pattern.test(username)

 // Se a regex corresponder, o código imprimiria 'o teste da regex passou =)'
// if(isAMatch){
//   console.log('o teste da regex passou =)')
// } else {
//   console.log('o teste da regex  não passou =(')
// }

// Usando o método `search` para procurar o padrão na string "username"
// O método `search` retorna o índice da primeira ocorrência que corresponde à regex, ou -1 se não encontrar nada
const result = username.search(pattern)

// Exibindo o resultado da busca na string (índice ou -1)
console.log(result)


