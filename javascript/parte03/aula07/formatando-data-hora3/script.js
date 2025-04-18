// Formatando data e hora no estilo brasileiro (dd/mm/aaaa às hh:mm)

let date = new Date("2024-07-02T14:30:00") 
// Cria um objeto Date com o valor 2 de Julho de 2024 às 14:30

// Aqui estamos pegando o dia da data e convertendo para string.
// Depois usamos padStart(2, "0") para garantir que o dia tenha 2 dígitos.
// Exemplo: dia 2 vira "02"
let day = date.getDate().toString().padStart(2, "0")

// Pegamos o mês (lembrando que começa do zero), somamos +1 para representar corretamente,
// depois convertendo para string e preenchendo com zero à esquerda, se necessário.
let month = (date.getMonth() + 1).toString().padStart(2, "0")

// Pegamos o ano com 4 dígitos
let year = date.getFullYear()

// Pegamos as horas e os minutos (sem formatação, mas pode formatar se quiser)
let hour = date.getHours()
let minute = date.getMinutes()

// Exibindo a data no formato: dd/mm/aaaa às hh:mm
console.log(`${day}/${month}/${year} às ${hour}:${minute}`)
// Resultado: 02/07/2024 às 14:30
