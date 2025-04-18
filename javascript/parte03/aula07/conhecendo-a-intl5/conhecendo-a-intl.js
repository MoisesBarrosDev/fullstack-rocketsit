//  Intl é a API de Internacionalização do ECMAScript (JavaScript moderno).
// Ela serve para formatar números, datas, moedas, etc. de forma personalizada para cada país ou idioma.

// Obtém informações da localidade e do formato atual do navegador ou sistema
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)
/*
Exemplo de saída:
{
  locale: 'pt-BR',
  calendar: 'gregory',
  numberingSystem: 'latn',
  timeZone: 'America/Sao_Paulo',
  ...
}
*/

// Exibe a data formatada de acordo com a localidade brasileira (pt-BR)
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
// Exemplo: 15/04/2025

// Exibe a data formatada no padrão americano (en)
console.log(new Intl.DateTimeFormat("en").format(new Date()))
// Exemplo: 4/15/2025

const date = new Date()

// Obtém a diferença entre o seu horário local e o horário UTC, em minutos
console.log(date.getTimezoneOffset())
// Exemplo: 180 (ou seja, -3 horas * 60 = 180 minutos de diferença)

// Converte a diferença de minutos para horas (útil para saber o timezone de forma legível)
console.log(date.getTimezoneOffset() / 60)
// Exemplo: 3 (significa UTC−3, como no Brasil)
