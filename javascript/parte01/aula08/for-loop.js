// O propósito de todo loop é executar um bloco de código repetidamente.
// No caso do 'for', definimos três partes essenciais dentro dos parênteses ():
// 1. Inicialização: let i = 0  -> Criamos uma variável de controle (normalmente chamada de 'i').
// 2. Condição: i < 5  -> Enquanto essa condição for verdadeira, o loop continuará rodando.
// 3. Atualização: i++  -> A cada iteração, incrementamos o valor de 'i' em 1.

// Exemplo básico do loop 'for'
for (let i = 0; i < 5; i++) {
  console.log(`Dentro do loop: ${i}`); // Exibe o valor de 'i' a cada iteração
}
console.log('Loop concluído'); // Este comando é executado apenas após o término do loop




// Criamos um array com alguns nomes
const names = ['Thiago', 'Francisco', 'Bill'];

// O loop percorre todos os elementos do array 'names'
// names.length retorna o número total de elementos no array, então o loop roda até atingir esse valor
for (let i = 0; i < names.length; i++) {
  // Acessamos cada nome do array usando o índice 'i'
  // names[i] retorna o nome correspondente à posição atual no array
  
  // Criamos uma template string (entre crases ``) para gerar um bloco de HTML dinâmico
  const HTMLTemplate = `<p>${names[i]}</p>`;
  
  console.log(HTMLTemplate); // Exibimos o HTML gerado no console
}

// Explicações adicionais:
// - A variável 'i' dentro do 'for' é chamada de variável de controle ou índice.
// - Os parênteses () no 'for' contêm os três parâmetros obrigatórios: inicialização, condição e atualização.
// - É possível declarar uma constante (const) dentro do loop, pois ela é recriada a cada iteração.

// Em programação, iteração é cada repetição que um loop executa.
// No caso do for, cada vez que o código dentro das {} é executado, chamamos isso de uma iteração. O loop continua iterando enquanto a condição definida for verdadeira.
