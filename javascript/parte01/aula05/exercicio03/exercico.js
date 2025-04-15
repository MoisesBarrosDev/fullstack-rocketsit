// EXERCÍCIO 1
let brazilianFoods = []
brazilianFoods.push('Coxinha', null , 'Brigadeiro' )
console.log(brazilianFoods)



// EXERCICIO 2
brazilianFoods[1] = 'Pão de Queijo'
console.log(brazilianFoods[1])



// EXERCICIO 3
const foodsInfo = `Até aqui,o array "brazillianFoods" Possui ${brazilianFoods.length} itens: ${brazilianFoods[0]},${brazilianFoods[1]},${brazilianFoods[2]}`
console.log(foodsInfo )



// EXERCICIO 4
const maleDogNames =['Chico', 'Zeca']
const femaleDogNames= ['Lilica', 'Matilda']
let dogNames = maleDogNames.concat(femaleDogNames)
console.log(dogNames)



// EXERCICIO 5
console.log(dogNames.join(', '))



// EXERCICIO 6
dogNames.pop()
console.log(dogNames[dogNames.length-1])



// EXERCICIO 7
dogNames.push('Nina')
console.log(dogNames)
const initiais = `${dogNames[0].slice(0,1)} ${dogNames[1][0]} ${dogNames[2][0]} ${dogNames[3].slice(0,1)}`
console.log(initiais)

 

// EXERCICIO 8
console.log(initiais.toLocaleLowerCase())



// EXERCICIO 9
const dessert = `${dogNames[0][0]}${dogNames[0][4]}${dogNames[1].slice(2)}${dogNames[3].slice(2).replace('n','d')}`
console.log(`A ${dessert} é um doce À  base de coco, tradicional na América Latina e em Angola.`)



// EXERCICIO 10
let oddNumbers = [3,5,7]
oddNumbers[1] +=4 
console.log(oddNumbers[1] ** 3 )



// EXERCICIO 11
const heroes = []
heroes.push('Spider-main', 'Super-man')
console.log(heroes)



// EXERCICIO 12
const frutas = ['Banana','Maça','Pera']
frutas[2]= 'Melancia'
console.log(frutas)



// EXERCICIO 13
const itens = ['Banana', 'Açaí','Granola']
console.log(`O ${itens[1]} com ${itens[0]} e ${itens[2]}, é a melhor coisa do mundo!`)



// EXERCICIO 14
const peçaPc = ['Teclado','Mouse','Monitor']
const addPeçasPc = ['Memoria Ram','Processador','Placa de Video']
const resultadoDoPc = peçaPc.concat(addPeçasPc)
console.log(resultadoDoPc)



// EXERCICIO 15
const jogadores = ['thiago','jessica','gustavo','fabiana','joão','tamaris']
console.log(`Aqui está a primeira letra de cada jogador; ${jogadores[0][0].toLocaleUpperCase()}, ${jogadores[1][0].toUpperCase()}, ${jogadores[2][0].toUpperCase()}, ${jogadores[3][0].toUpperCase()}, ${jogadores[4][0].toUpperCase()}, ${jogadores[5][0].toUpperCase()}`)



// EXERCICIO 16  NUNCA TINHA OUVIDO FALAR NESSE MÉTODO SPLIT
const frase = 'O joão atirou o Pau no gato, mas o Gato não Morreu.'
const resulFrase =  frase.split(' ')
console.log("RESULTADO DO SPLIT: ", resulFrase)



// EXERCICIO 17
const numeros = [4,6,8,3,9]
numeros.pop()
console.log(`${numeros[0]+3}`)



// EXERCICIO 18
const newFrase = 'O gato roeu a roupa do rei de roma'
console.log(newFrase.replace('O gato' ,'A tigre'))


// EXERCICIO 19
const nameCompleto = 'thiago almirante costa barros da silva';
const nameFormatado = nameCompleto
  .split(' ') // Divide a string em palavras separadas por espaço
  .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase()) // Formata cada palavra
  .join(' '); // Junta as palavras de volta em uma string
console.log(nameFormatado);


// EXERCICIO 20
const numero = [2, 4, 6];
const segundoNumero = numero[1]; // Pega o segundo número do array
const resultado = (segundoNumero * 3) ** 2; // Multiplica por um valor fixo (3) e eleva ao quadrado
console.log(resultado); // 144


// EXERCICIO 21
const numer = [1, 2, 3, 4];
const soma = numer.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma); // Resultado: 10



// reduce()
// O que faz:
// O reduce() reduz um array a um único valor, iterando por todos os seus elementos e acumulando um resultado.
// Como funciona:
// Ele usa uma função callback que recebe dois parâmetros principais:
// O acumulador, que guarda o resultado acumulado da operação.
// O valor atual, que é o elemento do array sendo processado.
// Exemplo: Soma de números em um array
const test =[1,2,3,4,5]
const somaTest = test.reduce((acumulador,valorAtual) => acumulador+valorAtual,0);
console.log(somaTest)
// Explicação:
// Inicialmente, o acumulador é 0 (valor inicial).
// O reduce percorre o array e adiciona cada valor ao acumulador.



// map()
// O que faz:
// O map() cria um novo array, aplicando uma função a cada elemento do array original, sem modificar o original.
// Como funciona:
// Recebe uma função callback que processa cada elemento do array e retorna o novo valor.
// Exemplo: Dobrar números
const num = [1, 2, 3, 4];
const dobrados = num.map((numero) => numero * 2);
console.log(dobrados); // Resultado: [2, 4, 6, 8]
// Explicação:
// Cada número do array é multiplicado por 2 e o novo array contém os resultados.



// split()
// O que faz:
// O split() divide uma string em partes menores, retornando um array.
// Como funciona:
// Recebe um separador, que define onde a string será dividida.
// Exemplo: Dividir uma frase em palavras
const fra = "O JavaScript é incrível!";
const palavras = fra.split(" ");
console.log(palavras); // Resultado: ["O", "JavaScript", "é", "incrível!"]
// Explicação:
// O separador " " divide a frase em palavras, criando um array.



// join()
// O que faz:
// O join() junta todos os elementos de um array em uma única string.
// Como funciona:
// Recebe um separador, que define como os elementos serão unidos.
// Exemplo: Juntar palavras em uma frase
const pala = ["O", "JavaScript", "é", "incrível!"];
const fr = pala.join(" ");
console.log(frase); // Resultado: "O JavaScript é incrível!"
// Explicação:
// O separador " " adiciona espaços entre os elementos do array.



// O filter() cria um novo array com os elementos que atendem a uma condição.
// Como funciona:
// Recebe uma função callback que retorna true (mantém o elemento) ou false (exclui o elemento).
// Exemplo: Filtrar números maiores que 5
const nu = [3, 6, 8, 2, 10];
const maioresQueCinco = nu.filter((numero) => numero > 5);
console.log(maioresQueCinco); // Resultado: [6, 8, 10]
// Explicação:
// Apenas os números que são maiores que 5 são mantidos no novo array.




