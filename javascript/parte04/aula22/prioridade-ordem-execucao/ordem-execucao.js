// ===================================================
// 📚 EXPLICAÇÃO COMPLETA DO EVENT LOOP EM JAVASCRIPT
// ===================================================

/*
  O JavaScript é single-threaded: ele executa uma coisa por vez,
  de cima pra baixo. Para lidar com operações assíncronas (ex: setTimeout, fetch, Promises),
  ele usa um mecanismo chamado EVENT LOOP.

  Aqui estão os principais componentes que fazem tudo funcionar:
*/

// ---------------------------------------------------

/*
  📌 1. CALL STACK (Pilha de Execução):
  - É onde o JavaScript empilha as funções que estão sendo executadas no momento.
  - Ela funciona como uma pilha (LIFO: Last In, First Out).
*/

// ---------------------------------------------------

/*
  📌 2. WEB APIs (APIs do navegador ou ambiente Node.js):
  - Quando usamos setTimeout, fetch ou addEventListener, a execução vai pra essas APIs.
  - Elas lidam com essas tarefas de forma assíncrona, enquanto o JS segue seu fluxo.
*/

// ---------------------------------------------------

/*
  📌 3. CALLBACK QUEUE (Fila de Tarefas):
  - Depois que a tarefa assíncrona termina (ex: setTimeout expira),
    o callback vai pra essa fila, esperando a vez de ser executado.
*/

// ---------------------------------------------------

/*
  📌 4. MICROTASK QUEUE:
  - Fila separada com **maior prioridade** que a Callback Queue.
  - Promises e métodos como queueMicrotask() usam essa fila.
*/

// ---------------------------------------------------

/*
  📌 5. EVENT LOOP:
  - Ele observa a Call Stack e a fila de tarefas.
  - Quando a Stack estiver vazia, ele pega algo da fila e coloca pra execução.
*/

// +---------------------+
// |     Call Stack      | ← Executa o código linha por linha
// +---------------------+
//           ↓
// +---------------------+
// |     Event Loop      | ← Olha a fila, vê se a stack tá vazia
// +---------------------+
//           ↓
// +---------------------+
// |   Callback Queue    | ← Esperando a vez de executar
// +---------------------+


// ===================================================
//  EXEMPLO PRÁTICO MOSTRANDO O FLUXO DO EVENT LOOP
// ===================================================

// Microtasks: São tarefas de alta prioridade que são executadas antes das Macrotasks(temporizadores e promises)
console.log('1') // Síncrono → executa primeiro

// Macrotasks: São tarefas de menor prioridade, como callbacks de eventos,setTimeout,setInterval.
setTimeout(() => {
  console.log('2') // Vai pra Web API e depois Callback Queue
}, 0)

// Macrotasks: São tarefas de menor prioridade, como callbacks de eventos,setTimeout,setInterval.
Promise.resolve().then(() => {
  console.log('3') // Vai pra Microtask Queue → executa antes de setTimeout
})

// Microtasks: São tarefas de alta prioridade que são executadas antes das Macrotasks(temporizadores e promises)
console.log('4') // Síncrono → executa antes das filas

// ==== SAÍDA ESPERADA ====
// 1
// 4
// 3
// 2

// ===================================================
//  OUTRO EXEMPLO MOSTRANDO ATRASO SIMULADO
// ===================================================

function simulandoProcessoAssincrono() {
  console.log('Iniciando processo...')

  setTimeout(() => {
    console.log('Processo finalizado após 2 segundos')
  }, 2000)

  console.log('Processo enviado para execução') // Síncrono
}

simulandoProcessoAssincrono()

// ===================================================
//  RESUMO FINAL
// ===================================================

/*
  ✔ O JS executa tudo que for síncrono primeiro (linha por linha).
  ✔ setTimeout, fetch, etc., são assíncronos e vão para a Web API.
  ✔ Promises vão para a Microtask Queue.
  ✔ Event Loop entrega as tarefas de acordo com a fila (Microtask > Callback).
  ✔ Call Stack precisa estar vazia pra que o Event Loop coloque a próxima função.
*/


