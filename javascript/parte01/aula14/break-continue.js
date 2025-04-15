
// O comando 'break' e 'continue' são usados para controlar a execução de loops.

// O 'break' interrompe completamente a execução do loop e sai dele.
// O 'continue' pula a iteração atual e avança para a próxima iteração do loop.

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
  
  // O 'continue' faz com que o loop pule esta iteração e vá para a próxima.
  // Aqui, se a pontuação for 0, o loop não executa o código abaixo e segue para a próxima iteração.
  if (scores[i] === 0) {
    continue
  }

  console.log(`Sua pontuação: ${scores[i]}`)

  // O 'break' encerra o loop imediatamente quando a condição for atendida.
  // Aqui, se a pontuação for 100, o loop para de executar.
  if (scores[i] === 100) {
    console.log('Você atingiu a pontuação máxima.')
    break
  }
}

// Outro exemplo: usando 'break' para sair de um loop ao encontrar um número maior que 10
for (let num = 1; num <= 20; num++) {
  console.log(num)

  if (num > 10) {
    console.log('Número maior que 10 encontrado. Parando o loop...')
    break // O loop para aqui e não continua executando
  }
}

// Exemplo usando 'continue' para pular números pares e exibir apenas números ímpares
for (let num = 1; num <= 10; num++) {
  if (num % 2 === 0) {
    continue // Se for par, pula essa iteração e vai para o próximo número
  }
  console.log(`Número ímpar: ${num}`)
}

// Em resumo:
// - 'break' é usado quando queremos interromper o loop completamente antes que ele termine normalmente.
// - 'continue' é usado quando queremos pular uma iteração específica do loop e continuar para a próxima.
