// 🛠️ Modificando uma data e hora com métodos 'set'

let date = new Date("July 3, 2024 14:30:00") 
// Cria uma data base: 03 de Julho de 2024 às 14:30:00

// Altera o ano para 2030
date.setFullYear(2030)

// Altera o mês para Julho (lembrando: Janeiro = 0, Dezembro = 11)
date.setMonth(6) // Julho

// Altera o dia do mês para 10
date.setDate(10)

// Altera a hora para 18h
date.setHours(18)

// Altera os minutos para 15
date.setMinutes(15)

// Altera os segundos para 30
date.setSeconds(30)

// Exibe a nova data no console
console.log(date) 
// Resultado: Wed Jul 10 2030 18:15:30 GMT...
