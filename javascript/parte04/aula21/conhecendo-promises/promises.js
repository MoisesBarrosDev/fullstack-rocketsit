// Função que retorna uma Promise.

function asyncFunction() {
  // aqui abaixo retornamos uma nova istancia de uma promise, que por parametro vem resolve e reject
  return new Promise((resolve, reject) => {
    //  Simula uma operação assícrona.
    setTimeout(() => {
      const isSuccess = true

      if (isSuccess) {
        resolve('A operação foi concluída com sucesso!')
      } else {
        reject('Algo deu errado!')
      }
    }, 3000) // Simula uma operação que leva 3 segundos.
  })
}

// Visualizando que o retorno é uma promise.
// console.log(asyncFunction())

console.log('Executando função assícrona...')

// Aqui abaixo chamamos a função
asyncFunction()
  // esse then significa, tente pegar o response(resolve) caso a condição for verdadeira. 
  .then((response) => {
    console.log('Sucesso:', response)
  }).catch((error) => {  // esse catch é pra pegar o  error(reject), caso falhe a promise.
    console.log('Erro:', error)
  }).finally(() => { // já o finally funciona indepedentemente de a promise der certo ou ela falhe.
    console.log('Fim da execução!')
  })

// ////////////////////////////////////////////

function asyncFunctionn() {
  // aqui abaixo retornamos uma nova istancia de uma promise, que por parametro vem resolve e reject
  return new Promise((resolve, reject) => {
    //  Simula uma operação assícrona.
    setTimeout(() => {
      const isSuccess = true

      if (isSuccess) {
        resolve('A operação foi concluída com sucesso! =)')
      } else {
        reject('Algo deu errado!')
      }
    }, 3000) // Simula uma operação que leva 3 segundos.
  })
}

// 1° forma de fazer abaixo
/*
async function fetch() {
  try {
    const response = await asyncFunctionn()
    console.log(response)
  } catch (error) {
    console.log('Erro:', error)
  } finally {
    console.log('Fim da execução! =)')
  }

}
fetch()
*/

// 2° forma de fazer abaixo, agora em função de callback
// - 1° passo- criamos uma variavel que se chama fetch.
// - 2° passo- colocamos o async para o js entender que é uma função assícrona.
// - 3° passo- botamos os () junto com => para indentificar que fetch é uma função assícrona de callback.

// - 4° passo- criamos um bloco de try catch, dentro de try criamos uma variavel que se chama response,e
// dentro dela colocamos o "await" que significa espere... e chamamos a função asyncFunctionn(), que no 
// total representa: tente esperar a asyncFunctionn() executar e coloque o resultado no console.log.
// se der certo, ele vai retornar no console o resolve.

// - 5° passo- Após tentar resolver,caso o try dê 'false', retorne esse 'error' da função asyncFunctionn()
//  no console, que seria o 'reject'


// - 6° passo- colocamos o finally, que independentemente se der resolve ou reject , ele sempre vai executar.
// - 7° passo- chamamos a função de callback para que ela apareça no console apos os 3 segundos.

const fetch = async () => {
  try {
    const response = await asyncFunctionn()
    console.log(response)
  } catch (error) {
    console.log('Erro:', error)
  } finally {
    console.log('Fim da execução! =)')
  }

}
fetch()