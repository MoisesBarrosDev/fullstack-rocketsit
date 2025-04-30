// Importa funções individuais por nome exatamente como foram exportadas
import { sum, multiply } from './calc.js'

// Usa as funções importadas normalmente
console.log('4 + 6 =', sum(4, 6))
console.log('4 * 6 =', multiply(4, 6))
console.log('#########')

// Importa tudo que foi exportado do módulo e atribui a um objeto chamado "calc"
import * as calc from './calc.js'

// Agora chamamos as funções como métodos do objeto "calc"
console.log('10 * 5 =', calc.multiply(10, 5))
console.log('10 + 5 =', calc.sum(10, 5))
console.log('#########')

// Importa a função exportada por default — não precisa de chaves {}
// Podemos importar com qualquer nome, pois é a exportação principal do módulo
import subtracao from './calc.js'

console.log('80 - 50 =', subtracao(80, 50))
console.log('#########')

// Importa funções que foram exportadas com nomes diferentes (renomeadas)
import { multiplyTwoNumbers, sumTwoNumbers } from './calc.js'

console.log('20 + 20 =', sumTwoNumbers(20, 20))
console.log('20 * 20 =', multiplyTwoNumbers(20, 20))
console.log('#########')

// Renomeando funções no momento da importação
// Aqui chamamos 'sum' de 's' e 'multiply' de 'm'
import { sum as s, multiply as m } from './calc.js'

console.log('100 + 100 =', s(100, 100))
console.log('100 * 100 =', m(100, 100))
console.log('#########')
////////////////////////////////////////////////////////

// Importando a classe Calcc
import { Calcc } from './calc.js'

// Criando uma nova instância da classe
const calcc = new Calcc()

// Chamando os métodos da classe via instância
console.log('50 + 50 =', calcc.sum(50, 50))
console.log('10 * 10 =', calcc.multiply(10, 10))
