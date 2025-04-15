/*
Exercício 01

-No envio do form, faça com que a página não seja recarregada.
*/

const form = document.querySelector('form')
const paragraph = document.querySelector('p')


const clearInput = () => {
  input.value = ''
  input.focus()
}

const logMessage = message => {
  console.log(message)
  clearInput()
}


const preventDefault = event => {

  event.preventDefault()

  const input = event.target.input
  // console.log(input)

  const regex = /^[\s\S]{7,}$/
  const isMatch = regex.test(input.value)

  if (isMatch) {
    logMessage('O valor inserido no input é valido =)')
    clearInput()
    return
  }
   
  alert('Valor inválido')
  logMessage('Valor inválido =(')
}

form.addEventListener('submit', preventDefault)

/*
Exercício 02

- No envio do form obtenha, através do objeto event, o texto inserido no input e exiba-o no console.
*/

/*
Exercício 03

- Teste uma regex que dá match com a palavra "documentation" do parágrafo do index.html
- Exiba no console o boolean no qual este teste resulta
*/

const regex = /documentation/
const result = regex.test(paragraph.textContent)

console.log(result)

/*
Exercício 04

- Escreva uma regex que dê match com a palavra "B99" da string abaixo;
- A regex não deve conter (literalmente) os caracteres B99;
- Teste se o match aconteceu e exiba o resultado no console.
*/

const b99Message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta.'
const matchB99 = /[A-Z0-9]{3}/gm

const isAMatch = matchB99.test(b99Message)
console.log(isAMatch)

/*
Exercício 05

- Modifique (manualmente) o valor que a const word armazena para que o resultado do teste entre a regex e a string 
  exibido no console seja true.
*/

const word = 'NASA'
const nasaRegex = /^[A-Z]{4}$/
const nasaResult = nasaRegex.test(word)

console.log(nasaResult)

/*
Exercício 06

- No envio do form, se o valor inserido no input conter, no mínimo, 7 caracteres, que podem ser quaisquer caracteres, exiba no console
- a mensagem "O valor inserido no input é valido =)";
- Caso contrário, exiba "Valor inválido =(" no console.
*/

/*
Exercício 07

- Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 caracteres
  mas não contenha caracteres especiais. Apenas letras maiúsculas ou minúsculas e números serão permitidos.
*/