//  Métodos para trabalhar com data e hora em JavaScript

let date = new Date("2024-07-02T14:30:10") // Cria um objeto de data com valor fixo: 2 de Julho de 2024, às 14:30:10

// Retorna o dia da semana (0 = Domingo, 6 = Sábado)
console.log(date.getDay()) // Exemplo: 2 (Terça-feira)

// Retorna o dia do mês (1 a 31)
console.log(date.getDate()) // Exemplo: 2

// Retorna o mês (0 = Janeiro, 11 = Dezembro) — por isso somamos +1 para representar corretamente
console.log(date.getMonth() + 1) // Exemplo: 7 (Julho)

// Retorna o ano completo (quatro dígitos)
console.log(date.getFullYear()) // Exemplo: 2024

// Retorna a hora (0 a 23)
console.log(date.getHours()) // Exemplo: 14

// Retorna os minutos (0 a 59)
console.log(date.getMinutes()) // Exemplo: 30

// Retorna os milissegundos (0 a 999)
console.log(date.getMilliseconds()) // Exemplo: 0, pois não foram definidos na criação

// Método para data e hora. Que retorna em formato de textos.

// Retorna apenas a parte da data como string, no formato textual padrão
// Exemplo: "Tue Jul 02 2024" (em inglês)
console.log(date.toDateString())

// Retorna apenas a parte da hora como string, incluindo o fuso horário
// Exemplo: "14:30:00 GMT-0300 (Horário Padrão de Brasília)"
console.log(date.toTimeString())

// Data formatada no estilo do Brasil
console.log(date.toLocaleDateString("pt-BR")) // Exemplo: "02/07/2024"

// Hora formatada no estilo do Brasil
console.log(date.toLocaleTimeString("pt-BR")) // Exemplo: "14:30:10"

// Data formatada no estilo Americano
console.log(date.toLocaleDateString("en")) // Exemplo: "7/2/2024"

// Hora formatada no estilo Americano
console.log(date.toLocaleTimeString("en")) // Exemplo: "2:30:10 PM"


// 📅 Trabalhando com datas, horas e internacionalização (Intl) em JavaScript

// Criando uma data com fuso horário definido (UTC+3)
const dateWithTimezone = new Date("2025-04-16T03:42:45.357+03:00")

// ========================================================
// 🔹 MÉTODOS DE FORMATAÇÃO DE DATA E HORA
// ========================================================

// ✅ toLocaleString()
// Converte a data para uma string de acordo com o idioma/região informada
// Inclui data e hora, respeitando o fuso horário local do sistema
console.log(dateWithTimezone.toLocaleString("pt-BR"))
// Exemplo (no Brasil): "15/04/2025 21:42:45"

// ✅ toDateString()
// Retorna apenas a parte da data (sem a hora), como uma string legível em inglês
console.log(dateWithTimezone.toDateString())
// Exemplo: "Wed Apr 16 2025"

// ✅ toTimeString()
// Retorna apenas a parte da hora com o fuso horário local
console.log(dateWithTimezone.toTimeString())
// Exemplo: "21:42:45 GMT-0300 (Horário Padrão de Brasília)"

// ✅ toISOString()
// Retorna a data e hora em formato ISO (padrão internacional) com fuso UTC (termina com "Z")
console.log(dateWithTimezone.toISOString())
// Exemplo: "2025-04-16T00:42:45.357Z" (03:42 no UTC+3 = 00:42 no UTC)

// ========================================================
// 🔹 FUSO HORÁRIO (TIMEZONE)
// ========================================================

const localDate = new Date() // Data atual

// ✅ getTimezoneOffset()
// Retorna a diferença entre o horário local e o UTC, em minutos
console.log(localDate.getTimezoneOffset())
// Exemplo: 180 (ou seja, UTC−3 horas)

// ✅ getTimezoneOffset() em horas
console.log(localDate.getTimezoneOffset() / 60)
// Exemplo: 3 (representando UTC−3)

// ========================================================
// 🔹 Intl.DateTimeFormat() - Internacionalização
// ========================================================

// ✅ resolvedOptions()
// Retorna as configurações aplicadas pela API Intl para a data/hora
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)
/*
Exemplo de saída:
{
  locale: 'pt-BR',
  calendar: 'gregory',
  numberingSystem: 'latn',
  timeZone: 'America/Sao_Paulo',
  hourCycle: 'h23',
  ...
}
*/

// ✅ toLocaleString com diferentes estilos de data

const exampleDate = new Date("2024-07-02T14:30:10")

console.log(new Intl.DateTimeFormat("pt-BR").format(exampleDate)) // Padrão do Brasil
console.log(new Intl.DateTimeFormat("en").format(exampleDate))    // Padrão dos EUA

// Estilos de data (dateStyle)
// short → formato curto
console.log(exampleDate.toLocaleString("pt-BR", { dateStyle: "short" })) // "02/07/2024"

// long → formato completo com mês por extenso
console.log(exampleDate.toLocaleString("pt-BR", { dateStyle: "long" })) // "2 de julho de 2024"

// medium → meio-termo
console.log(exampleDate.toLocaleString("pt-BR", { dateStyle: "medium" })) // "2 de jul. de 2024"

// full → formato mais completo possível com dia da semana
console.log(exampleDate.toLocaleString("pt-BR", { dateStyle: "full" })) // "terça-feira, 2 de julho de 2024"

// ✅ Personalizando partes específicas da data
console.log(exampleDate.toLocaleString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
}))
// Exemplo: "02/07, 14:30"

// ========================================================
// 🔹 Formatando NÚMEROS como moeda
// ========================================================

const amount = 12.5

// ✅ toLocaleString() com estilo "currency" para exibir como moeda brasileira (BRL)
console.log(amount.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
}))
// Exemplo: "R$ 12,50"
