// while loop
// let i = 0
// while (i < 5){
//   console.log(`Dentro do loop: ${i}`)
//   i++
// }

// O loop while é uma estrutura de repetição que executa um bloco de código 
// ENQUANTO uma condição for verdadeira. Ele é útil quando não sabemos exatamente 
// quantas vezes a repetição deve ocorrer.

// Primeiro, declaramos um array chamado "names" com três elementos.
const names = ['Curry', 'Lebron James', 'Pedro'] 

// Criamos uma variável "i" e iniciamos com 0, pois os índices do array começam em 0.
let i = 0

// O loop while será executado enquanto "i" for menor que o tamanho do array (names.length).
// Ou seja, ele percorrerá todos os elementos do array.
while (i < names.length) {
    // Exibimos o nome correspondente ao índice "i" no console.
    console.log(names[i])
    
    // Incrementamos "i" em 1 a cada iteração, para que o loop avance para o próximo nome.
    // Sem essa linha, o loop nunca terminaria, pois "i" ficaria sempre no mesmo valor.
    i++
}

// O loop terminará quando "i" for igual ao tamanho do array (names.length),
// pois a condição while (i < names.length) se tornará falsa.
