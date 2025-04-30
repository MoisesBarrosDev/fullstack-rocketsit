// Como utilizar classes parar criar erros customizados

// ✅ Aqui estamos criando nossa própria "classe de erro", como se fosse um tipo novo de erro
// A classe MyCustomError vai ser uma variação personalizada da classe Error do JavaScript

class MyCustomError extends Error {
  // O "construtor" é uma função especial que roda quando usamos "new MyCustomError(...)"
  constructor( message ) {
    // "super" chama o construtor da classe mãe (Error), passando uma mensagem customizada
    // Isso faz com que nossa mensagem apareça certinha quando esse erro for lançado
    super(`CLASSE DE ERRO CUSTOMIZADA: ${message}`)

    // this.name = 'MyCustomError';
    // Isso deixaria o nome do erro mais bonitinho quando o console mostrar
  }
}

// ✅ Agora vamos usar o "try...catch", que é como dizer:
// "Tente fazer isso... mas se der algum erro, pegue ele e trate direitinho"

try {
  // Aqui estamos dizendo: "Ei JavaScript, JOGUE um erro personalizado pra gente testar"
  throw new MyCustomError(  'Erro personalizado lançado!' )

} catch (error) {
  // Aqui estamos pegando o erro que foi lançado no "try"
  // A variável "error" é como uma caixinha que guarda as informações do erro que aconteceu

  // Agora vamos verificar se o erro que aconteceu é do tipo "MyCustomError"
  if (error instanceof MyCustomError) {
    // Se for, mostramos no console a mensagem que colocamos lá no começo
    console.log(error.message) // Vai aparecer: CLASSE DE ERRO CUSTOMIZADA: Erro personalizado lançado!

  } else {
    // Se for outro tipo de erro, mostramos uma mensagem mais genérica
    console.log('Não foi possível executar!')
  }
}
