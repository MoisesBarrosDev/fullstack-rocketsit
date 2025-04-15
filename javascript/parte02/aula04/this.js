// Definindo o objeto 'user' com várias propriedades e métodos
let user = {
  name: 'João', // Nome do usuário
  age: 31, // Idade do usuário
  email: 'joaocardoso@gmail.com', // E-mail do usuário
  city: 'São Paulo', // Cidade do usuário
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'], // Lista de postagens do blog

  // Método 'login' usando arrow function (não recomenda-se usar 'this' aqui)
  login: () => {
    console.log('Usuário logado') // 'this' aqui não se refere ao objeto 'user', mas ao contexto global (window no navegador)
  },

  // Método 'logout' também usando arrow function (mesmo problema de 'this')
  logout: () => {
    console.log('Usuário deslogado') // O 'this' aqui também não funciona corretamente, pois está no contexto global
  },

  // Método 'logBlogPosts' usando a função tradicional (ideal para usar 'this')
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguintes posts:`) // 'this' aqui se refere ao objeto 'user', que é o correto!

    // Usando 'forEach' para percorrer o array de posts
    this.blogPosts.forEach(post => { // Aqui 'this' ainda se refere ao objeto 'user', o que é desejado
      console.log(post) // Exibindo cada post na lista
    })
  }
}

// Chamando o método 'logBlogPosts' no objeto 'user', que vai imprimir os posts do usuário
user.logBlogPosts()

/**
 * EXPLICAÇÃO DETALHADA:
 *
 * 1. **Objetos em JavaScript**:
 * - Um **objeto** é uma coleção de propriedades e métodos (funções associadas a um objeto).
 * - No caso do objeto 'user', temos várias propriedades (como 'name', 'age', etc.) e métodos (como 'login', 'logout', 'logBlogPosts').
 * 
 * 2. **O que é 'this'?**:
 * - A palavra-chave `this` se refere ao **contexto de execução** da função, ou seja, ao objeto ou escopo onde a função está sendo chamada.
 * 
 * 3. **O que acontece em Métodos de Objetos com Funções Tradicionais?**:
 * - Quando usamos uma **função tradicional** como método de um objeto, o valor de `this` dentro dessa função se refere ao **objeto** em que a função foi chamada.
 * - No exemplo do método `logBlogPosts`, o `this` se refere ao objeto `user`, permitindo acessar corretamente suas propriedades, como `name` e `blogPosts`.
 * 
 * 4. **O que acontece com Arrow Functions e 'this'?**:
 * - **Arrow Functions** (como as de 'login' e 'logout') não têm seu próprio `this`. Elas **herdam o valor de `this`** do contexto em que foram definidas.
 * - Portanto, no caso de `login` e `logout`, o `this` não se refere ao objeto `user`, mas ao contexto global (o `window` no navegador), o que pode causar problemas se você tentar acessar propriedades do objeto `user` dentro dessas funções.
 * 
 * 5. **Por que o `this` se comporta de forma diferente?**:
 * - As **funções tradicionais** criam um novo contexto de execução onde `this` se refere ao objeto que chama o método.
 * - **Arrow functions** não criam um novo contexto de execução e **herdam o valor de `this` do contexto onde foram definidas**, por isso, em métodos de objetos, elas podem não funcionar corretamente.
 * 
 * 6. **Melhor Prática para Métodos de Objetos**:
 * - **Usar funções tradicionais** (declaração de função) em métodos de objetos é a prática recomendada, pois isso garante que o `this` se refira corretamente ao próprio objeto.

 * **Exemplo de `this` em Funções Tradicionais e Arrow Functions**:
 * - **Função Tradicional**:
 *   ```javascript
 *   logBlogPosts () {
 *     console.log(`${this.name} escreveu os seguintes posts:`);
 *     this.blogPosts.forEach(post => {
 *       console.log(post);
 *     });
 *   }
 *   ```
 * - **Arrow Function**:
 *   ```javascript
 *   login: () => {
 *     console.log('Usuário logado'); // Aqui, 'this' não se refere ao objeto 'user'.
 *   }
 *   ```

 * 7. **Resumo**:
 * - **Funções Tradicionais**: Quando usadas como métodos de objetos, elas têm seu próprio `this`, que se refere ao **objeto** em que o método é chamado.
 * - **Arrow Functions**: Elas **herdam o valor de `this`** do contexto em que foram definidas, o que pode levar a resultados inesperados em métodos de objetos, pois o `this` não se referirá ao objeto.
 * - **Melhor Prática**: Sempre use **funções tradicionais** em métodos de objetos que precisam acessar o próprio objeto com `this`.
 */

/**
 * RESUMO:
 * 
 * - **Funções Tradicionais** (como no método `logBlogPosts`) são ideais para quando você precisa que o `this` se refira ao próprio objeto, como `user`.
 * 
 * - **Arrow Functions** não possuem um novo `this`, e sim herdam o valor de `this` do contexto onde foram criadas. Por isso, elas não funcionam corretamente em métodos de objetos, já que o `this` não se refere ao objeto `user` no caso das funções `login` e `logout`.
 * 
 * **Conclusão**:
 * - **Usar função tradicional** para métodos de objetos quando precisar acessar propriedades do objeto com `this`.
 * - **Arrow Functions** são mais indicadas quando você precisa que o `this` seja mantido do contexto externo, como em funções de callback ou quando você precisa manter o `this` de fora do método.
 */

