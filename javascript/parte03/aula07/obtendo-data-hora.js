// Obtendo data e hora
console.log(new Date())

// Aqui ele vai retornar o Númber da data de hoje
console.log(new Date().getDate())

console.log(new Date().getTime())


// Criando uma data específica: ano, mês (de 0 a 11) e dia
// Obs: Janeiro é 0, Dezembro é 11
console.log(new Date(2024, 11, 3)) // Resultado: 03 de Dezembro de 2024

// Criando uma data e hora específica: ano, mês (0-11), dia, hora, minuto e segundo
console.log(new Date(2024, 6, 3, 14, 30, 0)) // Resultado: 03 de Julho de 2024 às 14:30:00

// Criando data e hora a partir de uma string no formato ISO (recomendado)
// Formato: "YYYY-MM-DDTHH:mm:ss"
console.log(new Date("2024-07-03T14:30:00")) // Resultado: 03 de Julho de 2024 às 14:30:00

// Criando data e hora a partir de uma string no formato mais "amigável" (menos confiável para compatibilidade)
console.log(new Date("July 3, 2024 14:30:00")) // Resultado: 03 de Julho de 2024 às 14:30:00

