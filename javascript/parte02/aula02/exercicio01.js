/*
Exercício-01

 - Crie um objeto "cat" que possui as seguintes propiedades:
 - name, que recebe o nome do gato;
 - age , qque recebe a idade;
 - color, que recebe a cor;
 - bestFriends, que recebe um array, com os melhores amigos do gato;
 - sound, que é um método que retorna o miado do gato.
- Exiba o objeto no console.
*/

let cat = {
  name: 'Thomas',
  age: 11,
  color: 'brown',
  bestFriends: ['Lennon', 'Paloma', 'Pandora', 'Imperador'],
  sound: function () {
    return 'miauu'
  }
}
console.log(cat)

  /*
  Exercício-02
  
   - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações corretas.
   
   Até aqui, o objeto "cat" possui as seguintes propiedades e valores; "name", que recebeu "X" , "age" , que recebeu "X", color que recebeu "X"; bestFriends que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
  */
  ;
console.log(`Até aqui, o objeto "cat" possui as seguintes propiedades e valores; "name", que recebeu "${cat.name}" , "age" , que recebeu "${cat.age}", "color" que recebeu "${cat.color}"; "bestFriends" que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}". `)

/*
Exercício-03

 - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
 
*/
cat.age += 2
console.log(cat.age)

/*
Exercício-04

 - crie uma função que adiciona um amigo(a) no array de amigos do gato;
 - Exiba o array de amigos no console para verificar  se o novo amigo(a) foi adicionado.
 
*/


const addFriends = (friend, object) => {
  object.bestFriends.push(friend)
}

addFriends('thiago', cat)
console.log(cat.bestFriends)

/*
Exercício-05

 - Crie uma função que adiciona um mais uma cor do gato;
 - Utilize a sintaxe de colchetes para fazer isso;
 - Exiba a nova cor do gato no console, também utilizando a sintaxe colchetes.
*/


const addColor = newColor => {
  newColor['color'] += ` e Azul`
}
addColor(cat)
let colorProperty = 'color'
console.log(cat[colorProperty])

/*
Exercício-06

 - Crie uma função que retorna um boolean indicando se um valor recebido por parâmetro é um objeto;
 - Utilize a função para exibir no console se "cat" é um objeto.

*/

const isObject = value => typeof value === 'object' && value !== null

console.log(isObject(cat))

/*
Exercício-07

 - Crie um objeto "dog" que possui as mesmas propiedaades do objeto "cat";
 - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
 - Exiba a mensagem no console.

 "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

let dog = {
  name: 'Bradock',
  age: 8,
  color: 'white',
  bestFriends: ['Mel', 'Estrela', 'Bob', 'Thomas'],
  sound: () => 'auauau'
}

const message = () => {
  let sumOfAges = cat.age + dog.age

  return `A soma das idades de ${cat.name} e ${dog.name} é ${sumOfAges}.`
}

console.log(message())

/*
Exercício-08

 - Se você descomentar os 2 consoles.log abaixo, verá que a função "isAnSUV" está funcionando corretamente.
   Mas ela pode ser melhorada;
 - Como você refatoraria está função?
*/


const carsSUV = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai']
const isAnSUV = (car) => {
  if (typeof car !== 'string') {
    return 'Erro: A marca do carro deve ser uma string.';
  }
  if (carsSUV.includes(car)) {
    return `${car} é um SUV.`
  }
  return `${car} não é um SUV.`
}


console.log(isAnSUV('Honda HR-V'))
console.log(isAnSUV('9'))


// console.log(isAnSUV('Honda HR-V'))
// console.log(isAnSUV('Ford EcoSport'))

/*
Exercício-09

 - Crie uma função que recebe o parametro 'type';
 - Dentro da função, crie um objeto com as seguintes propiedades;

 - null, que recebe a mensagem 'Seta, explicitamente, uma variavel sem valor.'
 - undefined, que recebe a mensagem 'Representa um valor não-setado'
 - object, que recebe a mensagem 'Arrays,Datas,Objetos literais, Funções, etc.'
- Se o valor que o parâmetro type receber corresponder à alguma das 3  propiedades, retorne a mensagem que a propiedade armazena;
- Teste a função, exibindo no console a mensagem de cada propiedade.
*/

const getTypeDefinition = type => {
  const obj = {
    null: 'Seta, explicitamente, uma variavel sem valor.',
    undefined: 'Representa um valor não-setado',
    object: 'Arrays,Datas,Objetos literais, Funções, etc.'
  }
  return obj[type]
}
console.log(getTypeDefinition('null'))

/*
Exercício-10

 - Crie um objeto "pessoa" com as seguintes propriedades:
 - nome, que recebe o nome da pessoa;
 - idade, que recebe a idade;
 - cidade, que recebe a cidade onde mora;
 - hobbies, que recebe um array com os hobbies da pessoa;
 - cumprimentar, que é um método que retorna uma mensagem de saudação.
 - Exiba o objeto no console.
*/

