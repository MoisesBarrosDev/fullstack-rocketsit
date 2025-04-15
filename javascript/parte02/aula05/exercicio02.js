/*
Exercício - 01

- Declare uma constante que recebe o seu nome;
- Ela deve ter um escopo global.
*/

const user = 'Moisés'

for (let i = 0; i < 5; i++) {
  console.log(`dentro do bloco de código : ${user}`)
}

console.log(`fora do bloco de código : ${user}`)


/*
Exercício - 02

- Funções são blocos de código;
- Crie uma função que ao ser invocada , exibe sua idade no console;
- Dentro da função, declare uma let que armazena sua idade;
- Exiba sua idade no console, através da invocação da função;
- Do lado de fora da função exiba no console o valor da let que foi declarada dentro da função;
- Um erro com a mensagem "Uncaught ReferenceError : SUA_VARIÁVEL is not defined" será exibido no console;
- Você sabe por que isso aconteceu?
*/

const userIdade = function () {
  let age = 40
  console.log(age)

}

userIdade()
// Aqui vai gerar o erro 'ReferenceError' porque 'age' está declarada dentro da função e não é acessível fora dela
// console.log(age);  // Aqui vai dar erro, pois 'age' não é visível fora do escopo da função

/*
Exercício - 03

- Crie um objeto "car" com as seguintes propiedades e métodos:
- name, que recebe o nome do carro;
- brand, que recebe a marca do carro;
- colors, que recebe 3 cores para o carro;
- isRunning, que recebe um boolean indicando que o carro não está em movimento;
  Inicialmente, deve receber um boolean indicando que o carro não está em movimento;
- run, que é um método que faz o carro andar e retorna a mensagem "O NOME_DO_ CARRO está em movimento";
- stop, que é um método que faz o carro parar e retorna a mensagem "O NOME_DO_ CARRO está parado";
- getColorMessage, que é um método que retorna a mensagem "O NOME_DO_ CARRO está disponível nas cores COR_01,COR_02 e COR_3".
*/

const car = {
  name: 'Fiat-Pulse',
  brand: 'Fiat',
  colors: ['Vermelho', 'Azul', 'Rosa'],
  isRunning: false,
  run() {
    this.isRunning = true
    return `O ${this.name} está em movimento.`
  },
  stop() {
    this.isRunning = false
    return `O ${this.name} está parado.`
  },
  getColorMessage() {
    /* 
o const lastItem pega o ultimo item do array e deixa armazenado na variavel  lastItem.  
depois na const colors, estou chamando o array com as cores, colocando o método slice, que começa no index 0 até o penultimo item,
que nesse caso é o index 1, pois so tem 3 strings dentro dele, depois coloco o método join, que vai separar esse array em uma string,
separada por virgula e espaço, e por ultimo eu concateno  a letra "e" e o valor que eu tinha colocado na variavel lastItem, 
assim independentemente ele vai sempre pegar o ultimo item. 
    */
    const lastItem = this.colors[this.colors.length - 1]
    const colors = this.colors.slice(0, this.colors.length - 1).join(', ') + ` e ${lastItem}`;
    return `O ${this.name} está disponível nas cores ${colors}.`
  }
}

/*
Exercício - 04

- Faça  o carro andar e exiba no console se ele realmente está em movimento.
*/

console.log(car.run())
console.log(car.isRunning === true)

/*
Exercício - 05

- Faça o carro parar e exiba no console se ele realmente está parado.
*/
console.log(car.stop())
console.log(car.isRunning === false)

/*
Exercício - 06

- Exiba, no console, a mensagem com as cores do carro.
*/

console.log(car.getColorMessage())

/*
Exercício - 07

- Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
- Utilize a notação de colchetes para passar acessar as propiedades do carro.
*/

console.log(`O carro é um ${car['brand']}, ${car['name']}`)