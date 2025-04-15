/*
Ordem de Precedência dos Operadores em JavaScript (da mais alta para a mais baixa):

1. **Parênteses `()`** - A expressão dentro de parênteses é avaliada primeiro. 
   Exemplo: (a + b) * c

2. **Operadores de incremento e decremento** (prefixado) `++`, `--` - São avaliados antes de outras operações.
   Exemplo: ++a, --a

3. **Operadores de negação lógica e bit a bit**:
   - **`!` (negação lógica)** - Inverte o valor de verdadeiro para falso ou vice-versa.
   - **`~` (negativo bit a bit)** - Inverte os bits de um número.
   Exemplo: !true, ~5

4. **Multiplicação `*`, Divisão `/`, Módulo `%`** - Realizam a operação antes da adição ou subtração.
   Exemplo: 2 * 3, 10 / 2, 10 % 3

5. **Adição `+`, Subtração `-`** - São avaliados depois da multiplicação, divisão e módulo.
   Exemplo: 3 + 2, 5 - 3

6. **Operadores de comparação**:
   - **`==`**: Igualdade (não estrita).
   - **`===`**: Igualdade estrita (considera tipo e valor).
   - **`!=`**: Desigualdade (não estrita).
   - **`!==`**: Desigualdade estrita (considera tipo e valor).
   - **`>`**: Maior que.
   - **`<`**: Menor que.
   - **`>=`**: Maior ou igual a.
   - **`<=`**: Menor ou igual a.
   Exemplo: '5' == 5, 5 === 5, 5 !== '5', 10 > 5.

7. **Operadores lógicos**:
   - **`&&` (E lógico)** - Avaliado antes de `||` (OU lógico).
     Exemplo: true && false
   - **`||` (OU lógico)** - Avaliado por último.
     Exemplo: true || false
   - **`!`**: Nega a expressão booleana.
     Exemplo: !true

8. **Operadores de Atribuição**:
   - `=`, `+=`, `-=`, `*=`, `/=`, `%=` - Realizam uma operação e atribuem o valor ao operando da esquerda.
   Exemplo: x = 10, x += 5

9. **Operadores de Tipo**:
   - **`typeof`**: Retorna o tipo de um valor.
     Exemplo: typeof 5 // "number"
   - **`instanceof`**: Verifica se um objeto é uma instância de uma classe.
     Exemplo: obj instanceof Array

10. **Operadores de Desestruturação**:
    - **`[]`** (Desestruturação de arrays), **`{}`** (Desestruturação de objetos).
    Exemplo: const [a, b] = [1, 2]; // a = 1, b = 2

11. **Operadores Ternários (Condicional)**:
    - **`condição ? valorSeVerdadeiro : valorSeFalso`** - Avalia uma condição e retorna um valor dependendo do resultado.
    Exemplo: x > 5 ? 'maior' : 'menor'

12. **Operadores de Execução**:
    - **`()`:** Chamada de função.
    Exemplo: func()

13. **Operadores de Atribuição com Operações**:
    - **`+=`, `-=`, `*=`, `/=`, `%=`** (atribuição com soma, subtração, multiplicação, divisão, módulo).
    Exemplo: x += 5, y *= 3

14. **Operadores de Comparação de Identidade**:
    - **`==`**: Compara valores com coerção de tipo (não estrito).
    - **`===`**: Compara valores sem coerção de tipo (estrito).
    - **`!=`**: Compara valores com coerção de tipo (não estrito).
    - **`!==`**: Compara valores sem coerção de tipo (estrito).

15. **Operadores de Comparação Relacional**:
    - **`>`**: Maior que.
    - **`<`**: Menor que.
    - **`>=`**: Maior ou igual a.
    - **`<=`**: Menor ou igual a.

16. **Operadores Bit a Bit**:
    - **`&`**: E bit a bit.
    - **`|`**: Ou bit a bit.
    - **`^`**: Ou exclusivo bit a bit.
    - **`<<`**: Deslocamento à esquerda.
    - **`>>`**: Deslocamento à direita.
    - **`>>>`**: Deslocamento à direita sem sinal.
    Exemplo: 5 & 1, 5 | 1, 5 << 2, 5 >> 1

17. **Operadores de String**:
    - **`+`**: Concatenação de strings.
    Exemplo: 'Olá' + ' ' + 'Mundo'

18. **Operadores de Array**:
    - **`in`**: Verifica se uma propriedade existe em um objeto ou índice em um array.
    Exemplo: 'nome' in obj

19. **Operadores de Desestruturação de Parâmetros**:
    - **`[]`** e **`{}`** também são usados para desestruturar objetos ou arrays nos parâmetros de funções.
    Exemplo: function foo([a, b]) { return a + b; }

Nota importante: em casos mais complexos, sempre utilize **parênteses `()`** para garantir que as operações sejam executadas na ordem correta, especialmente em expressões com múltiplos operadores.
*/
