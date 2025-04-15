const age = 31

// 'igual a ' e 'diferente de'
console.log(age == 31)


// Sinal de igualdade '=='
// Esta expressão verifica se a variável 'age' (que contém o número 31) é igual à string '31'.
// O resultado será 'true', porque o operador de igualdade '==' em JavaScript realiza uma comparação de **igualdade com conversão de tipo** (coerção de tipo).
// Quando você usa o '==' para comparar um número e uma string, o JavaScript tenta converter o valor para o mesmo tipo antes de fazer a comparação. No caso, a string '31' será convertida para o tipo numérico 31.
// Então, a comparação será:
// 31 (número) == 31 (número) -> O resultado é 'true' porque os valores são iguais.
// Mesmo que um seja um número e o outro uma string, a coerção de tipo do operador '==' permite que a comparação seja bem-sucedida, já que ambos representam o mesmo valor numérico.
// Se fosse utilizada a comparação estrita '===', o resultado seria 'false', pois o '===' não realiza conversão de tipo e a comparação seria entre um número e uma string, o que não seria considerado igual.
console.log(age == '31')



// Comparação usando o operador '!=' (diferente de)
// Esta expressão verifica se a variável 'age' (que contém o número 31) é **diferente** de 31 (número).
// O resultado será 'false', porque a variável 'age' contém o valor 31, e estamos comparando com o número 31.
// Como o valor de 'age' é igual ao número 31, a comparação 'age != 31' retorna 'false'.
// Ou seja, não é diferente de 31, é igual a 31.
console.log(age != 31)



// Comparação usando o operador '!=' (diferente de) com uma string
// Agora estamos comparando a variável 'age' (que contém o número 31) com a string '31'.
// O resultado será 'false' por conta da **coerção de tipo** realizada pelo operador '!='. 
// O JavaScript tenta converter a string '31' para um número antes de fazer a comparação.
// A string '31' será convertida para o número 31, e como 31 (número) não é diferente de 31 (número), 
// a expressão retorna 'false'. Mesmo sendo diferentes tipos (número e string), a coerção de tipo faz com que a comparação 
// considere os valores como iguais depois da conversão de tipo.
// Se usássemos o operador '!==', a comparação não teria coerção de tipo, e o resultado seria 'true' 
// porque o número 31 e a string '31' são tipos diferentes.
console.log(age != '31')




// 'igual a , e do mesmo tipo' e 'diferente de , e do mesmo tipo'

// Comparação usando o operador '===' (igualdade estrita)
// Esta expressão verifica se a variável 'age' (que contém o número 31) é **estritamente igual** ao número 31.
// O resultado será 'true', porque a variável 'age' contém o valor 31, e estamos comparando com o número 31.
// No operador '===', **não há coerção de tipo**. Ou seja, o valor e o tipo de dados precisam ser **exatamente iguais**.
// Como ambos os valores são números e são exatamente iguais, a comparação retorna 'true'.
console.log(age === 31)


// Comparação usando o operador '===' (igualdade estrita) com uma string
// Agora estamos comparando a variável 'age' (que contém o número 31) com a string '31'.
// O resultado será 'false', porque a comparação é **estrita**, e o número 31 (tipo numérico) não é igual à string '31' (tipo string).
// O operador '===' **não faz coerção de tipo**, ou seja, ele não tenta converter os valores antes de compará-los.
// Como os tipos são diferentes (um é um número e o outro é uma string), a comparação retorna 'false'.
// Se usássemos o operador '==' (igualdade com coerção de tipo), o JavaScript tentaria converter a string '31' para o número 31, 
// fazendo a comparação entre dois valores numéricos iguais, o que retornaria 'true'. Mas no caso do '===', a comparação é estrita, 
// ou seja, o tipo precisa ser igual também.
console.log(age === '31')




// O operador !== é chamado de "operador de desigualdade estrita"
// Comparação usando o operador '!==', que verifica se os valores são **diferentes**
// Esta expressão verifica se a variável 'age' (que contém o número 31) é **diferente** de 31 (número).
// O resultado será 'false', porque a variável 'age' contém o valor 31, e estamos comparando com o número 31.
// Como ambos os valores são **exatamente iguais** (o tipo é número e o valor é 31), o operador '!=='
// retorna 'false', indicando que os valores **não são diferentes**.
console.log(age !== 31)



// O operador !== é chamado de "operador de desigualdade estrita"
// Comparação usando o operador '!==', que verifica se os valores são **diferentes**, com uma string
// Agora estamos comparando a variável 'age' (que contém o número 31) com a string '31'.
// O resultado será 'true', porque estamos usando o operador '!==', que não faz coerção de tipo.
// O número 31 (tipo numérico) **é diferente** da string '31' (tipo string), já que os tipos são diferentes.
// O operador '!==' exige que **os valores e os tipos sejam diferentes** para retornar 'true'.
// Como um é número e o outro é string, a comparação retorna 'true' (pois eles são diferentes tanto em valor quanto em tipo).
console.log(age !== '31')


