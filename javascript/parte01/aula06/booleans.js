// Booleans e comparações
console.log(true, false, 'true', 'false')
// quando usar booleans ou obter booleans ? quando você precisar verificar alguma condição no seu codigo.


// Métodos podem retornar booleans 
const email = 'thiagosilva@costabarros.com'
const includes = email.includes('com')
console.log(includes)


// esse método funciona tanto pra string quanto pra array.
// veja que abaixo ele vai retornar um boolean 'false' pois não existe a string 'roger' dentro do array. 
const names = ['lucas', 'marcelo', 'eduardo']
const arrayIncludes = names.includes('roger')
console.log(arrayIncludes)


// Operadores de comparação

const age = 31;
// Sinal de igualdade '=='
// Esta expressão deve ser lida assim: a variável 'age' é igual a 31.
// O resultado será 'true', porque o valor armazenado na variável 'age' é igual a 31. 
// Se o valor fosse diferente, o retorno seria 'false'.
console.log(age == 31);


// Sinal de "não igual" '!='
// Esta expressão deve ser lida assim: a variável 'age' não é igual a 31.
// O resultado será 'false', porque o valor armazenado na variável 'age' é igual a 31, 
// e não diferente.
console.log(age != 31);
// Agora, esta expressão retornará 'true', porque o valor armazenado na variável 'age' 
// não é igual a 39.
console.log(age != 39);


// Sinal de maior '>'
// Esta expressão deve ser lida assim: a variável 'age' é maior que o número 10.
// O resultado será 'true', porque o valor armazenado na variável 'age' é maior que 10.
console.log(age > 10);
// Agora, esta expressão retornará 'false', porque o valor armazenado na variável 'age' 
// é menor que 50.
console.log(age > 50);


// Sinal de menor '<'
// Esta expressão deve ser lida assim: a variável 'age' é menor que o número 50.
// O resultado será 'true', pois o valor armazenado na variável 'age' é realmente menor que 50.
console.log(age < 50);
// Agora, esta expressão retornará 'false', porque o valor armazenado na variável 'age' 
// não é menor que o número 25.
console.log(age < 25);



// Sinal de menor ou igual '<='
// Esta expressão deve ser lida assim: a variável 'age' é menor ou igual ao número 31.
// A resposta será 'true', porque o valor armazenado em 'age' (31) é igual ao número 31.
console.log(age <= 31);
// Agora, esta expressão vai retornar 'false', pois o valor armazenado em 'age' (31) 
// não é menor nem igual ao número 20.
console.log(age <= 20);



// Sinal de maior ou igual '>='
// Esta expressão deve ser lida assim : a variável 'age' é maior ou igual ao número 50.
// A resposta será 'false', porque o valor armazenado em 'age' (31) é menor que o número 50.
console.log(age >= 50) 
// Agora, esta expressão vai retornar 'true', pois o valor armazenado em 'age'(31) é maior do que o número 20.
console.log(age >= 20)




const name = 'roger'
// Sinal de igualdade '=='
// Esta expressão deve ser lida assim: a variável 'name' é igual à string 'roger'.
// O resultado será 'true', porque o valor armazenado na variável 'name' é exatamente igual à string 'roger'. 
// Se o valor fosse diferente, o retorno seria 'false'.
console.log(name == 'roger')
// Sinal de igualdade '=='
// Esta expressão verifica se a variável 'name' é igual à string 'Roger'.
// O resultado será 'false', porque a comparação feita pelo operador '==' é sensível a maiúsculas e minúsculas (case-sensitive). 
// O valor armazenado na variável 'name' é 'roger' (todas as letras minúsculas), enquanto a string 'Roger' 
// começa com uma letra maiúscula. Como os valores não são exatamente iguais, o retorno é 'false'.
console.log(name == 'Roger')
// Sinal de maior '>'
// Esta expressão verifica se a variável 'name' (com valor 'roger') é maior que a string 'belinha'.
// O resultado será 'true', pois a comparação de strings em JavaScript é feita com base na ordem lexicográfica, 
// que segue a ordem alfabética dos caracteres, mas considera também o valor Unicode de cada caractere.
// O primeiro caractere de 'roger' é 'r', enquanto o primeiro caractere de 'belinha' é 'b'.
// No código Unicode, a letra 'r' tem um valor maior que a letra 'b', porque a letra 'r' vem depois da letra 'b',o que faz com que 'roger' seja considerado maior que 'belinha'.
// Assim, a expressão retorna 'true', pois 'r' (de 'roger') vem depois de 'b' (de 'belinha') no alfabeto.
console.log(name > 'belinha')
// Sinal de maior '>'
// Esta expressão verifica se a variável 'name' (com valor 'roger') é maior que a string 'Roger'.
// O resultado será 'true', porque a comparação de strings em JavaScript é feita com base na ordem lexicográfica,
// que é determinada pelos valores Unicode de cada caractere da string, e a comparação é feita caractere por caractere.
// Vamos comparar as duas strings caractere a caractere:
// 1. O primeiro caractere de 'roger' é 'r' e o primeiro de 'Roger' é 'R'.
// 2. No código Unicode, a letra 'r' tem o valor 114, enquanto 'R' tem o valor 82.
// 3. O valor de 'r' (114) é **maior** que o valor de 'R' (82), o que faz com que a string 'roger' seja considerada maior que 'Roger'.
// toda letra minuscula tem um valor maior que letra maiuscula.
// Como a comparação começa com a diferença entre os primeiros caracteres e 'r' (maior) vence, o restante da comparação 
// é desconsiderado, já que a decisão já foi tomada.
// Portanto, a expressão retorna 'true' porque 'roger' é maior que 'Roger' na ordem lexicográfica.
console.log(name > 'Roger')
console.log(name > 'Borges')


