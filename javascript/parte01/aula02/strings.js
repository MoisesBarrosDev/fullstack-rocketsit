// strings
console.log('hello, world')
// SEJA ELE LETRAS OU NUMEROS SE ESTIVER DENTRO DE ASPAS É STRING.
// Qualquer valor, seja letras, números ou outros caracteres, se estiver delimitado por aspas simples(''), aspas duplas("") ou template literals(crases, ````), será tratado como uma string em JavaScript.
const email = 'leon@moisesbarros.com'
console.log(email)


// concatenação de strings 
// Declara uma constante chamada firstName e atribui a ela a string 'Thiago'.
const firstName = 'Thiago'
// Declara uma constante chamada lastName e atribui a ela a string 'Santos'.
const lastName = 'Santos'
// Declara uma constante chamada fullName e atribui a ela o resultado da concatenação
// das constantes firstName e lastName, separadas por um espaço (' ').
// O operador '+' é usado para unir strings em JavaScript.
const fullName = firstName + ' ' + lastName

// Exibe o valor da constante fullName no console.
// Resultado esperado: 'Thiago Santos'
console.log(fullName)


// acessando caracteres
// O comando console.log(fullName[0]) acessa o primeiro caractere da string armazenada em fullName.
// Em JavaScript, strings são tratadas como arrays de caracteres, onde cada caractere tem um índice (posição).
// O índice começa em 0, então fullName[0] retorna o primeiro caractere da string.
// Por exemplo, se fullName = 'Thiago Santos', fullName[0] será 'T'.
console.log(fullName[0])


// cumprimento de uma string 
// propiedade de string = length
// O comando console.log(fullName.length) retorna o número total de caracteres na string armazenada em fullName.
// A propriedade .length é usada para obter o comprimento de uma string, ou seja, quantos caracteres ela contém, incluindo espaços.
// Por exemplo, se fullName = 'Thiago Santos', a string contém 13 caracteres (6 para 'Thiago', 1 espaço e 6 para 'Santos').
console.log(fullName.length)


// métodos de string
// O comando console.log(fullName.toUpperCase()) converte todos os caracteres da string armazenada em fullName para letras maiúsculas.
// O método .toUpperCase() é usado para transformar uma string completamente em maiúsculas, independentemente de regras de idioma.
// Por exemplo, para fullName = 'Thiago Santos', o método converte a string para 'THIAGO SANTOS'.
console.log(fullName.toUpperCase())


// O comando const result = fullName.toLowerCase() executa o método .toLowerCase() na string armazenada em fullName.
// O método .toLowerCase() converte todos os caracteres da string para letras minúsculas.
// O valor retornado é atribuído à constante result, mas a string original (fullName) não é alterada, pois strings são imutáveis em JavaScript.
// Por exemplo, se fullName = 'Thiago Santos', o método converte a string para 'thiago santos'.
// No entanto, a variável fullName ainda mantém o valor original ('Thiago Santos').
// Resultado esperado: 'thiago santos' 'Thiago Santos'
// result: 'thiago santos' (convertido para minúsculas)
// fullName: 'Thiago Santos' (permanece inalterado)
const result = fullName.toLowerCase() // Converte a string para minúsculas e armazena em result
console.log(result, fullName)



// O comando const index = email.indexOf('@') encontra a posição do caractere '@' na string armazenada em email.
// O método .indexOf() retorna o **índice** da primeira ocorrência do caractere ou substring especificada.
// Se o caractere ou substring não for encontrado, o método retorna -1.
// Os índices começam em 0, ou seja, o primeiro caractere de uma string tem índice 0.
// Exemplo:
// Se email = 'teste@example.com', o método indexOf('@') retornará o índice 5,
// porque o caractere '@' está na posição 5 da string (contando a partir de 0).
// Dentro da variável index, o indexOf é um método, e o '@' dentro dos parênteses é o argumento passado para esse método.
const index = email.indexOf('@') // Encontra a posição do '@' na string email
console.log(index) // Exibe o índice encontrado no console


