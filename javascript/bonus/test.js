function minhaPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberAleatorio = Math.random()
      if (numberAleatorio > 0.5) {
        resolve("Operação bem-sucedida!")
      } else {
        reject("Falha na operação!")
      }
    }, 2000)
  })
}

minhaPromise()
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((erro) => {
    console.log(erro)
  })

/*
Exercício - 01: Trabalhando com Promises e Manipulação de Sucesso e Erro

Objetivo: Criar uma função que retorna uma Promise, e usar `.then()` e `.catch()` para lidar com os resultados.

1. Crie uma função chamada `processarDados` que simula o processamento de dados. Essa função deve:
 - Retornar uma Promise.
 - Dentro da Promise, use `setTimeout` para simular um tempo de espera de 3 segundos.
 - Gere um número aleatório entre 0 e 1.
 - Se o número gerado for **maior que 0.5**, a Promise deve ser **resolvida** com a mensagem: `"Processamento concluído com sucesso!"`.
 - Se o número gerado for **menor ou igual a 0.5**, a Promise deve ser **rejeitada** com a mensagem: `"Erro ao processar dados!"`.
 
2. Após criar a função, execute-a e:
 - Use o método `.then()` para exibir no console a mensagem de sucesso caso a Promise seja resolvida.
 - Use o método `.catch()` para exibir no console a mensagem de erro caso a Promise seja rejeitada.

Dicas:
- A função `Math.random()` pode ser usada para gerar um número aleatório entre 0 e 1.
- Não se esqueça de usar o `setTimeout` para simular o tempo de processamento.
- A função `.then()` é chamada quando a Promise é resolvida.
- A função `.catch()` é chamada quando a Promise é rejeitada.
*/

function processarDados() {
  return new Promise((resolve, reject) => {
    let numberAleatorio = Math.random()
    setTimeout(() => {
      if (numberAleatorio > 0.5) {
        resolve("Processamento concluído com sucesso!")
      } else {
        reject("Erro ao processar dados!")
      }
    }, 3000)
  })
}

processarDados()
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((erro) => {
    console.log(erro)
  })

/*
Exercício - 02: Calculadora de Temperatura

Objetivo: Criar uma função que retorna uma Promise, onde o valor da temperatura será processado.

1. Crie uma função chamada `converterTemperatura` que:
 - Aceite um valor de temperatura em Celsius como parâmetro.
 - Retorne uma Promise.
 - Dentro da Promise:
   - Use `setTimeout` para simular um atraso de 2 segundos, como se fosse um processamento.
   - Se a temperatura estiver abaixo de 0 graus Celsius, a Promise deve ser **rejeitada** com a mensagem: `"Temperatura abaixo de zero! Conversão não possível."`
   - Se a temperatura for válida (acima ou igual a 0), a Promise deve **resolver** com a mensagem de sucesso, indicando a conversão da temperatura para Fahrenheit. A conversão é feita com a fórmula: `Fahrenheit = (Celsius * 9/5) + 32`

2. Após criar a função, execute-a e:
 - Use o método `.then()` para exibir no console a temperatura convertida para Fahrenheit caso a Promise seja resolvida.
 - Use o método `.catch()` para exibir no console a mensagem de erro caso a Promise seja rejeitada.

Dicas:
- A fórmula para converter Celsius para Fahrenheit é: `Fahrenheit = (Celsius * 9/5) + 32`.
- Não se esqueça de usar o `setTimeout` para simular um tempo de espera de 2 segundos.
- A função `.then()` é chamada quando a Promise é resolvida.
- A função `.catch()` é chamada quando a Promise é rejeitada.
*/

function converterTemperatura(celsius) {
  return new Promise((result, reject) => {
    setTimeout(() => {
      if (celsius < 0) {
        reject("Temperatura abaixo de zero! Conversão não possível.")
      } else {
        const fahrenheit = (celsius * 9 / 5) + 32
        result(`A temperatura de ${celsius}°C é igual a ${fahrenheit}°F`)
      }
    }, 2000)
  })
}

converterTemperatura(25)
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((erro) => {
    console.log(erro)
  })


