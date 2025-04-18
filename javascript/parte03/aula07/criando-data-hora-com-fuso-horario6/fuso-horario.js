// 🕒 Criando uma data e hora com fuso horário

// Aqui estamos criando uma data usando uma string no formato ISO 8601
// "2025-04-16T03:42:45.357+03:00" significa:
// - Data: 16 de abril de 2025
// - Hora: 03:42:45.357 (3 horas, 42 minutos, 45 segundos e 357 milissegundos)
// - Fuso horário: +03:00 (ou seja, 3 horas à frente do UTC — horário de lugares como Moscou ou Nairobi)
const dateWithTimezone = new Date("2025-04-16T03:42:45.357+03:00")

// Se você descomentar essa linha abaixo, verá a data convertida para o formato ISO (UTC)
// console.log(dateWithTimezone.toISOString())
// toISOString sempre mostra a data no horário UTC (padrão internacional)
// Exemplo: "2025-04-16T00:42:45.357Z"
// Isso mostra que o horário local (03:42 com +3h) foi convertido para UTC (00:42Z)

// Aqui, mostramos a data no formato LOCAL do computador ou navegador da pessoa
console.log(dateWithTimezone.toLocaleString())
// Exemplo (no Brasil): "15/04/2025 21:42:45" — pois UTC-3 é 6 horas atrás do +03:00
// Ou seja: 03:42 no fuso +03:00 → 21:42 no fuso -03:00 (Brasil)
