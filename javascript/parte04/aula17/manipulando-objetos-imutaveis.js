// Manipulando Objetos Imutáveis

const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author: {
    name: 'Rodrigo',
    email: 'rodrigo13@gmail.com'
  }
}

const updatedBook = {
  ...book,
  title: 'Criando um Front-end moderno com HTML',
  category: 'html',
  type: 'Programming',
}

// Original intacto.
console.log(book)

// Modificado.
console.log(updatedBook)

// Utilizando o operador de desestruturação (rest operator) para remover propiedades.
const { category, ...updatedBook2 } = book
console.log(updatedBook2)
