const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Thiago Santos'
const postComments = 15


//  usando concatenação
const postMessage = 'O post "' + postTitle + '" do, ' + postAuthor + ', tem ' + postComments + ' coment'
console.log('você manja do filme \'As Branquelas\' ?')

// usando template strings
console.log(`O post "${postTitle}" do, ${postAuthor}, tem ${postComments} coment`)


//  criando templates HTML

const html =
`
<h2> ${postTitle}</h2>
<p>Autor: ${postAuthor}</p>
<span>Este post tem ${postComments} comentarios</span>
`

console.log(html)











