// Variáveis e Escopo de Bloco

// Escopo de Variáveis (let, const, var): 
// O escopo de uma variável é o contexto onde ela pode ser acessada.
// Variáveis criadas com let ou const têm escopo de bloco, ou seja, 
// elas só podem ser acessadas dentro do bloco de código onde foram declaradas 
// (por exemplo, dentro de uma função, estrutura de controle como if, for, etc.).

// Recriação de Variáveis em Diferentes Escopos:
// Variáveis com o mesmo nome podem existir em escopos diferentes.
// Isso significa que uma variável 'age' declarada dentro de um bloco de código (como um if) 
// pode ter o mesmo nome que uma variável 'age' declarada fora desse bloco, mas elas são independentes uma da outra.
// O valor da variável no escopo mais interno "sobrescreve" o valor da variável no escopo mais externo, 
// mas elas não interferem entre si.

// Atualização de Variáveis:
// Para atualizar o valor de uma variável dentro do escopo, 
// você pode apenas atribuir um novo valor a ela, sem precisar redeclarar a variável com let ou const.

// Acesso Fora do Escopo:
// Variáveis declaradas dentro de um bloco (por exemplo, dentro de um if) não podem ser acessadas fora desse bloco. 
// Tentar acessar uma variável fora de seu escopo de definição resultará em um erro de referência.


// Explicações:

// Escopo Global:
// A variável 'age' foi definida fora de qualquer bloco, então ela pode ser acessada 
// em qualquer parte do código fora de um escopo de bloco.

let age = 31;  // Variável 'age' no escopo global.

if (true) {
  // Escopo do if:
  // Dentro do bloco 'if', a variável 'age' é redeclarada (com let) e recebe o valor 41.
  // Isso cria uma variável 'age' independente da 'age' do escopo global.

  let age = 41;  // Nova variável 'age' dentro do bloco 'if'.

  // Aqui, estamos acessando a 'age' dentro do escopo do 'if', 
  // que tem o valor 41, e não a 'age' do escopo global.
  console.log(`Dentro do bloco de código: ${age}`); // Resultado: 41

  if (true) {
    // Escopo do 2° Bloco:
    // O valor de 'age' dentro do segundo bloco ainda será 41, 
    // pois estamos no mesmo escopo do primeiro 'if' (dentro do mesmo bloco).

    console.log(`Dentro do 2° bloco de código? ${age}`);  // Resultado: 41
  }

  if (true) {
    // Escopo do 3° Bloco:
    // Dentro deste terceiro bloco, uma nova variável 'age' é declarada com o valor 50.
    // Essa variável é independente das outras duas 'age' dos escopos anteriores.

    let age = 50;  // Nova variável 'age' dentro do terceiro bloco.

    // A variável 'age' aqui tem o valor 50, pois foi redeclarada neste bloco e essa será a variável acessada.
    console.log(`Dentro do 3° bloco de código? ${age}`);  // Resultado: 50
  }
}

// Acesso Fora do Bloco:
// Fora de qualquer bloco, a variável 'age' no escopo global ainda está com o valor 31.
// Ela pode ser acessada fora dos blocos de código, mas as variáveis 'age' dentro dos blocos 'if' não podem ser acessadas aqui.

console.log(`Fora de qualquer bloco: ${age}`);  // Resultado: 31

console.log(`fora do bloco de código: ${age} ${name}`)

// Resumo:
// - Variáveis definidas com let ou const têm escopo de bloco, ou seja, são acessíveis apenas dentro do bloco onde foram declaradas.
// - Você pode ter variáveis com o mesmo nome em diferentes escopos, mas elas são independentes.
// - Para atualizar o valor de uma variável dentro de um escopo, você simplesmente atribui um novo valor a ela, sem precisar redefinir a variável.
// - A variável fora do bloco (como a variável 'age' no escopo global) não é acessível dentro dos blocos de código onde a variável foi declarada com o mesmo nome, 
//   mas você pode acessar a variável global dentro dos blocos.


