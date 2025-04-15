// Métodos comuns de string

// Atribui o valor 'thiago44@gmail.com.br' à variável 'email'
const email = 'thiago44@gmail.com.br'
// O método 'lastIndexOf' encontra a última ocorrência do caractere 'a' na string 'email'
// Ele retorna o índice da última vez que o caractere foi encontrado
// No caso, o índice da última ocorrência de 'a' é 6
// funcionada da esquerda pra direita
const lastIndexOfA = email.lastIndexOf('a')
// Exibe o índice encontrado no console, que será 6
console.log(lastIndexOfA)


// O método 'slice' é usado para extrair uma parte de uma string.
// 'slice(0, 6)' extrai os caracteres do índice 0 até o índice 6 (não incluindo o índice 6).
// No caso, ele extrai a substring "thiago" da string 'email' ('thiago44@gmail.com.br')
// slice(0, 6): A string será cortada começando do índice 0 até o índice 6, mas o caractere na posição 6 não será incluído. Assim, o trecho extraído será de 'thiago'.
// Portanto, o valor exibido no console.log será "thiago".
const emailSlice = email.slice(0, 6)
// Exibe a substring extraída, que será "thiago"
console.log(emailSlice)


// O método 'replace' substitui a primeira ocorrência de uma substring por outra.
// No caso, ele substitui a primeira ocorrência de 'thiago' por 'moises' na string 'email'.
// A string original é 'thiago44@gmail.com.br'.
// O resultado será 'moises44@gmail.com.br' porque a primeira ocorrência de 'thiago' foi substituída por 'moises'.
// replace('thiago', 'moises'): Este método encontra a primeira ocorrência exata da substring 'thiago' na string email e a substitui por 'moises'.
// O método não substitui todas as ocorrências, apenas a primeira.
// Portanto, o valor exibido no console.log será "moises44@gmail.com.br".
const emailReplace = email.replace('thiago', 'moises')
// Exibe a nova string com a substituição, que será 'moises44@gmail.com.br'
console.log(emailReplace)