/*
Exercício - 03: Verificação de Status de Rede

Objetivo: Criar uma função que simula uma verificação de status de rede.

1. Crie uma função chamada `verificarStatusRede` que:
 - Não receba parâmetros.
 - Retorne uma Promise.
 - Dentro da Promise:
   - Use `setTimeout` para simular um atraso de 2 segundos (simulando uma requisição assíncrona).
   - Se a rede estiver disponível (simulada com um valor aleatório entre 0 e 1), a Promise deve ser **resolvida** com a mensagem: `"Rede está disponível!"`.
   - Se a rede estiver fora do ar (simulada com um valor aleatório entre 0 e 1), a Promise deve ser **rejeitada** com a mensagem: `"Falha na conexão com a rede!"`.

2. Após criar a função, execute-a e:
 - Use o método `.then()` para exibir no console a mensagem de sucesso caso a Promise seja resolvida (rede disponível).
 - Use o método `.catch()` para exibir no console a mensagem de erro caso a Promise seja rejeitada (falha na conexão).

Dicas:
- Para simular a aleatoriedade, use `Math.random()` para gerar um número aleatório entre 0 e 1.
- Se o número gerado for maior que 0.5, a rede está disponível (resolva a Promise).
- Se o número gerado for menor ou igual a 0.5, a rede não está disponível (rejeite a Promise).
- Use o `setTimeout` para simular o tempo de espera de 2 segundos.

3. Teste a função passando algumas execuções e veja como ela reage ao sucesso e ao erro da rede.

*/

// Aqui você deve criar a função `verificarStatusRede` que resolve ou rejeita a Promise com base em um valor aleatório, usando setTimeout.

function verificarStatusRede() {
  return new Promise((resolve, reject) => {
    let numberAleatorio = Math.random()
    setTimeout(() => {
      if (numberAleatorio > 0.5) {
        resolve("Rede está disponível!")
      } else {
        reject("Falha na conexão com a rede!")
      }
    }, 2000)
  })
}

verificarStatusRede()

  .then((conectado) => {
    console.log(conectado)
  })
  .catch((desconectado) => {
    console.log(desconectado)
  })


/*
Exercício - 04: Requisição Assíncrona Simulada

Objetivo: Simular uma requisição assíncrona usando `async/await`.

1. Crie uma função `simularRequisicao` que simula uma requisição a um servidor.
 - Use `setTimeout` para simular o atraso de 3 segundos.
 - Dentro do `setTimeout`, gere um número aleatório (use `Math.random()`).
 - Se o número for maior que 0.5, a Promise deve ser resolvida com a mensagem `"Requisição bem-sucedida!"`.
 - Se o número for menor ou igual a 0.5, a Promise deve ser rejeitada com a mensagem `"Erro na requisição!"`.

2. Crie uma função assíncrona chamada `realizarRequisicao`:
 - Utilize o `await` para aguardar o retorno da função `simularRequisicao`.
 - Use `try/catch` para lidar com sucesso e erro da requisição.

3. Exiba no console a mensagem da requisição bem-sucedida ou o erro da requisição, dependendo do resultado.

Dicas:
- Utilize o `async/await` na função `realizarRequisicao`.
- Use o `try/catch` para tratar a Promise resolvida ou rejeitada.

*/

async function simularRequisicao() {
  return new Promise((resultado, reject) => {
    let numberAleatorio = Math.random()
    setTimeout(() => {
      if (numberAleatorio > 0.5) {
        resultado("Requisição bem-sucedida!")
      } else {
        reject("Erro na requisição!")
      }
    }, 2000)
  })

}

async function realizarRequisicao() {
  try {
    const resultado = await simularRequisicao()
    console.log(resultado)
  }
  catch (erro) {
    console.log(erro)
  }
}

realizarRequisicao()

/*
Exercício - 04: Simulando uma busca de dados com Promises e async/await

- Crie uma função chamada `buscarDados` que simula uma busca de dados em um banco de dados.
- Dentro da função `buscarDados`, utilize uma Promise que será resolvida com uma string "Dados encontrados!" após 3 segundos (simule o delay da busca).
- Caso ocorra um erro durante a busca, rejeite a Promise com a string "Erro ao buscar dados!".
- Crie uma função assíncrona chamada `executarBusca` que chama a função `buscarDados` e usa `await` para esperar pela resposta.
- Utilize `try/catch` dentro da função `executarBusca` para capturar e exibir qualquer erro.

Dicas:
- Use `setTimeout` para simular o atraso na busca de dados.
- Não se esqueça de chamar a função `executarBusca` no final do código para testar.
*/

async function buscarDados() {
  return new Promise((resolve, reject) => {
    let coisasAleatorias = 'oi'
    setTimeout(() => {
      if (typeof coisasAleatorias === "string") {
        resolve("Dados encontrados!")
      } else {
        reject("Erro ao buscar dados!")
      }
    }, 3000)
  })
}


async function executarBusca() {
  try {
    const resultado = await buscarDados()
    console.log(resultado)
  }
  catch (erro) {
    console.log(erro)
  }
}
executarBusca()