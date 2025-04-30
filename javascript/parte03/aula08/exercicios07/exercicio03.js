// Exercício 3: Funcionários e Gerentes


// Descrição:
// Crie uma superclasse chamada Funcionario com:
// Atributos: nome, salario

// Método: getInfo() que imprime "Funcionário: [nome], Salário: [salario]"

// Crie uma subclasse Gerente que herda de Funcionario e:
// Tem um atributo extra: departamento
// Sobrescreve o método getInfo() para também exibir o departamento
// Crie um objeto de cada tipo e chame o método getInfo().

class Funcionario {
  constructor({nome,salario}) {
    this.nome = nome
    this.salario = salario
  }

  getInfo() {
    console.log(`Funcionario: ${this.nome}, Salário: ${this.salario}`)
  }
}

class Gerente extends Funcionario {
  constructor({nome,departamento,salario}) {
    super({nome,salario})

    this.departamento = departamento
  }
  getInfo() {
  console.log(`O Funcionario ${this.nome}, do departamento : ${this.departamento}, Recebe aproximadamente : ${this.salario}R$ `)
  }
}


const gerente = new Gerente({nome:'thiago',departamento:'financeiro',salario:10000})
gerente.getInfo()