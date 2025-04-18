// 🌎 Usando o método toLocaleString() para formatar datas e valores com base na localização

let date = new Date("2024-07-02T14:30:10") 
// Criamos um objeto Date com uma data e hora específica

// Exibe a data e a hora no formato padrão do sistema (localização padrão do usuário)
console.log(date.toLocaleString())

// Exibe a data e hora no formato em inglês ("en" = English)
console.log(date.toLocaleString("en"))
// Exemplo: "7/2/2024, 2:30:10 PM" (formato americano)

// 🔽 Abaixo, usamos a opção 'dateStyle' para controlar o formato da data
// 'short' = formato mais curto possível (geralmente numérico)
console.log(date.toLocaleString("pt-BR", {
  dateStyle: "short"
}))
// Exemplo: "02/07/2024"

// 'long' = formato mais completo com nome do mês por extenso
console.log(date.toLocaleString("pt-BR", {
  dateStyle: "long"
}))
// Exemplo: "2 de julho de 2024"

// 'medium' = um meio-termo entre curto e longo
console.log(date.toLocaleString("pt-BR", {
  dateStyle: "medium"
}))
// Exemplo: "2 de jul. de 2024"

// 'full' = formato mais detalhado possível, incluindo o dia da semana
console.log(date.toLocaleString("pt-BR", {
  dateStyle: "full"
}))
// Exemplo: "terça-feira, 2 de julho de 2024"

// 🧩 Podemos também personalizar partes específicas da data/hora
console.log(date.toLocaleString("pt-BR", {
  day: "2-digit",       // Dia com dois dígitos
  month: "2-digit",     // Mês com dois dígitos
  hour: "2-digit",      // Hora com dois dígitos
  minute: "2-digit"     // Minuto com dois dígitos
}))
// Exemplo: "02/07, 14:30"

// 💰 Também podemos usar toLocaleString para formatar valores numéricos como moeda

const amount = 12.5 // Valor em número

console.log(amount.toLocaleString("pt-BR", {
  style: "currency",   // Define que será exibido como moeda
  currency: "BRL"      // Define o tipo da moeda: "BRL" = Real brasileiro
}))
// Exemplo: "R$ 12,50"





