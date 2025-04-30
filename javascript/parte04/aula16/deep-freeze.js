// Objeto que será "congelado" profundamente (Deep Freeze)
const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author: {
    name: 'Rodrigo',
    email: 'rodrigo13@gmail.com'
  }
}

// Função que congela um objeto profundamente (inclusive objetos dentro dele)
function deepFreeze(object) {
  // 1. Pega todas as chaves do objeto (inclusive símbolos, caso tenha)
  const props = Reflect.ownKeys(object)

  // 2. Itera sobre todas as propriedades
  // Para cada propriedade do objeto (armazenada no array props), pegue uma de cada vez e chame ela de prop.
  for (const prop of props) {
    // 3. Pega o valor da propriedade atual
    const value = object[prop]

    // 4. Se for um objeto ou função, chama recursivamente para congelar também
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value)  // Chamada recursiva
    }
  }

  // 5. Após congelar tudo internamente, congela o objeto atual
  return Object.freeze(object)
}

// Chama a função para congelar completamente o objeto `book`
deepFreeze(book)

// Tentativas de alteração (não vão funcionar porque o objeto está congelado)
book.category = 'CSS'              // Ignorado
book.author.name = 'Thiago'        // Também ignorado

// Exibe o objeto no console para mostrar que ele permanece inalterado
console.log(book)

// Se eu quissese congelar somente o objeto author?
// Congela somente a propriedade 'author', sem afetar o objeto 'book' inteiro
// Object.freeze(book.author)

/*
⚠️ EXPLICAÇÃO GERAL:

- `Object.freeze()` só congela o objeto no primeiro nível.
- `deepFreeze()` congela o objeto e também todos os objetos aninhados.
- Usamos `Reflect.ownKeys()` para garantir que todas as propriedades sejam incluídas, até as com símbolo.
- Usamos `typeof` para verificar se a propriedade é um objeto ou função e aplicar a recursão.
- O `return Object.freeze(object)` vem *depois* do laço `for` para garantir que o objeto seja congelado após todos os filhos.

No exemplo acima:
- O `book` possui um campo `author` que também é um objeto.
- Sem deep freeze, `book.author.name` ainda poderia ser alterado.
- Com `deepFreeze()`, qualquer tentativa de alteração, mesmo em objetos internos, é ignorada silenciosamente (ou com erro no modo estrito).
*/
