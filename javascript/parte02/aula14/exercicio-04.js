/*
Exercício - 01

 - Adicione apenas uma linha de código dentro da função "getCatInfo" para fazer com que as informações do
   gato estejam disponíveis fora da função;
 - Abaixo da função "getCatInfo", exiba no console a seguinte mensagem:
 
 "NOME_DO_GATO é um gato COR_DO_GATO de IDADE_DO_GATO anos."
*/

const getCatInfo = () => {
  // Definindo as variáveis
  const name = 'Marcos';    // Nome do gato
  let age = 3;              // Idade do gato
  const color = 'cinza';    // Cor do gato

  // Retorna um objeto onde as propriedades são as variáveis name, age e color
  // O objeto será algo como: { name: 'Marcos', age: 3, color: 'cinza' }
  return { name, age, color };  // 'name', 'age' e 'color' são as chaves do objeto e seus valores são os valores das variáveis acima
}

// Desestruturação do objeto retornado pela função getCatInfo()
// Aqui, estamos pegando as propriedades do objeto retornado pela função e armazenando nas variáveis name, age e color
const { name, age, color } = getCatInfo();  // Essa linha faz a desestruturação e atribui os valores a essas variáveis

// No console, estamos exibindo a mensagem com as variáveis já atribuídas
console.log(`${name} é um gato ${color} de ${age} anos.`);

/*
Exercício - 02

 - Adicione apenas duas linhas de código dentro da função "external" para exibir no console a string que a const movie
   armazena, com todas as letras maiúsculas.
*/

const external = () => {
  const movie = 'Parasite'

  const internal = () => {
    const extraInternal = () => {
      console.log(movie.toUpperCase())
    }
    extraInternal()
  }
  internal()
}

external()

/*
Exercício - 03

 - Exiba no console o array abaixo com a ordem dos itens invertida;
 - O resultado exibido deve ser [1,2,3];

 Dica: procure pelo método reverse, no MDN.
*/

let randomNumbers = [3, 2, 1]

const reversed = randomNumbers.reverse()
console.log(reversed)

/*
Exercício - 04

 - Exiba no console o array abaixo com o 1° item removido;
 - O resultado exibido deve ser [1,2,3];

 Dica: procure pelo método shift, no MDN.
*/

let crazyArray = [
  { prop1: '1', prop2: '2' },
  function getMessage() { return 'hi' },
  [5, 96, 53]
]

const fristElement = crazyArray.shift()
console.log(crazyArray)
console.log(fristElement)

/*
Exercício - 05

 - Encontre no array abaixo o cão com o nome "Zequinha" e exiba esse objeto no console;

 Dica: procure pelo método find, no MDN.
*/

const dogs = [
  { name: 'Olivia', age: 3, gender: 'Female', breed: 'Maltês' },
  { name: 'Zé', age: 2, gender: 'Male', breed: 'Pug' },
  { name: 'Jade', age: 4, gender: 'Female', breed: 'Shiba inu' },
  { name: 'Zequinha', age: 7, gender: 'Male', breed: 'Poodle' },
  { name: 'Xica', age: 6, gender: 'Female', breed: 'Chihuahua' }
]

const encontre = dogs.find((cachorro) => cachorro.name === 'Zequinha')

console.log(encontre)

/*
Exercício - 06

 - Cole o markup HTML abaixo em seu index.html;
 - Utilize o query selector para obter a referência do título principal da página, através da classe dele;
 - Exiba a referência do título principal no console.

  <section>
    <article>
      <h1 class="main-title">Curiosidades sobre o filme Jurassic Park</h1>

      <ul>
        <li>
          <h2 class="secondary-title">Direto das páginas do livro</h2>
          <p>No livro parque dos Dinossauros, de Michael Crichton, o personagem Jhon Hammond anuncia orgulhoso que o
            guia turisco do parque é o ator Richard Kiley.</p>
        </li>

        <li>
          <h2 class="secondary-title">Passou adiante</h2>
          <p>O ator William Hurt chegou a ser convidado para interpretar o DR. Alan Grant, mas recusou.</p>
        </li>

        <li>
          <h2 class="secondary-title">Sistemas operacionais do parque</h2>
          <p>Nos diversos softwares que aparecem em Jurassic Park foram utilizadas várias linguagens.</p>
        </li>
      </ul>
    </article>
  </section>
*/

const titlePrincipal = document.querySelector('.main-title')
console.log(titlePrincipal)

/*
Exercício - 07

 - Obtenha um NodeList com as referências de todos os títulos secundários da página, através da classe deles;
 - Exiba esse NodeList no console.
*/

const allTitlesSecondary =  document.querySelectorAll('.secondary-title')
console.log(allTitlesSecondary)