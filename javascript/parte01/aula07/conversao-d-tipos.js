// Conversão de tipos
let score = '100'; // A variável 'score' começa como uma string, mas queremos tratá-la como um número.

// Utilizando a função construtora Number() para converter o valor de 'score' de string para número
// A função Number() tenta transformar o valor da variável 'score' em um valor numérico. 
// Como '100' é uma string que representa um número, a conversão será bem-sucedida e 'score' se tornará o número 100.
score = Number(score);

// Agora, podemos realizar operações matemáticas com 'score', que agora é um número
console.log(score + 1); // O resultado será 101, pois estamos somando 1 ao valor numérico de 'score'

// Para verificar o tipo de dado atual da variável 'score', usamos o operador 'typeof'
// O 'typeof' retorna uma string que indica o tipo de dado da variável.
console.log(typeof score); // O resultado será 'number', porque 'score' agora é do tipo número



// Tentamos converter a string 'Maça' para um número usando a função Number()
const crazyConversion = Number('Maça');
// O resultado será 'NaN' porque a função Number() não consegue converter palavras (como 'Maça') para números.
// O Number() é projetado para tentar transformar o valor em um número válido. Quando passamos algo que não é um número (como uma palavra),
// ele não consegue fazer a conversão e retorna 'NaN' (Not a Number - Não é um número).
// 'NaN' é um valor especial que o JavaScript retorna quando tenta fazer uma operação com algo que não pode ser interpretado como número.
// Ou seja, o valor 'Maça' não pode ser convertido para um número, então o resultado da conversão é 'NaN'.
console.log(crazyConversion); // O resultado será 'NaN'



// Tentamos converter o número 97 para uma string usando a função String()
const converteNumber = String(97);
// O resultado será a string '97' porque a função String() converte qualquer valor para uma representação em formato de texto (string).
// No caso, o número 97 será transformado na string '97'. 
// A função String() pode ser usada para converter números, valores booleanos, objetos e até arrays em strings.
// A conversão acontece automaticamente e o valor 97, que era um número, vira a string '97'.
// Após a conversão, podemos usar a variável 'converteNumber' como uma string.
console.log(converteNumber); // O resultado será a string '97'



// Tentamos converter o número 10 para um valor booleano usando a função Boolean()
const booleanConversion = Boolean(10);
// A função Boolean() converte qualquer valor em um valor booleano (verdadeiro ou falso).
// O JavaScript considera **qualquer valor numérico diferente de 0 como 'true'**.
// Ou seja, qualquer número diferente de 0 é considerado "verdadeiro" em um contexto booleano.
// No caso do número 10, como é um número diferente de 0, ele será convertido para 'true'.
console.log(booleanConversion, typeof booleanConversion); 
// O resultado será 'true' e 'boolean', porque a conversão foi bem-sucedida e agora 'booleanConversion' é do tipo booleano.


/*
 valores falsy:
- false
- 0
- " " , ' ' , ` `
- null
- undefined
- NaN

valores truthy: 
- Qualquer valor que não é falsy
*/

