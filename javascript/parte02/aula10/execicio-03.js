/*
Exercício - 01

 - Utilize o array abaixo para exibir no console uma string com a seguinte formatação:

   Segundo o site Omelete, os melhores filmes de 2019 são:
   - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
   - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
   - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME

- Todos os filmes e diretores do array devem constar na lista.
*/

const best2019Movies = [
  { title: "Parasita", directedBy: "Bong Joon Ho" },
  { title: "Bacurau", directedBy: "Kleber Mendonça Filho" },
  { title: "O Irlandês", directedBy: "Martin Scorsese" },
  { title: "Entre Facas e Segredos", directedBy: "Rian Johnson" },
  { title: "Turma da Mônica: Laços", directedBy: "Daniel Rezende" },
  { title: "Homem-Aranha: No Aranhaverso", directedBy: "Bob Persichetti" },
  { title: "Klaus", directedBy: "Sergio Pablos" },
  { title: "Fora de Série", directedBy: "Olivia Wilde" },
  { title: "Shazam!", directedBy: "David F. Sandberg" },
  { title: "História de um Casamento", directedBy: "Noah Baumbach" },
  { title: "Varda por Àgnes", directedBy: "Agnès Varda" },
  { title: "A Vida Invisível", directedBy: "Karim Aïnouz" }
]

let message = 'Segundo o site Omelete, os melhores filmes de 2019 são: '

best2019Movies.forEach((movie) => {
  message += `
   - ${movie.title}  dirigido por ${movie.directedBy}.`
})
console.log(message)

/*
Exercício - 02

 - No objeto abaixo, implemente um método que exiba a seguinte mensagem no console:

    Vídeos recentes de Moises Barros:
    Introduçãoao TDD - Parte 02 | JavaScript | Jest    
    Introduçãoao TDD | JavaScript | Jest    
    Higher-order Functions| JavaScript 


- As 4 linhas da mensagem, podem ser exibidas separadamente
*/

const youtubeUser = {
  name: 'Moises Barros',
  chanelUrl: 'https://youtu.be/TbLJyjfyACM?si=I7HF_JUjg9np5GsT',
  videos: {
    total: 111,
    recentVideos: [
      { title: ' Introduçãoao TDD - Parte 02 | JavaScript | Jest', length: '28:28' },
      { title: ' Introduçãoao TDD | JavaScript | Jest', length: '19:29' },
      { title: ' Higher-order Functions| JavaScript', length: '47:38' }
    ]
  },
  about: {
    descripition: 'Ensino pessoas a serem boas!',
    socialNetworks: {
      twitter: 'https://youtu.be/TbLJyjfyACM?si=I7HF_JUjg9np5GsT',
      gitHub: 'https://youtu.be/TbLJyjfyACM?si=I7HF_JUjg9np5GsT',
    },
    country: 'Brasil'
  },
  recentVideos() {
    console.log(`Vídeos recentes de ${this.name}:`)
    this.videos.recentVideos.forEach((titulo) => {
      console.log(titulo.title, titulo.length)
    })
  }
}

youtubeUser.recentVideos()

/*
Exercício - 03

 - Exiba o valor de PI no console.
*/

console.log(Math.PI)

/*
Exercício - 04

 - Arredonde o número que a constante abaixo armazena para 9 e exiba-o no console.
*/

const fristNumber = 8.3
console.log(Math.ceil(fristNumber))

/*
Exercício - 05

 - Arredonde o número que a constante abaixo armazena para 4, utilizando a forma padrão, e exiba-o no console.
*/

const secondNumber = 3.5
console.log(Math.round(secondNumber))

/*
Exercício - 06

 - Arredonde o número que a constante abaixo armazena para 8, e exiba-o no console.
*/

const thirdNumber = 8.9
console.log(Math.floor(thirdNumber))

/*
Exercício - 07

 - Exiba no console o número abaixo com a parte decimal removida.
*/

const fourthNumber = 5.5
console.log(Math.trunc(fourthNumber))

/*
Exercício - 08

 - A cada vez que o index.html for carregado, exiba no console um número aleatorio de 0 à 10, incluindo 0 e 10.  
*/

const randomNumber = Math.random() 
console.log(Math.round(randomNumber * 10))