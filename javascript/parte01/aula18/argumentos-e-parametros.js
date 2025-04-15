// Função "myFunc" que recebe dois parâmetros com valores padrão
const myFunc = function (name = 'Thiago', lastName = 'Martins') {
  
  // A função irá imprimir no console uma saudação com os parâmetros fornecidos ou os valores padrões
  console.log(`Oi, ${name} ${lastName}!`)
}

// Chamando a função sem passar nenhum argumento
// Neste caso, a função usará os valores padrão para "name" e "lastName"
myFunc()  // Saída esperada: "Oi, Thiago Martins!"

// Chamando a função com dois argumentos (substituindo os valores padrão)
// "name" recebe o valor "Moises" e "lastName" recebe "Barros"
myFunc('Moises', 'Barros')  // Saída esperada: "Oi, Moises Barros!"

// Chamando a função com apenas um argumento (somente "name" é fornecido)
// O parâmetro "name" recebe "Moises", e o parâmetro "lastName" usará seu valor padrão "Martins"
myFunc('Moises')  // Saída esperada: "Oi, Moises Martins!"

// Argumentos:
// 1. Um "argumento" é o valor real que é passado para a função quando ela é chamada.
// 2. No código acima, os argumentos são passados na ordem que a função espera.
// 3. No primeiro exemplo de chamada da função (myFunc()), não passamos nenhum argumento, então os valores padrão são usados.
// 4. Nos outros exemplos, passamos os argumentos explicitamente, e a função usa os valores passados.


// Parâmetros:
// 1. "Parâmetros" são variáveis listadas entre parênteses na definição da função. São como 'placeholders' para os valores que a função receberá quando for chamada.
// 2. No exemplo da função "myFunc", temos os parâmetros `name` e `lastName`.
// 3. Esses parâmetros servem como locais temporários para os argumentos passados ao chamar a função.

// Default Parameters:
// 1. O "default parameter" é uma funcionalidade que permite definir um valor padrão para um parâmetro caso o argumento não seja passado na chamada da função.
// 2. No exemplo, "name" tem o valor padrão 'Thiago', e "lastName" tem o valor padrão 'Martins'.
// 3. Quando chamamos `myFunc()` sem passar argumentos, a função usa os valores padrões.
// 4. Se um valor for passado para um parâmetro, o valor padrão é ignorado. Exemplo: `myFunc('Moises')`, onde "name" será 'Moises' e "lastName" será 'Martins' (o valor padrão).