const pessoa = {
  nome: 'thiago',
  idade: 20,
  cidade: 'São Paulo',
  hobbies: ['Jogar futebol', 'Correr', 'Nadar', 'Escutar Musicas'],
  cumprimentar: () => 'Oi, tudo bem?'

}
console.log(pessoa)

/*
Exercício-11

 - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações corretas.
   
   "Até aqui, o objeto "pessoa" possui as seguintes propriedades e valores; "nome", que recebeu "X" , "idade" , que recebeu "X", cidade que recebeu "X"; hobbies que recebeu um array com os itens "X" e "X", e "cumprimentar", que recebeu uma função que retorna "X".
*/
console.log(`Até aqui, o objeto "pessoa" possui as seguintes propriedades e valores; "nome", que recebeu "${pessoa.nome}" , "idade" , que recebeu "${pessoa.idade}", cidade que recebeu "${pessoa.cidade}"; hobbies que recebeu um array com os itens "${pessoa.hobbies[0]}" e "${pessoa.hobbies[1]}", e "cumprimentar", que recebeu uma função que retorna "${pessoa.cumprimentar()}".`)

/*
Exercício-12

 - Adicione 5 anos à idade da pessoa e exiba a idade atualizada no console.
*/
pessoa.idade += 5
console.log(pessoa.idade)

/*
Exercício-13

 - Crie uma função que adiciona um novo hobby ao array de hobbies da pessoa;
 - Exiba o array de hobbies no console para verificar se o novo hobby foi adicionado.
*/

const AdicionarHobby = novoHobby => {
  if (!pessoa.hobbies.includes(novoHobby)) {

    pessoa.hobbies.push(novoHobby)
  } else {
    console.log('Este hobby já foi adicionado.')
  }
}
AdicionarHobby('Pular corda')
console.log(pessoa.hobbies)

/*
Exercício-14

 - Crie uma função que adiciona um novo endereço à cidade onde a pessoa mora;
 - Utilize a sintaxe de colchetes para fazer isso;
 - Exiba o novo endereço da pessoa no console, também utilizando a sintaxe de colchetes.
*/

const adicionarEndereço = (novoendereco) => {
  pessoa['cidade'] += `${novoendereco}`
}
adicionarEndereço('e Minas Gerais.')
console.log(pessoa.cidade)

/*
Exercício-15

 - Crie uma função que retorna um boolean indicando se o valor recebido por parâmetro é um array;
 - Utilize a função para exibir no console se "hobbies" é um array.
*/

const verificaSeArray = value => {
  return Array.isArray(value)
}
console.log(verificaSeArray(pessoa.hobbies))

/*
Exercício-16

 - Crie um objeto "carro" com as mesmas propriedades do objeto "pessoa";
 - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
 - Exiba a mensagem no console.

 "A soma das idades de NOME_DA_PESSOA e NOME_DO_CARRO é RESULTADO_DA_SOMA."
*/

const carro = {
  nome: 'Honda-Civic',
  idade: 10,
  cidade: 'São Paulo',
}

const somarIdades = (obj1, obj2) => {
  return obj1.idade + obj2.idade
}
console.log(`A soma das idades de ${pessoa.nome} e ${carro.nome} é ${somarIdades(pessoa, carro)}.`)

/*
Exercício-17

 - Se você descomentar os 2 consoles.log abaixo, verá que a função "verificarCor" está funcionando corretamente.
   Mas ela pode ser melhorada;
 - Como você refatoraria esta função?
*/

const idadeMinima = 18;

const verificarEntrada = (idade) => {
  if (typeof idade !== 'number') {
    return 'Erro: A idade deve ser um número.';
  }
  return idade >= idadeMinima ? 'Você pode entar na festa!' : 'Desculpe,Você não tem idade pra entrar na festa!'
};

console.log(verificarEntrada(20)); // Espera-se que exiba: 'Você pode entrar na festa!'
console.log(verificarEntrada(16)); // Espera-se que exiba: 'Desculpe, você não tem idade suficiente para entrar.'
console.log(verificarEntrada('20')); // Espera-se que exiba: 'Erro: A idade deve ser um número.'

/*
Exercício-18

 - Crie uma função que recebe o parâmetro 'tipo';
 - Dentro da função, crie um objeto com as seguintes propriedades:

 - string, que recebe a mensagem 'Sequência de caracteres.';
 - number, que recebe a mensagem 'Representa um valor numérico.';
 - boolean, que recebe a mensagem 'Representa um valor verdadeiro ou falso.'
 - Se o valor que o parâmetro tipo receber corresponder a alguma das 3 propriedades, retorne a mensagem que a propriedade armazena;
 - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

const typeDefinition = tipo => {
  const obj = {
    string: 'Sequência de caracteres.',
    number: 'Representa um valor numérico.',
    boolean: 'Representa um valor verdadeiro ou falso.'
  }
  return obj[tipo]
}

console.log(typeDefinition('number'))