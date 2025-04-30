// Shallow Copy (cópia superficial): não pega os itens aninhados.

const htmlCourse = {
  course: 'HTML',
  students: [{ name: 'Rodrigo', email: 'rodrigo22@gmail.com' }],
}

const jsCourse = {
  ...htmlCourse,
  course: 'Javascript'
}

// vai modificar o htmlCourse porque também students é uma referência e não uma cópia.
jsCourse.students.push([{ name: 'João', email: 'joao44@gmail.com' }])

console.log(htmlCourse, jsCourse)

// Deep Copy (cópia profunda)

const cssCourse = {
  ...htmlCourse,
  course: 'CSS',
  students: [...htmlCourse.students, { name: 'Thiago', email: 'thiago22@gmail.com' }]
}

console.log(htmlCourse, cssCourse)

// perceba a diferença do Shallow Copy pro Deep Copy 

/*
Na variavel jsCourse que é um objeto, estamos usando o spread, pegando a referencia de htmlCourse, isso
significa que estamos usando as mesmas propiedades, renomiamos o objeto course  para 'javascript', perceba
que vamos adicionar mais um estudante na variavel jsCourse , mas ela adiciona um estudante tambem em htmlCourse,
porque 'students' também é uma referencia do htmlCourse e não uma cópia. Mas porque quando alteramos o objeto course
não altera tambem o objeto da variavel 'htmlCourse', porque estamos atribuindo a ela um novo valor diretamente.


Já no Deep copy, criei uma varivavel que é um objeto que se chama "cssCourse",estamos usando o spread, pegando a referencia de htmlCourse
significa que estamos usando as mesmas propiedades, renomiamos o objeto course  para 'CSS' diretamente, oque não
altera o objeto da variavel 'htmlCourse', perceba que estamos adicionando um novo estudante, mas porque não
muda tambem o objeto de 'htmlCourse'? porque estamos atribuindo um novo valor diretamente, veja:
students:[...htmlCourse.students, { name: 'Thiago', email: 'thiago22@gmail.com' }] criamos um novo objeto ,
e colocamos o spread puxando a referência da variavel 'htmlCourse' porém adicionando o objeto de referência, que
é o '.students' passamos a virgula, para colocar mais um objeto sem alterar os outros 2. sendo assim temos 3
novos alunos dentro do students que são:

{ name: 'Rodrigo', email: 'rodrigo22@gmail.com' }
{ name: 'João', email: 'joao44@gmail.com' }
{ name: 'Thiago', email: 'thiago22@gmail.com' }


Ou seja:
- Shallow copy compartilha propriedades de referência.
- Deep copy copia valores de forma isolada, especialmente arrays e objetos aninhados.

*/

// Uma outra forma de fazer que da no mesmo resultado do Deep copy de cima é assim:

const reactCourse = {
  ...htmlCourse,  // copiamos o objeto original
  course: 'React' // sobrescrevemos apenas o campo course

}
// Aqui, sobrescrevemos completamente a propriedade 'students' com uma nova lista (deep copy).
reactCourse.students = [
  ...htmlCourse.students,
  { name: 'Fabricio', email: 'fabricio99@.com' }
]
console.log(reactCourse)