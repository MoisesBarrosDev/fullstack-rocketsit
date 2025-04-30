// Como utilizar classes pra lidar com excecoes



// Criamos um array chamado "obj" com um único valor: 17
let obj = [17]

// Criamos uma variável "index" com valor 300 (vamos testar se ela está dentro de um intervalo permitido)
let index = 300

// Iniciamos um bloco try...catch
// "try" é usado para tentar executar um trecho de código que **pode causar erro**
try {
  // obj.execute()  // Este código está comentado. Se fosse executado, causaria um erro de TypeError
  // Isso porque "execute" não é um método válido de arrays, então o JS acusaria erro ao tentar executar isso.

  // Aqui temos uma verificação: estamos checando se o número 17 está **presente** no array "obj"
  // O operador ! (negação) inverte o valor booleano do que vem depois dele.
  // - obj.includes(17) retorna true (porque 17 está no array)
  // - !obj.includes(17) inverte para false
  // Então este bloco só será executado se o número **não** estiver presente.
  if (!obj.includes(17)) {
    // Se 17 não estiver presente, lançamos (throw) um erro usando a classe "Error"
    // "throw" é usado para gerar manualmente um erro
    // "new Error('...')" cria um novo objeto de erro com a mensagem que especificamos
    throw new Error('O número 17 não está disponível.')
  }

  // Aqui testamos se o valor da variável "index" é maior que 99
  // Se for, significa que ele está fora do intervalo permitido (0 a 99)
  if (index > 99) {
    // Neste caso, lançamos um erro do tipo "RangeError"
    // "RangeError" é uma classe de erro usada quando um valor está fora de um intervalo válido
    throw new RangeError('Número está fora do intervalo. Escolha um número de 0 à 99.')
  }

// Se algum erro for lançado dentro do bloco try, ele será "capturado" pelo bloco catch
} catch (error) {
  // "error" aqui é o parâmetro que representa o objeto do erro que foi lançado no try
  // Pode ser um Error, RangeError, TypeError, ou outro tipo de erro
  // Esse parâmetro nos permite acessar detalhes sobre o erro, como sua mensagem, tipo, stack, etc.

  // Aqui verificamos se o erro é do tipo TypeError (ex: chamar um método inexistente como obj.execute())
  if (error instanceof TypeError) {
    // Se for, mostramos uma mensagem personalizada no console
    console.log('Método indisponível.')
  
  // Se o erro for do tipo RangeError (como no caso de "index > 99")
  } else if (error instanceof RangeError) {
    // Mostramos a mensagem do erro. 
    // "error.message" acessa a propriedade "message" do objeto de erro, que contém o texto que passamos no throw
    console.log(error.message)

  } else {
    // Se for qualquer outro tipo de erro (como um Error genérico), mostramos uma mensagem padrão
    console.log('Não foi possível realizar a ação')
  }
}
