//  Como congelar um objeto e impedir a modificação dele (shallow freezing)

const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author: {
    name: 'Lucas',
    email: 'lucas@gmail.com'
  }
}

// O Javascript em si não impõe restrições à modificação dos objetos.
book.category = 'CSS'
console.log(book)

// Congela o objeto e impede a modificação
Object.freeze(book)
book.category = 'HTML' // Não modifica
console.log(book)

// O Object.freeze() não impede modificações em objetos aninhados (shallow freezing).
book.author.name = 'João'
console.log(book)